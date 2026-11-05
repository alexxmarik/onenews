import React from 'react';
import {AbsoluteFill, Composition, Sequence, staticFile, useCurrentFrame, useVideoConfig, interpolate} from 'remotion';
import {Video, Audio} from '@remotion/media';
import {loadFont} from '@remotion/fonts';
import type {Caption} from '@remotion/captions';
loadFont({family:'News',url:staticFile('DejaVuSans.ttf'),weight:'400'});
loadFont({family:'News',url:staticFile('DejaVuSans-Bold.ttf'),weight:'700'});

// Every clip, quote and author slot is an independent JSX item in Studio.
const AuthorText=({text}:{text:string})=>null;
const SourceMeta=({reply=false,ending=false}:{reply?:boolean;ending?:boolean})=><div style={{position:'absolute',left:72,top:125,color:'#e4e8ef',fontSize:27,lineHeight:1.2,textShadow:'0 1px 3px #000'}}>{reply?'04.11.2026 · Офіційне повідомлення СБУ':ending?'04.11.2026 · Матеріали НАБУ/САП':'04.11.2026 · Із фільму НАБУ та САП'}{!reply&&!ending&&<div style={{color:'#ff8b85',fontSize:30,marginTop:17}}>За версією слідства</div>}</div>;
const CaptionLayer=({captions,speaker}:{captions:Caption[];speaker:string})=>{
 const f=useCurrentFrame();const {fps}=useVideoConfig();const t=f/fps*1000;const c=captions.find(c=>c.startMs<=t&&t<c.endMs);
 return <><div style={{position:'absolute',top:1380,left:72,fontSize:32,color:'#e4e8ef',textShadow:'0 2px 4px #000'}}>{speaker}</div>{c&&<div style={{position:'absolute',bottom:270,left:80,width:920,textAlign:'center',fontSize:46,lineHeight:1.24,whiteSpace:'pre-line',color:'white'}}><span style={{background:'rgba(0,0,0,.75)',boxDecorationBreak:'clone',padding:'8px 12px'}}>{c.text}</span></div>}</>;
};
const Accent=({text,detail='',mode='wide',duration}:{text:string;detail?:string;mode?:string;duration:number})=>{
 const f=useCurrentFrame();const {fps}=useVideoConfig();const top=mode==='portrait'?1250:mode==='document'?420:320;
 return <div style={{opacity:interpolate(f,[0,4,duration*fps-4,duration*fps],[0,1,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'}),position:'absolute',left:72,width:936,top,color:'white',textShadow:'0 2px 6px #000'}}><div style={{fontSize:65,lineHeight:'82px',fontWeight:700,whiteSpace:'pre-line'}}>{text}</div>{detail&&<div style={{position:mode==='document'?'absolute':'relative',top:mode==='document'?360:undefined,marginTop:mode==='document'?0:40,fontSize:34,lineHeight:1.3,color:'#e4e8ef',whiteSpace:'pre-line'}}>{detail}</div>}</div>;
};
export const Karfagen=()=>{
 const {fps}=useVideoConfig();
 return <AbsoluteFill style={{background:'#080b12',fontFamily:'News, sans-serif'}}>
    <Sequence name="ВІДЕО 00 · частина 1 · джерело ×1 424.9 с" from={0} durationInFrames={120} premountFor={fps}>
      <Video name="Основне відео 00" src={staticFile("clips/00.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 01 · частина 1 · джерело ×1 50 с" from={120} durationInFrames={120} premountFor={fps}>
      <Video name="Основне відео 01" src={staticFile("clips/01.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 02 · частина 2 · джерело ×1 58 с" from={240} durationInFrames={120} premountFor={fps}>
      <Video name="Основне відео 02" src={staticFile("clips/02.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 03 · частина 1 · джерело ×1 135 с" from={360} durationInFrames={180} premountFor={fps}>
      <Video name="Основне відео 03" src={staticFile("clips/03.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 04 · частина 1 · джерело ×1 6.3 с" from={540} durationInFrames={357} premountFor={fps}>
      <Video name="Основне відео 04" src={staticFile("clips/04.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
      <Audio name="ORIGINAL 1" src={staticFile("audio/original-1.wav")} premountFor={fps}/>
      <CaptionLayer speaker={"Олександр Абакумов · НАБУ"} captions={[{"text": "НАБУ та САП викрили\nзлочинну організацію,", "startMs": 0, "endMs": 4000, "timestampMs": null, "confidence": null}, {"text": "що спеціалізувалась на шахрайстві,\nтак званих колцентрах", "startMs": 4000, "endMs": 8800, "timestampMs": null, "confidence": null}, {"text": "і розповсюдженні\nнаркотичних засобів.", "startMs": 8800, "endMs": 11900, "timestampMs": null, "confidence": null}]}/>
    </Sequence>
    <Sequence name="ВІДЕО 05 · частина 1 · джерело ×1 68.5 с" from={897} durationInFrames={150} premountFor={fps}>
      <Video name="Основне відео 05" src={staticFile("clips/05.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 06 · частина 1 · джерело ×1 80 с" from={1047} durationInFrames={150} premountFor={fps}>
      <Video name="Основне відео 06" src={staticFile("clips/06.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 07 · частина 1 · джерело ×1 96 с" from={1197} durationInFrames={153} premountFor={fps}>
      <Video name="Основне відео 07" src={staticFile("clips/07.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 08 · частина 1 · джерело ×1 108 с" from={1350} durationInFrames={150} premountFor={fps}>
      <Video name="Основне відео 08" src={staticFile("clips/08.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 09 · частина 1 · джерело ×1 155 с" from={1500} durationInFrames={150} premountFor={fps}>
      <Video name="Основне відео 09" src={staticFile("clips/09.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 10 · частина 1 · джерело ×1 525 с" from={1650} durationInFrames={180} premountFor={fps}>
      <Video name="Основне відео 10" src={staticFile("clips/10.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 11 · частина 1 · джерело ×1 480 с" from={1830} durationInFrames={180} premountFor={fps}>
      <Video name="Основне відео 11" src={staticFile("clips/11.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 12 · частина 1 · джерело ×1 504.1 с" from={2010} durationInFrames={144} premountFor={fps}>
      <Video name="Основне відео 12" src={staticFile("clips/12.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
      <Audio name="ORIGINAL 2" src={staticFile("audio/original-2.wav")} premountFor={fps}/>
      <CaptionLayer speaker={"Олександр Абакумов · фільм НАБУ/САП"} captions={[{"text": "Стандартна сума становила\n7 тисяч доларів", "startMs": 0, "endMs": 2600, "timestampMs": null, "confidence": null}, {"text": "в місяць\nз одного колцентру.", "startMs": 2600, "endMs": 4800, "timestampMs": null, "confidence": null}]}/>
    </Sequence>
    <Sequence name="ВІДЕО 13 · частина 1 · джерело ×1 509 с" from={2154} durationInFrames={180} premountFor={fps}>
      <Video name="Основне відео 13" src={staticFile("clips/13.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 14 · частина 1 · джерело ×1 600 с" from={2334} durationInFrames={186} premountFor={fps}>
      <Video name="Основне відео 14" src={staticFile("clips/14.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 15 · частина 1 · джерело ×1 460 с" from={2520} durationInFrames={180} premountFor={fps}>
      <Video name="Основне відео 15" src={staticFile("clips/15.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 16 · частина 1 · джерело ×1 685 с" from={2700} durationInFrames={180} premountFor={fps}>
      <Video name="Основне відео 16" src={staticFile("clips/16.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 17 · частина 1 · джерело ×1 450 с" from={2880} durationInFrames={180} premountFor={fps}>
      <Video name="Основне відео 17" src={staticFile("clips/17.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 18 · частина 1 · джерело ×1 539.4 с" from={3060} durationInFrames={453} premountFor={fps}>
      <Video name="Основне відео 18" src={staticFile("clips/18.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
      <Audio name="ORIGINAL 3" src={staticFile("audio/original-3.wav")} premountFor={fps}/>
      <CaptionLayer speaker={"Олександр Абакумов · фільм НАБУ/САП"} captions={[{"text": "Як з’ясувало слідство,", "startMs": 0, "endMs": 2000, "timestampMs": null, "confidence": null}, {"text": "учасники злочинної організації\nкоординували діяльність\nщонайменше 52 колцентрів.", "startMs": 2000, "endMs": 6800, "timestampMs": null, "confidence": null}, {"text": "В цих офісах працювало\nщонайменше 2700 людей,", "startMs": 6800, "endMs": 11100, "timestampMs": null, "confidence": null}, {"text": "які щодня ошукували громадян\nУкраїни та інших країн.", "startMs": 11100, "endMs": 15100, "timestampMs": null, "confidence": null}]}/>
    </Sequence>
    <Sequence name="ВІДЕО 19 · частина 1 · джерело ×1 1051 с" from={3513} durationInFrames={180} premountFor={fps}>
      <Video name="Основне відео 19" src={staticFile("clips/19.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 20 · частина 1 · джерело ×1 1063 с" from={3693} durationInFrames={180} premountFor={fps}>
      <Video name="Основне відео 20" src={staticFile("clips/20.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 21 · частина 1 · джерело ×1 1260 с" from={3873} durationInFrames={180} premountFor={fps}>
      <Video name="Основне відео 21" src={staticFile("clips/21.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 22 · частина 1 · джерело ×1 1357 с" from={4053} durationInFrames={180} premountFor={fps}>
      <Video name="Основне відео 22" src={staticFile("clips/22.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 23 · частина 1 · джерело ×1 1377 с" from={4233} durationInFrames={180} premountFor={fps}>
      <Video name="Основне відео 23" src={staticFile("clips/23.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 24 · частина 1 · джерело ×1 1440 с" from={4413} durationInFrames={180} premountFor={fps}>
      <Video name="Основне відео 24" src={staticFile("clips/24.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 25 · частина 2 · джерело ×1 70 с" from={4593} durationInFrames={180} premountFor={fps}>
      <Video name="Основне відео 25" src={staticFile("clips/25.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 26 · частина 2 · джерело ×1 235 с" from={4773} durationInFrames={177} premountFor={fps}>
      <Video name="Основне відео 26" src={staticFile("clips/26.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 27 · частина 2 · джерело ×1 511.8 с" from={4950} durationInFrames={162} premountFor={fps}>
      <Video name="Основне відео 27" src={staticFile("clips/27.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
      <Audio name="ORIGINAL 4" src={staticFile("audio/original-4.wav")} premountFor={fps}/>
      <CaptionLayer speaker={"Олександр Абакумов · НАБУ"} captions={[{"text": "Група виконувала подібні замовлення\nнавіть за кордоном,", "startMs": 0, "endMs": 3600, "timestampMs": null, "confidence": null}, {"text": "зокрема у Відні.", "startMs": 3600, "endMs": 5400, "timestampMs": null, "confidence": null}]}/>
    </Sequence>
    <Sequence name="ВІДЕО 28 · частина 2 · джерело ×1 579 с" from={5112} durationInFrames={180} premountFor={fps}>
      <Video name="Основне відео 28" src={staticFile("clips/28.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 29 · частина 2 · джерело ×1 259 с" from={5292} durationInFrames={180} premountFor={fps}>
      <Video name="Основне відео 29" src={staticFile("clips/29.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 30 · частина 2 · джерело ×1 652 с" from={5472} durationInFrames={180} premountFor={fps}>
      <Video name="Основне відео 30" src={staticFile("clips/30.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 31 · частина 2 · джерело ×1 1255.8 с" from={5652} durationInFrames={180} premountFor={fps}>
      <Video name="Основне відео 31" src={staticFile("clips/31.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 32 · частина 2 · джерело ×1 1261.8 с" from={5832} durationInFrames={180} premountFor={fps}>
      <Video name="Основне відео 32" src={staticFile("clips/32.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 33 · частина 2 · джерело ×1 1285.5 с" from={6012} durationInFrames={183} premountFor={fps}>
      <Video name="Основне відео 33" src={staticFile("clips/33.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 34 · частина 1 · джерело ×1 317.5 с" from={6195} durationInFrames={750} premountFor={fps}>
      <Video name="Основне відео 34" src={staticFile("clips/34.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 35 · частина 2 · джерело ×1 1371.7 с" from={6945} durationInFrames={180} premountFor={fps}>
      <Video name="Основне відео 35" src={staticFile("clips/35.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 36 · частина 1 · джерело ×1 118 с" from={7125} durationInFrames={180} premountFor={fps}>
      <Video name="Основне відео 36" src={staticFile("clips/36.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 37 · частина 2 · джерело ×1 1428 с" from={7305} durationInFrames={150} premountFor={fps}>
      <Video name="Основне відео 37" src={staticFile("clips/37.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 38 · частина 1 · джерело ×1 350 с" from={7455} durationInFrames={105} premountFor={fps}>
      <Video name="Основне відео 38" src={staticFile("clips/38.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="Атрибуція НАБУ/САП" from={0} durationInFrames={6195} premountFor={fps}><SourceMeta/></Sequence>
    <Sequence name="Атрибуція відповіді СБУ" from={6195} durationInFrames={750} premountFor={fps}><SourceMeta reply/></Sequence>
    <Sequence name="Атрибуція фіналу" from={6945} durationInFrames={615} premountFor={fps}><SourceMeta ending/></Sequence>
    <Sequence name="VOICEOVER 1 · авторський текст" from={0} durationInFrames={540} premountFor={fps}>
      <Audio name="VOICEOVER — замініть файл своїм записом" src={staticFile("audio/VOICEOVER.wav")} trimBefore={0} premountFor={fps}/>
      <AuthorText text={"Колцентри, наркотики та ймовірне прикриття силовиків. НАБУ і САП оприлюднили продовження операції «Карфаген». За версією слідства, до нової організації входили щонайменше дванадцять осіб. Що саме їм інкримінують, пояснює керівник підрозділу детективів НАБУ Олександр Абакумов."}/>
    </Sequence>
    <Sequence name="VOICEOVER 2 · авторський текст" from={897} durationInFrames={1113} premountFor={fps}>
      <Audio name="VOICEOVER — замініть файл своїм записом" src={staticFile("audio/VOICEOVER.wav")} trimBefore={897} premountFor={fps}/>
      <AuthorText text={"Це новий епізод операції, про яку антикорупційні органи повідомляли у вересні. Двадцять другого жовтня вони оголосили ще одну підозру в попередньому епізоді. Тепер слідство описує іншу організацію. Її керівником називає «Кримінала», а одним із ключових учасників — «Мексиканця». Українська правда з посиланням на власні джерела пов’язує «Кримінала» з Андрієм Осіповим. Це ідентифікація видання. У матеріалах також фігурують поліцейські «Прайс» і «Консультант» та високопосадовець СБУ «Акім». За версією детективів, їхні зв’язки забезпечували прикриття незаконної діяльності. Як описують платежі в НАБУ?"}/>
    </Sequence>
    <Sequence name="VOICEOVER 3 · авторський текст" from={2154} durationInFrames={906} premountFor={fps}>
      <Audio name="VOICEOVER — замініть файл своїм записом" src={staticFile("audio/VOICEOVER.wav")} trimBefore={2154} premountFor={fps}/>
      <AuthorText text={"За версією слідства, це була система щомісячного прикриття. У фільмі показано листування про офіси, розрахунки та взаємодію з представниками різних правоохоронних органів. Окремо детективи розповідають про спроби повернути вилучену техніку через суд. Повідомлення учасників і коментар слідства потрібно розрізняти: сам запис розмови не є судовим рішенням. А плату з одного офісу не можна називати загальними збитками. Ось як НАБУ оцінює масштаб мережі."}/>
    </Sequence>
    <Sequence name="VOICEOVER 4 · авторський текст" from={3513} durationInFrames={1437} premountFor={fps}>
      <Audio name="VOICEOVER — замініть файл своїм записом" src={staticFile("audio/VOICEOVER.wav")} trimBefore={3513} premountFor={fps}/>
      <AuthorText text={"Розслідування не обмежується колцентрами. НАБУ також заявляє про контакти «Мексиканця» з ФСБ Росії. Незалежного підтвердження цих зв’язків у нас немає. За версією НАБУ, «Мексиканець» пов’язаний із «Хімпромом», а фігуранти обговорювали бізнес мережі U420 та можливість впливати на правила обігу речовин. У фільмі окремо зазначено: описаний план підкупу не вдалося реалізувати. Згадування посадовця в чужій розмові не доводить, що він брав у цьому участь або отримував гроші. Ще один напрям — можливий тиск на журналістів. Слідство оприлюднило обговорення щодо Дениса Бігуса та інших критиків цієї діяльності. Погрози й обговорення планів не слід автоматично називати здійсненими нападами. Детективи також заявляють про підроблення євро та ймовірні насильницькі злочини. Про дії виконавців за кордоном Абакумов говорить так."}/>
    </Sequence>
    <Sequence name="VOICEOVER 5 · авторський текст" from={5112} durationInFrames={1083} premountFor={fps}>
      <Audio name="VOICEOVER — замініть файл своїм записом" src={staticFile("audio/VOICEOVER.wav")} trimBefore={5112} premountFor={fps}/>
      <AuthorText text={"Серед імовірних виконавців слідство називає «Боксера» та «Пашу». За даними НАБУ, їм допомагали витоки службової інформації, доступ до баз та камер системи «Безпечне місто». У фільмі показано документи й листування, які детективи пов’язують із цим прикриттям. Окремо бюро заявляє: на один із криптогаманців із шістнадцятого жовтня дві тисячі двадцять п’ятого до двадцять п’ятого квітня дві тисячі двадцять шостого року надійшло три мільйони сімсот п’ятдесят тисяч USDT. Це сукупні надходження за період, а не місячний прибуток і не доведений розмір усіх збитків."}/>
    </Sequence>
    <Sequence name="VOICEOVER 6 · авторський текст" from={6195} durationInFrames={750} premountFor={fps}>
      <Audio name="VOICEOVER — замініть файл своїм записом" src={staticFile("audio/VOICEOVER.wav")} trimBefore={6195} premountFor={fps}/>
      <AuthorText text={"Є й офіційна реакція Служби безпеки. Четвертого листопада СБУ повідомила про звільнення двох високопосадовців, які стали фігурантами розслідування. Очільник служби Олександр Поклад заявив про сприяння процесуальним діям і необхідність прозорого, об’єктивного та неупередженого розслідування. Це позиція відомства. Кадрове рішення саме по собі не є вироком суду або визнанням усіх звинувачень."}/>
    </Sequence>
    <Sequence name="VOICEOVER 7 · авторський текст" from={6945} durationInFrames={615} premountFor={fps}>
      <Audio name="VOICEOVER — замініть файл своїм записом" src={staticFile("audio/VOICEOVER.wav")} trimBefore={6945} premountFor={fps}/>
      <AuthorText text={"Отже, нині маємо оприлюднені матеріали НАБУ і САП, журналістські повідомлення та реакцію СБУ. Які докази будуть визнані допустимими й чию вину доведуть, має визначити суд. Окремих перевірених відповідей усіх названих фігурантів у зібраних матеріалах немає. Презумпція невинуватості поширюється на кожного. Версія слідства — ще не вирок."}/>
    </Sequence>
    <Sequence name="ТЕКСТОВИЙ АКЦЕНТ 1" from={0} durationInFrames={120} premountFor={fps}><Accent text={"КАРФАГЕН:\nНОВИЙ ЕПІЗОД"} detail={""} mode={"portrait"} duration={120/fps}/></Sequence>
    <Sequence name="ТЕКСТОВИЙ АКЦЕНТ 2" from={120} durationInFrames={120} premountFor={fps}><Accent text={"ЩОНАЙМЕНШЕ\n12 УЧАСНИКІВ"} detail={"За повідомленням НАБУ і САП"} mode={"wide"} duration={120/fps}/></Sequence>
    <Sequence name="ТЕКСТОВИЙ АКЦЕНТ 3" from={240} durationInFrames={120} premountFor={fps}><Accent text={"ЯК ПРАЦЮВАЛО\nПРИКРИТТЯ?"} detail={""} mode={"wide"} duration={120/fps}/></Sequence>
    <Sequence name="ТЕКСТОВИЙ АКЦЕНТ 4" from={897} durationInFrames={300} premountFor={fps}><Accent text={"НОВИЙ ЕПІЗОД\n04.11.2026"} detail={"Вересневі та листопадові матеріали розділяємо"} mode={"wide"} duration={300/fps}/></Sequence>
    <Sequence name="ТЕКСТОВИЙ АКЦЕНТ 5" from={1197} durationInFrames={303} premountFor={fps}><Accent text={"ПОЛІЦІЯ. СБУ.\nПРОКУРАТУРА."} detail={"Твердження слідства про окремих посадовців"} mode={"wide"} duration={303/fps}/></Sequence>
    <Sequence name="ТЕКСТОВИЙ АКЦЕНТ 6" from={1830} durationInFrames={180} premountFor={fps}><Accent text={"ЙМОВІРНЕ\nПРИКРИТТЯ"} detail={""} mode={"portrait"} duration={180/fps}/></Sequence>
    <Sequence name="ТЕКСТОВИЙ АКЦЕНТ 7" from={2334} durationInFrames={186} premountFor={fps}><Accent text={"ЛИСТУВАННЯ\nУ МАТЕРІАЛАХ\nСЛІДСТВА"} detail={""} mode={"wide"} duration={186/fps}/></Sequence>
    <Sequence name="ТЕКСТОВИЙ АКЦЕНТ 8" from={3513} durationInFrames={180} premountFor={fps}><Accent text={"НЕ ЛИШЕ\nКОЛЦЕНТРИ"} detail={""} mode={"wide"} duration={180/fps}/></Sequence>
    <Sequence name="ТЕКСТОВИЙ АКЦЕНТ 9" from={3873} durationInFrames={180} premountFor={fps}><Accent text={"ОБГОВОРЕННЯ ≠\nДОВЕДЕНА УЧАСТЬ"} detail={""} mode={"portrait"} duration={180/fps}/></Sequence>
    <Sequence name="ТЕКСТОВИЙ АКЦЕНТ 10" from={4233} durationInFrames={180} premountFor={fps}><Accent text={"ТИСК\nНА ЖУРНАЛІСТІВ"} detail={"За версією НАБУ"} mode={"wide"} duration={180/fps}/></Sequence>
    <Sequence name="ТЕКСТОВИЙ АКЦЕНТ 11" from={4593} durationInFrames={180} premountFor={fps}><Accent text={"ПІДРОБЛЕНІ ЄВРО:\nЗАЯВА НАБУ"} detail={""} mode={"wide"} duration={180/fps}/></Sequence>
    <Sequence name="ТЕКСТОВИЙ АКЦЕНТ 12" from={4773} durationInFrames={177} premountFor={fps}><Accent text={"НАПАДИ\nЙ ВИКРАДЕННЯ"} detail={"Версія слідства"} mode={"wide"} duration={177/fps}/></Sequence>
    <Sequence name="ТЕКСТОВИЙ АКЦЕНТ 13" from={5112} durationInFrames={180} premountFor={fps}><Accent text={"ВИТОКИ СЛУЖБОВОЇ\nІНФОРМАЦІЇ"} detail={""} mode={"portrait"} duration={180/fps}/></Sequence>
    <Sequence name="ТЕКСТОВИЙ АКЦЕНТ 14" from={5652} durationInFrames={360} premountFor={fps}><Accent text={"3,75 МЛН USDT"} detail={"16.10.2025–25.04.2026\nНадходження на один гаманець, за даними НАБУ"} mode={"portrait"} duration={360/fps}/></Sequence>
    <Sequence name="ТЕКСТОВИЙ АКЦЕНТ 15" from={6195} durationInFrames={240} premountFor={fps}><Accent text={"РЕАКЦІЯ СБУ"} detail={"Повідомлено про звільнення\nдвох високопосадовців із займаних посад."} mode={"document"} duration={240/fps}/></Sequence>
    <Sequence name="ТЕКСТОВИЙ АКЦЕНТ 16" from={6435} durationInFrames={255} premountFor={fps}><Accent text={"ПОЗИЦІЯ ВІДОМСТВА"} detail={"СБУ заявляє про підтримку\nта сприяння процесуальним діям."} mode={"document"} duration={255/fps}/></Sequence>
    <Sequence name="ТЕКСТОВИЙ АКЦЕНТ 17" from={6690} durationInFrames={255} premountFor={fps}><Accent text={"ОБ’ЄКТИВНЕ\nРОЗСЛІДУВАННЯ"} detail={"СБУ очікує прозорого, об’єктивного\nта неупередженого розслідування.\nКадрове рішення не є вироком."} mode={"document"} duration={255/fps}/></Sequence>
    <Sequence name="ТЕКСТОВИЙ АКЦЕНТ 18" from={6945} durationInFrames={360} premountFor={fps}><Accent text={"РІШЕННЯ —\nЗА СУДОМ"} detail={""} mode={"portrait"} duration={360/fps}/></Sequence>
    <Sequence name="ТЕКСТОВИЙ АКЦЕНТ 19" from={7305} durationInFrames={255} premountFor={fps}><Accent text={"ПРЕЗУМПЦІЯ\nНЕВИНУВАТОСТІ"} detail={""} mode={"portrait"} duration={255/fps}/></Sequence>
  </AbsoluteFill>;
};
export const Root=()=> <Composition id="Karfagen" component={Karfagen} durationInFrames={7560} fps={30} width={1080} height={1920}/>;
