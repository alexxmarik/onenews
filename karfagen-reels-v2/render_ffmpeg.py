from pathlib import Path
import json,subprocess
P=Path(__file__).resolve().parent;D=json.loads((P/'editorial/timeline.json').read_text());(P/'out').mkdir(exist_ok=True)
(P/'out/concat.txt').write_text(''.join("file '../public/"+c['file']+"'\n" for c in D['clips']))
gate='+'.join(f"between(t,{v['start']},{v['end']})" for v in D['narration'])
f=f"[0:v]ass=editorial/editorial.ass:fontsdir=public[v];[2:a]volume='{gate}':eval=frame[vo];[1:a][vo]amix=inputs=2:duration=longest:dropout_transition=0:normalize=0[a]"
subprocess.run(['ffmpeg','-y','-f','concat','-safe','0','-i','out/concat.txt','-i','public/audio/ORIGINAL.wav','-i','public/audio/VOICEOVER.wav','-filter_complex_threads','1','-filter_complex',f,'-map','[v]','-map','[a]','-c:v','libx264','-preset','fast','-crf','21','-maxrate','3000k','-bufsize','6000k','-pix_fmt','yuv420p','-profile:v','high','-level','4.0','-c:a','aac','-b:a','192k','-ar','48000','-metadata:s:a:0','handler_name=PROGRAM','-movflags','+faststart','-t','252','out/KARFAGEN-v2-export.mp4'],cwd=P,check=True)
