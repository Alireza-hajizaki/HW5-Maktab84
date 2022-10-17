let users = [
    {id:1 , name:'Ali' , age:25},
    {id:2 , name:'Omid' , age:31},
    {id:3 , name:'Reza' , age:18},
    {id:4 , name:'Hossein' , age:29},
    {id:5 , name:'Ahmad' , age:15}
]

function sortUsesr(users){
   return users.sort((x,y) => x.age - y.age)
}

for(key in users){
    console.log(users[key].age)
}

sortUsesr(users)
console.log(users)
