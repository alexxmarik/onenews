from pathlib import Path
import json,subprocess
P=Path(__file__).resolve().parent;d=json.loads((P/'editorial/timeline.json').read_text());O=P/'out';O.mkdir(exist_ok=True)
f=O/'concat.txt';f.write_text(''.join("file '"+str(P/'public'/c['file']).replace("'","'\\''")+"'\n" for c in d['clips']))
subprocess.run(['ffmpeg','-hide_banner','-y','-f','concat','-safe','0','-i',str(f),'-i','public/audio/VOICEOVER.wav','-vf','ass=editorial/editorial.ass:fontsdir=public','-map','0:v','-map','1:a','-c:v','libx264','-profile:v','baseline','-level','4.0','-preset','fast','-crf','22','-maxrate','1800k','-bufsize','3600k','-pix_fmt','yuv420p','-threads','4','-c:a','aac','-b:a','96k','-ar','48000','-metadata:s:a:0','handler_name=VOICEOVER','-movflags','+faststart','-t','69.6',str(O/'KYIV-POWER-NO-LINKS.mp4')],cwd=P,check=True)
