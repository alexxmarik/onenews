from pathlib import Path
from PIL import ImageFont
import json,re
p=Path(__file__).resolve().parent;d=json.loads((p/'editorial/timeline.json').read_text());f=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',50)
d['narration'][4]['text']=d['narration'][4]['text'].replace('три цілих три десятих мільярда','три мільярди триста мільйонів').replace('двісті тридцять п’ять захисних споруд','двісті тридцять п’ять споруд захисту другого рівня')
def wrap(s):
 out=['']
 for w in s.split():
  q=(out[-1]+' '+w).strip()
  if f.getlength(q)>900:out.append(w)
  else:out[-1]=q
 return '\n'.join(out)
subs=[]
for n in d['narration']:
 words=n['text'].split();pages=[];current=[]
 for w in words:
  if current and (len(wrap(' '.join(current+[w])).splitlines())>2 or len(current)>=8):pages.append(' '.join(current));current=[]
  current.append(w)
 if current:pages.append(' '.join(current))
 if len(pages)>1 and len(pages[-1].split())<3:
  tail=pages.pop();pages[-1]+=' '+tail
 total=sum(len(s) for s in pages);t=n['start']
 for i,s in enumerate(pages):
  end=n['end'] if i==len(pages)-1 else t+(n['end']-n['start'])*len(s)/total
  subs.append({'start':round(t,3),'end':round(end,3),'text':wrap(s)});t=end
assert all(len(x['text'].splitlines())<=2 for x in subs)
d['captions']=subs;(p/'editorial/timeline.json').write_text(json.dumps(d,ensure_ascii=False,indent=2))
def at(t):
 x=round(t*100);return f'{x//360000}:{x//6000%60:02}:{x//100%60:02}.{x%100:02}'
def st(t):
 x=round(t*1000);return f'{x//3600000:02}:{x//60000%60:02}:{x//1000%60:02},{x%1000:03}'
ass='''[Script Info]
ScriptType: v4.00+
PlayResX: 1080
PlayResY: 1920
WrapStyle: 2
[V4+ Styles]
Format: Name,Fontname,Fontsize,PrimaryColour,SecondaryColour,OutlineColour,BackColour,Bold,Italic,Underline,StrikeOut,ScaleX,ScaleY,Spacing,Angle,BorderStyle,Outline,Shadow,Alignment,MarginL,MarginR,MarginV,Encoding
Style: Caption,DejaVu Sans,50,&H00FFFFFF,&H00FFFFFF,&H00101010,&H90000000,0,0,0,0,100,100,0,0,1,2.6,1.5,2,78,78,240,1
Style: Title,DejaVu Sans,72,&H00FFFFFF,&H00FFFFFF,&H00101010,&H90000000,-1,0,0,0,100,100,0,0,1,2.6,2,8,78,78,300,1
Style: Source,DejaVu Sans,30,&H00FFFFFF,&H00FFFFFF,&H00101010,&H90000000,0,0,0,0,100,100,0,0,1,1.4,1,8,80,80,110,1
[Events]
Format: Layer,Start,End,Style,Name,MarginL,MarginR,MarginV,Effect,Text
'''
def evt(a,b,s,text,tag=''):
 return f'Dialogue: 0,{at(a)},{at(b)},{s},,0,0,0,,{tag}'+text.replace('\n',r'\N')+'\n'
for x in subs:ass+=evt(x['start'],x['end'],'Caption',x['text'])
ass+=evt(0,3.3,'Title','ЗИМА ПОПЕРЕДУ.\nДЕ РЕЗУЛЬТАТ\nПІДГОТОВКИ?',r'{\fad(120,120)}')
ass+=evt(65.6,69.6,'Title','СКІЛЬКИ ГОДИН\nВИ БУЛИ БЕЗ СВІТЛА?',r'{\fad(100,100)}')
labels={'complaint-day':'Скарга мешканця · скриншот оприлюднено 04.11.2026\n','complaint-short':'Скарга мешканки · скриншот оприлюднено 04.11.2026\n','ukrenergo':'Укренерго · 05.11.2026\n','ministry':'Міненерго · 05.11.2026\n','summer':'ДТЕК · повідомлення 25.08.2026\nДані по мережах компанії','shmyhal':'Денис Шмигаль · повідомлення 03.11.2026\nДані по країні','city':'КМДА · позиція Віталія Кличка · 05.11.2026\n'}
for c in d['clips']:
 a=c['start'];b=a+c['duration'];k=c['kind']
 if k in ['a','b']:ass+=evt(a,b,'Source','Київ · відео оприлюднено 04.11.2026\nДжерело: Київ24')
 elif k in labels:ass+=evt(a,b,'Source',labels[k],r'{\pos(540,330)}')
(p/'editorial/editorial.ass').write_text(ass)
(p/'editorial/SUBTITLES.srt').write_text('\n\n'.join(f'{i+1}\n{st(x["start"])} --> {st(x["end"])}\n{x["text"]}' for i,x in enumerate(subs))+'\n')
(p/'editorial/VOICEOVER.txt').write_text('Авторський голос не згенеровано. Порожня VOICEOVER починається 00:00 і триває 01:09.600.\n\n'+'\n\n'.join(f'{st(n["start"])} – {st(n["end"])}\n{n["text"]}' for n in d['narration']))
print(len(subs),'caption pages')
