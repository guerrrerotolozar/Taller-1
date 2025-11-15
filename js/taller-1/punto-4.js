var numero = prompt("digite un numero")
numero = +numero


if (numero % 3 == 0 && numero % 5 == 0){
    console.log("bingbong")
}
else if(numero % 5 == 0){
    console.log("bong")
}

else if (numero % 3 == 0){
    console.log("bing")
}
else{
    console.log(numero)
}