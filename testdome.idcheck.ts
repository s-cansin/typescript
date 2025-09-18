function createCheckDigit(membershipId: string): number {
  // Write the code that goes here.

    var charArray: string[] = [...membershipId];
    var num:number = 0;

    for(const record of charArray)
    {
        num +=parseInt(record);
    }

    if (num>9)
    {
        var num2:number = 0;


        for(const record2 of num.toString().split('').map(Number))
        {
            num2 +=record2
            
        }
    
        num = num2;
    }

  return num;
}

console.log(createCheckDigit("55555"));