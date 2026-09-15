
    document.addEventListener('DOMContentLoaded', () => {
      const apiKey = ""; // Canvas auto-inject — jangan hardcode

      // === i18n engine ===
      const T = {
        en: {
          'nav.voiceover':'Voice Over','nav.dialog':'Dialog','nav.longform':'Long-form','nav.library':'Voice Library','nav.history':'History',
          'common.ok':'OK','common.cancel':'Cancel','common.iosSaveHint':'Long-press the audio to save it.',
          'vo.title':'Voice Over','vo.textPh':'Type or paste your script here...','vo.director':'Director (style instruction)','vo.directorPh':'e.g. Read calmly and slowly','vo.voice':'Voice','vo.generate':'Generate','vo.save':'Save','vo.ready':'Ready.','vo.generating':'Generating audio...','vo.errEmpty':'Please enter some text first.',
          'preset.news':'News Anchor','preset.story':'Storyteller','preset.cheerful':'Cheerful','preset.sad':'Sad','preset.calm':'Calm','preset.energetic':'Energetic','preset.asmr':'ASMR','preset.ads':'Hard-Sell Ad','preset.friendly':'Friendly','preset.firm':'Firm',
          'lib.title':'Voice Library','lib.all':'All','lib.female':'Female','lib.male':'Male','lib.fav':'Favorites','lib.preview':'Preview','lib.previewText':'Hello, this is a preview of my voice.',
          'voice.female':'Female','voice.male':'Male',
          'hist.title':'History','hist.clear':'Clear','hist.empty':'No saved audio yet.','hist.confirmDel':'Delete this item?','hist.confirmClear':'Clear all history?',
          'dlg.title':'Dialog / Podcast','dlg.scriptPh':'Host: Hi everyone!\nGuest: Thanks for having me.','dlg.generate':'Generate','dlg.errEmpty':'Please enter a dialog script.','dlg.hint':'Max 2 speakers per audio.',
          'lf.title':'Long-form Narration','lf.textPh':'Paste your long script here. It will be split and stitched into one audio.','lf.generate':'Generate','lf.errEmpty':'Please enter your script.','lf.starting':'Starting...','lf.segment':'Segment','lf.done':'segments merged.',
          'wn.title':"What's New",
          'login.title':'Sign in to VO Studio','login.emailPh':'Your purchase email','login.btn':'Sign In','login.checking':'Checking...','login.fail':'Email not found or inactive. Use your purchase email.','login.deviceLimit':'Device limit reached for this license.','login.logout':'Sign out',
          'err.canvasOnly':'Voice generation only works inside Google AI Studio Canvas (the API key is injected there). Please run the app in Canvas.','err.generic':'Something went wrong. Please try again.'
        },
        id: {
          'nav.voiceover':'Voice Over','nav.dialog':'Dialog','nav.longform':'Naskah Panjang','nav.library':'Pustaka Suara','nav.history':'Riwayat',
          'common.ok':'OK','common.cancel':'Batal','common.iosSaveHint':'Tekan lama audio untuk menyimpannya.',
          'vo.title':'Voice Over','vo.textPh':'Ketik atau tempel naskahmu di sini...','vo.director':'Director (instruksi gaya)','vo.directorPh':'mis. Baca dengan tenang dan pelan','vo.voice':'Suara','vo.generate':'Buat','vo.save':'Simpan','vo.ready':'Siap.','vo.generating':'Membuat audio...','vo.errEmpty':'Masukkan teks dulu ya.',
          'preset.news':'Pembaca Berita','preset.story':'Pendongeng','preset.cheerful':'Ceria','preset.sad':'Sedih','preset.calm':'Tenang','preset.energetic':'Energik','preset.asmr':'ASMR','preset.ads':'Iklan Hard-Sell','preset.friendly':'Ramah','preset.firm':'Tegas',
          'lib.title':'Pustaka Suara','lib.all':'Semua','lib.female':'Wanita','lib.male':'Pria','lib.fav':'Favorit','lib.preview':'Pratinjau','lib.previewText':'Halo, ini contoh suara saya.',
          'voice.female':'Wanita','voice.male':'Pria',
          'hist.title':'Riwayat','hist.clear':'Bersihkan','hist.empty':'Belum ada audio tersimpan.','hist.confirmDel':'Hapus item ini?','hist.confirmClear':'Bersihkan semua riwayat?',
          'dlg.title':'Dialog / Podcast','dlg.scriptPh':'Host: Halo semuanya!\nGuest: Terima kasih sudah mengundang.','dlg.generate':'Buat','dlg.errEmpty':'Masukkan naskah dialog dulu.','dlg.hint':'Maksimal 2 pembicara per audio.',
          'lf.title':'Narasi Naskah Panjang','lf.textPh':'Tempel naskah panjangmu di sini. Otomatis dipecah dan disambung jadi satu audio.','lf.generate':'Buat','lf.errEmpty':'Masukkan naskahmu dulu.','lf.starting':'Memulai...','lf.segment':'Segmen','lf.done':'segmen digabung.',
          'wn.title':'Yang Baru',
          'login.title':'Masuk ke VO Studio','login.emailPh':'Email pembelianmu','login.btn':'Masuk','login.checking':'Memeriksa...','login.fail':'Email tidak ditemukan atau tidak aktif. Pakai email pembelianmu.','login.deviceLimit':'Batas perangkat lisensi ini tercapai.','login.logout':'Keluar',
          'err.canvasOnly':'Pembuatan suara hanya jalan di dalam Google AI Studio Canvas (API key di-inject di sana). Jalankan app di Canvas ya.','err.generic':'Ada yang salah. Coba lagi.'
        },
        ms: {
          'nav.voiceover':'Voice Over','nav.dialog':'Dialog','nav.longform':'Skrip Panjang','nav.library':'Pustaka Suara','nav.history':'Sejarah',
          'common.ok':'OK','common.cancel':'Batal','common.iosSaveHint':'Tekan lama audio untuk menyimpannya.',
          'vo.title':'Voice Over','vo.textPh':'Taip atau tampal skrip anda di sini...','vo.director':'Director (arahan gaya)','vo.directorPh':'cth. Baca dengan tenang dan perlahan','vo.voice':'Suara','vo.generate':'Jana','vo.save':'Simpan','vo.ready':'Sedia.','vo.generating':'Menjana audio...','vo.errEmpty':'Sila masukkan teks dahulu.',
          'preset.news':'Pembaca Berita','preset.story':'Pencerita','preset.cheerful':'Ceria','preset.sad':'Sedih','preset.calm':'Tenang','preset.energetic':'Bertenaga','preset.asmr':'ASMR','preset.ads':'Iklan Hard-Sell','preset.friendly':'Mesra','preset.firm':'Tegas',
          'lib.title':'Pustaka Suara','lib.all':'Semua','lib.female':'Wanita','lib.male':'Lelaki','lib.preview':'Pratonton','lib.fav':'Kegemaran','lib.previewText':'Helo, ini contoh suara saya.',
          'voice.female':'Wanita','voice.male':'Lelaki',
          'hist.title':'Sejarah','hist.clear':'Kosongkan','hist.empty':'Belum ada audio disimpan.','hist.confirmDel':'Padam item ini?','hist.confirmClear':'Kosongkan semua sejarah?',
          'dlg.title':'Dialog / Podcast','dlg.scriptPh':'Host: Helo semua!\nGuest: Terima kasih kerana menjemput.','dlg.generate':'Jana','dlg.errEmpty':'Sila masukkan skrip dialog dahulu.','dlg.hint':'Maksimum 2 penutur setiap audio.',
          'lf.title':'Naratif Skrip Panjang','lf.textPh':'Tampal skrip panjang anda di sini. Ia akan dipecah dan dicantum jadi satu audio.','lf.generate':'Jana','lf.errEmpty':'Sila masukkan skrip anda.','lf.starting':'Bermula...','lf.segment':'Segmen','lf.done':'segmen dicantum.',
          'wn.title':'Apa Baharu',
          'login.title':'Log masuk ke VO Studio','login.emailPh':'Emel pembelian anda','login.btn':'Log Masuk','login.checking':'Menyemak...','login.fail':'Emel tidak dijumpai atau tidak aktif. Guna emel pembelian anda.','login.deviceLimit':'Had peranti untuk lesen ini telah dicapai.','login.logout':'Log keluar',
          'err.canvasOnly':'Penjanaan suara hanya berfungsi dalam Google AI Studio Canvas (kunci API disuntik di sana). Sila jalankan app dalam Canvas.','err.generic':'Ada yang tidak kena. Cuba lagi.'
        },
      };
      let LANG = localStorage.getItem('vo_lang') || (navigator.language && navigator.language.toLowerCase().startsWith('id') ? 'id' : 'en');
      function t(key){ const l = T[LANG]||T.en; return (l[key]!=null?l[key]:(T.en[key]!=null?T.en[key]:key)); }
      function applyLanguage(){
        document.documentElement.lang = LANG;
        document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent = t(el.getAttribute('data-i18n')); });
        document.querySelectorAll('[data-i18n-ph]').forEach(el=>{ el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph'))); });
        document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active', b.dataset.lang===LANG));
        document.dispatchEvent(new CustomEvent('vo-lang-changed'));
      }
      function setLang(l){ LANG=l; localStorage.setItem('vo_lang', l); applyLanguage(); }
      // === end i18n engine ===

      // Label gender berupa TEKS (bukan simbol), ikut bahasa UI
      function genderLabel(g){ return t(g === 'F' ? 'voice.female' : 'voice.male'); }
      // Isi <select> daftar suara + pertahankan pilihan; withDesc = sertakan karakter suara
      function fillVoiceSelect(sel, withDesc){
        if(!sel) return;
        var prev = sel.value;
        sel.innerHTML = '';
        (window.VOICES || []).forEach(function(v){
          var o = document.createElement('option');
          o.value = v.id;
          o.textContent = v.id + ' (' + genderLabel(v.gender) + (withDesc ? ' · ' + v.desc : '') + ')';
          sel.appendChild(o);
        });
        if(prev) sel.value = prev;
      }

      // === MODAL HELPERS (pengganti alert/confirm yang diblokir sandbox Canvas) ===
      window.uiNotify = function(msg){
        return new Promise(res=>{
          const ov=document.createElement('div'); ov.className='ui-modal';
          ov.innerHTML='<div class="ui-modal-box panel"><p></p><button class="btn-primary" style="width:100%"></button></div>';
          ov.querySelector('p').textContent=msg;
          ov.querySelector('button').textContent=t('common.ok');
          const close=()=>{ ov.remove(); res(); };
          ov.querySelector('button').addEventListener('click',close);
          ov.addEventListener('click',e=>{ if(e.target===ov) close(); });
          document.body.appendChild(ov);
        });
      };
      window.uiConfirm = function(msg){
        return new Promise(res=>{
          const ov=document.createElement('div'); ov.className='ui-modal';
          ov.innerHTML='<div class="ui-modal-box panel"><p></p><div style="display:flex;gap:.5rem;justify-content:flex-end"><button class="chip cancel"></button><button class="btn-primary ok"></button></div></div>';
          ov.querySelector('p').textContent=msg;
          ov.querySelector('.cancel').textContent=t('common.cancel');
          ov.querySelector('.ok').textContent=t('common.ok');
          const done=v=>{ ov.remove(); res(v); };
          ov.querySelector('.cancel').addEventListener('click',()=>done(false));
          ov.querySelector('.ok').addEventListener('click',()=>done(true));
          ov.addEventListener('click',e=>{ if(e.target===ov) done(false); });
          document.body.appendChild(ov);
        });
      };

      // === AUDIO UTILS ===
      function base64ToArrayBuffer(base64){
        const bin = window.atob(base64); const len = bin.length; const bytes = new Uint8Array(len);
        for(let i=0;i<len;i++) bytes[i]=bin.charCodeAt(i); return bytes.buffer;
      }
      function pcmToWav(pcmData, sampleRate){
        const numChannels=1, bitsPerSample=16, blockAlign=(numChannels*bitsPerSample)/8;
        const byteRate=sampleRate*blockAlign, dataSize=pcmData.byteLength;
        const buffer=new ArrayBuffer(44+dataSize), view=new DataView(buffer);
        const ws=(o,s)=>{for(let i=0;i<s.length;i++)view.setUint8(o+i,s.charCodeAt(i));};
        ws(0,'RIFF'); view.setUint32(4,36+dataSize,true); ws(8,'WAVE'); ws(12,'fmt ');
        view.setUint32(16,16,true); view.setUint16(20,1,true); view.setUint16(22,numChannels,true);
        view.setUint32(24,sampleRate,true); view.setUint32(28,byteRate,true);
        view.setUint16(32,blockAlign,true); view.setUint16(34,bitsPerSample,true);
        ws(36,'data'); view.setUint32(40,dataSize,true);
        const wav=new Uint8Array(buffer); wav.set(new Uint8Array(pcmData),44);
        return new Blob([wav],{type:'audio/wav'});
      }
      window.__isIOS = function(){
        const ua=navigator.userAgent||'';
        if(/iPad|iPhone|iPod/.test(ua)) return true;
        if(navigator.platform==='MacIntel' && navigator.maxTouchPoints>1) return true;
        return false;
      };
      window.__iosShareOrSaveBlob = async function(blob, filename){
        let file=null; try{ file=new File([blob],filename,{type:blob.type||'audio/wav'}); }catch(e){ file=null; }
        if(file && navigator.canShare && navigator.canShare({files:[file]})){
          try{ await navigator.share({files:[file],title:filename}); return; }
          catch(err){ if(err&&err.name==='AbortError') return; }
        }
        window.uiNotify(t('common.iosSaveHint'));
      };
      window.wavBlobToMp3 = async function(wavBlob){
        const buf=await wavBlob.arrayBuffer(); const view=new DataView(buf);
        const rate=view.getUint32(24,true); const dataOffset=44;
        const samples=new Int16Array(buf, dataOffset, Math.floor((buf.byteLength-dataOffset)/2));
        const enc=new lamejs.Mp3Encoder(1, rate, 128); const out=[]; const block=1152;
        for(let i=0;i<samples.length;i+=block){ const chunk=samples.subarray(i,i+block); const mp3=enc.encodeBuffer(chunk); if(mp3.length) out.push(mp3); }
        const end=enc.flush(); if(end.length) out.push(end);
        return new Blob(out,{type:'audio/mpeg'});
      };
      window.downloadBlob = async function(blob, filename){
        if(window.__isIOS && window.__isIOS()){ await window.__iosShareOrSaveBlob(blob, filename); return; }
        const url=URL.createObjectURL(blob); const a=document.createElement('a');
        a.href=url; a.download=filename; document.body.appendChild(a); a.click(); a.remove();
        setTimeout(()=>URL.revokeObjectURL(url),4000);
      };

      // === TTS CORE ===
      function friendlyTtsError(err){
        var m = (err && err.message) || '';
        if(/\b(401|403)\b|unregistered|identity|API key|permission|forbidden/i.test(m)) return t('err.canvasOnly');
        return m || t('err.generic');
      }
      async function generateSpeech(text, voiceId, opts){
        opts = opts || {};
        const model = opts.model || 'gemini-2.5-flash-preview-tts';
        let retries = opts.retries==null ? 3 : opts.retries;
        let delay = opts.delay || 1000;
        const apiKey = "";
        const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/' + model + ':generateContent?key=' + apiKey;
        const payload = {
          contents: [{ parts: [{ text }] }],
          generationConfig: {
            responseModalities: ["AUDIO"],
            speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voiceId } } }
          }
        };
        const resp = await fetch(apiUrl,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
        if(!resp.ok){
          if(resp.status===429 && retries>0){ await new Promise(r=>setTimeout(r,delay)); return generateSpeech(text,voiceId,{model,retries:retries-1,delay:delay*2}); }
          const e=await resp.json().catch(()=>({})); throw new Error('API '+resp.status+': '+((e&&e.error&&e.error.message)||'error'));
        }
        const result=await resp.json();
        const part=result && result.candidates && result.candidates[0] && result.candidates[0].content && result.candidates[0].content.parts && result.candidates[0].content.parts[0];
        if(!part || !part.inlineData || !part.inlineData.data) throw new Error('No audio data');
        const rate=parseInt((part.inlineData.mimeType.match(/rate=(\d+)/)||[])[1],10)||24000;
        const pcm=base64ToArrayBuffer(part.inlineData.data);
        return { blob: pcmToWav(pcm, rate), rate };
      }

      function chunkText(text, maxLen){
        maxLen = maxLen || 1500;
        const paras=text.split(/\n\s*\n/).map(p=>p.trim()).filter(Boolean);
        const chunks=[]; let cur='';
        for(const p of paras){
          if((cur+'\n\n'+p).length>maxLen && cur){ chunks.push(cur); cur=p; }
          else { cur = cur ? cur+'\n\n'+p : p; }
          while(cur.length>maxLen){
            let cut=cur.slice(0,maxLen).lastIndexOf('. '); if(cut<0) cut=maxLen;
            chunks.push(cur.slice(0,cut+1)); cur=cur.slice(cut+1).trim();
          }
        }
        if(cur) chunks.push(cur);
        return chunks;
      }
      async function generatePcm(text, voiceId, model){
        const apiKey="";
        const apiUrl='https://generativelanguage.googleapis.com/v1beta/models/'+model+':generateContent?key='+apiKey;
        const payload={contents:[{parts:[{text}]}],generationConfig:{responseModalities:["AUDIO"],speechConfig:{voiceConfig:{prebuiltVoiceConfig:{voiceName:voiceId}}}}};
        const resp=await fetch(apiUrl,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
        if(!resp.ok) throw new Error('API '+resp.status);
        const r=await resp.json(); const part=r&&r.candidates&&r.candidates[0]&&r.candidates[0].content&&r.candidates[0].content.parts&&r.candidates[0].content.parts[0];
        if(!part||!part.inlineData||!part.inlineData.data) throw new Error('No audio');
        const rate=parseInt((part.inlineData.mimeType.match(/rate=(\d+)/)||[])[1],10)||24000;
        return { pcm:new Uint8Array(base64ToArrayBuffer(part.inlineData.data)), rate };
      }
      async function generateLongform(text, voiceId, opts){
        opts = opts || {};
        const model = opts.model || 'gemini-2.5-flash-preview-tts';
        const onProgress = opts.onProgress;
        const chunks=chunkText(text);
        const pcmParts=new Array(chunks.length); let rate=24000;
        for(let i=0;i<chunks.length;i++){
          let ok=false, attempt=0;
          while(!ok && attempt<3){ attempt++;
            try{ const r=await generatePcm(chunks[i], voiceId, model); pcmParts[i]=r.pcm; rate=r.rate; ok=true; }
            catch(e){ if(attempt>=3) throw new Error('Segment '+(i+1)+': '+e.message); await new Promise(r=>setTimeout(r,1000*attempt)); }
          }
          if(onProgress) onProgress(i+1, chunks.length);
        }
        const total=pcmParts.reduce((a,p)=>a+p.length,0);
        const merged=new Uint8Array(total); let off=0;
        for(const p of pcmParts){ merged.set(p, off); off+=p.length; }
        return { blob: pcmToWav(merged.buffer, rate), rate, segments: chunks.length };
      }

      async function generateDialog(script, speakers, opts){
        opts = opts || {};
        const model = opts.model || 'gemini-2.5-flash-preview-tts';
        let retries = opts.retries==null ? 3 : opts.retries;
        let delay = opts.delay || 1000;
        const apiKey = "";
        const spk = speakers.slice(0,2); // batas API Gemini
        const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/' + model + ':generateContent?key=' + apiKey;
        const payload = { contents:[{parts:[{text:script}]}],
          generationConfig:{ responseModalities:["AUDIO"],
            speechConfig:{ multiSpeakerVoiceConfig:{ speakerVoiceConfigs: spk.map(s=>({
              speaker:s.name, voiceConfig:{ prebuiltVoiceConfig:{ voiceName:s.voice } } })) } } } };
        const resp=await fetch(apiUrl,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
        if(!resp.ok){ if(resp.status===429&&retries>0){ await new Promise(r=>setTimeout(r,delay)); return generateDialog(script,speakers,{model,retries:retries-1,delay:delay*2}); }
          const e=await resp.json().catch(()=>({})); throw new Error('API '+resp.status+': '+((e&&e.error&&e.error.message)||'error')); }
        const result=await resp.json(); const part=result&&result.candidates&&result.candidates[0]&&result.candidates[0].content&&result.candidates[0].content.parts&&result.candidates[0].content.parts[0];
        if(!part||!part.inlineData||!part.inlineData.data) throw new Error('No audio data');
        const rate=parseInt((part.inlineData.mimeType.match(/rate=(\d+)/)||[])[1],10)||24000;
        return { blob: pcmToWav(base64ToArrayBuffer(part.inlineData.data), rate), rate };
      }

      // === VOICE DATA (30 suara Gemini) ===
      window.VOICES = [
        {id:'Zephyr',gender:'F',desc:'bright'},{id:'Puck',gender:'M',desc:'upbeat'},
        {id:'Charon',gender:'M',desc:'informative'},{id:'Kore',gender:'F',desc:'firm'},
        {id:'Fenrir',gender:'M',desc:'excitable'},{id:'Leda',gender:'F',desc:'youthful'},
        {id:'Orus',gender:'M',desc:'firm'},{id:'Aoede',gender:'F',desc:'breezy'},
        {id:'Callirrhoe',gender:'F',desc:'easygoing'},{id:'Autonoe',gender:'F',desc:'bright'},
        {id:'Enceladus',gender:'M',desc:'breathy'},{id:'Iapetus',gender:'M',desc:'clear'},
        {id:'Umbriel',gender:'M',desc:'easygoing'},{id:'Algieba',gender:'M',desc:'smooth'},
        {id:'Despina',gender:'F',desc:'smooth'},{id:'Erinome',gender:'F',desc:'clear'},
        {id:'Algenib',gender:'M',desc:'gravelly'},{id:'Rasalgethi',gender:'M',desc:'informative'},
        {id:'Laomedeia',gender:'F',desc:'upbeat'},{id:'Achernar',gender:'F',desc:'soft'},
        {id:'Alnilam',gender:'M',desc:'firm'},{id:'Schedar',gender:'M',desc:'even'},
        {id:'Gacrux',gender:'F',desc:'mature'},{id:'Pulcherrima',gender:'F',desc:'forward'},
        {id:'Achird',gender:'M',desc:'friendly'},{id:'Zubenelgenubi',gender:'M',desc:'casual'},
        {id:'Vindemiatrix',gender:'F',desc:'gentle'},{id:'Sadachbia',gender:'M',desc:'lively'},
        {id:'Sadaltager',gender:'M',desc:'knowledgeable'},{id:'Sulafat',gender:'F',desc:'warm'}
      ];
      window.EMOTION_PRESETS = [
        {key:'news',    val:'Read this like a professional news anchor, clear and neutral'},
        {key:'story',   val:'Narrate this warmly like a storyteller'},
        {key:'cheerful',val:'Say this cheerfully and energetically'},
        {key:'sad',     val:'Say this in a soft, sad tone'},
        {key:'calm',    val:'Read this calmly and slowly'},
        {key:'energetic',val:'Say this with high energy and excitement'},
        {key:'asmr',    val:'Whisper this gently in a soothing ASMR tone'},
        {key:'ads',     val:'Read this as a persuasive hard-selling advertisement'},
        {key:'friendly',val:'Say this in a friendly, casual tone'},
        {key:'firm',    val:'Say this in a firm, authoritative tone'}
      ];

      // === VERSION / CHANGELOG ===
      window.APP_VERSION='1.0';
      window.CHANGELOG=[
        {version:'1.0', date:'2026-09-14', changes:[
          {en:'Initial release: Voice Over, Dialog, Long-form, Voice Library, History.', id:'Rilis awal: Voice Over, Dialog, Naskah Panjang, Pustaka Suara, Riwayat.', ms:'Keluaran awal: Voice Over, Dialog, Skrip Panjang, Pustaka Suara, Sejarah.'}
        ]}
      ];

      // === HISTORY STORE (IndexedDB — simpan Blob audio langsung di perangkat pembeli) ===
      window.VOHistory = (function(){
        const DB='vo_studio', STORE='history', LIMIT=30;
        let items=[]; const listeners=[]; let dbp=null;
        function open(){
          if(dbp) return dbp;
          dbp=new Promise((res,rej)=>{
            const req=indexedDB.open(DB,1);
            req.onupgradeneeded=()=>{ const db=req.result; if(!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE,{keyPath:'id'}); };
            req.onsuccess=()=>res(req.result); req.onerror=()=>rej(req.error);
          });
          return dbp;
        }
        function run(mode, fn){
          return open().then(db=>new Promise((res,rej)=>{
            const tx=db.transaction(STORE,mode); const store=tx.objectStore(STORE);
            let out; try{ out=fn(store); }catch(e){ rej(e); return; }
            tx.oncomplete=()=>res(out); tx.onerror=()=>rej(tx.error); tx.onabort=()=>rej(tx.error);
          }));
        }
        function getAllRecs(){
          return open().then(db=>new Promise((res,rej)=>{
            const r=db.transaction(STORE,'readonly').objectStore(STORE).getAll();
            r.onsuccess=()=>res((r.result||[]).sort((a,b)=>b.id-a.id)); r.onerror=()=>rej(r.error);
          }));
        }
        function notify(){ listeners.forEach(f=>f(items)); }
        async function reload(){ try{ items=await getAllRecs(); }catch(e){ items=[]; } notify(); }
        reload();
        return {
          async add(o){
            const rec={ id:Date.now(), text:(o.text||'').slice(0,120), voice:o.voice, ts:new Date().toLocaleString(), blob:o.blob };
            await run('readwrite', s=>s.put(rec));
            const all=await getAllRecs();
            if(all.length>LIMIT){ const toDel=all.slice(LIMIT); await run('readwrite', s=>toDel.forEach(x=>s.delete(x.id))); }
            await reload();
          },
          all(){ return items; },
          async remove(id){ await run('readwrite', s=>s.delete(id)); await reload(); },
          async clear(){ await run('readwrite', s=>s.clear()); await reload(); },
          onChange(f){ listeners.push(f); }
        };
      })();

      // === TAB SWITCHING ===
      (function(){
        const btns = document.querySelectorAll('.main-tab-btn');
        const panels = document.querySelectorAll('.main-content-panel');
        function show(tab){
          btns.forEach(b=>b.classList.toggle('active', b.dataset.tab===tab));
          panels.forEach(p=>p.classList.toggle('hidden', p.id!=='content-'+tab));
          document.querySelector('.sidebar')?.classList.remove('open');
        }
        btns.forEach(b=>b.addEventListener('click',()=>show(b.dataset.tab)));
        show('voiceover');
        const tgl=document.getElementById('sidebar-toggle');
        tgl?.addEventListener('click',()=>document.querySelector('.sidebar').classList.toggle('open'));
      })();

      // wire bahasa + boot
      document.querySelectorAll('.lang-btn').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
      applyLanguage();

      // === LOGIN / LISENSI ===
      (function(){
        // CATATAN KEAMANAN (by-design, bukan kebocoran):
        //  - url & appSecret WAJIB ada di klien (app Canvas single-file, tak ada build/env injection).
        //  - appSecret = gerbang KASAR saja (kurangi noise/abuse). Keamanan TIDAK bergantung padanya.
        //  - Otorisasi ASLI di server (GAS): email harus AKTIF (sudah bayar) + device token SHA-256 + rate limit + batas device.
        //  - Secret ASLI (LYNK_TOKEN, yang bisa mengaktifkan lisensi) TIDAK PERNAH di klien — hanya di ScriptProperties + secret worker.
        const LOGIN_CFG = { url: 'https://script.google.com/macros/s/AKfycbyb3ujp2X-sNvY8CkTmBkjyvWdAoG-K9uZZgXSZR39oW3yng1qsif4UmGVsfrK1mCeP/exec', appSecret: '0399dab87cda6e4950dce7689a86efb9' };
        const overlay=document.getElementById('login-overlay');
        const shell=document.getElementById('app-shell');
        const emailInput=document.getElementById('login-email');
        const btn=document.getElementById('login-btn');
        const msg=document.getElementById('login-msg');
        const logoutBtn=document.getElementById('logout-btn');

        let deviceToken=localStorage.getItem('vo_device');
        if(!deviceToken){ deviceToken=(Date.now().toString(36)+Math.floor(performance.now()*1000).toString(36)+navigator.userAgent.length.toString(36)); localStorage.setItem('vo_device', deviceToken); }

        function openApp(){ overlay.classList.add('hidden'); shell.style.display='flex'; }
        function api(action, extra){
          const p=new URLSearchParams(Object.assign({action, app_secret:LOGIN_CFG.appSecret, device:deviceToken}, extra||{}));
          return fetch(LOGIN_CFG.url+'?'+p.toString(),{method:'GET'}).then(r=>r.json());
        }

        async function boot(){
          // Backend belum dikonfigurasi -> mode akses terbuka (dev / pra-lisensi). Gating aktif otomatis saat URL asli diisi.
          if(LOGIN_CFG.url==='REPLACE_WITH_GAS_EXEC_URL'){ openApp(); return; }
          const savedEmail=localStorage.getItem('vo_email');
          if(!savedEmail){ return; } // tampilkan overlay, user login manual
          try{ const res=await api('checkSession', {email:savedEmail}); if(res && res.ok) openApp(); }
          catch(e){ /* offline: biarkan overlay, user login manual */ }
        }

        btn.addEventListener('click', async ()=>{
          const email=(emailInput.value||'').trim().toLowerCase();
          if(!email){ msg.textContent=t('login.fail'); return; }
          if(LOGIN_CFG.url==='REPLACE_WITH_GAS_EXEC_URL'){ msg.textContent='Backend belum dikonfigurasi.'; return; }
          btn.disabled=true; msg.textContent=t('login.checking');
          try{
            const res=await api('login', {email});
            if(res && res.ok){ localStorage.setItem('vo_email', email); msg.textContent=''; openApp(); }
            else if(res && res.code==='DEVICE_LIMIT'){ msg.textContent=t('login.deviceLimit'); }
            else { msg.textContent=t('login.fail'); }
          }catch(e){ msg.textContent=t('login.fail'); }
          finally{ btn.disabled=false; }
        });
        emailInput.addEventListener('keydown',e=>{ if(e.key==='Enter') btn.click(); });

        logoutBtn && logoutBtn.addEventListener('click', async ()=>{
          const email=localStorage.getItem('vo_email');
          try{ if(email && LOGIN_CFG.url!=='REPLACE_WITH_GAS_EXEC_URL') await api('logout',{email}); }catch(e){}
          localStorage.removeItem('vo_email'); location.reload();
        });

        boot();
      })();

      // === VERSION BADGE + WHAT'S NEW ===
      (function(){
        const badge=document.getElementById('ver-badge'); const dot=document.getElementById('ver-dot');
        if(!badge) return;
        badge.firstChild.textContent='v'+window.APP_VERSION;
        if(localStorage.getItem('vo_seen_ver')!==window.APP_VERSION) dot.style.display='block';
        badge.addEventListener('click',()=>{
          const latest=window.CHANGELOG[0];
          const lines=latest.changes.map(c=>'<li style="margin-bottom:.4rem">'+(c[LANG]||c.en)+'</li>').join('');
          const ov=document.createElement('div'); ov.className='ui-modal';
          ov.innerHTML='<div class="ui-modal-box panel"><h3 style="margin-top:0">'+t('wn.title')+' — v'+latest.version+'</h3><ul style="padding-left:1.1rem;color:var(--text)">'+lines+'</ul><button class="btn-primary" style="width:100%">'+t('common.ok')+'</button></div>';
          const close=()=>ov.remove();
          ov.querySelector('button').addEventListener('click',close);
          ov.addEventListener('click',e=>{ if(e.target===ov) close(); });
          document.body.appendChild(ov);
          localStorage.setItem('vo_seen_ver', window.APP_VERSION); dot.style.display='none';
        });
      })();

      // === TAB: VOICE OVER ===
      (function(){
        const text=document.getElementById('vo-text');
        const director=document.getElementById('vo-director');
        const presets=document.getElementById('vo-presets');
        const sel=document.getElementById('vo-voice-select');
        const gen=document.getElementById('vo-generate');
        const audio=document.getElementById('vo-audio');
        const dl=document.getElementById('vo-download');
        const mp3=document.getElementById('vo-mp3');
        const save=document.getElementById('vo-save');
        const statusText=document.getElementById('vo-status-text');
        const wave=document.getElementById('vo-wave');
        const counter=document.getElementById('vo-counter');
        let lastBlob=null, lastText='';

        fillVoiceSelect(sel, true);
        document.addEventListener('vo-lang-changed', ()=>fillVoiceSelect(sel, true));

        function renderPresets(){
          presets.innerHTML='';
          (window.EMOTION_PRESETS||[]).forEach(p=>{
            const b=document.createElement('button'); b.type='button'; b.className='chip'; b.dataset.val=p.val;
            b.textContent=t('preset.'+p.key);
            b.addEventListener('click',()=>{ director.value=p.val; presets.querySelectorAll('.chip').forEach(x=>x.classList.remove('active')); b.classList.add('active'); });
            presets.appendChild(b);
          });
        }
        renderPresets();
        document.addEventListener('vo-lang-changed', renderPresets);

        text.addEventListener('input',()=>{
          const n=text.value.length; const w=text.value.trim()?text.value.trim().split(/\s+/).length:0;
          counter.textContent=n+' chars · '+w+' words · ~'+Math.max(1,Math.round(w/2.5))+'s';
        });

        gen.addEventListener('click', async ()=>{
          const main=text.value.trim();
          if(!main){ window.uiNotify(t('vo.errEmpty')); return; }
          const dir=director.value.trim();
          const finalText = dir ? (dir+': '+main) : main;
          gen.disabled=true; statusText.textContent=t('vo.generating'); wave.style.display='flex'; wave.classList.add('animate');
          audio.style.display='none'; dl.classList.add('hidden'); mp3.classList.add('hidden'); save.classList.add('hidden');
          try{
            const r=await generateSpeech(finalText, sel.value, {});
            lastBlob=r.blob; lastText=main;
            audio.src=URL.createObjectURL(r.blob); audio.style.display='block'; statusText.textContent=''; wave.classList.remove('animate'); wave.style.display='none';
            dl.classList.remove('hidden'); mp3.classList.remove('hidden'); save.classList.remove('hidden');
          }catch(e){ statusText.textContent=friendlyTtsError(e); wave.classList.remove('animate'); wave.style.display='none'; }
          finally{ gen.disabled=false; }
        });

        dl.addEventListener('click',()=>{ if(lastBlob) window.downloadBlob(lastBlob, 'vo-'+Date.now()+'.wav'); });
        mp3.addEventListener('click', async ()=>{ if(lastBlob && window.wavBlobToMp3){ const m=await window.wavBlobToMp3(lastBlob); window.downloadBlob(m,'vo-'+Date.now()+'.mp3'); } });
        save.addEventListener('click',()=>{ if(lastBlob && window.VOHistory) window.VOHistory.add({text:lastText, voice:sel.value, blob:lastBlob}); });
      })();

      // === TAB: VOICE LIBRARY ===
      (function(){
        const grid=document.getElementById('lib-grid');
        const filters=document.getElementById('lib-filters');
        let filter='all', playing=null;
        const favs=new Set(JSON.parse(localStorage.getItem('vo_favs')||'[]'));
        function saveFavs(){ localStorage.setItem('vo_favs', JSON.stringify([...favs])); }
        function render(){
          grid.innerHTML='';
          (window.VOICES||[]).filter(v=> filter==='all'?true: filter==='fav'?favs.has(v.id): v.gender===filter)
            .forEach(v=>{
              const c=document.createElement('div'); c.className='panel'; c.style.cssText='padding:.8rem;background:var(--surface-2)';
              c.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center">'
                +'<strong>'+v.id+'</strong>'
                +'<button class="fav-btn" data-id="'+v.id+'" title="favorite" style="background:none;border:none;cursor:pointer"><i class="fa'+(favs.has(v.id)?'s':'r')+' fa-star" style="color:var(--accent-cyan)"></i></button></div>'
                +'<div style="color:var(--muted);font-size:.8rem;margin:.2rem 0 .6rem">'+genderLabel(v.gender)+' · '+v.desc+'</div>'
                +'<button class="prev-btn btn-primary" data-id="'+v.id+'" style="width:100%"><i class="fas fa-play"></i> <span data-i18n="lib.preview">Preview</span></button>';
              grid.appendChild(c);
            });
          applyLanguage();
        }
        filters.addEventListener('click',e=>{ const b=e.target.closest('[data-filter]'); if(!b) return;
          filters.querySelectorAll('.chip').forEach(x=>x.classList.remove('active')); b.classList.add('active'); filter=b.dataset.filter; render(); });
        grid.addEventListener('click', async e=>{
          const fav=e.target.closest('.fav-btn');
          if(fav){ const id=fav.dataset.id; favs.has(id)?favs.delete(id):favs.add(id); saveFavs(); render(); return; }
          const prev=e.target.closest('.prev-btn');
          if(prev){ const id=prev.dataset.id; const icon=prev.querySelector('i'); const old=icon.className; icon.className='fas fa-spinner fa-spin'; prev.disabled=true;
            try{ if(playing) playing.pause(); const r=await generateSpeech(t('lib.previewText'), id, {}); playing=new Audio(URL.createObjectURL(r.blob)); playing.play(); }
            catch(err){ window.uiNotify(friendlyTtsError(err)); }
            finally{ icon.className=old; prev.disabled=false; } }
        });
        render();
        document.addEventListener('vo-lang-changed', render);
      })();

      // === TAB: HISTORY ===
      (function(){
        const list=document.getElementById('hist-list');
        const empty=document.getElementById('hist-empty');
        const clearBtn=document.getElementById('hist-clear');
        function render(items){
          list.innerHTML=''; empty.classList.toggle('hidden', items.length>0);
          items.forEach(it=>{ const d=document.createElement('div'); d.className='panel'; d.style.cssText='padding:.75rem;background:var(--surface-2)';
            d.innerHTML='<div style="font-size:.85rem">'+it.text+'</div>'
              +'<div style="color:var(--muted);font-size:.75rem;margin:.3rem 0"><i class="fas fa-microphone"></i> '+it.voice+' · '+it.ts+'</div>'
              +'<audio controls src="'+URL.createObjectURL(it.blob)+'" style="width:100%"></audio>'
              +'<div style="display:flex;gap:.5rem;margin-top:.4rem">'
              +'<button class="chip" data-act="dl" data-id="'+it.id+'"><i class="fas fa-download"></i></button>'
              +'<button class="chip" data-act="del" data-id="'+it.id+'"><i class="fas fa-trash"></i></button></div>';
            list.appendChild(d); });
        }
        list.addEventListener('click', async e=>{ const b=e.target.closest('[data-act]'); if(!b) return;
          const id=parseInt(b.dataset.id); const it=window.VOHistory.all().find(x=>x.id===id);
          if(b.dataset.act==='del'){ if(await window.uiConfirm(t('hist.confirmDel'))) window.VOHistory.remove(id); }
          else if(b.dataset.act==='dl' && it){ window.downloadBlob(it.blob, 'vo-'+id+'.wav'); } });
        clearBtn.addEventListener('click', async ()=>{ if(await window.uiConfirm(t('hist.confirmClear'))) window.VOHistory.clear(); });
        window.VOHistory.onChange(render); render(window.VOHistory.all());
      })();

      // === TAB: DIALOG ===
      (function(){
        const s1=document.getElementById('dlg-spk1'), s2=document.getElementById('dlg-spk2');
        const n1=document.getElementById('dlg-name1'), n2=document.getElementById('dlg-name2');
        const scr=document.getElementById('dlg-script'), gen=document.getElementById('dlg-generate');
        const audio=document.getElementById('dlg-audio'), dl=document.getElementById('dlg-download'), mp3=document.getElementById('dlg-mp3'), status=document.getElementById('dlg-status');
        let lastBlob=null;
        fillVoiceSelect(s1, false); fillVoiceSelect(s2, false);
        if(window.VOICES && window.VOICES[1]) s2.value=window.VOICES[1].id;
        document.addEventListener('vo-lang-changed', ()=>{ fillVoiceSelect(s1, false); fillVoiceSelect(s2, false); });
        gen.addEventListener('click', async ()=>{
          const script=scr.value.trim(); if(!script){ window.uiNotify(t('dlg.errEmpty')); return; }
          gen.disabled=true; status.textContent=t('vo.generating'); dl.classList.add('hidden'); mp3.classList.add('hidden'); audio.style.display='none';
          try{ const r=await generateDialog(script, [{name:n1.value||'Host',voice:s1.value},{name:n2.value||'Guest',voice:s2.value}], {});
            lastBlob=r.blob; audio.src=URL.createObjectURL(r.blob); audio.style.display='block'; status.textContent=''; dl.classList.remove('hidden'); mp3.classList.remove('hidden'); }
          catch(e){ status.textContent=friendlyTtsError(e); } finally{ gen.disabled=false; }
        });
        dl.addEventListener('click',()=>{ if(lastBlob) window.downloadBlob(lastBlob, 'dialog-'+Date.now()+'.wav'); });
        mp3.addEventListener('click', async ()=>{ if(lastBlob && window.wavBlobToMp3){ const m=await window.wavBlobToMp3(lastBlob); window.downloadBlob(m,'dialog-'+Date.now()+'.mp3'); } });
      })();

      // === TAB: LONGFORM ===
      (function(){
        const txt=document.getElementById('lf-text'), sel=document.getElementById('lf-voice');
        const gen=document.getElementById('lf-generate'), prog=document.getElementById('lf-progress');
        const audio=document.getElementById('lf-audio'), dl=document.getElementById('lf-download'), mp3=document.getElementById('lf-mp3');
        let lastBlob=null;
        fillVoiceSelect(sel, true);
        document.addEventListener('vo-lang-changed', ()=>fillVoiceSelect(sel, true));
        gen.addEventListener('click', async ()=>{
          const text=txt.value.trim(); if(!text){ window.uiNotify(t('lf.errEmpty')); return; }
          gen.disabled=true; dl.classList.add('hidden'); mp3.classList.add('hidden'); audio.style.display='none'; prog.textContent=t('lf.starting');
          try{ const r=await generateLongform(text, sel.value, {onProgress:(d,tt)=>{ prog.textContent=t('lf.segment')+' '+d+'/'+tt; }});
            lastBlob=r.blob; audio.src=URL.createObjectURL(r.blob); audio.style.display='block'; prog.textContent=r.segments+' '+t('lf.done'); dl.classList.remove('hidden'); mp3.classList.remove('hidden'); }
          catch(e){ prog.textContent=friendlyTtsError(e); } finally{ gen.disabled=false; }
        });
        dl.addEventListener('click',()=>{ if(lastBlob) window.downloadBlob(lastBlob, 'longform-'+Date.now()+'.wav'); });
        mp3.addEventListener('click', async ()=>{ if(lastBlob && window.wavBlobToMp3){ const m=await window.wavBlobToMp3(lastBlob); window.downloadBlob(m,'longform-'+Date.now()+'.mp3'); } });
      })();
    });
  