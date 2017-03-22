const LivingThing = require ('../lib/LivingThing');
const Archaea = require ('../lib/Archaea');
const Bacteria = require ('../lib/Bacteria');
const Eukaryota = ('../lib/Eukaryota');
const Fungi = ('../lib/Fungi');
const Protista = ('../lib/Protista');
const Plant = ('../lib/Plant');
const Animal = ('../lib/Animal');
const Cnidarian = ('../lib/Cnidarian');
const Bilateral = ('../lib/Bilateral');
const Mollusk = ('../lib/Mollusk');
const Anthropod = ('../lib/Anthropod');
const Vertebrate = ('../lib/Vertebrate');

let alien = new LivingThing('alien',false,true,false,true,true);
console.log('alien.constructor.name', '-',alien.constructor.name);
console.log('alien', '-', alien);

let archaea = new Archaea('Acidilobus saccharovorans');
console.log('archaea.constructor.name', '-',archaea.constructor.name);
console.log('archaea', '-',archaea);

let bacteria = new Bacteria('Clostridium');
console.log('bacteria.constructor.name', '-',bacteria.constructor.name);
console.log('bacteria', '-',bacteria);

let eukaryota = new Eukaryota('Yeast', false, true, false, true);
console.log('eukaryota.constructor.name', '-',eukaryota.constructor.name);
console.log('eukaryota', '-',eukaryota);

let fungus = new Fungi('The Fungus among us');
console.log('fungus.constructor.name', '-',fungus.constructor.name);
console.log('fungus', '-',fungus);

let amoeba = new Protista('Amoeba', false, true, true);
console.log('amoeba.constructor.name', '-',amoeba.constructor.name);
console.log('amoeba', '-',amoeba);

let grass = new Plant('Grass', false, true, true);
console.log('grass.constructor.name', '-',grass.constructor.name);
console.log('grass', '-',grass);

let dog = new Animal('Dog', 'bilateral');
console.log('dog.constructor.name', '-',dog.constructor.name);
console.log('dog', '-',dog);

let jellyfish = new Cnidarian('Jellyfish');
console.log('jellyfish.constructor.name', '-',jellyfish.constructor.name);
console.log('jellyfish', '-',jellyfish);

let cat = new Bilateral('Cat', 'vertebral-column');
console.log('cat.constructor.name', '-',cat.constructor.name);
console.log('cat', '-',cat);

let stingRay = new Mollusk('Sting Ray');
console.log('stingRay.constructor.name', '-',stingRay.constructor.name);
console.log('stingRay', '-',stingRay);

let lobster = new Anthropod('Lobster');
console.log('lobster.constructor.name', '-',lobster.constructor.name);
console.log('lobster', '-',lobster);

let swordFish = new Vertebrate('Swordfish');
console.log('swordFish.constructor.name', '-',swordFish.constructor.name);
console.log('swordFish', '-',swordFish);
