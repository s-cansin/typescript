enum DiscountType {
    Standard,
    Seasonal,
    Weight
}

function getDiscountedPrice(cartWeight: number, totalPrice: number, discountType: DiscountType): number {
    // Write your code here

    let finalprice:number = 0;

    if (discountType===DiscountType.Standard)finalprice=totalPrice-(totalPrice/100*6);

    if (discountType===DiscountType.Seasonal)finalprice=totalPrice-(totalPrice/100*12);

    if (discountType===DiscountType.Weight)
    {
        if (cartWeight<=10)
        {
             finalprice=totalPrice-(totalPrice/100*6);
        }
        else
        {
             finalprice=totalPrice-(totalPrice/100*18);
        }
    }
   
    
    
    return finalprice;
}

console.log(getDiscountedPrice(12, 100, DiscountType.Weight));