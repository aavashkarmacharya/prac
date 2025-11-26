const user = [
    {
        name: "ram",
        age: 12
    },
    {
        name: "sita",
        age: 15
    },

    {
        name: "gita",
        age: 15
    },
    {
        name: "nita",
        age: 15
    },
    {
        name: null,
        age: 18,
    }
]   
//initializing a default value for name
 for(person of user){
let yy= "guest";
    person.name = person.name??yy;
    console.log(person.name);

} 

//filtering the age by 15
const filtered = user.filter(person => person.age === 15 );
console.log(filtered);

//printing names from array
const names = user.map(person => person.name);
console.log(names);

//adding thapa to every person
let y = user.map(person => person.name + " Thapa");
console.log(y);

//random for default initialization 
let r= "nita";
let z = (name) => {
    name = name?? r;
console.log(name);
}
z();


/*for( let details of user){
    const check1 = (details) =>{
        if(details.age !== 18){
    console.log(`Hey!, ${details.name} you are ${details.age} years old  `);
}
    }
check1(details);
}
*/
//checking conditions w/o filter
 user.forEach(details =>{
    if(details.age != 15){
        console.log(`Hey!, ${details.name} you are ${details.age} years old `);
    }
 } )
 //checking with filter

 let b = user.filter(person => person.age === 15);
 console.log(b);

//practice ig
 let  updating = user.map(details => details.name + "_Thapa");
 console.log(updating);

 let vips = user
.filter(details=> details.age=== 18)
.map(details => details.name + " you have been promoted to VIP");
console.log(vips);
 