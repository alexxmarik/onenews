import React from 'react';
import {AbsoluteFill,Composition,Sequence,staticFile,useCurrentFrame,useVideoConfig} from 'remotion';
import {Video,Audio} from '@remotion/media';
import {loadFont} from '@remotion/fonts';
import type {Caption} from '@remotion/captions';
loadFont({family:'News',url:staticFile('DejaVuSans.ttf'),weight:'400'});
loadFont({family:'News',url:staticFile('DejaVuSans-Bold.ttf'),weight:'700'});
const Note=({text}:{text:string})=>null;
const Captions=({captions}:{captions:Caption[]})=>{const f=useCurrentFrame();const {fps}=useVideoConfig();const t=f/fps*1000;const c=captions.find(c=>c.startMs<=t&&t<c.endMs);return c?<div style={{position:'absolute',left:78,width:924,bottom:190,fontSize:48,lineHeight:1.2,textAlign:'center',color:'white',whiteSpace:'pre-line',textShadow:'-1px -1px 2px #000,1px 1px 3px #000'}}>{c.text}</div>:null;};
const Credit=({text,top=1450}:{text:string;top?:number})=><div style={{position:'absolute',left:72,top,fontSize:30,color:'#e5e5e5',whiteSpace:'pre-line',textShadow:'0 1px 3px #000'}}>{text}</div>;
export const News=()=>{const {fps}=useVideoConfig();return <AbsoluteFill style={{background:'black',fontFamily:'News, sans-serif'}}>
    <Sequence name="Відео 00 · ч.1, ×1 529с" from={0} durationInFrames={90} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/00.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 01 · ч.1, ×1 535с" from={90} durationInFrames={90} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/01.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 02 · ч.1, ×1 6.3с" from={180} durationInFrames={357} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/02.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
      <Audio name="Оригінальна заява 1" src={staticFile("audio/original-1.wav")} premountFor={fps}/>
      <Captions captions={[{"text": "НАБУ та САП викрили\nзлочинну організацію,", "startMs": 0, "endMs": 3800, "timestampMs": null, "confidence": null}, {"text": "що спеціалізувалась на шахрайстві,", "startMs": 3800, "endMs": 6900, "timestampMs": null, "confidence": null}, {"text": "так званих колцентрах", "startMs": 6900, "endMs": 8800, "timestampMs": null, "confidence": null}, {"text": "і розповсюдженні\nнаркотичних засобів.", "startMs": 8800, "endMs": 11900, "timestampMs": null, "confidence": null}]}/>
      <Sequence name="Коротка атрибуція" durationInFrames={105} premountFor={fps}><Credit text={"Олександр Абакумов · НАБУ"}/></Sequence>
    </Sequence>
    <Sequence name="Відео 03 · ч.1, ×1 30с" from={537} durationInFrames={120} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/03.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 04 · ч.1, ×1 50с" from={657} durationInFrames={120} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/04.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 05 · ч.1, ×1 82с" from={777} durationInFrames={120} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/05.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 06 · ч.1, ×1 96с" from={897} durationInFrames={120} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/06.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 07 · ч.1, ×1 110с" from={1017} durationInFrames={120} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/07.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 08 · ч.1, ×1 504.1с" from={1137} durationInFrames={537} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/08.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
      <Audio name="Оригінальна заява 2" src={staticFile("audio/original-2.wav")} premountFor={fps}/>
      <Captions captions={[{"text": "Стандартна сума\nстановила 7 тисяч доларів", "startMs": 0, "endMs": 2750, "timestampMs": null, "confidence": null}, {"text": "в місяць з одного колцентру.", "startMs": 2750, "endMs": 4800, "timestampMs": null, "confidence": null}, {"text": "На початку місяця\nпередавав адреси", "startMs": 4800, "endMs": 7700, "timestampMs": null, "confidence": null}, {"text": "колцентрів з їхніми\nідентифікаторами,", "startMs": 7700, "endMs": 10400, "timestampMs": null, "confidence": null}, {"text": "а до п’ятого числа\nсплачував зазначену суму", "startMs": 10400, "endMs": 13700, "timestampMs": null, "confidence": null}, {"text": "в криптовалюті", "startMs": 13700, "endMs": 14500, "timestampMs": null, "confidence": null}, {"text": "на заздалегідь наданий\nправоохоронцями гаманець.", "startMs": 14500, "endMs": 17900, "timestampMs": null, "confidence": null}]}/>
      <Sequence name="Коротка атрибуція" durationInFrames={105} premountFor={fps}><Credit text={"Фрагмент офіційного фільму НАБУ / САП"}/></Sequence>
    </Sequence>
    <Sequence name="Відео 09 · ч.1, ×1 600с" from={1674} durationInFrames={105} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/09.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 10 · ч.1, ×1 775с" from={1779} durationInFrames={105} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/10.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 11 · ч.1, ×1 805с" from={1884} durationInFrames={105} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/11.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 12 · ч.1, ×1 820с" from={1989} durationInFrames={105} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/12.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 13 · ч.1, ×1 539.4с" from={2094} durationInFrames={453} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/13.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
      <Audio name="Оригінальна заява 3" src={staticFile("audio/original-3.wav")} premountFor={fps}/>
      <Captions captions={[{"text": "Як з’ясувало слідство,", "startMs": 0, "endMs": 2000, "timestampMs": null, "confidence": null}, {"text": "учасники злочинної організації", "startMs": 2000, "endMs": 4300, "timestampMs": null, "confidence": null}, {"text": "координували діяльність\nщонайменше 52 колцентрів.", "startMs": 4300, "endMs": 7500, "timestampMs": null, "confidence": null}, {"text": "В цих офісах працювало\nщонайменше 2700 людей,", "startMs": 7500, "endMs": 11600, "timestampMs": null, "confidence": null}, {"text": "які щодня ошукували громадян\nУкраїни та інших країн.", "startMs": 11600, "endMs": 15100, "timestampMs": null, "confidence": null}]}/>
      <Sequence name="Коротка атрибуція" durationInFrames={105} premountFor={fps}><Credit text={"Фрагмент офіційного фільму НАБУ / САП"}/></Sequence>
    </Sequence>
    <Sequence name="Відео 14 · ч.1, ×1 1051с" from={2547} durationInFrames={120} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/14.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 15 · ч.1, ×1 1064с" from={2667} durationInFrames={120} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/15.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 16 · ч.1, ×1 1219.5с" from={2787} durationInFrames={120} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/16.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 17 · ч.1, ×1 1290с" from={2907} durationInFrames={120} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/17.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 18 · ч.1, ×1 1335с" from={3027} durationInFrames={120} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/18.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 19 · ч.1, ×1 1260с" from={3147} durationInFrames={120} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/19.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 20 · ч.1, ×1 1357.5с" from={3267} durationInFrames={558} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/20.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
      <Audio name="Оригінальна заява 4" src={staticFile("audio/original-4.wav")} premountFor={fps}/>
      <Captions captions={[{"text": "Отже, учасники\nзлочинної організації", "startMs": 0, "endMs": 2700, "timestampMs": null, "confidence": null}, {"text": "були готові підкуповувати\nне лише міністрів,", "startMs": 2700, "endMs": 5200, "timestampMs": null, "confidence": null}, {"text": "а й інших впливових осіб,", "startMs": 5200, "endMs": 7100, "timestampMs": null, "confidence": null}, {"text": "здатних вирішити питання\nна державному рівні.", "startMs": 7100, "endMs": 9800, "timestampMs": null, "confidence": null}, {"text": "План підкупу так і не\nвдалося реалізувати,", "startMs": 9800, "endMs": 13200, "timestampMs": null, "confidence": null}, {"text": "зокрема на тлі журналістського\nрозслідування Bihus.Info,", "startMs": 13200, "endMs": 16100, "timestampMs": null, "confidence": null}, {"text": "про підготовку якого\nстало відомо фігурантам.", "startMs": 16100, "endMs": 18600, "timestampMs": null, "confidence": null}]}/>
      <Sequence name="Коротка атрибуція" durationInFrames={105} premountFor={fps}><Credit text={"Фрагмент офіційного фільму НАБУ / САП"}/></Sequence>
    </Sequence>
    <Sequence name="Відео 21 · ч.1, ×1 1377с" from={3825} durationInFrames={90} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/21.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 22 · ч.1, ×1 1412с" from={3915} durationInFrames={90} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/22.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 23 · ч.2, ×1 240с" from={4005} durationInFrames={90} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/23.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 24 · ч.2, ×1 327.5с" from={4095} durationInFrames={90} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/24.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 25 · ч.2, ×1 260с" from={4185} durationInFrames={90} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/25.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 26 · ч.2, ×1 58с" from={4275} durationInFrames={90} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/26.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 27 · ч.1, ×1 1440с" from={4365} durationInFrames={90} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/27.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 28 · ч.2, ×1 579.1с" from={4455} durationInFrames={375} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/28.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
      <Audio name="Оригінальна заява 5" src={staticFile("audio/original-5.wav")} premountFor={fps}/>
      <Captions captions={[{"text": "Відчуття безкарності забезпечував", "startMs": 0, "endMs": 2500, "timestampMs": null, "confidence": null}, {"text": "постійний витік\nслужбової інформації.", "startMs": 2500, "endMs": 4600, "timestampMs": null, "confidence": null}, {"text": "Щойно потерпілий\nзвертався до поліції,", "startMs": 4600, "endMs": 6900, "timestampMs": null, "confidence": null}, {"text": "замовники вже знали,\nхто розслідує справу,", "startMs": 6900, "endMs": 9300, "timestampMs": null, "confidence": null}, {"text": "і запевняли спільників, що\nситуація під контролем.", "startMs": 9300, "endMs": 12500, "timestampMs": null, "confidence": null}]}/>
      <Sequence name="Коротка атрибуція" durationInFrames={105} premountFor={fps}><Credit text={"Фрагмент офіційного фільму НАБУ / САП"}/></Sequence>
    </Sequence>
    <Sequence name="Відео 29 · ч.1, ×1 491с" from={4830} durationInFrames={125} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/29.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 30 · ч.2, ×1 1230с" from={4955} durationInFrames={125} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/30.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 31 · ч.2, ×1 1240с" from={5080} durationInFrames={125} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/31.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 32 · ч.2, ×1 1255.6с" from={5205} durationInFrames={432} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/32.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
      <Audio name="Оригінальна заява 6" src={staticFile("audio/original-6.wav")} premountFor={fps}/>
      <Captions captions={[{"text": "Слідством встановлено,\nщо за період", "startMs": 0, "endMs": 2400, "timestampMs": null, "confidence": null}, {"text": "з 16 жовтня 2025 року", "startMs": 2400, "endMs": 5000, "timestampMs": null, "confidence": null}, {"text": "по 25 квітня 2026 року", "startMs": 5000, "endMs": 8400, "timestampMs": null, "confidence": null}, {"text": "на вказаний\nкриптогаманець надійшло", "startMs": 8400, "endMs": 10900, "timestampMs": null, "confidence": null}, {"text": "3 мільйони 750 тисяч USDT.", "startMs": 10900, "endMs": 14400, "timestampMs": null, "confidence": null}]}/>
      <Sequence name="Коротка атрибуція" durationInFrames={105} premountFor={fps}><Credit text={"Фрагмент офіційного фільму НАБУ / САП"}/></Sequence>
    </Sequence>
    <Sequence name="Відео 33 · ч.1, ×1 487с" from={5637} durationInFrames={120} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/33.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 34 · ч.1, ×1 523с" from={5757} durationInFrames={120} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/34.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 35 · ч.1, ×1 555с" from={5877} durationInFrames={120} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/35.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 36 · ч.2, ×1 685с" from={5997} durationInFrames={120} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/36.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 37 · ч.2, ×1 710с" from={6117} durationInFrames={120} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/37.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 38 · ч.2, ×1 1392с" from={6237} durationInFrames={120} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/38.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 39 · ч.2, ×1 1379.45с" from={6357} durationInFrames={174} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/39.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
      <Audio name="Оригінальна заява 7" src={staticFile("audio/original-7.wav")} premountFor={fps}/>
      <Captions captions={[{"text": "Втім, злочинна діяльність\nтривала роками.", "startMs": 0, "endMs": 2700, "timestampMs": null, "confidence": null}, {"text": "Чому її не зупиняли раніше\n— питання відкрите.", "startMs": 2700, "endMs": 5800, "timestampMs": null, "confidence": null}]}/>
      <Sequence name="Коротка атрибуція" durationInFrames={105} premountFor={fps}><Credit text={"Фрагмент офіційного фільму НАБУ / САП"}/></Sequence>
    </Sequence>
    <Sequence name="Відео 40 · ч.1, ×1 345с" from={6531} durationInFrames={183} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/40.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 41 · ч.2, ×1 652с" from={6714} durationInFrames={183} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/41.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Відео 42 · ч.1, ×1 685с" from={6897} durationInFrames={183} premountFor={fps}>
      <Video name="Оригінальний відеоряд" src={staticFile("clips/42.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Автор 1 · майбутній VOICEOVER" from={0} durationInFrames={180} premountFor={fps}>
      <Audio name="VOICEOVER — порожній WAV для заміни" src={staticFile("audio/VOICEOVER.wav")} trimBefore={0} premountFor={fps}/>
      <Note text={"НАБУ і САП заявили про викриття нової організації: колцентри, наркотики та ймовірне прикриття силовиків."}/><Captions captions={[{"text": "НАБУ і САП заявили про\nвикриття нової організації:", "startMs": 0, "endMs": 3345, "timestampMs": null, "confidence": null}, {"text": "колцентри, наркотики та\nймовірне прикриття силовиків.", "startMs": 3345, "endMs": 6000, "timestampMs": null, "confidence": null}]}/>
    </Sequence>
    <Sequence name="Автор 2 · майбутній VOICEOVER" from={537} durationInFrames={600} premountFor={fps}>
      <Audio name="VOICEOVER — порожній WAV для заміни" src={staticFile("audio/VOICEOVER.wav")} trimBefore={537} premountFor={fps}/>
      <Note text={"У повідомленні йдеться щонайменше про дванадцять учасників. Серед ключових псевдонімів — «Кримінал» і «Мексиканець». «Прайс» та «Консультант», за версією слідства, представляли поліцію, «Акім» — СБУ. Детективи описують систему щомісячних платежів за прикриття бізнесу."}/><Captions captions={[{"text": "У повідомленні йдеться\nщонайменше про дванадцять", "startMs": 0, "endMs": 3488, "timestampMs": null, "confidence": null}, {"text": "учасників.", "startMs": 3488, "endMs": 4273, "timestampMs": null, "confidence": null}, {"text": "Серед ключових псевдонімів —\n«Кримінал» і «Мексиканець».", "startMs": 4273, "endMs": 8547, "timestampMs": null, "confidence": null}, {"text": "«Прайс» та «Консультант», за\nверсією слідства, представляли", "startMs": 8547, "endMs": 12616, "timestampMs": null, "confidence": null}, {"text": "поліцію, «Акім» — СБУ.", "startMs": 12616, "endMs": 15145, "timestampMs": null, "confidence": null}, {"text": "Детективи описують\nсистему щомісячних", "startMs": 15145, "endMs": 17471, "timestampMs": null, "confidence": null}, {"text": "платежів за прикриття бізнесу.", "startMs": 17471, "endMs": 20000, "timestampMs": null, "confidence": null}]}/>
    </Sequence>
    <Sequence name="Автор 3 · майбутній VOICEOVER" from={1674} durationInFrames={420} premountFor={fps}>
      <Audio name="VOICEOVER — порожній WAV для заміни" src={staticFile("audio/VOICEOVER.wav")} trimBefore={1674} premountFor={fps}/>
      <Note text={"У матеріалах показано листування про офіси, криптогаманці та вилучену техніку. За версією слідства, її намагалися повернути через суд. Кошти з окремого платежу не дорівнюють загальним збиткам. Масштаб мережі НАБУ описує так."}/><Captions captions={[{"text": "У матеріалах показано листування\nпро офіси, криптогаманці та", "startMs": 0, "endMs": 3457, "timestampMs": null, "confidence": null}, {"text": "вилучену техніку.", "startMs": 3457, "endMs": 4472, "timestampMs": null, "confidence": null}, {"text": "За версією слідства, її\nнамагалися повернути через суд.", "startMs": 4472, "endMs": 8080, "timestampMs": null, "confidence": null}, {"text": "Кошти з окремого платежу не\nдорівнюють загальним збиткам.", "startMs": 8080, "endMs": 11688, "timestampMs": null, "confidence": null}, {"text": "Масштаб мережі НАБУ описує так.", "startMs": 11688, "endMs": 14000, "timestampMs": null, "confidence": null}]}/>
    </Sequence>
    <Sequence name="Автор 4 · майбутній VOICEOVER" from={2547} durationInFrames={720} premountFor={fps}>
      <Audio name="VOICEOVER — порожній WAV для заміни" src={staticFile("audio/VOICEOVER.wav")} trimBefore={2547} premountFor={fps}/>
      <Note text={"Окремий напрям, за даними НАБУ, — наркобізнес. «Мексиканця» пов’язують із «Хімпромом». У фільмі згадуються магазини U420 та розмови про можливий вплив на законодавство. Згадка посадовця в чужій розмові не доводить його участі. Чим завершився описаний план, пояснюють автори фільму."}/><Captions captions={[{"text": "Окремий напрям, за даними\nНАБУ, — наркобізнес.", "startMs": 0, "endMs": 4329, "timestampMs": null, "confidence": null}, {"text": "«Мексиканця» пов’язують\nіз «Хімпромом».", "startMs": 4329, "endMs": 6891, "timestampMs": null, "confidence": null}, {"text": "У фільмі згадуються магазини\nU420 та розмови про", "startMs": 6891, "endMs": 11602, "timestampMs": null, "confidence": null}, {"text": "можливий вплив на законодавство.", "startMs": 11602, "endMs": 14164, "timestampMs": null, "confidence": null}, {"text": "Згадка посадовця в чужій\nрозмові не доводить його", "startMs": 14164, "endMs": 18876, "timestampMs": null, "confidence": null}, {"text": "участі.", "startMs": 18876, "endMs": 19671, "timestampMs": null, "confidence": null}, {"text": "Чим завершився описаний план,\nпояснюють автори фільму.", "startMs": 19671, "endMs": 24000, "timestampMs": null, "confidence": null}]}/>
    </Sequence>
    <Sequence name="Автор 5 · майбутній VOICEOVER" from={3825} durationInFrames={630} premountFor={fps}>
      <Audio name="VOICEOVER — порожній WAV для заміни" src={staticFile("audio/VOICEOVER.wav")} trimBefore={3825} premountFor={fps}/>
      <Note text={"Фігуранти, за даними НАБУ, обговорювали тиск на журналістів Bihus.Info. Окремо бюро показало кадри нападу біля спортклубу в Києві. Серед імовірних виконавців насильницьких злочинів називають «Боксера» та «Пашу». Ще один напрям — підроблені євро. Як НАБУ пояснює прикриття виконавців?"}/><Captions captions={[{"text": "Фігуранти, за даними НАБУ,\nобговорювали тиск на журналістів", "startMs": 0, "endMs": 4190, "timestampMs": null, "confidence": null}, {"text": "Bihus.Info.", "startMs": 4190, "endMs": 5080, "timestampMs": null, "confidence": null}, {"text": "Окремо бюро показало кадри\nнападу біля спортклубу в", "startMs": 5080, "endMs": 9269, "timestampMs": null, "confidence": null}, {"text": "Києві.", "startMs": 9269, "endMs": 9976, "timestampMs": null, "confidence": null}, {"text": "Серед імовірних виконавців\nнасильницьких злочинів називають", "startMs": 9976, "endMs": 13118, "timestampMs": null, "confidence": null}, {"text": "«Боксера» та «Пашу».", "startMs": 13118, "endMs": 14873, "timestampMs": null, "confidence": null}, {"text": "Ще один напрям — підроблені євро.", "startMs": 14873, "endMs": 18198, "timestampMs": null, "confidence": null}, {"text": "Як НАБУ пояснює\nприкриття виконавців?", "startMs": 18198, "endMs": 21000, "timestampMs": null, "confidence": null}]}/>
    </Sequence>
    <Sequence name="Автор 6 · майбутній VOICEOVER" from={4830} durationInFrames={375} premountFor={fps}>
      <Audio name="VOICEOVER — порожній WAV для заміни" src={staticFile("audio/VOICEOVER.wav")} trimBefore={4830} premountFor={fps}/>
      <Note text={"Окремо бюро розповідає про надходження на криптогаманець. Це сума за визначений період — її не можна вважати місячним прибутком чи розміром усіх збитків. Ось дані НАБУ."}/><Captions captions={[{"text": "Окремо бюро розповідає про\nнадходження на криптогаманець.", "startMs": 0, "endMs": 3396, "timestampMs": null, "confidence": null}, {"text": "Це сума за визначений\nперіод — її не", "startMs": 3396, "endMs": 7093, "timestampMs": null, "confidence": null}, {"text": "можна вважати місячним\nприбутком чи розміром усіх", "startMs": 7093, "endMs": 10328, "timestampMs": null, "confidence": null}, {"text": "збитків. Ось дані НАБУ.", "startMs": 10328, "endMs": 12500, "timestampMs": null, "confidence": null}]}/>
    </Sequence>
    <Sequence name="Автор 7 · майбутній VOICEOVER" from={5637} durationInFrames={720} premountFor={fps}>
      <Audio name="VOICEOVER — порожній WAV для заміни" src={staticFile("audio/VOICEOVER.wav")} trimBefore={5637} premountFor={fps}/>
      <Note text={"СБУ, своєю чергою, повідомила про звільнення двох високопосадовців. Керівник служби Олександр Поклад заявив про співпрацю з НАБУ і САП та очікування об’єктивного розслідування. Кадрове рішення не є визнанням вини. Водночас у фільмі НАБУ ставлять питання до роботи інших правоохоронних органів."}/><Captions captions={[{"text": "СБУ, своєю чергою, повідомила про\nзвільнення двох високопосадовців.", "startMs": 0, "endMs": 4841, "timestampMs": null, "confidence": null}, {"text": "Керівник служби Олександр\nПоклад заявив про співпрацю з", "startMs": 4841, "endMs": 9478, "timestampMs": null, "confidence": null}, {"text": "НАБУ і САП та очікування\nоб’єктивного розслідування.", "startMs": 9478, "endMs": 13739, "timestampMs": null, "confidence": null}, {"text": "Кадрове рішення не\nє визнанням вини.", "startMs": 13739, "endMs": 17420, "timestampMs": null, "confidence": null}, {"text": "Водночас у фільмі НАБУ\nставлять питання до", "startMs": 17420, "endMs": 21478, "timestampMs": null, "confidence": null}, {"text": "роботи інших\nправоохоронних органів.", "startMs": 21478, "endMs": 24000, "timestampMs": null, "confidence": null}]}/>
    </Sequence>
    <Sequence name="Автор 8 · майбутній VOICEOVER" from={6531} durationInFrames={549} premountFor={fps}>
      <Audio name="VOICEOVER — порожній WAV для заміни" src={staticFile("audio/VOICEOVER.wav")} trimBefore={6531} premountFor={fps}/>
      <Note text={"Це опублікована версія слідства. Звільнення посадовців не є вироком. Які докази будуть визнані допустимими й чия вина буде доведена, має визначити суд. Окремих перевірених відповідей усіх названих фігурантів у зібраних матеріалах немає. Версія слідства — ще не вирок."}/><Captions captions={[{"text": "Це опублікована версія слідства.", "startMs": 0, "endMs": 2003, "timestampMs": null, "confidence": null}, {"text": "Звільнення посадовців\nне є вироком.", "startMs": 2003, "endMs": 4466, "timestampMs": null, "confidence": null}, {"text": "Які докази будуть визнані\nдопустимими й чия вина", "startMs": 4466, "endMs": 8149, "timestampMs": null, "confidence": null}, {"text": "буде доведена, має визначити суд.", "startMs": 8149, "endMs": 10612, "timestampMs": null, "confidence": null}, {"text": "Окремих перевірених відповідей\nусіх названих фігурантів у зібраних", "startMs": 10612, "endMs": 14295, "timestampMs": null, "confidence": null}, {"text": "матеріалах немає.", "startMs": 14295, "endMs": 15377, "timestampMs": null, "confidence": null}, {"text": "Версія слідства — ще не вирок.", "startMs": 15377, "endMs": 18300, "timestampMs": null, "confidence": null}]}/>
    </Sequence>
    <Sequence name="Короткий вступ" from={0} durationInFrames={90} premountFor={fps}><div style={{position:'absolute',left:72,top:110,fontSize:68,fontWeight:700,color:'white',textShadow:'0 1px 3px #000'}}>КАРФАГЕН</div><Credit top={208} text="Новий епізод · 04.11.2026"/></Sequence>
    <Sequence name="Контекст кадрів нападу" from={4095} durationInFrames={90} premountFor={fps}><Credit top={110} text={'Напад біля спортклубу · 07.07.2026\nМатеріали НАБУ / САП'}/></Sequence>
    <Sequence name="Джерело реакції СБУ" from={5637} durationInFrames={123} premountFor={fps}><Credit top={110} text="Реакція СБУ: письмове повідомлення"/></Sequence>
  </AbsoluteFill>;};
export const Root=()=> <Composition id="KarfagenNews" component={News} durationInFrames={7080} fps={30} width={1080} height={1920}/>;
