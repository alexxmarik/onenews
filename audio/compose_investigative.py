from pathlib import Path
import numpy as np, wave
R=Path(__file__).parent
sr=48000; duration=58; n=sr*duration
mix=np.zeros((n,2),dtype=np.float64)
rng=np.random.default_rng(4258)
def hz(m):return 440*2**((m-69)/12)
def add(sound,start,pan=0,amp=1):
 i=round(start*sr)
 if i<0:return
 count=min(len(sound),n-i)
 if count<=0:return
 if sound.ndim==1:
  mix[i:i+count,0]+=sound[:count]*amp*np.sqrt((1-pan)/2)
  mix[i:i+count,1]+=sound[:count]*amp*np.sqrt((1+pan)/2)
 else:mix[i:i+count]+=sound[:count]*amp

def pad(notes,start,length,amp):
 t=np.arange(round(length*sr))/sr
 env=np.minimum(t/1.45,1)*np.minimum((length-t)/1.6,1)
 env=np.clip(env,0,1)**1.3
 out=np.zeros((len(t),2))
 for j,note in enumerate(notes):
  f=hz(note);phase=rng.uniform(0,2*np.pi)
  for ch in range(2):
   detune=(-1 if ch==0 else 1)*(0.0015+0.0002*j)
   for h in [1,2,3,4,5]:
    out[:,ch]+=(np.sin(2*np.pi*f*(1+detune)*h*t+phase)/(h**2.25))*(0.93+0.07*np.sin(2*np.pi*.13*t+j))
 out*=env[:,None]*amp/len(notes)
 add(out,start)

def pluck(note,start,amp,pan):
 t=np.arange(round(2.1*sr))/sr;f=hz(note)
 env=(1-np.exp(-t*65))*np.exp(-t*3.2)
 a=(np.sin(2*np.pi*f*t)+.18*np.sin(2*np.pi*2*f*t)*np.exp(-t*2)+.055*np.sin(2*np.pi*3*f*t))*env
 add(a,start,pan,amp)
 for d,g in [(.34,.16),(.68,.075),(1.02,.035)]:add(a,start+d,-pan,amp*g)

def bass(note,start,amp):
 t=np.arange(round(.64*sr))/sr
 env=(1-np.exp(-t*48))*np.exp(-t*5.4)
 a=(np.sin(2*np.pi*hz(note)*t)+.12*np.sin(2*np.pi*hz(note)*2*t))*env
 add(a,start,0,amp)
beat=60/88;bar=beat*4
chords=[[52,59,62,66],[52,59,62,66],[48,55,59,64],[48,55,59,64],[45,52,59,60],[45,52,59,60],[47,54,57,64],[47,54,57,63]]
for b in range(22):
 start=b*bar
 chord=chords[b%8]
 if start>=51:chord=[52,59,62,66]
 level=.22 if start<6 else (.27 if start<39 else .31)
 pad(chord,start,min(5.7,duration-start),level)
 if start>=5 and start<53:
  for j in range(4):bass(chord[0]-12,start+j*beat,.15 if start<39 else .19)
  pattern=[0,2,1,3,2,1,3,1]
  for j,k in enumerate(pattern):
   # Sparse, quiet tonal movement; no voices, noises or incident-like sound effects.
   if b%2 and j in [1,5]:continue
   pluck(chord[k]+12,start+j*beat/2,.037 if start<39 else .052,(-.4 if j%2 else .4))
# Gentle ending in E, with a distinct resolution and natural tail.
pad([40,52,59,64,66],52,6,.24)
pluck(76,52.25,.05,-.2);pluck(71,53.6,.025,.25)
t=np.arange(n)/sr
fade=np.minimum(t/1.7,1)*np.minimum((duration-t)/3.5,1)
mix*=np.clip(fade,0,1)[:,None]
# Remove DC and retain ample headroom before final loudness mastering.
mix-=mix.mean(axis=0);mix/=max(1,np.max(np.abs(mix))/.72)
with wave.open(str(R/'ONE_NEWS_Investigative_58s-source.wav'),'wb') as w:
 w.setnchannels(2);w.setsampwidth(2);w.setframerate(sr);w.writeframes((mix*32767).astype('<i2').tobytes())
(R/'README.txt').write_text('Original instrumental background composed procedurally for ONE NEWS. 58 seconds. No sampled recordings, vocals, speech, sirens or gunshot effects. Source synthesis script included. Tempo 88 BPM. Add under your own narration and adjust volume in CapCut.\n')
print('composed',duration,'seconds')
