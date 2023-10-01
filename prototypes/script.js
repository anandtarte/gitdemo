class Student{
    name
    constructor(n){
        this.name=n;
    }
}
let s=new Student('anand');
console.log(s.name);


// const Student2=class{
//     name
//     constructor(n){
//         this.name=n;
//     }
// }


// const s2=new Student2('anand student');
// console.log(s2.name);

class Student2 extends Student{
    constructor(name){
        super(name)
    }

}
const t=new Student2('tech');
console.log(t.name);