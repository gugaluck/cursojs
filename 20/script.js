for(var i = 10; i > 0; i--){
    
    console.log(i);
    
    if(i == 5) {
        break;
    }
}

console.log("break!");

var x = 10;

while(x < 100){

    x += 10;

    if(x == 60) {
        continue;
    }

    console.log("teste continuar " + x);
}