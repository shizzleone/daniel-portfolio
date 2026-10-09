import assert from 'node:assert/strict';
import {simulate,readiness} from '../src/devmode-model.mjs';

const base={credential:true,scope:true,amount:'125000',sequence:1};
assert.equal(simulate({...base,credential:false,scenario:'success'}).status,401);
assert.equal(simulate({...base,scope:false,scenario:'success'}).status,403);
assert.equal(simulate({...base,scenario:'422'}).status,422);
const created=simulate({...base,scenario:'success'});
assert.equal(created.status,201);
assert.equal(created.body.amount_minor,125000);
assert.deepEqual(readiness({app:'Ledger',credential:true,scope:true,requests:[created],delivery:[{status:200}],reviewed:true}),[true,true,true,true]);
console.log('Passed: API Launchpad response semantics and readiness milestones.');
