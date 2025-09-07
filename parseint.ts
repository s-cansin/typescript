var str:string = prompt();

if (isNaN(parseInt(str))){
    alert(parseInt(str));
    exit;
}

var num:number =  parseInt(str) % 2;
var msg:string;

if (num==1){
    msg = 'Odd';
}
else{
    msg = 'Even';
}

alert(msg + ' number');