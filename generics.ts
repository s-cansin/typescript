class Box<T>{
    content:T;

    constructor(par:T){
        this.content = par;
    }

    openBox():T{
        return this.content;
    }
}

var bookBox = new Box<string>('Harry Potter');
console.log(bookBox.openBox());

var toyBox = new Box<number>(23424234);
console.log(toyBox.openBox());




function element<T, K extends keyof T>(parameter:T, par:K):T[K]{
    return parameter[par];
}

const person = {age:19, name:'jack'}

console.log(element<string,number>("Hello World",1));

console.log(element(person, 'age'));




interface HasLength{
    length:number;
}

function checkLength<T extends HasLength>(item:T):void{
    console.log(item.length);
}

checkLength([1,2,3]);


type person = {name:string, age:number};
type personKeys = keyof person;




type apiResponse<Data extends object> =
{
    data: Data,
    iserror : boolean
}

const response:apiResponse<{name:string}> = 
{
    data:{
        name:"test"
    },
    iserror : false
}