const names={cafe:'Café',house:'Bygg & hantverk',salon:'Salong'};
// Hotspots in original 1536 x 1024 image coordinates; artwork remains unchanged.
const spots={
cafe:[['Meny','menu',1080,123,85,48],['Hitta hit','visit',1180,123,95,48],['Se menyn','menu',614,852,185,58],['Öppna menyn','menu',1400,430,49,43],['Lägg till bryggkaffe','add:Bryggkaffe',1423,559,48,49],['Lägg till cappuccino','add:Cappuccino',1407,632,48,49],['Lägg till espresso','add:Espresso',1395,704,48,49],['Lägg till kanelbulle','add:Kanelbulle',1378,821,48,49],['Lägg till croissant','add:Croissant',1370,892,48,49]],
house:[['Projekt','projects',1090,121,80,50],['Kontakt','quote',1184,121,85,50],['Begär offert','quote',1285,115,160,61],['Begär offert','quote',100,720,258,68],['Välj renovering','project:Renovering',1255,487,244,122],['Välj snickeri','project:Snickeri',1220,617,255,105],['Välj tillbyggnad','project:Tillbyggnad',1200,737,254,89],['Nästa','next',1206,826,225,96]],
salon:[['Behandlingar','services',1111,109,138,55],['Boka','booking',1283,109,66,55],['Boka tid','booking',914,790,239,69],['Öppna bokning','booking',1460,435,40,42],['Välj den 7:e','day:7',1246,605,30,40],['Välj den 8:e','day:8',1274,610,30,40],['Välj den 9:e','day:9',1303,614,30,40],['Välj den 10:e','day:10',1332,619,34,40],['Välj den 11:e','day:11',1363,623,30,40],['Välj den 12:e','day:12',1394,627,30,40],['Välj den 13:e','day:13',1424,631,30,40],['Välj klockan 10:30','time:10:30',1230,699,106,50],['Välj klockan 14:00','time:14:00',1335,718,107,50],['Välj tid','confirm',1220,778,217,73]]};
export function conceptMarkup(key,{mini=false}={}){return `<div class="approved-art" ${mini?'aria-hidden="true"':'lang="sv"'}><img src="/assets/${key}-mockup.webp" width="1536" height="1024" alt="${names[key]} – webbplats med överlappande mobilapp" loading="lazy">${mini?'':spots[key].map(([label,action,x,y,w,h],index)=>`<button class="art-hotspot hs-${key}-${index}" type="button" aria-label="${label}" title="${label}" data-action="${action}"></button>`).join('')}</div>`}
const button=(label,action,selected=false)=>`<button type="button" data-action="${action}"${selected?' class="selected" aria-pressed="true"':''}>${label}</button>`;
export function mountConcept(content,key,onChoose,lang){
 if(content._demoHandler)content.removeEventListener('click',content._demoHandler);
 content.dataset.example=key;
 content.innerHTML=`<h2 class="visually-hidden" id="sample-title">${names[key]} – designexempel</h2>${conceptMarkup(key)}<div class="demo-console" lang="sv"><div class="demo-console-head"><span>Prova designen</span><button type="button" data-action="toggle" aria-expanded="false">Visa val</button></div><p class="demo-feedback" role="status" aria-live="polite">Tryck på en knapp i bilden.</p><div class="demo-controls" hidden></div><small>Designexempel · Inga beställningar eller bokningar skickas.</small></div><div class="concept-choice"><button class="button" type="button" data-choose>${lang==='sv'?'Jag gillar den här stilen ↗':'I like this direction ↗'}</button></div>`;
 const controls=content.querySelector('.demo-controls'),feedback=content.querySelector('.demo-feedback'),toggle=content.querySelector('[data-action="toggle"]');
 let open=false,day='10',time='14:00',service='Klippning',project='Renovering',step=1,note='',cart={};
 const toast=document.createElement('span');toast.className='art-toast';toast.hidden=true;toast.setAttribute('aria-hidden','true');content.querySelector('.approved-art').append(toast);
 const announce=text=>{feedback.textContent=text;toast.textContent=text;toast.hidden=false};
 function draw(){
 if(key==='cafe')controls.innerHTML=`<div class="demo-option-row">${['Bryggkaffe','Cappuccino','Espresso','Kanelbulle','Croissant'].map(x=>button(`${x}${cart[x]?' · '+cart[x]:''} +`,'add:'+x)).join('')}</div><div class="demo-summary"><strong>Valda: ${Object.values(cart).reduce((a,b)=>a+b,0)}</strong>${button('Rensa','reset')}</div>`;
 if(key==='salon')controls.innerHTML=`<div class="demo-option-row" aria-label="Behandling">${['Klippning','Färg','Styling'].map(x=>button(x,'service:'+x,x===service)).join('')}</div><div class="demo-option-row" aria-label="Dag">${['7','8','9','10','11','12','13'].map(x=>button(x,'day:'+x,x===day)).join('')}</div><div class="demo-option-row" aria-label="Tid">${['10:30','14:00'].map(x=>button(x,'time:'+x,x===time)).join('')}${button('Välj tid','confirm')}</div>`;
 if(key==='house'){controls.innerHTML=`<div class="demo-option-row" aria-label="Projekt">${['Renovering','Snickeri','Tillbyggnad'].map(x=>button(x,'project:'+x,x===project)).join('')}</div>${step===2?'<label class="demo-note">Din idé<textarea maxlength="500" rows="2" placeholder="Beskriv kort…"></textarea></label>':''}<div class="demo-option-row">${button(step===1?'Nästa':'Visa sammanfattning',step===1?'next':'summary')}${button('Börja om','reset')}</div>`;const field=controls.querySelector('textarea');if(field){field.value=note;field.addEventListener('input',()=>note=field.value)}}
 controls.hidden=!open;toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'Dölj val':'Visa val';
 }
 draw();content.querySelector('[data-choose]').addEventListener('click',onChoose);
 function onAction(e){
 const b=e.target.closest('[data-action]');if(!b||!content.contains(b))return;const action=b.dataset.action;
 if(action==='toggle'){open=!open;draw();return}
 if(action.startsWith('add:')){const item=action.slice(4);cart[item]=(cart[item]||0)+1;announce(`${item} tillagd · ${Object.values(cart).reduce((a,b)=>a+b,0)} valda.`)}
 else if(action.startsWith('day:')){day=action.slice(4);announce(`Dag ${day} · ${time} · ${service}`)}
 else if(action.startsWith('time:')){time=action.slice(5);announce(`Dag ${day} · ${time} · ${service}`)}
 else if(action.startsWith('service:')){service=action.slice(8);announce(`${service} vald · dag ${day}, ${time}`)}
 else if(action.startsWith('project:')){project=action.slice(8);announce(`${project} vald för offert.`)}
 else if(action==='confirm')announce(`${service} · dag ${day}, ${time}. Valet visas i exemplet; ingen bokning skickas.`);
 else if(action==='next'){step=2;open=true;announce(`${project} · beskriv din idé nedan.`)}
 else if(action==='summary')announce(`${project}${note?' — '+note:'.'} Designexempel; ingen offertförfrågan skickas.`);
 else if(action==='reset'){cart={};step=1;note='';announce('Dina val är återställda.')}
 else{open=true;announce(action==='visit'?'Hitta hit är valt i caféets designexempel.':action==='projects'?'Välj vilken typ av projekt du vill utforska.':action==='menu'?'Välj något från menyn.':action==='services'?'Välj en behandling.':action==='booking'?'Välj behandling, dag och tid.':'Välj vad du vill ha hjälp med.')}
 draw();
 }
 content._demoHandler=onAction;content.addEventListener('click',onAction);
}
