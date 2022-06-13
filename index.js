function saludo  (){
    console.log('bienvenido al portal de socio club san martin');

}
saludo();

let edad = parseInt(prompt('introduce tu edad'))
if(edad>=18) alert ('ya puedes asociarte');

let eleccion = prompt ('ingrese como desea asociarte mensual o anual')

if (eleccion === 'mensual') {
    alert('el abono mensual es de $2000')
}
else if (eleccion === 'anual') {
    alert ('el abono anual es de $23000')
}
let numero = + (prompt('ingrese la cantidad de socios a asociar'))
for (let i=0; i<5;i++){
    console.log(i + numero)
}

let cuotas = parseInt(prompt('ingrese la forma pago en cuotas: 1-pago, 2-pagos, 3-pagos'));
switch (cuotas){
    case 1:
        alert('en 1 cuota de $24000')
        break
    case 2:
        alert('en 2 cuotas de $12000')
        break
    case 3:
        alert('en 3 cuotas de $800')
        break
}




