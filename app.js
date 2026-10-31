'use strict';
import en from './en.mjs';
import sv from './sv.mjs';
import {replaceDesignLine} from './selection.mjs';
import {submitEnquiry} from './submission.mjs';
let selectedDesign=null, managedLine='';
function syncDesign(){if(!selectedDesign||!form)return;const next=(lang==='sv'?'Jag är intresserad av designexemplet: ':'I am interested in the design example: ')+t(selectedDesign)+'.';form.elements.message.value=replaceDesignLine(form.elements.message.value,managedLine,next);managedLine=next;}
let lang=document.documentElement.lang==='en'?'en':'sv';
const t=key=>(lang==='en'?en[key]:sv[key])||key;
const menu=document.querySelector('#menu');
function closeMenu(){document.querySelector('#navigation')?.classList.remove('open');menu?.setAttribute('aria-expanded','false');if(menu)menu.setAttribute('aria-label',lang==='sv'?'Öppna meny':'Open menu')}
function setLanguage(value){lang=value;document.documentElement.lang=lang;document.querySelectorAll('[data-t]').forEach(el=>{el.textContent=t(el.dataset.t)});document.querySelectorAll('[data-alt]').forEach(el=>el.alt=t(el.dataset.alt));document.querySelectorAll('[data-lang]').forEach(el=>el.removeAttribute('aria-pressed'));document.querySelectorAll('[data-t=privacy]').forEach(el=>{if(el.tagName==='A')el.href=lang==='en'?'/en/privacy.html':'/privacy.html'});document.querySelectorAll('[data-t=back],.privacy-main ~ footer a,.privacy-page .brand').forEach(el=>el.href=lang==='en'?'/en/#contact':'/#contact');document.title=document.querySelector('.privacy-main')?(lang==='sv'?'Integritetsinformation — MHB Global Sweden':'Privacy information — MHB Global Sweden'):(lang==='sv'?'Webbplatser, appar & uppgraderingar — MHB Global Sweden':'Websites, apps & upgrades — MHB Global Sweden');document.querySelector('#navigation')?.setAttribute('aria-label',lang==='sv'?'Huvudmeny':'Main navigation');closeMenu();syncDesign();updateSEO();if(document.querySelector('[aria-invalid="true"]'))validate(false);}
const urlLang=new URLSearchParams(location.search).get('lang');if(['en','sv'].includes(urlLang))lang=urlLang;
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();setLanguage(b.dataset.lang)}));
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';document.querySelector('#navigation').classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',lang==='sv'?(open?'Stäng meny':'Öppna meny'):(open?'Close menu':'Open menu'))});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
document.querySelectorAll('.close-dialog').forEach(b=>b.addEventListener('click',()=>{if(b.closest('dialog').id==='request-dialog'&&sending)return;b.closest('dialog').close()}));document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d){if(d.id==='request-dialog'&&sending)return;const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}}));
const samples={cafe:{name:'GRÖN & GOD',sv:['En liten paus. En riktigt god stund.','En varm mötesplats för kaffe, samtal och något gott.','Kaffe med omtanke','En kopp att stanna upp med.','Nybakat & enkelt','Små smaker som gör dagen.','En plats att mötas','Ta med en vän eller en bok.'],en:['A little pause. A lovely moment.','A welcoming place for coffee, conversation and something delicious.','Coffee with care','A cup worth slowing down for.','Fresh & simple','Little flavours that make the day.','A place to meet','Bring a friend or a good book.']},house:{name:'FORM & TRÄ',sv:['Omtanke i varje detalj.','Från den första skissen till det sista handtaget. Ett tydligt uttryck för ett gediget hantverk.','Bygga nytt','Plats för nya möjligheter.','Renovera','Ge det befintliga nytt liv.','Tillsammans','Från din idé till en tydlig plan.'],en:['Care in every detail.','From the first sketch to the final handle. A clear expression of thoughtful craftsmanship.','Build new','Room for new possibilities.','Renovate','Give existing spaces new life.','Together','From your idea to a clear plan.']},salon:{name:'STUDIO STILL',sv:['En stund som är din.','En lugn plats, ett personligt uttryck och tid för dig.','Klippning','En form som känns som du.','Färg','Nyanser med personlighet.','Din stil','En idé vi utvecklar tillsammans.'],en:['A moment of your own.','A calm space, a personal expression and time for you.','Cut','A shape that feels like you.','Colour','Shades with personality.','Your style','An idea we develop together.']}};
document.querySelectorAll('[data-example]').forEach(button=>button.addEventListener('click',()=>{const key=button.dataset.example,s=samples[key],v=s[lang];const content=document.querySelector('#sample-content');content.dataset.example=key;content.replaceChildren();const hero=document.createElement('div');hero.className='sample-hero';const copy=document.createElement('div');copy.className='sample-copy';const brand=document.createElement('p');brand.className='eyebrow';brand.textContent=s.name;const title=document.createElement('h2');title.id='sample-title';title.textContent=v[0];const desc=document.createElement('p');desc.textContent=v[1];const cta=document.createElement('button');cta.className='button';cta.textContent=lang==='sv'?'Jag gillar den här stilen ↗':'I like this direction ↗';cta.addEventListener('click',()=>{document.querySelector('#sample-dialog').close();const form=document.querySelector('#quote-form');form.elements.service.value='website';selectedDesign=key;syncDesign();document.querySelector('#contact').scrollIntoView();form.elements.name.focus({preventScroll:true})});copy.append(brand,title,desc,cta);const img=document.createElement('img');img.src=`/assets/${key}.webp`;img.srcset=`/assets/${key}-640.webp 640w, /assets/${key}.webp 1200w`;img.sizes='(max-width:760px) 100vw, 50vw';img.alt=t(key);hero.append(copy,img);const details=document.createElement('div');details.className='sample-details';for(let i=2;i<8;i+=2){const block=document.createElement('div'),h=document.createElement('h3'),p=document.createElement('p');h.textContent=v[i];p.textContent=v[i+1];block.append(h,p);details.append(block)}content.append(hero,details);document.querySelector('#sample-dialog').showModal()}));
const form=document.querySelector('#quote-form');
function validate(focus=true){if(!form)return true;let first=null;['name','email','service','message'].forEach(key=>{const field=form.elements[key];let error='';if(!field.value.trim())error=lang==='sv'?'Fyll i det här fältet.':'Please complete this field.';else if(!field.validity.valid)error=lang==='sv'?'Ange en giltig e-postadress.':'Please enter a valid email address.';document.querySelector('#error-'+key).textContent=error;field.setAttribute('aria-invalid',String(!!error));field.setAttribute('aria-describedby','error-'+key);if(error&&!first)first=field});if(first&&focus)first.focus();return !first}
form?.addEventListener('submit',e=>{e.preventDefault();if(!validate())return;document.querySelector('#send-request').disabled=false;document.querySelector('#send-status').textContent='';const summary=document.querySelector('#request-summary');summary.replaceChildren();for(const key of ['name','email','company','service','message']){const val=form.elements[key].value.trim();if(!val)continue;const dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=t(key==='service'?'need':key);dd.textContent=key==='service'?form.elements.service.selectedOptions[0].textContent:val;summary.append(dt,dd)}document.querySelector('#request-dialog').showModal()});
form?.addEventListener('input',e=>{if(e.target.getAttribute('aria-invalid')==='true')validate(false)});setLanguage(lang);

