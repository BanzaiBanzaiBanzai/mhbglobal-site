import test from 'node:test';
import assert from 'node:assert/strict';
import {replaceDesignLine} from '../selection.mjs';
import {submitEnquiry} from '../submission.mjs';
import {readFile,readdir} from 'node:fs/promises';
const sv='Jag är intresserad av designexemplet: Salong.';
const en='I am interested in the design example: Salon.';
test('language switches replace the managed sentence and preserve customer copy',()=>{assert.equal(replaceDesignLine(sv+'\nMy café opens in May.',sv,en),en+'\nMy café opens in May.')});
test('changing design replaces prior choice rather than accumulating it',()=>{assert.equal(replaceDesignLine(en+'\nPersonal notes.',en,'New house choice.'),'New house choice.\nPersonal notes.')});
test('manual edits are never erased',()=>{assert.equal(replaceDesignLine('I edited the request myself.',sv,en),'I edited the request myself.\n'+en)});
test('blank form selection has no stray line breaks',()=>assert.equal(replaceDesignLine('','',sv),sv));
test('form cannot submit before JavaScript initializes and offers a direct email fallback',async()=>{for(const locale of ['','en/']){const html=await readFile(new URL('../dist/'+locale+'index.html',import.meta.url),'utf8');assert.match(html,/<button[^>]*class="button form-submit"[^>]*disabled/);assert.match(html,/<noscript>[\s\S]*mailto:kontakt@mhbglobal\.se[\s\S]*<\/noscript>/);for(const field of ['name','service']){const tag=html.match(new RegExp('<(?:input|select)[^>]*name="'+field+'"[^>]*>'))?.[0];assert.ok(tag);assert.ok(!tag.includes('required'));}}});
test('both privacy pages include verified controller details and direct rights contact',async()=>{for(const locale of ['','en/']){const html=await readFile(new URL('../dist/'+locale+'privacy.html',import.meta.url),'utf8');for(const value of ['559538-7282','SE559538728201','Rättar Vigs väg 112D','162 72 Vällingby','kontakt@mhbglobal.se'])assert.ok(html.includes(value));assert.ok(!html.includes('beacon.min.js'));}});
test('submission succeeds only after provider confirms acceptance',async()=>{const payload=new FormData();payload.set('name','Test');let options;await submitEnquiry('https://formspree.io/f/test',payload,async(_,o)=>{options=o;return {ok:true,json:async()=>({ok:true})}});assert.equal(options.method,'POST');assert.equal(options.body,payload);assert.equal(options.headers.Accept,'application/json');});
test('network failures, rejection and malformed acceptance remain failures',async()=>{for(const fake of [async()=>{throw Error('offline')},async()=>({ok:false}),async()=>({ok:true,json:async()=>({})}),async()=>({ok:true,json:async()=>{throw Error('invalid json')}})]){await assert.rejects(submitEnquiry('endpoint',new FormData(),fake))}});
test('crawlable locale pages include matching metadata and no private records',async()=>{for(const locale of ['','en/']){const html=await readFile(new URL('../dist/'+locale+'index.html',import.meta.url),'utf8');assert.match(html,new RegExp('<html lang="'+(locale?'en':'sv')+'">'));assert.ok(html.includes('href="https://mhbglobal.se/'+locale+'"'));assert.match(html,/hreflang="sv"/);assert.match(html,/hreflang="en"/);assert.ok(html.includes(locale?'A stronger digital presence.':'En starkare digital närvaro.'));assert.equal((html.match(/<h1>/g)||[]).length,1)}const names=await readdir(new URL('../dist/',import.meta.url),{recursive:true});assert.ok(!names.some(n=>/records|archives|PROJECT_PLAN|\.png$/.test(n)));});

// Email-only release must not transmit data or turn input into mail headers.
import {buildEmailDraft} from '../email-draft.mjs';
test('email draft encodes user content and keeps a fixed destination',()=>{
 const url=buildEmailDraft({email:'person@example.com',message:'Hej & tack?\r\nBcc: nobody@example.com # å'});
 const parsed=new URL(url);assert.equal(parsed.pathname,'kontakt@mhbglobal.se');
 assert.deepEqual([...parsed.searchParams.keys()],['subject','body']);
 assert.ok(parsed.searchParams.get('body').includes('Hej & tack?\r\nBcc:'));
 assert.equal(buildEmailDraft({message:'å'.repeat(3000)}),null);
});
test('public email-only build has no server submission endpoint or hidden inputs',async()=>{
 for(const locale of ['','en/']){const html=await readFile(new URL('../dist/'+locale+'index.html',import.meta.url),'utf8');assert.ok(html.includes('mailto:kontakt@mhbglobal.se'));assert.ok(!html.includes('formspree.io'));assert.ok(!/type="hidden"/.test(html));}
 const app=await readFile(new URL('../dist/app.js',import.meta.url),'utf8');assert.ok(!app.includes('submitEnquiry'));assert.ok(!app.includes('fetch('));
 const names=await readdir(new URL('../dist/',import.meta.url));assert.ok(!names.includes('submission.mjs'));
});
