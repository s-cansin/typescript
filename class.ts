class clsOrganizer{
    id:number;
    name:string;

    constructor(id:number, name:string)
    {
        this.id = id;
        this.name = name;
    }

    display()
    {
        console.log(this.id, this.name)
    }
}

class clsEvent{
    id:number;
    name:string;
    description:string;
    starttime:string;
    endtime:string;

    constructor(id:number, name:string, description:string, starttime:string, endtime:string)
    {
        this.id = id;
        this.name = name;
        this.description = description;
        this.starttime = starttime;
        this.endtime = endtime;
    }

    display()
    {
        console.log(this.id, this.name, this.description, this.starttime, this.endtime)
    }
}

class clsVenue{
    id:number;
    name:string;
    description:string;
    address:string;

    constructor(id:number, name:string, description:string, address:string)
    {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
    }

    display()
    {
        console.log(this.id, this.name, this.description, this.address)
    }
}

var obj1 = new clsOrganizer(334, 'ticketmaster');
obj1.display();

var obj2 = new clsEvent(1, 'Bryan Adams', 'Concert', '9:00pm', '11:45pm');
obj2.display();

var obj3 = new clsVenue(44, 'Scotiabank Arena', 'Concert Area' , 'Bay Street');
obj3.display();