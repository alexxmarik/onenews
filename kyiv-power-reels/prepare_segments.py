from pathlib import Path
import json,subprocess,concurrent.futures
from PIL import Image,ImageDraw,ImageFont
P=Path(__file__).resolve().parent;d=json.loads((P/'editorial/timeline.json').read_text())
# Correct excerpts at paragraph boundaries; screenshots remain source pixels.


# An explicitly schematic, non-quantitative explanation, not a claimed measurement.
im=Image.new('RGB',(1080,1920),'#070b10');dr=ImageDraw.Draw(im);font='/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf';f=ImageFont.truetype(font,48);small=ImageFont.truetype(font,30)
dr.text((90,180),'ДЕ ВИНИКАЄ ОБМЕЖЕННЯ?',font=f,fill='white')
for y,a,b in [(420,'ГЕНЕРАЦІЯ','Виробити електроенергію'),(700,'ПЕРЕДАЧА','Доставити магістральними мережами'),(980,'РОЗПОДІЛ','Подати до конкретного будинку')]:
 dr.text((100,y),a,font=f,fill='#ef463e');dr.text((100,y+80),b,font=small,fill='#e7e9ee')
 if y<980:dr.line((135,y+145,135,y+240),fill='#596778',width=3)
dr.text((100,1250),'Схема пояснює різні рівні системи.',font=small,fill='#b4bdca');dr.text((100,1300),'Це не оцінка пошкоджень за адресою.',font=small,fill='#b4bdca');im.save(P/'public/documents/diagram.png')
def go(c):
 o=P/'public'/c['file'];n=c['durationFrames'];dur=n/30;kind=c['kind'];cmd=['ffmpeg','-v','error','-y','-filter_complex_threads','1']
 if kind in ['a','b']:
  src='overhead-source.mp4' if kind=='a' else 'street-source.mp4';cmd+=['-ss',str(c['sourceStart']),'-i',str(P/'public'/src)]
  box='crop=340:108:160:140,boxblur=luma_radius=18:luma_power=2:chroma_radius=10:chroma_power=2' if kind=='a' else 'crop=270:58:218:610,boxblur=luma_radius=18:luma_power=2:chroma_radius=10:chroma_power=2'
  xy='160:140' if kind=='a' else '218:610'
  filt=f'[0:v]split=2[base][mark];[mark]{box}[blur];[base][blur]overlay={xy},scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,setsar=1,fps=30,eq=saturation=0.88:contrast=1.02[v]'
  if kind=='a':filt='[0:v]crop=276:390:150:250,split=2[b][f];[b]scale=270:480:force_original_aspect_ratio=increase,crop=270:480,boxblur=10:1,scale=1080:1920[bg];[f]scale=1080:1526[fg];[bg][fg]overlay=0:70,setsar=1,fps=30,eq=saturation=0.88:contrast=1.02[v]' 
 else:
  src=P/'public/documents'/f'{kind}.png';cmd+=['-loop','1','-i',str(src)]
  # Slow zoom, real post excerpts framed without fake social-media UI.
  if kind=='diagram':filt=f'[0:v]scale=1080:1920,zoompan=z=1+0.00014*on:x=iw/2-iw/zoom/2:y=ih/2-ih/zoom/2:d=1:s=1080x1920:fps=30,setsar=1[v]'
  else:filt=f'[0:v]scale=950:-1,pad=1080:1920:(ow-iw)/2:520:color=0x070b10,zoompan=z=1+0.00023*on:x=iw/2-iw/zoom/2:y=ih/2-ih/zoom/2:d=1:s=1080x1920:fps=30,setsar=1[v]'
 cmd+=['-filter_complex',filt,'-map','[v]','-frames:v',str(n),'-an','-c:v','libx264','-preset','fast','-crf','21','-pix_fmt','yuv420p','-threads','2','-movflags','+faststart',str(o)]
 subprocess.run(cmd,check=True);return c['id']
with concurrent.futures.ThreadPoolExecutor(2) as ex:
 for x in ex.map(go,d['clips']):print('clip',x,flush=True)
