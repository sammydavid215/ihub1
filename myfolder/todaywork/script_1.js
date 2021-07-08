var user = [{ name :'jun',  age: 100,},{name: 'john', age: 090,},];
for (let i = 0; i < user.length; i++) {
    console.log(user[i]);
    console.log(user[i].age);
    console.log(user[i].name);
    
}
user.forEach(function(val){
    console.log(val.age)
});
user.map(function(val){
console.log('map', val.age);
});

let add = (x, y) => x + y;

for (var x=0; x<=15; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}