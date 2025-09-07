class TouchScreenLaptop{
    ram:string;
    hd:string;
    processor:string;

    constructor(ram:string, hd:string, processor:string){
        this.ram = ram;
        this.hd = hd;
        this.processor = processor;
    }

    scroll(){
        console.log("Scrolling");
    }

    click(){
        console.log("Clicked");
    }

}

class HPLaptop extends TouchScreenLaptop{
selfRecovery:boolean;

    constructor(ram:string, hd:string, processor:string,selfRecovery:boolean){
       super(ram,hd,processor);
       this.selfRecovery = true;
    }
}

class DellLaptop extends TouchScreenLaptop{
mobileAccess:boolean;

    constructor(ram:string, hd:string, processor:string,mobileAccess:boolean){
       super(ram,hd,processor);
       this.mobileAccess = true;
    }
}

var obj1 = new HPLaptop('8GB','4TB','I7',true);
obj1.scroll();
obj1.click();

var obj2 = new HPLaptop('8GB','4TB','I7',false);
obj2.scroll();
obj2.click();