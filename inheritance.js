class Parent{
    constructor(){
        this.fatherName = "Rumman";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Hridi");
const baby2 = new Child("Hridita");
console.log(baby.getFullName());
console.log(baby2);