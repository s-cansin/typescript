var num:any = prompt("Enter the number:");

var res = (par:number):boolean => {

    if (par<=1){return false}
    if (par<=3){return true}
    if (par%2==0 || par%3==0){return false}

    for (var x = 5; x*x<=par; x=x+6){
        if (par%x==x || par%(x+2)==0){
            return false;
        }
    }

    return true;
}

if (res(num)===true){
    console.log('Prime number');
}
else{
    console.log('Not a prime number');
}