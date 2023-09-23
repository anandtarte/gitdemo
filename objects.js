const obj={
    name:"anand",
    roll_no:22,
    marks: function(){
        console.log("he has 8.64 CGPA")
    },
    gender_male:true 

}
//console.log(obj.marks);

// let obj2= new Object();
// console.log(obj2);

// obj.newProperty="new property";
// console.log(obj['name']);
// console.log(obj);

// obj2.name="mahesh";
// obj2.age=22;
// console.log(obj2);

// delete obj.marks;
// console.log(obj);


// console.log(typeof obj.age);
// const shallowCopy=obj;
// obj.name="mahesh";
// console.log(obj,"obj");
// console.log(shallowCopy,"shallowcopy");

// const deepCopy={...shallowCopy};
// console.log(deepCopy,"deepcopy");

// obj.age=30;
// console.log(obj,"obj");
// console.log(shallowCopy,"shallowcopy");
// console.log(deepCopy,"deepcopy");

//to get only keys in objects
for (let key in obj){
    //console.log(key);
}

//to get keys and values in seperate arrays
//here keys and values are inbuild keywords 
let abc=Object.keys(obj);
let bcd=Object.values(obj);

//console.log(abc);
//console.log(bcd);

//to get keys and values in a array,we use entries

let entriesPart=Object.entries(obj);
//console.log(entriesPart);


//diff between for in and for of

let arr=[1,2,3,4];
for (let item in arr){
    console.log(item);
}
console.log(" ");
for (let item of arr){
    console.log(item);
}









