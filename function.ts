var maths:any = prompt('Maths Score:');
var physics:any = prompt('Physics Score:');
var chemistry:any = prompt('Chemistry Score:');

maths = parseInt(maths);
physics = parseInt(physics);
chemistry = parseInt(chemistry);

function gradeConverter(par1:number, par2:number, par3:number):string
{
    var average:number = (par1 + par2 + par3) / 3;

    var grade:string;

    if (average<70){
        grade = "C";
    }
    else if (average>70 && average<90){
        grade = "B";
    }
    else{
        grade = "A";
    }
    return grade;
}

console.log('Grade:', gradeConverter(maths, physics, chemistry));