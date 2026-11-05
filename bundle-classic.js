
    document.addEventListener('DOMContentLoaded', () => {
      const apiKey = ""; // Canvas auto-inject — jangan hardcode

      // === i18n engine ===
      const T = {
        en: {
          'nav.voiceover':'Voice Over','nav.dialog':'Dialog','nav.longform':'Long-form','nav.library':'Voice Library','nav.history':'History',
          'common.ok':'OK','common.cancel':'Cancel','common.iosSaveHint':'Long-press the audio to save it.',
          'relay.pair':'Pair','relay.pairCode':'Pairing code:','relay.title':'Private relay','relay.url':'Relay URL','relay.token':'Token','relay.sub':'Subfolder (optional)','relay.save':'Save & test','relay.off':'Turn off','relay.chip':'Relay','relay.saved':'Saved:','relay.fail':'Relay failed','relay.pingFail':'Relay not reachable or wrong token',
          'vo.title':'Voice Over','vo.textPh':'Type or paste your script here...','vo.director':'Director (style instruction)','vo.directorPh':'e.g. Read calmly and slowly','vo.voice':'Voice','vo.generate':'Generate','vo.save':'Save','vo.ready':'Ready.','vo.generating':'Generating audio...','vo.errEmpty':'Please enter some text first.',
          'preset.news':'News Anchor','preset.story':'Storyteller','preset.cheerful':'Cheerful','preset.sad':'Sad','preset.calm':'Calm','preset.energetic':'Energetic','preset.asmr':'ASMR','preset.ads':'Hard-Sell Ad','preset.friendly':'Friendly','preset.firm':'Firm',
          'lib.title':'Voice Library','lib.all':'All','lib.female':'Female','lib.male':'Male','lib.fav':'Favorites','lib.preview':'Preview','lib.previewText':'Hello, this is a preview of my voice.',
          'voice.female':'Female','voice.male':'Male',
          'hist.title':'History','hist.clear':'Clear','hist.empty':'No saved audio yet.','hist.confirmDel':'Delete this item?','hist.confirmClear':'Clear all history?',
          'dlg.title':'Dialog / Podcast','dlg.scriptPh':'Host: Hi everyone!\nGuest: Thanks for having me.','dlg.generate':'Generate','dlg.errEmpty':'Please enter a dialog script.','dlg.hint':'Max 2 speakers per audio.','dtpl.choose':'Dialog templates...','dtpl.podcast':'Podcast','dtpl.interview':'Interview','dtpl.review':'Product review','dtpl.casual':'Casual chat',
          'lf.title':'Long-form Narration','lf.textPh':'Paste your long script here. It will be split and stitched into one audio.','lf.generate':'Generate','lf.errEmpty':'Please enter your script.','lf.starting':'Starting...','lf.segment':'Segment','lf.done':'segments merged.',
          'lang.vo':'VO Language','lang.auto':'Auto (match text)','lang.translate':'Translate','lang.undo':'Restore original','lang.translating':'Translating...','lang.empty':'Enter some text first.','lang.pickFirst':'Choose a target language first.',
          'wn.title':"What's New",
          'login.title':'Sign in to VO Studio','login.emailPh':'Your purchase email','login.btn':'Sign In','login.checking':'Checking...','login.fail':'Email not found or inactive. Use your purchase email.','login.deviceLimit':'Device limit reached for this license.','login.logout':'Sign out',
          'err.canvasOnly':'Voice generation only works inside Google AI Studio Canvas (the API key is injected there). Please run the app in Canvas.','err.generic':'Something went wrong. Please try again.',
          'tpl.choose':'Script templates...','tpl.intro':'YouTube intro','tpl.iklan':'Advertisement','tpl.narasi':'Narration','tpl.dongeng':'Story','pron.btn':'Pronunciation','pron.title':'Pronunciation Dictionary','pron.hint':'Replace words the AI mispronounces (e.g. a name) with a phonetic spelling. Applies to all tabs.','pron.add':'Add word','pron.from':'Written','pron.to':'Say as','q.fast':'Fast','q.pro':'Pro','theme.toggle':'Dark mode','q.label':'Quality','q.help':'Fast = quicker generation, good enough for most voice overs. Pro = higher quality and more expressive, but slower. Use Pro for final/important results.'
        },
        id: {
          'nav.voiceover':'Voice Over','nav.dialog':'Dialog','nav.longform':'Naskah Panjang','nav.library':'Pustaka Suara','nav.history':'Riwayat',
          'common.ok':'OK','common.cancel':'Batal','common.iosSaveHint':'Tekan lama audio untuk menyimpannya.',
          'relay.pair':'Pasangkan','relay.pairCode':'Kode pairing:','relay.title':'Relay pribadi','relay.url':'URL relay','relay.token':'Token','relay.sub':'Subfolder (opsional)','relay.save':'Simpan & uji','relay.off':'Matikan','relay.chip':'Relay','relay.saved':'Tersimpan:','relay.fail':'Relay gagal','relay.pingFail':'Relay tidak terjangkau atau token salah',
          'vo.title':'Voice Over','vo.textPh':'Ketik atau tempel naskahmu di sini...','vo.director':'Director (instruksi gaya)','vo.directorPh':'mis. Baca dengan tenang dan pelan','vo.voice':'Suara','vo.generate':'Buat','vo.save':'Simpan','vo.ready':'Siap.','vo.generating':'Membuat audio...','vo.errEmpty':'Masukkan teks dulu ya.',
          'preset.news':'Pembaca Berita','preset.story':'Pendongeng','preset.cheerful':'Ceria','preset.sad':'Sedih','preset.calm':'Tenang','preset.energetic':'Energik','preset.asmr':'ASMR','preset.ads':'Iklan Hard-Sell','preset.friendly':'Ramah','preset.firm':'Tegas',
          'lib.title':'Pustaka Suara','lib.all':'Semua','lib.female':'Wanita','lib.male':'Pria','lib.fav':'Favorit','lib.preview':'Pratinjau','lib.previewText':'Halo, ini contoh suara saya.',
          'voice.female':'Wanita','voice.male':'Pria',
          'hist.title':'Riwayat','hist.clear':'Bersihkan','hist.empty':'Belum ada audio tersimpan.','hist.confirmDel':'Hapus item ini?','hist.confirmClear':'Bersihkan semua riwayat?',
          'dlg.title':'Dialog / Podcast','dlg.scriptPh':'Host: Halo semuanya!\nGuest: Terima kasih sudah mengundang.','dlg.generate':'Buat','dlg.errEmpty':'Masukkan naskah dialog dulu.','dlg.hint':'Maksimal 2 pembicara per audio.','dtpl.choose':'Template dialog...','dtpl.podcast':'Podcast','dtpl.interview':'Wawancara','dtpl.review':'Review produk','dtpl.casual':'Obrolan santai',
          'lf.title':'Narasi Naskah Panjang','lf.textPh':'Tempel naskah panjangmu di sini. Otomatis dipecah dan disambung jadi satu audio.','lf.generate':'Buat','lf.errEmpty':'Masukkan naskahmu dulu.','lf.starting':'Memulai...','lf.segment':'Segmen','lf.done':'segmen digabung.',
          'lang.vo':'Bahasa VO','lang.auto':'Otomatis (sesuai teks)','lang.translate':'Terjemahkan','lang.undo':'Pulihkan asli','lang.translating':'Menerjemahkan...','lang.empty':'Isi teks dulu.','lang.pickFirst':'Pilih bahasa target dulu.',
          'wn.title':'Yang Baru',
          'login.title':'Masuk ke VO Studio','login.emailPh':'Email pembelianmu','login.btn':'Masuk','login.checking':'Memeriksa...','login.fail':'Email tidak ditemukan atau tidak aktif. Pakai email pembelianmu.','login.deviceLimit':'Batas perangkat lisensi ini tercapai.','login.logout':'Keluar',
          'err.canvasOnly':'Pembuatan suara hanya jalan di dalam Google AI Studio Canvas (API key di-inject di sana). Jalankan app di Canvas ya.','err.generic':'Ada yang salah. Coba lagi.',
          'tpl.choose':'Template naskah...','tpl.intro':'Intro YouTube','tpl.iklan':'Iklan','tpl.narasi':'Narasi','tpl.dongeng':'Dongeng','pron.btn':'Kamus Pengucapan','pron.title':'Kamus Pengucapan','pron.hint':'Ganti kata yang salah dibaca AI (mis. nama) dengan ejaan fonetik. Berlaku di semua tab.','pron.add':'Tambah kata','pron.from':'Tertulis','pron.to':'Dibaca','q.fast':'Cepat','q.pro':'Pro','theme.toggle':'Mode gelap','q.label':'Kualitas','q.help':'Cepat = generate lebih cepat, cukup untuk kebanyakan voice over. Pro = kualitas lebih tinggi & lebih ekspresif, tapi lebih lambat. Pakai Pro untuk hasil final/penting.'
        },
        ms: {
          'nav.voiceover':'Voice Over','nav.dialog':'Dialog','nav.longform':'Skrip Panjang','nav.library':'Pustaka Suara','nav.history':'Sejarah',
          'common.ok':'OK','common.cancel':'Batal','common.iosSaveHint':'Tekan lama audio untuk menyimpannya.',
          'relay.pair':'Pasangkan','relay.pairCode':'Kod pasangan:','relay.title':'Relay peribadi','relay.url':'URL relay','relay.token':'Token','relay.sub':'Subfolder (pilihan)','relay.save':'Simpan & uji','relay.off':'Matikan','relay.chip':'Relay','relay.saved':'Disimpan:','relay.fail':'Relay gagal','relay.pingFail':'Relay tidak dapat dicapai atau token salah',
          'vo.title':'Voice Over','vo.textPh':'Taip atau tampal skrip anda di sini...','vo.director':'Director (arahan gaya)','vo.directorPh':'cth. Baca dengan tenang dan perlahan','vo.voice':'Suara','vo.generate':'Jana','vo.save':'Simpan','vo.ready':'Sedia.','vo.generating':'Menjana audio...','vo.errEmpty':'Sila masukkan teks dahulu.',
          'preset.news':'Pembaca Berita','preset.story':'Pencerita','preset.cheerful':'Ceria','preset.sad':'Sedih','preset.calm':'Tenang','preset.energetic':'Bertenaga','preset.asmr':'ASMR','preset.ads':'Iklan Hard-Sell','preset.friendly':'Mesra','preset.firm':'Tegas',
          'lib.title':'Pustaka Suara','lib.all':'Semua','lib.female':'Wanita','lib.male':'Lelaki','lib.preview':'Pratonton','lib.fav':'Kegemaran','lib.previewText':'Helo, ini contoh suara saya.',
          'voice.female':'Wanita','voice.male':'Lelaki',
          'hist.title':'Sejarah','hist.clear':'Kosongkan','hist.empty':'Belum ada audio disimpan.','hist.confirmDel':'Padam item ini?','hist.confirmClear':'Kosongkan semua sejarah?',
          'dlg.title':'Dialog / Podcast','dlg.scriptPh':'Host: Helo semua!\nGuest: Terima kasih kerana menjemput.','dlg.generate':'Jana','dlg.errEmpty':'Sila masukkan skrip dialog dahulu.','dlg.hint':'Maksimum 2 penutur setiap audio.','dtpl.choose':'Templat dialog...','dtpl.podcast':'Podcast','dtpl.interview':'Temu bual','dtpl.review':'Ulasan produk','dtpl.casual':'Sembang santai',
          'lf.title':'Naratif Skrip Panjang','lf.textPh':'Tampal skrip panjang anda di sini. Ia akan dipecah dan dicantum jadi satu audio.','lf.generate':'Jana','lf.errEmpty':'Sila masukkan skrip anda.','lf.starting':'Bermula...','lf.segment':'Segmen','lf.done':'segmen dicantum.',
          'lang.vo':'Bahasa VO','lang.auto':'Automatik (ikut teks)','lang.translate':'Terjemah','lang.undo':'Pulihkan asal','lang.translating':'Menterjemah...','lang.empty':'Isi teks dahulu.','lang.pickFirst':'Pilih bahasa sasaran dahulu.',
          'wn.title':'Apa Baharu',
          'login.title':'Log masuk ke VO Studio','login.emailPh':'Emel pembelian anda','login.btn':'Log Masuk','login.checking':'Menyemak...','login.fail':'Emel tidak dijumpai atau tidak aktif. Guna emel pembelian anda.','login.deviceLimit':'Had peranti untuk lesen ini telah dicapai.','login.logout':'Log keluar',
          'err.canvasOnly':'Penjanaan suara hanya berfungsi dalam Google AI Studio Canvas (kunci API disuntik di sana). Sila jalankan app dalam Canvas.','err.generic':'Ada yang tidak kena. Cuba lagi.',
          'tpl.choose':'Templat skrip...','tpl.intro':'Intro YouTube','tpl.iklan':'Iklan','tpl.narasi':'Naratif','tpl.dongeng':'Cerita','pron.btn':'Kamus Sebutan','pron.title':'Kamus Sebutan','pron.hint':'Ganti perkataan yang salah dibaca AI (cth. nama) dengan ejaan fonetik. Berlaku di semua tab.','pron.add':'Tambah perkataan','pron.from':'Ditulis','pron.to':'Dibaca','q.fast':'Pantas','q.pro':'Pro','theme.toggle':'Mod gelap','q.label':'Kualiti','q.help':'Pantas = penjanaan lebih cepat, cukup untuk kebanyakan voice over. Pro = kualiti lebih tinggi & lebih ekspresif, tetapi lebih perlahan. Guna Pro untuk hasil akhir/penting.'
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

      // Isi <select> daftar bahasa output; opsi pertama = Otomatis (auto-detect / tanpa terjemah)
      function fillLangSelect(sel){
        if(!sel) return;
        var prev = sel.value;
        sel.innerHTML = '<option value="">' + t('lang.auto') + '</option>';
        (window.TTS_LANGS || []).forEach(function(l){
          var o = document.createElement('option'); o.value = l.code; o.textContent = l.label; sel.appendChild(o);
        });
        if(prev) sel.value = prev;
      }
      // Pasang tombol Terjemahkan + Pulihkan asli. o={textEl, langSel, btn, undoBtn, setStatus}
      function wireTranslate(o){
        var original = null;
        o.btn.addEventListener('click', async function(){
          var code = o.langSel.value;
          if(!code){ window.uiNotify(t('lang.pickFirst')); return; }
          var src = o.textEl.value.trim();
          if(!src){ window.uiNotify(t('lang.empty')); return; }
          var lang = (window.TTS_LANGS || []).find(function(l){ return l.code===code; });
          o.btn.disabled = true;
          if(o.setStatus) o.setStatus(t('lang.translating'));
          try{
            var out = await translateText(src, lang ? lang.label : code);
            original = o.textEl.value;
            o.textEl.value = out; o.textEl.dispatchEvent(new Event('input'));
            o.undoBtn.classList.remove('hidden');
            if(o.setStatus) o.setStatus('');
          }catch(e){ if(o.setStatus) o.setStatus(friendlyTtsError(e)); else window.uiNotify(friendlyTtsError(e)); }
          finally{ o.btn.disabled = false; }
        });
        o.undoBtn.addEventListener('click', function(){
          if(original != null){ o.textEl.value = original; o.textEl.dispatchEvent(new Event('input')); original = null; o.undoBtn.classList.add('hidden'); }
        });
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
      // === SRT / SUBTITLE (timing proporsional dari durasi audio) ===
      function srtTime(sec){
        var ms=Math.max(0,Math.round(sec*1000));
        var h=Math.floor(ms/3600000); ms-=h*3600000;
        var m=Math.floor(ms/60000); ms-=m*60000;
        var s=Math.floor(ms/1000); ms-=s*1000;
        var p=function(n,l){ n=String(n); while(n.length<l) n='0'+n; return n; };
        return p(h,2)+':'+p(m,2)+':'+p(s,2)+','+p(ms,3);
      }
      window.buildSRT = function(text, durationSec){
        var words=String(text||'').replace(/\s+/g,' ').trim().split(' ').filter(Boolean);
        var cues=[], cur='';
        words.forEach(function(w){
          if((cur+' '+w).trim().length>42 && cur){ cues.push(cur.trim()); cur=w; }
          else cur=(cur+' '+w).trim();
          if(/[.!?]$/.test(w) && cur.length>=18){ cues.push(cur.trim()); cur=''; }
        });
        if(cur.trim()) cues.push(cur.trim());
        if(!cues.length) return '';
        var totalChars=cues.reduce(function(a,c){return a+c.length;},0)||1;
        var out=[], tcur=0;
        cues.forEach(function(c,i){
          var dur=(durationSec||0)*(c.length/totalChars);
          var start=tcur, end=tcur+dur; tcur=end;
          out.push((i+1)+'\n'+srtTime(start)+' --> '+srtTime(end)+'\n'+c+'\n');
        });
        return out.join('\n');
      };
      window.wavDurationSec = async function(wavBlob){
        try{ var buf=await wavBlob.arrayBuffer(); var v=new DataView(buf);
          var rate=v.getUint32(24,true); var dataSize=v.getUint32(40,true);
          return dataSize/(rate*2); }catch(e){ return 0; }
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
      window.relayCfg = function(){
        try{ const c=JSON.parse(localStorage.getItem('vo_relay')||'null'); return (c && c.url && c.token) ? c : null; }catch(e){ return null; }
      };
      window.relayToast = function(msg){
        let el=document.getElementById('relay-toast');
        if(!el){ el=document.createElement('div'); el.id='relay-toast'; el.className='panel'; el.setAttribute('role','status');
          el.style.cssText='position:fixed;right:1rem;bottom:1rem;z-index:10001;padding:.6rem .9rem;font-size:.85rem;max-width:80vw;word-break:break-all';
          document.body.appendChild(el); }
        el.textContent=msg; el.classList.remove('hidden'); clearTimeout(el._t); el._t=setTimeout(()=>el.classList.add('hidden'),4000);
      };
      window.relaySend = async function(blob, filename){
        const c=window.relayCfg(); if(!c) return false;
        try{
          const u=c.url.replace(/\/+$/,'')+'/simpan?nama='+encodeURIComponent(filename)+'&sub='+encodeURIComponent(c.sub||'');
          const r=await fetch(u,{method:'POST',headers:{'X-Relay-Token':c.token,'Content-Type':blob.type||'application/octet-stream'},body:blob});
          const j=await r.json().catch(()=>({}));
          if(r.ok && j.ok){ window.relayToast(t('relay.saved')+' '+(c.sub?c.sub+'/':'')+(j.nama||filename)); return true; }
        }catch(e){}
        window.relayToast(t('relay.fail')); return false;
      };
      window.relayAuto = function(blob, filename){ if(window.relayCfg()) window.relaySend(blob, filename); };
      window.downloadBlob = async function(blob, filename){
        if(window.relayCfg() && await window.relaySend(blob, filename)) return;
        if(window.__isIOS && window.__isIOS()){ await window.__iosShareOrSaveBlob(blob, filename); return; }
        const url=URL.createObjectURL(blob); const a=document.createElement('a');
        a.href=url; a.download=filename; document.body.appendChild(a); a.click(); a.remove();
        setTimeout(()=>URL.revokeObjectURL(url),4000);
      };

      // === TTS CORE ===
      window.ttsModel = function(){ return localStorage.getItem('vo_model')==='pro' ? 'gemini-2.5-pro-preview-tts' : 'gemini-2.5-flash-preview-tts'; };
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
            speechConfig: Object.assign(
              { voiceConfig: { prebuiltVoiceConfig: { voiceName: voiceId } } },
              opts.languageCode ? { languageCode: opts.languageCode } : {}
            )
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
      async function generatePcm(text, voiceId, model, languageCode){
        const apiKey="";
        const apiUrl='https://generativelanguage.googleapis.com/v1beta/models/'+model+':generateContent?key='+apiKey;
        const payload={contents:[{parts:[{text}]}],generationConfig:{responseModalities:["AUDIO"],speechConfig:Object.assign({voiceConfig:{prebuiltVoiceConfig:{voiceName:voiceId}}}, languageCode?{languageCode:languageCode}:{})}};
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
            try{ const r=await generatePcm(chunks[i], voiceId, model, opts.languageCode); pcmParts[i]=r.pcm; rate=r.rate; ok=true; }
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
            speechConfig: Object.assign(
              { multiSpeakerVoiceConfig:{ speakerVoiceConfigs: spk.map(s=>({
                speaker:s.name, voiceConfig:{ prebuiltVoiceConfig:{ voiceName:s.voice } } })) } },
              opts.languageCode ? { languageCode: opts.languageCode } : {}
            ) } };
        const resp=await fetch(apiUrl,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
        if(!resp.ok){ if(resp.status===429&&retries>0){ await new Promise(r=>setTimeout(r,delay)); return generateDialog(script,speakers,{model,retries:retries-1,delay:delay*2}); }
          const e=await resp.json().catch(()=>({})); throw new Error('API '+resp.status+': '+((e&&e.error&&e.error.message)||'error')); }
        const result=await resp.json(); const part=result&&result.candidates&&result.candidates[0]&&result.candidates[0].content&&result.candidates[0].content.parts&&result.candidates[0].content.parts[0];
        if(!part||!part.inlineData||!part.inlineData.data) throw new Error('No audio data');
        const rate=parseInt((part.inlineData.mimeType.match(/rate=(\d+)/)||[])[1],10)||24000;
        return { blob: pcmToWav(base64ToArrayBuffer(part.inlineData.data), rate), rate };
      }

      async function translateText(text, targetLangLabel, opts){
        opts = opts || {};
        const model = opts.model || 'gemini-2.5-flash';
        let retries = opts.retries==null ? 3 : opts.retries;
        let delay = opts.delay || 1000;
        const apiKey = "";
        const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/' + model + ':generateContent?key=' + apiKey;
        const prompt = 'Translate the text below into ' + targetLangLabel + '. '
          + 'Preserve line breaks exactly. If a line starts with a speaker label like "Name:", keep the label unchanged and translate only the spoken text after it. '
          + 'Output ONLY the translation, with no notes, comments, or quotation marks.\n\n' + text;
        const payload = { contents:[{ parts:[{ text: prompt }] }] };
        const resp = await fetch(apiUrl,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
        if(!resp.ok){
          if(resp.status===429 && retries>0){ await new Promise(r=>setTimeout(r,delay)); return translateText(text,targetLangLabel,{model,retries:retries-1,delay:delay*2}); }
          const e=await resp.json().catch(()=>({})); throw new Error('API '+resp.status+': '+((e&&e.error&&e.error.message)||'error'));
        }
        const r=await resp.json();
        const part=r && r.candidates && r.candidates[0] && r.candidates[0].content && r.candidates[0].content.parts && r.candidates[0].content.parts[0];
        const out = part && part.text;
        if(!out) throw new Error('No translation');
        return out.trim();
      }

      // === BAHASA OUTPUT TTS (didukung Gemini TTS) ===
      // Sumber: ai.google.dev/gemini-api/docs/speech-generation (diverifikasi 2026-09-15).
      // code = kode bahasa resmi (dipakai untuk languageCode); label = nama untuk dropdown. Urut alfabet.
      // Auto-detect tetap jadi default (opsi kosong di UI).
      window.TTS_LANGS = [
        {code:'af',label:'Afrikaans'},{code:'sq',label:'Shqip (Albanian)'},
        {code:'am',label:'አማርኛ (Amharic)'},{code:'ar',label:'العربية (Arabic)'},
        {code:'hy',label:'Հայերեն (Armenian)'},{code:'az',label:'Azərbaycan (Azerbaijani)'},
        {code:'eu',label:'Euskara (Basque)'},{code:'be',label:'Беларуская (Belarusian)'},
        {code:'bn',label:'বাংলা (Bengali)'},{code:'bg',label:'Български (Bulgarian)'},
        {code:'ca',label:'Català (Catalan)'},{code:'ceb',label:'Cebuano'},
        {code:'cmn',label:'中文 (Mandarin)'},{code:'hr',label:'Hrvatski (Croatian)'},
        {code:'cs',label:'Čeština (Czech)'},{code:'da',label:'Dansk (Danish)'},
        {code:'nl',label:'Nederlands (Dutch)'},{code:'en',label:'English'},
        {code:'et',label:'Eesti (Estonian)'},{code:'fil',label:'Filipino'},
        {code:'fi',label:'Suomi (Finnish)'},{code:'fr',label:'Français (French)'},
        {code:'gl',label:'Galego (Galician)'},{code:'ka',label:'ქართული (Georgian)'},
        {code:'de',label:'Deutsch (German)'},{code:'el',label:'Ελληνικά (Greek)'},
        {code:'gu',label:'ગુજરાતી (Gujarati)'},{code:'ht',label:'Kreyòl Ayisyen (Haitian Creole)'},
        {code:'he',label:'עברית (Hebrew)'},{code:'hi',label:'हिन्दी (Hindi)'},
        {code:'hu',label:'Magyar (Hungarian)'},{code:'is',label:'Íslenska (Icelandic)'},
        {code:'id',label:'Bahasa Indonesia'},{code:'it',label:'Italiano (Italian)'},
        {code:'ja',label:'日本語 (Japanese)'},{code:'jv',label:'Basa Jawa (Javanese)'},
        {code:'kn',label:'ಕನ್ನಡ (Kannada)'},{code:'kok',label:'कोंकणी (Konkani)'},
        {code:'ko',label:'한국어 (Korean)'},{code:'la',label:'Latina (Latin)'},
        {code:'lv',label:'Latviešu (Latvian)'},{code:'lt',label:'Lietuvių (Lithuanian)'},
        {code:'lb',label:'Lëtzebuergesch (Luxembourgish)'},{code:'mk',label:'Македонски (Macedonian)'},
        {code:'mai',label:'मैथिली (Maithili)'},{code:'mg',label:'Malagasy'},
        {code:'ms',label:'Bahasa Melayu (Malay)'},{code:'ml',label:'മലയാളം (Malayalam)'},
        {code:'mr',label:'मराठी (Marathi)'},{code:'mn',label:'Монгол (Mongolian)'},
        {code:'ne',label:'नेपाली (Nepali)'},{code:'nb',label:'Norsk Bokmål (Norwegian)'},
        {code:'nn',label:'Norsk Nynorsk (Norwegian)'},{code:'or',label:'ଓଡ଼ିଆ (Odia)'},
        {code:'ps',label:'پښتو (Pashto)'},{code:'fa',label:'فارسی (Persian)'},
        {code:'pl',label:'Polski (Polish)'},{code:'pt',label:'Português (Portuguese)'},
        {code:'pa',label:'ਪੰਜਾਬੀ (Punjabi)'},{code:'ro',label:'Română (Romanian)'},
        {code:'ru',label:'Русский (Russian)'},{code:'sr',label:'Српски (Serbian)'},
        {code:'sd',label:'سنڌي (Sindhi)'},{code:'si',label:'සිංහල (Sinhala)'},
        {code:'sk',label:'Slovenčina (Slovak)'},{code:'sl',label:'Slovenščina (Slovenian)'},
        {code:'es',label:'Español (Spanish)'},{code:'sw',label:'Kiswahili (Swahili)'},
        {code:'sv',label:'Svenska (Swedish)'},{code:'ta',label:'தமிழ் (Tamil)'},
        {code:'te',label:'తెలుగు (Telugu)'},{code:'th',label:'ไทย (Thai)'},
        {code:'tr',label:'Türkçe (Turkish)'},{code:'uk',label:'Українська (Ukrainian)'},
        {code:'ur',label:'اردو (Urdu)'},{code:'vi',label:'Tiếng Việt (Vietnamese)'}
      ];
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

      // Template naskah siap-pakai (per bahasa)
      window.SCRIPT_TEMPLATES = [
        {key:'intro', text:{
          en:"Hey everyone, welcome back to the channel! In today's video, we're diving into something really exciting. Make sure to stick around till the end.",
          id:"Halo semuanya, selamat datang kembali di channel ini! Di video kali ini kita akan membahas sesuatu yang seru banget. Tonton sampai habis ya.",
          ms:"Helo semua, selamat kembali ke channel ini! Dalam video kali ini kita akan bincangkan sesuatu yang sangat menarik. Tonton sampai habis ya."}},
        {key:'iklan', text:{
          en:"Tired of the same old routine? Meet the solution you've been waiting for. Limited stock, special price today only. Order now before it's gone!",
          id:"Bosan dengan cara lama? Inilah solusi yang kamu tunggu-tunggu. Stok terbatas, harga spesial hanya hari ini. Pesan sekarang sebelum kehabisan!",
          ms:"Bosan dengan cara lama? Inilah penyelesaian yang anda tunggu. Stok terhad, harga istimewa hari ini sahaja. Pesan sekarang sebelum kehabisan!"}},
        {key:'narasi', text:{
          en:"In a world moving faster every day, one simple idea can change everything. This is a story about courage, patience, and the power of never giving up.",
          id:"Di dunia yang bergerak makin cepat setiap hari, satu ide sederhana bisa mengubah segalanya. Ini kisah tentang keberanian, kesabaran, dan kekuatan untuk tidak menyerah.",
          ms:"Dalam dunia yang bergerak semakin pantas, satu idea mudah boleh mengubah segalanya. Ini kisah tentang keberanian, kesabaran, dan kekuatan untuk tidak berputus asa."}},
        {key:'dongeng', text:{
          en:"Once upon a time, in a land far beyond the mountains, there lived a little girl with a very big dream.",
          id:"Pada suatu masa, di sebuah negeri yang jauh di balik pegunungan, hiduplah seorang gadis kecil dengan mimpi yang sangat besar.",
          ms:"Pada suatu masa dahulu, di sebuah negeri jauh di sebalik gunung, tinggal seorang gadis kecil dengan impian yang sangat besar."}}
      ];

      // Template dialog (turns; s=1 -> speaker 1, s=2 -> speaker 2)
      window.DIALOG_TEMPLATES = [
        {key:'podcast', turns:[
          {s:1,text:{en:"Welcome back to the show! Today we have a very special guest.",id:"Selamat datang kembali! Hari ini kita kedatangan tamu spesial.",ms:"Selamat kembali! Hari ini kita ada tetamu istimewa."}},
          {s:2,text:{en:"Thanks for having me, I'm really excited to be here.",id:"Terima kasih sudah mengundang, aku senang sekali bisa di sini.",ms:"Terima kasih menjemput saya, saya sangat teruja berada di sini."}},
          {s:1,text:{en:"So tell us, how did your journey begin?",id:"Jadi, ceritakan, bagaimana perjalananmu dimulai?",ms:"Jadi, ceritakan, bagaimana perjalanan anda bermula?"}},
          {s:2,text:{en:"It all started with one simple idea and a lot of hard work.",id:"Semua bermula dari satu ide sederhana dan kerja keras.",ms:"Semuanya bermula dengan satu idea mudah dan kerja keras."}}
        ]},
        {key:'interview', turns:[
          {s:1,text:{en:"Good morning! Can you introduce yourself to our audience?",id:"Selamat pagi! Bisa perkenalkan diri ke pemirsa kami?",ms:"Selamat pagi! Boleh perkenalkan diri kepada penonton kami?"}},
          {s:2,text:{en:"Of course. My name is Alex and I work as a designer.",id:"Tentu. Nama saya Alex dan saya bekerja sebagai desainer.",ms:"Sudah tentu. Nama saya Alex dan saya bekerja sebagai pereka."}},
          {s:1,text:{en:"What do you enjoy most about your work?",id:"Apa yang paling kamu sukai dari pekerjaanmu?",ms:"Apa yang paling anda suka tentang kerja anda?"}},
          {s:2,text:{en:"Seeing an idea come to life makes it all worth it.",id:"Melihat ide menjadi nyata membuat semuanya sepadan.",ms:"Melihat idea menjadi kenyataan menjadikan semuanya berbaloi."}}
        ]},
        {key:'review', turns:[
          {s:1,text:{en:"Have you tried the new product everyone is talking about?",id:"Kamu sudah coba produk baru yang lagi ramai dibahas?",ms:"Anda dah cuba produk baru yang ramai perkatakan?"}},
          {s:2,text:{en:"Yes! Honestly, the quality surprised me for the price.",id:"Sudah! Jujur, kualitasnya bikin kaget untuk harga segitu.",ms:"Sudah! Jujur, kualitinya buat saya terkejut untuk harga itu."}},
          {s:1,text:{en:"So would you recommend it to our viewers?",id:"Jadi, kamu rekomendasikan ke pemirsa kita?",ms:"Jadi, anda syorkan kepada penonton kita?"}},
          {s:2,text:{en:"Absolutely, especially if you want great value.",id:"Sangat, apalagi kalau kamu mau nilai terbaik.",ms:"Sudah tentu, terutama jika anda mahu nilai terbaik."}}
        ]},
        {key:'casual', turns:[
          {s:1,text:{en:"Hey, long time no see! How have you been?",id:"Hei, lama nggak ketemu! Apa kabar?",ms:"Hai, lama tak jumpa! Apa khabar?"}},
          {s:2,text:{en:"Pretty good, just busy with a new project lately.",id:"Baik, cuma lagi sibuk sama proyek baru akhir-akhir ini.",ms:"Baik, cuma sibuk dengan projek baru kebelakangan ini."}},
          {s:1,text:{en:"That sounds exciting, tell me more!",id:"Kedengarannya seru, cerita dong!",ms:"Bunyinya menarik, ceritalah lagi!"}},
          {s:2,text:{en:"Let's grab a coffee and I'll tell you everything.",id:"Yuk ngopi, nanti aku ceritain semuanya.",ms:"Jom minum kopi, nanti saya ceritakan semuanya."}}
        ]}
      ];

      // Kamus pengucapan (perbaiki nama/istilah salah baca) — disimpan per browser
      window.getPron = function(){ try{ return JSON.parse(localStorage.getItem('vo_pron')||'[]'); }catch(e){ return []; } };
      window.setPron = function(a){ localStorage.setItem('vo_pron', JSON.stringify(a)); };
      function applyPron(text){
        var pairs = window.getPron(); var out = String(text||'');
        pairs.forEach(function(p){
          if(!p.from) return;
          var re = new RegExp(p.from.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'), 'gi');
          out = out.replace(re, (p.to||''));
        });
        return out;
      }
      window.openPronModal = function(){
        var pairs = window.getPron(); if(!pairs.length) pairs = [{from:'',to:''}];
        var ov=document.createElement('div'); ov.className='ui-modal';
        var box=document.createElement('div'); box.className='ui-modal-box panel'; box.style.maxWidth='460px';
        var h=document.createElement('h3'); h.style.marginTop='0'; h.textContent=t('pron.title'); box.appendChild(h);
        var hint=document.createElement('p'); hint.style.cssText='color:var(--muted);font-size:.82rem;margin:.2rem 0 1rem'; hint.textContent=t('pron.hint'); box.appendChild(hint);
        var list=document.createElement('div');
        function addRow(p){
          var row=document.createElement('div'); row.style.cssText='display:flex;gap:.4rem;margin-bottom:.4rem';
          var f=document.createElement('input'); f.className='field pr-from'; f.placeholder=t('pron.from'); f.value=p.from||'';
          var to=document.createElement('input'); to.className='field pr-to'; to.placeholder=t('pron.to'); to.value=p.to||'';
          var del=document.createElement('button'); del.className='chip'; del.textContent='✕';
          del.addEventListener('click',function(){ row.remove(); });
          row.append(f,to,del); list.appendChild(row);
        }
        pairs.forEach(addRow); box.appendChild(list);
        var add=document.createElement('button'); add.className='chip'; add.style.marginTop='.2rem'; add.textContent='+ '+t('pron.add');
        add.addEventListener('click',function(){ addRow({from:'',to:''}); }); box.appendChild(add);
        var foot=document.createElement('div'); foot.style.cssText='display:flex;gap:.5rem;justify-content:flex-end;margin-top:1.25rem';
        var cancel=document.createElement('button'); cancel.className='chip'; cancel.textContent=t('common.cancel');
        var save=document.createElement('button'); save.className='btn-primary'; save.textContent=t('common.ok');
        cancel.addEventListener('click',function(){ ov.remove(); });
        save.addEventListener('click',function(){
          var out=[]; list.querySelectorAll('.pr-from').forEach(function(fEl,i){
            var toEl=list.querySelectorAll('.pr-to')[i];
            if(fEl.value.trim()) out.push({from:fEl.value.trim(), to:toEl.value.trim()});
          });
          window.setPron(out); ov.remove();
        });
        foot.append(cancel,save); box.appendChild(foot);
        ov.appendChild(box); ov.addEventListener('click',function(e){ if(e.target===ov) ov.remove(); });
        document.body.appendChild(ov);
      };

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

      // === KUALITAS MODEL + DARK MODE ===
      (function(){
        // kualitas
        const quals=document.querySelectorAll('.qual-btn');
        function syncQual(){ const m=localStorage.getItem('vo_model')||'flash'; quals.forEach(b=>b.classList.toggle('active', b.dataset.model===m)); }
        quals.forEach(b=>b.addEventListener('click',()=>{ localStorage.setItem('vo_model', b.dataset.model); syncQual(); }));
        syncQual();
        const qHelp=document.getElementById('q-help');
        qHelp && qHelp.addEventListener('click',()=>window.uiNotify(t('q.help')));
        // dark mode
        const tgl=document.getElementById('theme-toggle');
        function applyTheme(){ const dark=localStorage.getItem('vo_theme')==='dark'; document.documentElement.classList.toggle('dark', dark);
          if(tgl){ tgl.querySelector('i').className = dark?'fas fa-sun':'fas fa-moon'; } }
        tgl && tgl.addEventListener('click',()=>{ localStorage.setItem('vo_theme', localStorage.getItem('vo_theme')==='dark'?'light':'dark'); applyTheme(); });
        applyTheme();
      })();

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

      // === RELAY PANEL (Ctrl+Alt+Shift+R) ===
      (function(){
        const chip=document.createElement('button'); chip.id='relay-chip'; chip.type='button'; chip.className='chip hidden';
        chip.style.cssText='position:fixed;left:1rem;bottom:1rem;z-index:10001';
        document.body.appendChild(chip);
        function sync(){ const c=window.relayCfg(); chip.classList.toggle('hidden', !c); if(c) chip.textContent='⇪ '+t('relay.chip')+(c.sub?' · '+c.sub:''); }
        function open(){
          const c=window.relayCfg()||{};
          const ov=document.createElement('div'); ov.className='ui-modal'; ov.id='relay-panel'; ov.style.zIndex='10002';
          ov.innerHTML='<div class="ui-modal-box panel"><h3 style="margin-top:0"></h3>'
            +'<label class="r-l1"></label><input id="relay-url" class="field" autocomplete="off">'
            +'<label class="r-l2"></label><input id="relay-token" class="field" type="password" autocomplete="off">'
            +'<label class="r-l3"></label><input id="relay-sub" class="field" autocomplete="off">'
            +'<p class="r-msg" style="min-height:1.2em"></p>'
            +'<div style="display:flex;gap:.5rem;justify-content:flex-end;flex-wrap:wrap"><button id="relay-off" class="chip"></button><button id="relay-cancel" class="chip"></button><button id="relay-pair" class="chip"></button><button id="relay-save" class="btn-primary"></button></div></div>';
          ov.querySelector('h3').textContent=t('relay.title');
          ov.querySelector('.r-l1').textContent=t('relay.url');
          ov.querySelector('.r-l2').textContent=t('relay.token');
          ov.querySelector('.r-l3').textContent=t('relay.sub');
          ov.querySelector('#relay-off').textContent=t('relay.off');
          ov.querySelector('#relay-cancel').textContent=t('common.cancel');
          ov.querySelector('#relay-save').textContent=t('relay.save');
          ov.querySelector('#relay-pair').textContent=t('relay.pair');
          const url=ov.querySelector('#relay-url'), tok=ov.querySelector('#relay-token'), sub=ov.querySelector('#relay-sub'), msg=ov.querySelector('.r-msg');
          url.value=c.url||''; tok.value=c.token||''; sub.value=c.sub||'';
          let pairId=0;
          const close=()=>{ pairId++; ov.remove(); sync(); };
          const baseUrl=()=>url.value.trim().replace(/\/+$/,'');
          async function simpan(){
            const cfg={ url:baseUrl(), token:tok.value.trim(), sub:sub.value.trim().replace(/[^A-Za-z0-9._-]+/g,'_').slice(0,60) };
            msg.textContent='...';
            try{ const r=await fetch(cfg.url+'/ping',{headers:{'X-Relay-Token':cfg.token}}); const j=await r.json();
              if(r.ok && j.ok){ localStorage.setItem('vo_relay', JSON.stringify(cfg)); close(); window.relayToast('⇪ '+t('relay.chip')+' ON'+(cfg.sub?' · '+cfg.sub:'')); return; } }catch(e){}
            msg.textContent=t('relay.pingFail');
          }
          ov.querySelector('#relay-cancel').addEventListener('click',close);
          ov.querySelector('#relay-off').addEventListener('click',()=>{ localStorage.removeItem('vo_relay'); close(); });
          ov.querySelector('#relay-save').addEventListener('click', simpan);
          ov.querySelector('#relay-pair').addEventListener('click', async ()=>{
            const my=++pairId; msg.textContent='...';
            try{
              const r=await fetch(baseUrl()+'/pasang/mulai',{method:'POST'}); const j=await r.json();
              if(!(r.ok && j.ok)) throw new Error('mulai');
              msg.textContent=t('relay.pairCode')+' '+j.code;
              for(let i=0;i<150 && my===pairId;i++){
                await new Promise(res=>setTimeout(res,2000));
                if(my!==pairId) return;
                const k=await fetch(baseUrl()+'/pasang/cek?id='+encodeURIComponent(j.id)).then(x=>x.json()).catch(()=>({}));
                if(k.siap && k.token){ tok.value=k.token; await simpan(); return; }
              }
              if(my===pairId) msg.textContent=t('relay.pingFail');
            }catch(e){ if(my===pairId) msg.textContent=t('relay.pingFail'); }
          });
          document.body.appendChild(ov); url.focus();
        }
        document.addEventListener('keydown', e=>{ if(e.ctrlKey && e.altKey && e.shiftKey && e.code==='KeyR'){ e.preventDefault(); open(); } });
        chip.addEventListener('click', open);
        document.addEventListener('vo-lang-changed', sync);
        sync();
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
        const srt=document.getElementById('vo-srt');
        const save=document.getElementById('vo-save');
        const statusText=document.getElementById('vo-status-text');
        const wave=document.getElementById('vo-wave');
        const counter=document.getElementById('vo-counter');
        const langSel=document.getElementById('vo-lang');
        let lastBlob=null, lastText='';

        fillLangSelect(langSel);
        document.addEventListener('vo-lang-changed', ()=>fillLangSelect(langSel));
        wireTranslate({ textEl:text, langSel, btn:document.getElementById('vo-translate'), undoBtn:document.getElementById('vo-undo'), setStatus:(m)=>{ statusText.textContent=m; } });

        fillVoiceSelect(sel, true);
        document.addEventListener('vo-lang-changed', ()=>fillVoiceSelect(sel, true));

        const tpl=document.getElementById('vo-template');
        function renderTemplates(){
          const cur=tpl.value;
          tpl.innerHTML='<option value="">'+t('tpl.choose')+'</option>';
          (window.SCRIPT_TEMPLATES||[]).forEach(x=>{ const o=document.createElement('option'); o.value=x.key; o.textContent=t('tpl.'+x.key); tpl.appendChild(o); });
          tpl.value=cur;
        }
        renderTemplates();
        document.addEventListener('vo-lang-changed', renderTemplates);
        tpl.addEventListener('change',()=>{
          const x=(window.SCRIPT_TEMPLATES||[]).find(s=>s.key===tpl.value);
          if(x){ text.value=x.text[LANG]||x.text.en; text.dispatchEvent(new Event('input')); }
        });
        document.getElementById('vo-pron-btn').addEventListener('click',()=>window.openPronModal());

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
          const spoken=applyPron(main);
          const finalText = dir ? (dir+': '+spoken) : spoken;
          gen.disabled=true; statusText.textContent=t('vo.generating'); wave.style.display='flex'; wave.classList.add('animate');
          audio.style.display='none'; dl.classList.add('hidden'); mp3.classList.add('hidden'); srt.classList.add('hidden'); save.classList.add('hidden');
          try{
            const r=await generateSpeech(finalText, sel.value, {model:window.ttsModel(), languageCode: langSel.value || undefined});
            lastBlob=r.blob; lastText=main; window.relayAuto(r.blob, 'vo-'+Date.now()+'.wav');
            audio.src=URL.createObjectURL(r.blob); audio.style.display='block'; statusText.textContent=''; wave.classList.remove('animate'); wave.style.display='none';
            dl.classList.remove('hidden'); mp3.classList.remove('hidden'); srt.classList.remove('hidden'); save.classList.remove('hidden');
          }catch(e){ statusText.textContent=friendlyTtsError(e); wave.classList.remove('animate'); wave.style.display='none'; }
          finally{ gen.disabled=false; }
        });

        dl.addEventListener('click',()=>{ if(lastBlob) window.downloadBlob(lastBlob, 'vo-'+Date.now()+'.wav'); });
        mp3.addEventListener('click', async ()=>{ if(lastBlob && window.wavBlobToMp3){ const m=await window.wavBlobToMp3(lastBlob); window.downloadBlob(m,'vo-'+Date.now()+'.mp3'); } });
        srt.addEventListener('click', async ()=>{ if(!lastBlob) return; const dur=await window.wavDurationSec(lastBlob); const s=window.buildSRT(lastText,dur); window.downloadBlob(new Blob([s],{type:'text/plain'}),'vo-'+Date.now()+'.srt'); });
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
            try{ if(playing) playing.pause(); const r=await generateSpeech(t('lib.previewText'), id, {model:window.ttsModel()}); playing=new Audio(URL.createObjectURL(r.blob)); playing.play(); }
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
        const langSel=document.getElementById('dlg-lang');
        fillVoiceSelect(s1, false); fillVoiceSelect(s2, false);
        if(window.VOICES && window.VOICES[1]) s2.value=window.VOICES[1].id;
        document.addEventListener('vo-lang-changed', ()=>{ fillVoiceSelect(s1, false); fillVoiceSelect(s2, false); });
        fillLangSelect(langSel);
        document.addEventListener('vo-lang-changed', ()=>fillLangSelect(langSel));
        wireTranslate({ textEl:scr, langSel, btn:document.getElementById('dlg-translate'), undoBtn:document.getElementById('dlg-undo'), setStatus:(m)=>{ status.textContent=m; } });
        const dtpl=document.getElementById('dlg-template');
        function renderDtpl(){ const cur=dtpl.value; dtpl.innerHTML='<option value="">'+t('dtpl.choose')+'</option>';
          (window.DIALOG_TEMPLATES||[]).forEach(x=>{ const o=document.createElement('option'); o.value=x.key; o.textContent=t('dtpl.'+x.key); dtpl.appendChild(o); }); dtpl.value=cur; }
        renderDtpl();
        document.addEventListener('vo-lang-changed', renderDtpl);
        dtpl.addEventListener('change',()=>{
          const x=(window.DIALOG_TEMPLATES||[]).find(s=>s.key===dtpl.value); if(!x) return;
          scr.value=x.turns.map(tn=>(tn.s===1?(n1.value||'Host'):(n2.value||'Guest'))+': '+(tn.text[LANG]||tn.text.en)).join('\n');
        });
        gen.addEventListener('click', async ()=>{
          const script=scr.value.trim(); if(!script){ window.uiNotify(t('dlg.errEmpty')); return; }
          gen.disabled=true; status.textContent=t('vo.generating'); dl.classList.add('hidden'); mp3.classList.add('hidden'); audio.style.display='none';
          try{ const r=await generateDialog(applyPron(script), [{name:n1.value||'Host',voice:s1.value},{name:n2.value||'Guest',voice:s2.value}], {model:window.ttsModel(), languageCode: langSel.value || undefined});
            lastBlob=r.blob; window.relayAuto(r.blob, 'dialog-'+Date.now()+'.wav'); audio.src=URL.createObjectURL(r.blob); audio.style.display='block'; status.textContent=''; dl.classList.remove('hidden'); mp3.classList.remove('hidden'); }
          catch(e){ status.textContent=friendlyTtsError(e); } finally{ gen.disabled=false; }
        });
        dl.addEventListener('click',()=>{ if(lastBlob) window.downloadBlob(lastBlob, 'dialog-'+Date.now()+'.wav'); });
        mp3.addEventListener('click', async ()=>{ if(lastBlob && window.wavBlobToMp3){ const m=await window.wavBlobToMp3(lastBlob); window.downloadBlob(m,'dialog-'+Date.now()+'.mp3'); } });
      })();

      // === TAB: LONGFORM ===
      (function(){
        const txt=document.getElementById('lf-text'), sel=document.getElementById('lf-voice');
        const gen=document.getElementById('lf-generate'), prog=document.getElementById('lf-progress');
        const audio=document.getElementById('lf-audio'), dl=document.getElementById('lf-download'), mp3=document.getElementById('lf-mp3'), srt=document.getElementById('lf-srt');
        let lastBlob=null, lastText='';
        const langSel=document.getElementById('lf-lang');
        fillVoiceSelect(sel, true);
        document.addEventListener('vo-lang-changed', ()=>fillVoiceSelect(sel, true));
        fillLangSelect(langSel);
        document.addEventListener('vo-lang-changed', ()=>fillLangSelect(langSel));
        wireTranslate({ textEl:txt, langSel, btn:document.getElementById('lf-translate'), undoBtn:document.getElementById('lf-undo'), setStatus:(m)=>{ prog.textContent=m; } });
        gen.addEventListener('click', async ()=>{
          const text=txt.value.trim(); if(!text){ window.uiNotify(t('lf.errEmpty')); return; }
          gen.disabled=true; dl.classList.add('hidden'); mp3.classList.add('hidden'); srt.classList.add('hidden'); audio.style.display='none'; prog.textContent=t('lf.starting');
          try{ lastText=text; const r=await generateLongform(applyPron(text), sel.value, {model:window.ttsModel(), languageCode: langSel.value || undefined, onProgress:(d,tt)=>{ prog.textContent=t('lf.segment')+' '+d+'/'+tt; }});
            lastBlob=r.blob; window.relayAuto(r.blob, 'longform-'+Date.now()+'.wav'); audio.src=URL.createObjectURL(r.blob); audio.style.display='block'; prog.textContent=r.segments+' '+t('lf.done'); dl.classList.remove('hidden'); mp3.classList.remove('hidden'); srt.classList.remove('hidden'); }
          catch(e){ prog.textContent=friendlyTtsError(e); } finally{ gen.disabled=false; }
        });
        dl.addEventListener('click',()=>{ if(lastBlob) window.downloadBlob(lastBlob, 'longform-'+Date.now()+'.wav'); });
        mp3.addEventListener('click', async ()=>{ if(lastBlob && window.wavBlobToMp3){ const m=await window.wavBlobToMp3(lastBlob); window.downloadBlob(m,'longform-'+Date.now()+'.mp3'); } });
        srt.addEventListener('click', async ()=>{ if(!lastBlob) return; const dur=await window.wavDurationSec(lastBlob); const s=window.buildSRT(lastText,dur); window.downloadBlob(new Blob([s],{type:'text/plain'}),'longform-'+Date.now()+'.srt'); });
      })();
    });
  