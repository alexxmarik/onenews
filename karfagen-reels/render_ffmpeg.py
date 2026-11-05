"""Portable export of prepared clips + editable audio/text layers. Requires FFmpeg."""
from pathlib import Path
import json,subprocess
P=Path(__file__).resolve().parent;D=json.loads((P/'editorial/timeline.json').read_text());O=P/'out';O.mkdir(exist_ok=True)
(O/'concat.txt').write_text(''.join("file '../public/"+c['file']+"'\n" for c in D['clips']))
gate='+'.join(f"between(t,{r['start']},{r['end']})" for r in D['narration'])
filters=f"[0:v]ass=editorial/editorial.ass:fontsdir=public[v];[2:a]volume='{gate}':eval=frame[vo];[1:a][vo]amix=inputs=2:duration=longest:dropout_transition=0:normalize=0[program]"
cmd=['ffmpeg','-y','-f','concat','-safe','0','-i','out/concat.txt','-i','public/audio/ORIGINAL.wav','-i','public/audio/VOICEOVER.wav','-filter_complex_threads','1','-filter_complex',filters,'-map','[v]','-map','[program]','-map','1:a:0','-map','2:a:0','-c:v','libx264','-preset','fast','-crf','23','-maxrate','2600k','-bufsize','5200k','-pix_fmt','yuv420p','-profile:v','high','-level','4.0','-c:a','aac','-b:a','192k','-metadata:s:a:0','handler_name=PROGRAM','-metadata:s:a:1','handler_name=ORIGINAL','-metadata:s:a:2','handler_name=VOICEOVER','-disposition:a:0','default','-disposition:a:1','0','-disposition:a:2','0','-movflags','+faststart','-t','252','out/KARFAGEN-export.mp4']
subprocess.run(cmd,cwd=P,check=True)
