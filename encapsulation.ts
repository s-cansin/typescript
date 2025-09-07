class clsOrganizer{
    private id:number;
    private name:string;

    constructor(id:number, name:string)
    {
        this.id = id;
        this.name = name;
    }

    get _id():number{
        return this.id;
    }

    get _name():string{
        return this.name;
    }

    set _id(id:number){
        this.id = id;
    }

    set _name(name:string){
       this.name = name;
    }
}

class clsEvent{
    private id:number;
    private name:string;
    private description:string;
    private starttime:string;
    private endtime:string;

    constructor(id:number, name:string, description:string, starttime:string, endtime:string)
    {
        this.id = id;
        this.name = name;
        this.description = description;
        this.starttime = starttime;
        this.endtime = endtime;
    }


    get _id():number{
        return this.id;
    }

    get _name():string{
        return this.name;
    }

    get _description():string{
        return this.description;
    }

    get _starttime():string{
        return this.starttime;
    }

    get _endtime():string{
        return this.endtime;
    }


    set _id(id:number){
     this.id = id;
    }

    set _name(name:string){
       this.name = name;
    }

    set _description(description:string){
       this.description = description;
    }

    set _starttime(starttime:string){
       this.starttime = starttime;
    }

    set _endtime(endtime:string){
       this.endtime = endtime;
    }
}

class clsVenue{
    private id:number;
    private name:string;
    private description:string;
    private address:string;

    constructor(id:number, name:string, description:string, address:string)
    {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
    }

    get _id():number{
        return this.id;
    }

    get _name():string{
        return this.name;
    }

    get _description():string{
        return this.description;
    }

    get _address():string{
        return this.address;
    }


    set _id(id:number){
        this.id = id;
    }

    set _name(name:string){
       this.name = name;
    }

    set _description(description:string){
       this.description = description;
    }

    set _address(address:string){
       this.address = address;
    }
}

var obj1 = new clsOrganizer(334, 'ticketmaster');
console.log(obj1._id)

var obj2 = new clsEvent(1, 'Bryan Adams', 'Concert', '9:00pm', '11:45pm');
console.log(obj2._id)

var obj3 = new clsVenue(44, 'Scotiabank Arena', 'Concert Area' , 'Bay Street');
console.log(obj3._id)