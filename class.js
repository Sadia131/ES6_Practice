class student {
    constructor(sId, sName){
        this.id = sId;
        this.name =sName;
        this.school = "RDA";
}
}

const student1 = new student(12, "sadia");
const student2 = new student(11, "asha");
//console.log(student1, student2);
console.log(student1.name, student2.name);
