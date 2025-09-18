namespace app{

  export class Vehicle{

    public Car(model: number):void
    {
      if (model<2010)
        console.log('Old Car');
      else
        console.log('New Car');
    }

  }
}

const el = new app.Vehicle();
el.Car(2000);