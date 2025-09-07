var employee = {
    id:5,
    namee:'jack',
    salary : 5000
}

var {id, namee, salary}:any = employee;

console.log(id);
console.log(namee);
console.log(salary);

for (var item in employee){
    console.log(employee[item]);
}

