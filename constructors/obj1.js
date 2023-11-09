function Constructor(name,email,rno){
    this.name=name;
    this.email=email;
    this.rno=rno;
}

let student1=new Constructor("anand","anandtarte@",51);
//console.log(student1);

let obj1={
    user:'anand51',
    pwd:'tarte121',
    showPwd(){
        console.log(this.pwd);
    }
}

//console.log(obj1.pwd);


function abc(){
    console.log(this);
}
//console.log(this);

let obj={
    arrow : ()=>{
        console.log(this);
    },
    normal : function (){
        console.log(this);
    }
}
//obj.arrow();
//obj.normal();


let student={
    name: "student1",
    rno: 72,
    showInfo:function(abc,bcd){
        console.log(this.name," ",abc," ",bcd);
    }
}

let teacher={
    name:"teacher1",
    eid:2001
}

student.showInfo.call(teacher,2001,"anand");
student.showInfo.apply(teacher,[2001,"anand"]);
let borrow=student.showInfo.bind(teacher,2001,"anand");
borrow();
