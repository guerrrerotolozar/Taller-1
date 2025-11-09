var numero = prompt("digite un numero")
numero = +numero


if (numero % 3 == 0 && numero % 5 == 0){
    document.write("bingbong")
}
else if(numero % 5 == 0){
    document.write("bong")
}

else if (numero % 3 == 0){
    document.write("bing")
}
else{
    document.write(numero)
}