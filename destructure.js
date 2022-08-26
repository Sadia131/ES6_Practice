const person = {name : 'Owen Majher', age: 18, gfName: 'Ayzel', job: 'Web developer', location: 'Bashundhara', phone: 017783938, friends: ['Asad', 'Omi', 'Tom','Rio']}

//const gfName = person.gfName;
//const phone = person.phone;
const {phone, gfName, job} = person; // person object er mddhe phone property

const complexObject = {
    name: 'sadia',
    info : {
        address: 'Kola bagan',
        leader : 'Tiger leader'
    }
}

const {leader} = complexObject.info;

console.log(leader);

// console.log(gfName, phone, job);
// console.log(gfName, phone, job);
// console.log(gfName, phone, job);

//array destructure
const friends = ['Hridi', 'Salman', 'Omi', 'Amor', 'Aman'];
const [firstFriend, ...nextFriend] = friends;

console.log(nextFriend);

//Destructure : kono ekta object/array theke kono ekta property/element er value ta oi variable name e rakhte parbo destructure kore. 
