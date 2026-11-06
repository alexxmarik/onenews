"""Render the canonical, editable timeline after render_segments.py and audio.py."""
from pathlib import Path
import json,subprocess,argparse
P=Path(__file__).resolve().parent
parser=argparse.ArgumentParser();parser.add_argument('--without-music',action='store_true');a=parser.parse_args()
D=json.loads((P/'timeline.json').read_text());(P/'output').mkdir(exist_ok=True)
f=P/'output/concat.txt';f.write_text(''.join("file '"+str(P/'clips'/f"{c['id']:03}.mp4")+"'\n" for c in D['clips']))
out=P/'output'/('AZOV_HISTORY_NO_MUSIC.mp4' if a.without_music else 'AZOV_HISTORY_2014_2022_HQ.mp4')
audio=P/'audio'/('ORIGINAL.wav' if a.without_music else 'PROGRAM.wav')
subprocess.run(['ffmpeg','-hide_banner','-y','-f','concat','-safe','0','-i',str(f),'-i',str(audio),'-vf','ass=AZOV_TITLES.ass:fontsdir=assets','-map','0:v','-map','1:a','-c:v','libx264','-profile:v','high','-level','4.0','-preset','fast','-crf','19','-pix_fmt','yuv420p','-threads','4','-c:a','aac','-b:a','160k','-ar','48000','-metadata:s:a:0','handler_name=PROGRAM','-movflags','+faststart','-t',str(D['durationFrames']/30),str(out)],cwd=P,check=True)
print(out,flush=True)
