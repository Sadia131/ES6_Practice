const id = [10, 11, 23, 55, 97];
const id2 = [18, 89, 33, 45];
const id3 =[20, 44, 83, 64];
const allId = id.concat(id2).concat([5]).concat(id3);
const allId2 = [id, id2,5, id3];

const allId3 = [...id, ...id2,5, ...id3]; //es6

//console.log(allId3);

//who's bigger problem
const business = 650;
const sochib = 450;
const minister = 250;
//const maximum = Math.max(business, minister, sochib);
//console.log(maximum);

const taka = [650, 450, 250];
const maximum = Math.max(...taka);
console.log(maximum);