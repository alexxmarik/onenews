#!/usr/bin/env python3
"""Render prepared clips and gate the replaceable VOICEOVER to author windows."""
from pathlib import Path
import json,subprocess
P=Path(__file__).resolve().parent
D=json.loads((P/'editorial/timeline.json').read_text())
O=P/'out';O.mkdir(exist_ok=True)
concat=O/'concat.txt'
concat.write_text(''.join("file '"+str(P/'public'/c['file']).replace("'","'\\''")+"'\n" for c in D['clips']))
gate='+'.join(f"between(t,{n['start']},{n['end']-1/48000})" for n in D['narration'])
filters=f"[0:v]ass=editorial/editorial.ass:fontsdir=public[v];[2:a]volume='{gate}':eval=frame[vo];[1:a][vo]amix=inputs=2:normalize=0:duration=first[a]"
subprocess.run(['ffmpeg','-y','-f','concat','-safe','0','-i',str(concat),'-i','public/audio/ORIGINAL.wav','-i','public/audio/VOICEOVER.wav','-filter_complex',filters,'-map','[v]','-map','[a]','-c:v','libx264','-profile:v','baseline','-level','4.0','-preset','fast','-crf','23','-maxrate','900k','-bufsize','1800k','-pix_fmt','yuv420p','-threads','4','-c:a','aac','-b:a','96k','-ar','44100','-metadata:s:a:0','handler_name=PROGRAM','-movflags','+faststart','-t',str(D['durationFrames']/D['fps']),str(O/'KARFAGEN-news-1080.mp4')],cwd=P,check=True)
