"""Original two-note cues. No reference recording is sampled."""
import math, wave
from pathlib import Path
RATE=48000
OUT=Path(__file__).resolve().parents[1]/'sound-review/final/audio'
def cue(name,pitches,gap,duration,brightness):
 n=int(duration*RATE);audio=[0.0]*n
 for j,freq in enumerate(pitches):
  start=j*gap;length=duration-start
  for i in range(int(length*RATE)):
   t=i/RATE;attack=1-math.exp(-t/.007);decay=math.exp(-t/(.17 if j==0 else .23));release=min(1,max(0,(length-t)/.075))
   phase=2*math.pi*freq*t
   sound=math.sin(phase)+brightness*math.sin(phase*2)+.012*math.sin(phase*3)
   k=int(start*RATE)+i
   if k<n:audio[k]+=sound*attack*decay*release*(.58 if j==0 else .66)
 peak=max(abs(x)for x in audio);gain=.42/peak
 with wave.open(str(OUT/name),'wb')as w:
  w.setparams((1,2,RATE,0,'NONE','not compressed'))
  w.writeframes(b''.join(int(max(-1,min(1,x*gain))*32767).to_bytes(2,'little',signed=True)for x in audio))
cue('assist-a.wav',[349.228,415.305],.215,.650,.045)
cue('assist-b.wav',[311.127,369.994],.235,.700,.025)
