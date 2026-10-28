"""Local cold-start harness: unique URL namespaces guarantee HTTP cache misses.
Run: python3 studio/ui-draft/startup-test/server.py --port 18055
"""
from http.server import ThreadingHTTPServer, BaseHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlsplit, unquote
import argparse, gzip, mimetypes, json, threading
ROOT=Path(__file__).resolve().parents[3]
cache={}
lock=threading.Lock()
def content(path):
 stat=path.stat(); key=(str(path),stat.st_mtime_ns,stat.st_size)
 with lock:
  if key not in cache:
   raw=path.read_bytes(); compressed=path.suffix in {'.html','.js','.mjs','.css','.json','.svg'}
   cache[key]=(gzip.compress(raw,compresslevel=6) if compressed else raw,compressed)
  return cache[key]
class Handler(BaseHTTPRequestHandler):
 def log_message(self,*args):pass
 def do_GET(self):
  route=unquote(urlsplit(self.path).path)
  if route=='/config':
   data=json.dumps({'local':True,'network':'本机网络，未限速','coldMethod':'unique-url-namespace'}).encode()
   self.send_response(200);self.send_header('Content-Type','application/json');self.send_header('Cache-Control','no-store');self.send_header('Content-Length',str(len(data)));self.end_headers();self.wfile.write(data);return
  if route.startswith('/runs/'):
   parts=route.split('/',3)
   if len(parts)<4:self.send_error(404);return
   route='/'+parts[3]
  if route=='/':route='/studio/ui-draft/startup-test/'
  path=(ROOT/route.lstrip('/')).resolve()
  if not any(path.is_relative_to(ROOT/p) for p in ['studio/ui-draft','studio/engine']):self.send_error(403);return
  if path.is_dir():path=path/'index.html'
  if not path.is_file():self.send_error(404);return
  data,compressed=content(path)
  self.send_response(200);self.send_header('Content-Type',mimetypes.guess_type(path)[0] or 'application/octet-stream');self.send_header('Content-Length',str(len(data)))
  if compressed:self.send_header('Content-Encoding','gzip')
  self.send_header('Cache-Control','public, max-age=31536000, immutable' if self.path.startswith('/runs/') else 'no-store');self.end_headers()
  try:self.wfile.write(data)
  except (BrokenPipeError,ConnectionResetError):pass
if __name__=='__main__':
 args=argparse.ArgumentParser();args.add_argument('--port',type=int,default=18055);port=args.parse_args().port
 # Compression is server work, not part of the browser cold-start experiment.
 for path in (ROOT/'studio/ui-draft').glob('*'):
  if path.is_file() and path.suffix in {'.html','.js','.css','.json'}:content(path)
 for name in ['saved-preview/frame-profile.js']:
  content(ROOT/'studio/ui-draft'/name)
 print(f'http://127.0.0.1:{port}/studio/ui-draft/startup-test/',flush=True)
 ThreadingHTTPServer(('127.0.0.1',port),Handler).serve_forever()
