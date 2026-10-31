'use strict';
import en from './en.mjs';
import {conceptMarkup,mountConcept} from './sample-designs.mjs';
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
document.querySelectorAll('.example-card[data-example]').forEach(button=>{
 const key=button.dataset.example;
 const image=button.querySelector('.example-image');
 image.innerHTML=conceptMarkup(key,{mini:true});
 const scalePreview=()=>{const stage=image.firstElementChild;const scale=image.clientWidth/stage.offsetWidth;stage.style.transform='scale('+scale+')';image.style.height=(780*scale)+'px'};
 new ResizeObserver(scalePreview).observe(image);scalePreview();
 button.addEventListener('click',()=>{
  mountConcept(document.querySelector('#sample-content'),key,()=>{
   document.querySelector('#sample-dialog').close();
   form.elements.service.value='website';selectedDesign=key;syncDesign();
   document.querySelector('#contact').scrollIntoView();form.elements.name.focus({preventScroll:true});
  },lang);
  const dialog=document.querySelector('#sample-dialog');dialog.showModal();dialog.scrollTop=0;
 });
});
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
