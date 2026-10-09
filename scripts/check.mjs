import {readFileSync, existsSync} from 'node:fs';
import assert from 'node:assert/strict';
const projects=JSON.parse(readFileSync('src/projects.json'));
assert.equal(projects.length,14);
assert.equal(new Set(projects.map(p=>p.id)).size,14);
for(const p of projects){
 assert(existsSync(`${p.id}.html`),`Missing route: ${p.id}`);
 assert(existsSync(`dist/${p.id}.html`),`Missing built route: ${p.id}`);
 for(const file of [p.image,...p.gallery.map(([f])=>f)]){
  assert(existsSync(`assets/${file}`),`Missing source asset: ${file}`);
  assert(existsSync(`dist/assets/${file}`),`Missing built asset: ${file}`);
 }
 assert(p.decisions.length>=3,`Missing decisions: ${p.id}`);
}
assert(existsSync('dist/assets/daniel-johnson-resume.pdf'));
for(const page of ['index','about',...projects.map(p=>p.id)]){
 const html=readFileSync(`dist/${page}.html`,'utf8');
 assert(html.includes('lang="en"'));
 assert(html.includes('name="description"'));
 for(const match of html.matchAll(/(?:src|href)="\.\/([^"#]+)"/g))assert(existsSync(`dist/${match[1]}`),`Broken built reference ${match[1]}`);
}
console.log('Passed: 16 production entrypoints, 14 case studies, all project assets, metadata and résumé.');
const cases=JSON.parse(readFileSync('src/case-studies.json'));
for(const p of projects){
 const c=cases[p.id];assert(c,`Missing narrative ${p.id}`);
 for(const key of ['executive','context','discovery','problem','insights','audiences','journey','strategy','architecture','tradeoffs','validation','delivery'])assert(c[key],`Missing ${key}: ${p.id}`);
 assert.equal(c.journey.length,5);assert(c.validation.tasks.length>=3);
}
console.log('Passed: 14 complete process narratives, journey maps, validation plans, and process synthesis maps.');
assert(projects.some(p=>p.id==='iretv'));
assert(!projects.some(p=>p.id==='pattern-library'));
assert(!cases['pattern-library']);
assert(readFileSync('dist/pattern-library.html','utf8').includes('url=./iretv.html'));
console.log('Passed: IreTV replaces Pattern Library; legacy URL redirects to IreTV.');

assert(projects.some(p=>p.id==='pulse'));
assert(!projects.some(p=>p.id==='uba-mobile'));
assert(!cases['uba-mobile']);
assert(readFileSync('dist/uba-mobile.html','utf8').includes('url=./pulse.html'));
console.log('Passed: Pulse replaces UBA Bank Mobile; legacy URL redirects to Pulse.');
