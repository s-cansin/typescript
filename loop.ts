var str:any = prompt();

if (isNaN(str)){
    alert('Not a number');
}
else{
    var num:number = parseInt(str);
    var i:number = 0;

    while (i<num){
        i++;

        if (i%5===0){
            continue
        }
        
       console.log(i);
    }

    for (var z=0;z<num;z){
        z++;

        if (z%5===0)
        {
            continue
        }
        
       console.log(z);
    }
}