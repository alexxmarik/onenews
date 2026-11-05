import React from 'react';
import {AbsoluteFill,Composition,Sequence,staticFile,useCurrentFrame,useVideoConfig,interpolate} from 'remotion';
import {Video,Audio} from '@remotion/media';
import {loadFont} from '@remotion/fonts';
import type {Caption} from '@remotion/captions';
loadFont({family:'News',url:staticFile('DejaVuSans.ttf'),weight:'400'});
loadFont({family:'News',url:staticFile('DejaVuSans-Bold.ttf'),weight:'700'});
const Note=({text}:{text:string})=>null;
const Captions=({captions,original=false}:{captions:Caption[];original?:boolean})=>{
 const frame=useCurrentFrame();const {fps}=useVideoConfig();const t=frame/fps*1000;const c=captions.find(c=>c.startMs<=t&&t<c.endMs);
 return <><div style={{position:'absolute',left:78,top:1405,fontSize:29,fontWeight:700,color:'#ff877c'}}>{original?'ОРИГІНАЛЬНИЙ ЗВУК · НАБУ / САП':'КОМЕНТАР РЕДАКЦІЇ'}</div>{c&&<div style={{position:'absolute',left:78,width:924,bottom:225,textAlign:'center',fontSize:52,lineHeight:1.22,fontWeight:original?700:400,color:'white',whiteSpace:'pre-line',textShadow:'0 1px 3px #000'}}>{c.text}</div>}</>;
};
const Heading=({text,duration}:{text:string;duration:number})=>{
 const f=useCurrentFrame();return <div style={{position:'absolute',left:72,top:130,width:936,fontSize:58,fontWeight:700,lineHeight:1.2,whiteSpace:'pre-line',color:'white',opacity:interpolate(f,[0,3,duration-3,duration],[0,1,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}}>{text}</div>;
};
const Meta=({text,top=65}:{text:string;top?:number})=><div style={{position:'absolute',left:72,top,fontSize:27,color:'#e8ddd7'}}>{text}</div>;
export const Karfagen=()=>{
 const {fps}=useVideoConfig();
 return <AbsoluteFill style={{background:'#070c14',fontFamily:'News, sans-serif'}}>
    <Sequence name="ВІДЕО 00 · ч.2 ×1 494.5 с" from={0} durationInFrames={135} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/00.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
      <Audio name="ОРИГІНАЛ 1 · нормалізований" src={staticFile("audio/original-1.wav")} premountFor={fps}/>
      <Captions original captions={[{"text": "Це був не поодинокий епізод,\nа системний бізнес на\nнасильстві.", "startMs": 0, "endMs": 4500, "timestampMs": null, "confidence": null}]}/>
    </Sequence>
    <Sequence name="ВІДЕО 01 · ч.1 ×1 50 с" from={135} durationInFrames={105} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/01.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 02 · ч.2 ×1 58 с" from={240} durationInFrames={120} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/02.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 03 · ч.1 ×1 135 с" from={360} durationInFrames={180} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/03.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 04 · ч.1 ×1 6.3 с" from={540} durationInFrames={357} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/04.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
      <Audio name="ОРИГІНАЛ 2 · нормалізований" src={staticFile("audio/original-2.wav")} premountFor={fps}/>
      <Captions original captions={[{"text": "НАБУ та САП викрили\nзлочинну організацію,", "startMs": 0, "endMs": 4000, "timestampMs": null, "confidence": null}, {"text": "що спеціалізувалась на\nшахрайстві, так званих\nколцентрах", "startMs": 4000, "endMs": 8800, "timestampMs": null, "confidence": null}, {"text": "і розповсюдженні\nнаркотичних засобів.", "startMs": 8800, "endMs": 11900, "timestampMs": null, "confidence": null}]}/>
    </Sequence>
    <Sequence name="ВІДЕО 05 · ч.1 ×1 68.5 с" from={897} durationInFrames={150} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/05.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 06 · ч.1 ×1 80 с" from={1047} durationInFrames={150} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/06.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 07 · ч.1 ×1 96 с" from={1197} durationInFrames={153} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/07.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 08 · ч.1 ×1 108 с" from={1350} durationInFrames={150} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/08.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 09 · ч.1 ×1 155 с" from={1500} durationInFrames={150} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/09.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 10 · ч.1 ×1 525 с" from={1650} durationInFrames={180} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/10.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 11 · ч.1 ×1 480 с" from={1830} durationInFrames={180} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/11.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 12 · ч.1 ×1 504.1 с" from={2010} durationInFrames={537} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/12.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
      <Audio name="ОРИГІНАЛ 3 · нормалізований" src={staticFile("audio/original-3.wav")} premountFor={fps}/>
      <Captions original captions={[{"text": "Стандартна сума становила\n7 тисяч доларів в місяць\nз одного колцентру.", "startMs": 0, "endMs": 4800, "timestampMs": null, "confidence": null}, {"text": "На початку місяця передавав\nадреси колцентрів з їхніми\nідентифікаторами,", "startMs": 4800, "endMs": 10400, "timestampMs": null, "confidence": null}, {"text": "а до п’ятого числа сплачував\nзазначену суму в\nкриптовалюті", "startMs": 10400, "endMs": 14550, "timestampMs": null, "confidence": null}, {"text": "на заздалегідь наданий\nправоохоронцями гаманець.", "startMs": 14550, "endMs": 17900, "timestampMs": null, "confidence": null}]}/>
    </Sequence>
    <Sequence name="ВІДЕО 13 · ч.1 ×1 460 с" from={2547} durationInFrames={153} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/13.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 14 · ч.1 ×1 685 с" from={2700} durationInFrames={180} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/14.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 15 · ч.1 ×1 450 с" from={2880} durationInFrames={180} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/15.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 16 · ч.1 ×1 539.4 с" from={3060} durationInFrames={453} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/16.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
      <Audio name="ОРИГІНАЛ 4 · нормалізований" src={staticFile("audio/original-4.wav")} premountFor={fps}/>
      <Captions original captions={[{"text": "Як з’ясувало слідство,", "startMs": 0, "endMs": 2000, "timestampMs": null, "confidence": null}, {"text": "учасники злочинної\nорганізації", "startMs": 2000, "endMs": 4300, "timestampMs": null, "confidence": null}, {"text": "координували діяльність\nщонайменше 52 колцентрів.", "startMs": 4300, "endMs": 7500, "timestampMs": null, "confidence": null}, {"text": "В цих офісах працювало\nщонайменше 2700 людей,", "startMs": 7500, "endMs": 11600, "timestampMs": null, "confidence": null}, {"text": "які щодня ошукували\nгромадян України та інших\nкраїн.", "startMs": 11600, "endMs": 15100, "timestampMs": null, "confidence": null}]}/>
    </Sequence>
    <Sequence name="ВІДЕО 17 · ч.1 ×1 1051 с" from={3513} durationInFrames={180} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/17.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 18 · ч.1 ×1 1063 с" from={3693} durationInFrames={180} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/18.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 19 · ч.1 ×1 1260 с" from={3873} durationInFrames={180} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/19.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 20 · ч.1 ×1 1357 с" from={4053} durationInFrames={180} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/20.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 21 · ч.1 ×1 1377 с" from={4233} durationInFrames={180} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/21.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 22 · ч.1 ×1 1440 с" from={4413} durationInFrames={180} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/22.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 23 · ч.2 ×1 70 с" from={4593} durationInFrames={180} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/23.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 24 · ч.2 ×1 235 с" from={4773} durationInFrames={177} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/24.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 25 · ч.2 ×1 511.8 с" from={4950} durationInFrames={162} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/25.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
      <Audio name="ОРИГІНАЛ 5 · нормалізований" src={staticFile("audio/original-5.wav")} premountFor={fps}/>
      <Captions original captions={[{"text": "Група виконувала подібні\nзамовлення", "startMs": 0, "endMs": 2800, "timestampMs": null, "confidence": null}, {"text": "навіть за кордоном, зокрема\nу Відні.", "startMs": 2800, "endMs": 5400, "timestampMs": null, "confidence": null}]}/>
    </Sequence>
    <Sequence name="ВІДЕО 26 · ч.2 ×1 592 с" from={5112} durationInFrames={225} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/26.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 27 · ч.2 ×1 579.1 с" from={5337} durationInFrames={375} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/27.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
      <Audio name="ОРИГІНАЛ 6 · нормалізований" src={staticFile("audio/original-6.wav")} premountFor={fps}/>
      <Captions original captions={[{"text": "Відчуття безкарності\nзабезпечував постійний витік\nслужбової інформації.", "startMs": 0, "endMs": 4600, "timestampMs": null, "confidence": null}, {"text": "Щойно потерпілий звертався\nдо поліції,", "startMs": 4600, "endMs": 6900, "timestampMs": null, "confidence": null}, {"text": "замовники вже знали, хто\nрозслідує справу,", "startMs": 6900, "endMs": 9300, "timestampMs": null, "confidence": null}, {"text": "і запевняли спільників, що\nситуація під контролем.", "startMs": 9300, "endMs": 12500, "timestampMs": null, "confidence": null}]}/>
    </Sequence>
    <Sequence name="ВІДЕО 28 · ч.2 ×1 1255.8 с" from={5712} durationInFrames={120} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/28.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 29 · ч.2 ×1 1261.8 с" from={5832} durationInFrames={180} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/29.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 30 · ч.2 ×1 1285.5 с" from={6012} durationInFrames={183} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/30.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 31 · ч.1 ×1 486.2 с" from={6195} durationInFrames={150} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/31.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 32 · ч.1 ×1 491.4 с" from={6345} durationInFrames={150} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/32.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 33 · ч.1 ×1 534.1 с" from={6495} durationInFrames={150} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/33.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 34 · ч.2 ×1 684 с" from={6645} durationInFrames={150} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/34.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 35 · ч.2 ×1 708 с" from={6795} durationInFrames={150} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/35.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 36 · ч.2 ×1 1371.7 с" from={6945} durationInFrames={180} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/36.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 37 · ч.1 ×1 118 с" from={7125} durationInFrames={180} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/37.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 38 · ч.2 ×1 1428 с" from={7305} durationInFrames={150} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/38.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="ВІДЕО 39 · ч.1 ×1 350 с" from={7455} durationInFrames={105} premountFor={fps}>
      <Video name="Чистий відеофрагмент" src={staticFile("clips/39.mp4")} muted premountFor={fps} style={{width:"100%",height:"100%"}}/>
    </Sequence>
    <Sequence name="АВТОР 1 · текст і майбутній VOICEOVER" from={135} durationInFrames={405} premountFor={fps}>
      <Audio name="VOICEOVER · замініть WAV своїм записом" src={staticFile("audio/VOICEOVER.wav")} trimBefore={135} premountFor={fps}/>
      <Note text={"Колцентри, наркотики та ймовірне прикриття силовиків. НАБУ і САП оприлюднили продовження операції «Карфаген». За версією слідства, до нової організації входили щонайменше дванадцять осіб. Що саме їм інкримінують, пояснює керівник підрозділу детективів НАБУ Олександр Абакумов."}/>
      <Captions captions={[{"text": "Колцентри, наркотики та\nймовірне прикриття силовиків.", "startMs": 0, "endMs": 2432, "timestampMs": null, "confidence": null}, {"text": "НАБУ і САП оприлюднили\nпродовження операції\n«Карфаген».", "startMs": 2432, "endMs": 5242, "timestampMs": null, "confidence": null}, {"text": "За версією слідства, до нової\nорганізації входили\nщонайменше дванадцять осіб.", "startMs": 5242, "endMs": 9182, "timestampMs": null, "confidence": null}, {"text": "Що саме їм інкримінують,\nпояснює керівник", "startMs": 9182, "endMs": 11445, "timestampMs": null, "confidence": null}, {"text": "підрозділу детективів НАБУ\nОлександр Абакумов.", "startMs": 11445, "endMs": 13500, "timestampMs": null, "confidence": null}]}/>
    </Sequence>
    <Sequence name="АВТОР 2 · текст і майбутній VOICEOVER" from={897} durationInFrames={1113} premountFor={fps}>
      <Audio name="VOICEOVER · замініть WAV своїм записом" src={staticFile("audio/VOICEOVER.wav")} trimBefore={897} premountFor={fps}/>
      <Note text={"Це новий епізод операції, про яку антикорупційні органи повідомляли у вересні. Двадцять другого жовтня вони оголосили ще одну підозру в попередньому епізоді. Тепер слідство описує іншу організацію. Її керівником називає «Кримінала», а одним із ключових учасників — «Мексиканця». Українська правда з посиланням на власні джерела пов’язує «Кримінала» з Андрієм Осіповим. Це ідентифікація видання. У матеріалах також фігурують поліцейські «Прайс» і «Консультант» та високопосадовець СБУ «Акім». За версією детективів, їхні зв’язки забезпечували прикриття незаконної діяльності. Як описують платежі в НАБУ?"}/>
      <Captions captions={[{"text": "Це новий епізод операції, про\nяку антикорупційні органи\nповідомляли у вересні.", "startMs": 0, "endMs": 5115, "timestampMs": null, "confidence": null}, {"text": "Двадцять другого жовтня вони\nоголосили ще одну підозру в\nпопередньому епізоді.", "startMs": 5115, "endMs": 10230, "timestampMs": null, "confidence": null}, {"text": "Тепер слідство описує іншу\nорганізацію.", "startMs": 10230, "endMs": 12664, "timestampMs": null, "confidence": null}, {"text": "Її керівником називає\n«Кримінала», а одним із\nключових учасників —", "startMs": 12664, "endMs": 17132, "timestampMs": null, "confidence": null}, {"text": "«Мексиканця».", "startMs": 17132, "endMs": 17779, "timestampMs": null, "confidence": null}, {"text": "Українська правда з посиланням\nна власні джерела пов’язує\n«Кримінала» з Андрієм Осіповим.", "startMs": 17779, "endMs": 23341, "timestampMs": null, "confidence": null}, {"text": "Це ідентифікація видання.", "startMs": 23341, "endMs": 24882, "timestampMs": null, "confidence": null}, {"text": "У матеріалах також фігурують\nполіцейські «Прайс» і\n«Консультант» та", "startMs": 24882, "endMs": 28903, "timestampMs": null, "confidence": null}, {"text": "високопосадовець СБУ «Акім».", "startMs": 28903, "endMs": 30444, "timestampMs": null, "confidence": null}, {"text": "За версією детективів, їхні\nзв’язки забезпечували\nприкриття незаконної", "startMs": 30444, "endMs": 34018, "timestampMs": null, "confidence": null}, {"text": "діяльності.", "startMs": 34018, "endMs": 34665, "timestampMs": null, "confidence": null}, {"text": "Як описують платежі в НАБУ?", "startMs": 34665, "endMs": 37100, "timestampMs": null, "confidence": null}]}/>
    </Sequence>
    <Sequence name="АВТОР 3 · текст і майбутній VOICEOVER" from={2547} durationInFrames={513} premountFor={fps}>
      <Audio name="VOICEOVER · замініть WAV своїм записом" src={staticFile("audio/VOICEOVER.wav")} trimBefore={2547} premountFor={fps}/>
      <Note text={"Це пояснення слідства, а не рішення суду. Окремий платіж не можна називати загальними збитками. У фільмі також показано листування про повернення вилученої техніки через суд. А ось як НАБУ оцінює масштаб мережі."}/>
      <Captions captions={[{"text": "Це пояснення слідства, а не\nрішення суду.", "startMs": 0, "endMs": 3769, "timestampMs": null, "confidence": null}, {"text": "Окремий платіж не можна\nназивати загальними збитками.", "startMs": 3769, "endMs": 7538, "timestampMs": null, "confidence": null}, {"text": "У фільмі також показано\nлистування про повернення\nвилученої техніки через суд.", "startMs": 7538, "endMs": 13331, "timestampMs": null, "confidence": null}, {"text": "А ось як НАБУ оцінює масштаб\nмережі.", "startMs": 13331, "endMs": 17100, "timestampMs": null, "confidence": null}]}/>
    </Sequence>
    <Sequence name="АВТОР 4 · текст і майбутній VOICEOVER" from={3513} durationInFrames={1437} premountFor={fps}>
      <Audio name="VOICEOVER · замініть WAV своїм записом" src={staticFile("audio/VOICEOVER.wav")} trimBefore={3513} premountFor={fps}/>
      <Note text={"Розслідування не обмежується колцентрами. НАБУ також заявляє про контакти «Мексиканця» з ФСБ Росії. Незалежного підтвердження цих зв’язків у нас немає. За версією НАБУ, «Мексиканець» пов’язаний із «Хімпромом», а фігуранти обговорювали бізнес мережі U420 та можливість впливати на правила обігу речовин. У фільмі окремо зазначено: описаний план підкупу не вдалося реалізувати. Згадування посадовця в чужій розмові не доводить, що він брав у цьому участь або отримував гроші. Ще один напрям — можливий тиск на журналістів. Слідство оприлюднило обговорення щодо Дениса Бігуса та інших критиків цієї діяльності. Погрози й обговорення планів не слід автоматично називати здійсненими нападами. Детективи також заявляють про підроблення євро та ймовірні насильницькі злочини. Серед імовірних виконавців слідство називає «Боксера» та «Пашу». Про дії за кордоном Абакумов говорить так."}/>
      <Captions captions={[{"text": "Розслідування не обмежується\nколцентрами.", "startMs": 0, "endMs": 1700, "timestampMs": null, "confidence": null}, {"text": "НАБУ також заявляє про\nконтакти «Мексиканця» з ФСБ\nРосії.", "startMs": 1700, "endMs": 5309, "timestampMs": null, "confidence": null}, {"text": "Незалежного підтвердження\nцих зв’язків у нас немає.", "startMs": 5309, "endMs": 8155, "timestampMs": null, "confidence": null}, {"text": "За версією НАБУ, «Мексиканець»\nпов’язаний із «Хімпромом», а\nфігуранти обговорювали бізнес", "startMs": 8155, "endMs": 12357, "timestampMs": null, "confidence": null}, {"text": "мережі U420 та можливість\nвпливати на правила обігу\nречовин.", "startMs": 12357, "endMs": 15967, "timestampMs": null, "confidence": null}, {"text": "У фільмі окремо зазначено:\nописаний план підкупу не\nвдалося реалізувати.", "startMs": 15967, "endMs": 19958, "timestampMs": null, "confidence": null}, {"text": "Згадування посадовця в чужій\nрозмові не доводить, що він брав\nу цьому", "startMs": 19958, "endMs": 24542, "timestampMs": null, "confidence": null}, {"text": "участь або отримував гроші.", "startMs": 24542, "endMs": 26242, "timestampMs": null, "confidence": null}, {"text": "Ще один напрям — можливий\nтиск на журналістів.", "startMs": 26242, "endMs": 29470, "timestampMs": null, "confidence": null}, {"text": "Слідство оприлюднило\nобговорення щодо Дениса Бігуса\nта інших критиків цієї діяльності.", "startMs": 29470, "endMs": 33843, "timestampMs": null, "confidence": null}, {"text": "Погрози й обговорення планів не\nслід автоматично називати\nздійсненими нападами.", "startMs": 33843, "endMs": 37835, "timestampMs": null, "confidence": null}, {"text": "Детективи також заявляють про\nпідроблення євро та ймовірні\nнасильницькі злочини.", "startMs": 37835, "endMs": 41827, "timestampMs": null, "confidence": null}, {"text": "Серед імовірних виконавців\nслідство називає «Боксера» та\n«Пашу».", "startMs": 41827, "endMs": 45054, "timestampMs": null, "confidence": null}, {"text": "Про дії за кордоном Абакумов\nговорить так.", "startMs": 45054, "endMs": 47900, "timestampMs": null, "confidence": null}]}/>
    </Sequence>
    <Sequence name="АВТОР 5 · текст і майбутній VOICEOVER" from={5112} durationInFrames={225} premountFor={fps}>
      <Audio name="VOICEOVER · замініть WAV своїм записом" src={staticFile("audio/VOICEOVER.wav")} trimBefore={5112} premountFor={fps}/>
      <Note text={"Що давало змогу уникати викриття? У фільмі НАБУ пояснюють: йдеться про постійний витік службової інформації."}/>
      <Captions captions={[{"text": "Що давало змогу уникати\nвикриття?", "startMs": 0, "endMs": 2571, "timestampMs": null, "confidence": null}, {"text": "У фільмі НАБУ пояснюють:\nйдеться про постійний витік\nслужбової інформації.", "startMs": 2571, "endMs": 7500, "timestampMs": null, "confidence": null}]}/>
    </Sequence>
    <Sequence name="АВТОР 6 · текст і майбутній VOICEOVER" from={5712} durationInFrames={483} premountFor={fps}>
      <Audio name="VOICEOVER · замініть WAV своїм записом" src={staticFile("audio/VOICEOVER.wav")} trimBefore={5712} premountFor={fps}/>
      <Note text={"НАБУ також заявляє про надходження трьох мільйонів семисот п’ятдесяти тисяч USDT на один гаманець із жовтня 2025-го до квітня 2026-го. Це загальна сума за період, а не місячний прибуток або всі збитки."}/>
      <Captions captions={[{"text": "НАБУ також заявляє про\nнадходження трьох мільйонів\nсемисот п’ятдесяти тисяч USDT", "startMs": 0, "endMs": 5383, "timestampMs": null, "confidence": null}, {"text": "на один гаманець із жовтня\n2025-го до квітня 2026-го.", "startMs": 5383, "endMs": 10007, "timestampMs": null, "confidence": null}, {"text": "Це загальна сума за період, а не\nмісячний прибуток або всі\nзбитки.", "startMs": 10007, "endMs": 16100, "timestampMs": null, "confidence": null}]}/>
    </Sequence>
    <Sequence name="АВТОР 7 · текст і майбутній VOICEOVER" from={6195} durationInFrames={750} premountFor={fps}>
      <Audio name="VOICEOVER · замініть WAV своїм записом" src={staticFile("audio/VOICEOVER.wav")} trimBefore={6195} premountFor={fps}/>
      <Note text={"Є й офіційна реакція Служби безпеки. Четвертого листопада СБУ повідомила про звільнення двох високопосадовців, які стали фігурантами розслідування. Очільник служби Олександр Поклад заявив про сприяння процесуальним діям і необхідність прозорого, об’єктивного та неупередженого розслідування. Це позиція відомства. Кадрове рішення саме по собі не є вироком суду або визнанням усіх звинувачень."}/>
      <Captions captions={[{"text": "Є й офіційна реакція Служби\nбезпеки.", "startMs": 0, "endMs": 3086, "timestampMs": null, "confidence": null}, {"text": "Четвертого листопада СБУ\nповідомила про звільнення двох\nвисокопосадовців, які стали", "startMs": 3086, "endMs": 7871, "timestampMs": null, "confidence": null}, {"text": "фігурантами розслідування.", "startMs": 7871, "endMs": 9043, "timestampMs": null, "confidence": null}, {"text": "Очільник служби Олександр\nПоклад заявив про сприяння\nпроцесуальним діям і", "startMs": 9043, "endMs": 13828, "timestampMs": null, "confidence": null}, {"text": "необхідність прозорого,\nоб’єктивного та неупередженого\nрозслідування.", "startMs": 13828, "endMs": 16914, "timestampMs": null, "confidence": null}, {"text": "Це позиція відомства.", "startMs": 16914, "endMs": 18565, "timestampMs": null, "confidence": null}, {"text": "Кадрове рішення саме по собі не\nє вироком", "startMs": 18565, "endMs": 22392, "timestampMs": null, "confidence": null}, {"text": "суду або визнанням усіх\nзвинувачень.", "startMs": 22392, "endMs": 25000, "timestampMs": null, "confidence": null}]}/>
    </Sequence>
    <Sequence name="АВТОР 8 · текст і майбутній VOICEOVER" from={6945} durationInFrames={615} premountFor={fps}>
      <Audio name="VOICEOVER · замініть WAV своїм записом" src={staticFile("audio/VOICEOVER.wav")} trimBefore={6945} premountFor={fps}/>
      <Note text={"Отже, нині маємо оприлюднені матеріали НАБУ і САП, журналістські повідомлення та реакцію СБУ. Які докази будуть визнані допустимими й чию вину доведуть, має визначити суд. Окремих перевірених відповідей усіх названих фігурантів у зібраних матеріалах немає. Презумпція невинуватості поширюється на кожного. Версія слідства — ще не вирок."}/>
      <Captions captions={[{"text": "Отже, нині маємо оприлюднені\nматеріали НАБУ і САП,\nжурналістські повідомлення та", "startMs": 0, "endMs": 4674, "timestampMs": null, "confidence": null}, {"text": "реакцію СБУ.", "startMs": 4674, "endMs": 5715, "timestampMs": null, "confidence": null}, {"text": "Які докази будуть визнані\nдопустимими й чию вину\nдоведуть, має визначити суд.", "startMs": 5715, "endMs": 11004, "timestampMs": null, "confidence": null}, {"text": "Окремих перевірених відповідей\nусіх названих фігурантів у\nзібраних матеріалах немає.", "startMs": 11004, "endMs": 15444, "timestampMs": null, "confidence": null}, {"text": "Презумпція невинуватості\nпоширюється на кожного.", "startMs": 15444, "endMs": 17760, "timestampMs": null, "confidence": null}, {"text": "Версія слідства — ще не вирок.", "startMs": 17760, "endMs": 20500, "timestampMs": null, "confidence": null}]}/>
    </Sequence>
    <Sequence name="Заголовок: 0" from={0} durationInFrames={135} premountFor={fps}><Heading text={"НАБУ: ОРИГІНАЛЬНА\nРЕПЛІКА"} duration={135}/></Sequence>
    <Sequence name="Заголовок: 4.5" from={135} durationInFrames={225} premountFor={fps}><Heading text={"КАРФАГЕН:\nПРОДОВЖЕННЯ"} duration={225}/></Sequence>
    <Sequence name="Заголовок: 29.9" from={897} durationInFrames={300} premountFor={fps}><Heading text={"НОВИЙ ЕПІЗОД ·\n04.11.2026"} duration={300}/></Sequence>
    <Sequence name="Заголовок: 39.9" from={1197} durationInFrames={303} premountFor={fps}><Heading text={"СИЛОВИКИ: ЗАЯВА НАБУ"} duration={303}/></Sequence>
    <Sequence name="Заголовок: 67" from={2010} durationInFrames={537} premountFor={fps}><Heading text={"ПЛАТЕЖІ: ВЕРСІЯ\nСЛІДСТВА"} duration={537}/></Sequence>
    <Sequence name="Заголовок: 102" from={3060} durationInFrames={453} premountFor={fps}><Heading text={"МАСШТАБ МЕРЕЖІ: ДАНІ\nНАБУ"} duration={453}/></Sequence>
    <Sequence name="Заголовок: 117.1" from={3513} durationInFrames={360} premountFor={fps}><Heading text={"НЕ ЛИШЕ КОЛЦЕНТРИ"} duration={360}/></Sequence>
    <Sequence name="Заголовок: 129.1" from={3873} durationInFrames={360} premountFor={fps}><Heading text={"ЗГАДКА НЕ ДОВОДИТЬ\nУЧАСТІ"} duration={360}/></Sequence>
    <Sequence name="Заголовок: 141.1" from={4233} durationInFrames={360} premountFor={fps}><Heading text={"ТИСК НА ЖУРНАЛІСТІВ"} duration={360}/></Sequence>
    <Sequence name="Заголовок: 153.1" from={4593} durationInFrames={357} premountFor={fps}><Heading text={"ПІДРОБЛЕНІ ЄВРО ТА\nНАСИЛЬСТВО"} duration={357}/></Sequence>
    <Sequence name="Заголовок: 165" from={4950} durationInFrames={162} premountFor={fps}><Heading text={"ТВЕРДЖЕННЯ ПРО ДІЇ ЗА\nКОРДОНОМ"} duration={162}/></Sequence>
    <Sequence name="Заголовок: 170.4" from={5112} durationInFrames={600} premountFor={fps}><Heading text={"ВИТОКИ СЛУЖБОВОЇ\nІНФОРМАЦІЇ"} duration={600}/></Sequence>
    <Sequence name="Заголовок: 190.4" from={5712} durationInFrames={483} premountFor={fps}><Heading text={"3,75 МЛН USDT · ЗА\nДАНИМИ НАБУ"} duration={483}/></Sequence>
    <Sequence name="Заголовок: 206.5" from={6195} durationInFrames={750} premountFor={fps}><Heading text={"ПИСЬМОВА РЕАКЦІЯ СБУ"} duration={750}/></Sequence>
    <Sequence name="Заголовок: 231.5" from={6945} durationInFrames={615} premountFor={fps}><Heading text={"РІШЕННЯ — ЗА СУДОМ"} duration={615}/></Sequence>
    <Sequence name="Джерело відео" from={0} durationInFrames={6195} premountFor={fps}><Meta text="04.11.2026 · Матеріали офіційного фільму НАБУ / САП"/></Sequence>
    <Sequence name="Письмова позиція СБУ" from={6195} durationInFrames={750} premountFor={fps}><Meta text="Позиція СБУ — письмове повідомлення від 04.11.2026"/></Sequence>
    <Sequence name="Фінал" from={6945} durationInFrames={615} premountFor={fps}><Meta text="04.11.2026 · Розслідування триває"/></Sequence>
    <Sequence name="Період надходжень USDT" from={5712} durationInFrames={483} premountFor={fps}><Meta text="16.10.2025–25.04.2026 · Надходження на один гаманець" top={280}/></Sequence>
  </AbsoluteFill>;
};
export const Root=()=> <Composition id="KarfagenV2" component={Karfagen} durationInFrames={7560} fps={30} width={1080} height={1920}/>;