function updateSEO(){
 const privacy=!!document.querySelector('.privacy-main');
 const path=(lang==='en'?'/en/':'/')+(privacy?'privacy.html':'');
 if(location.pathname!==path)history.replaceState(null,'',path+location.hash);
 const desc=privacy?(lang==='sv'?'Integritetsinformation för MHB Global Sweden.':'Privacy information for MHB Global Sweden.'):(lang==='sv'?'Webbplatser, appar och uppgraderingar för ditt företag. MHB Global Sweden hjälper dig från idé och design till lansering. Begär en offert.':'Websites, apps and upgrades for your business. MHB Global Sweden helps you from idea and design to launch. Request a quote.');
 document.querySelector('meta[name="description"]')?.setAttribute('content',desc);
 document.querySelector('link[rel="canonical"]')?.setAttribute('href','https://mhbglobal.se'+path);
 document.querySelector('meta[property="og:url"]')?.setAttribute('content','https://mhbglobal.se'+path);
 document.querySelector('meta[property="og:title"]')?.setAttribute('content',document.title);
 document.querySelector('meta[property="og:description"]')?.setAttribute('content',desc);
 document.querySelector('meta[property="og:locale"]')?.setAttribute('content',lang==='sv'?'sv_SE':'en_GB');
 document.querySelectorAll('[data-lang]').forEach(a=>{a.href=(a.dataset.lang==='en'?'/en/':'/')+(privacy?'privacy.html':'')+location.hash;a.setAttribute('aria-current',a.dataset.lang===lang?'page':'false')});
}

let sending=false;
document.querySelector('#request-dialog')?.addEventListener('cancel',e=>{if(sending)e.preventDefault()});
document.querySelector('#send-request')?.addEventListener('click',async()=>{
 if(sending)return;
 const button=document.querySelector('#send-request'),status=document.querySelector('#send-status');
 sending=true;button.disabled=true;status.textContent=lang==='sv'?'Skickar…':'Sending…';
 const payload=new FormData(form);payload.set('language',lang);payload.set('service',form.elements.service.selectedOptions[0].textContent);payload.set('_subject','MHB Global Sweden — website enquiry');
 try{
  await submitEnquiry(form.action,payload);
  status.textContent=lang==='sv'?'Tack! Din förfrågan är mottagen. Vi återkommer via e-post.':'Thank you! Your request has been received. We will reply by email.';
  document.querySelector('#form-status').textContent=status.textContent;
  form.reset();selectedDesign=null;managedLine='';
 }catch(error){status.textContent=lang==='sv'?'Vi kunde inte bekräfta att förfrågan kom fram. Dina uppgifter finns kvar. Försök igen om en stund.':'We could not confirm receipt. Your details are still here. Please try again shortly.';button.disabled=false}
 finally{sending=false}
});
