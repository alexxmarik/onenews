from pathlib import Path
import subprocess,json,wave
import numpy as np
from PIL import ImageFont
P=Path(__file__).resolve().parent;D=json.loads((P/'timeline.json').read_text());fps=D['fps'];report={}
def probe(f,frames=False):
 args=['ffprobe','-v','error']+(['-count_frames'] if frames else [])+['-show_streams','-show_format','-of','json',str(f)]
 return json.loads(subprocess.check_output(args))
last=0
for c in D['clips']:
 assert c['fromFrame']==last;last+=c['durationFrames']
 p=probe(P/'clips'/f"{c['id']:03}.mp4");v=p['streams'][0]
 assert int(v['nb_frames'])==c['durationFrames'],(c['id'],v['nb_frames'],c['durationFrames'])
 assert (v['width'],v['height'])==(1080,1920)
assert last==D['durationFrames']
report['clip_frame_counts']='PASS';report['clips']=len(D['clips']);report['duration_seconds']=last/fps
for i,a in enumerate(D['clips']):
 if not a['source'].endswith('.mp4'):continue
 for b in D['clips'][i+1:]:
  if a['source']==b['source']:
   overlap=min(a['sourceStart']+a['durationFrames']/fps,b['sourceStart']+b['durationFrames']/fps)-max(a['sourceStart'],b['sourceStart'])
   assert overlap<.05,(a['id'],b['id'],overlap)
report['repeated_source_video_intervals']='NONE'
f=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',49)
for c in D['captions']:
 assert len(c['text'].splitlines())<=2
 assert all(f.getlength(t)<=900 for t in c['text'].splitlines())
 assert 0<=c['start']<c['end']<=last/fps+.02
report['subtitle_bounds']='PASS';report['caption_pages']=len(D['captions'])
def arr(name):
 with wave.open(str(P/'audio'/name)) as w:
  rate=w.getframerate();a=np.frombuffer(w.readframes(w.getnframes()),np.int16).reshape(-1,2)
 return rate,a
rate,a=arr('ORIGINAL.wav');mask=np.zeros(len(a),bool);native=[]
for s in D['scenes']:
 if s['type']!='original':continue
 x=round(s['start']*rate);y=round((s['start']+s['duration'])*rate);mask[x:y]=True
 chunk=a[x:y].astype(float)/32768
 rms=20*np.log10(np.sqrt(np.mean(chunk**2))+1e-10);assert rms>-40
 native.append({'scene':s['id'],'start':s['start'],'end':s['start']+s['duration'],'rms_dbfs':rms})
assert not np.any(a[~mask]);report['original_only_in_statement_windows']='PASS';report['native_statements']=native
del a
rate,a=arr('VOICEOVER.wav');assert not np.any(a);assert abs(len(a)/rate-last/fps)<.001;report['future_voiceover']='SILENT, FULL LENGTH FROM 00:00';del a
rate,a=arr('MUSIC.wav')
for s in D['scenes']:
 if s['type']=='original':assert not np.any(a[round((s['start']+.001)*rate):round((s['start']+s['duration']-.001)*rate)])
report['music_under_original_statements']='SILENT';del a
movie=P/'output/AZOV_HISTORY_2014_2022_HQ.mp4'
if movie.exists():
 p=probe(movie,False);v=next(s for s in p['streams'] if s['codec_type']=='video');a=next(s for s in p['streams'] if s['codec_type']=='audio')
 assert (v['width'],v['height'],v['avg_frame_rate'],int(v['nb_frames']))==(1080,1920,'30/1',last)
 assert v['codec_name']=='h264' and v['pix_fmt']=='yuv420p' and a['codec_name']=='aac'
 report['final_codec']='H264 High / AAC LC';report['final_size_bytes']=movie.stat().st_size
 # Decode every video and audio frame; additionally detect actual full-frame black gaps.
 r=subprocess.run(['ffmpeg','-hide_banner','-v','info','-i',str(movie),'-vf','blackdetect=d=0.10:pix_th=0.05:pic_th=0.99','-f','null','-'],capture_output=True,text=True)
 (P/'research/final-decode.log').write_text(r.stderr)
 assert r.returncode==0
 black=[l for l in r.stderr.splitlines() if 'black_start:' in l];report['black_intervals']=black;assert not black,black
 report['full_decode']='PASS'
(P/'research/final-QA.json').write_text(json.dumps(report,ensure_ascii=False,indent=2));print(json.dumps(report,ensure_ascii=False,indent=2))
