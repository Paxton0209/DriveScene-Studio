// A checked switch represents a completed layer change, including first-use assets.
export async function commitTrafficToggle({button,value,apply,feedback}){
 button.disabled=true;button.setAttribute('aria-busy','true');
 feedback(value?'Loading traffic…':'');
 try{const ok=await apply(value);if(ok!==false){button.setAttribute('aria-pressed',String(value));feedback('');}return ok!==false;}
 catch(error){feedback(error.message);return false;}
 finally{button.disabled=false;button.removeAttribute('aria-busy');}
}
