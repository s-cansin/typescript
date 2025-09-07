var vaccines;

vaccines = ["J&J", "Pfizer", "Sputnik"];
vaccines.push("Covaxin");

for(var item in vaccines){
    console.log(vaccines[item])
}

var [a,b,c,d] = vaccines;

console.log(a);
console.log(b);
console.log(c);
console.log(d);