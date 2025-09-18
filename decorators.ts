function decorator(constructor: Function){
    console.log('Called by:', constructor.name);
}

@decorator
class Person{

    constructor(name: string){}

}