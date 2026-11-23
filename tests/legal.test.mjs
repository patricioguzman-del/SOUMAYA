import test from 'node:test';
import assert from 'node:assert/strict';
import {legal,company,placeholdersRemain} from '../src/data/legal.ts';

test('the legal pages have the same sections in English, Spanish and French',()=>{
 for(const id of ['legal','privacy','cookies']){
  for(const lang of ['es','fr'])assert.equal(legal.en[id].sections.length,legal[lang][id].sections.length,`${id} ${lang}: section counts differ`);
  for(const lang of ['en','es','fr'])assert.ok(legal[lang][id].title&&legal[lang][id].intro,`${lang} ${id}: missing title or introduction`);
 }
});

// Not a failure while the owner's details are pending, but reported on every run until they are filled in:
// the legal pages must not go live with a [placeholder] in them.
test('the company details are filled in',{todo:placeholdersRemain()?'company details pending from the owner':false},()=>{
 assert.equal(placeholdersRemain(),false,`still a placeholder: ${Object.entries(company).filter(([,v])=>typeof v==='string'&&/^\[.*\]$/.test(v)).map(([k])=>k).join(', ')}`);
});
