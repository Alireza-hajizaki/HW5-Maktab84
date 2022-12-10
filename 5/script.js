const users = [
    { name: "John", surname: "Smith", id: 1 },
    { name: "Pete", surname: "Hunt", id: 2 },
    { name: "Mary", surname: "Key", id: 3 },
    { name: "brad", surname: "pitt", id: 4 },
];
// console.log(users)

const userMapped =[]

function addObg (obg){
obg.forEach(element => {
    const newObg ={
    fullName : element.name+" "+element.surname,
    id:userMapped.length +1
}
userMapped.push(newObg)
});
}


addObg(users)
console.log(userMapped) 