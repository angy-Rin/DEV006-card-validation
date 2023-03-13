import validator from './validator.js';

const ceros= "0000 0000 0000 0000";
const cero="00";
const cvc="123";

const boton1 = document.getElementById("boton");

const segundapantalla = document.getElementById("segunda-pantalla");
const datosprimerapantalla = document.getElementById("datosgenerales");

const liveNombre = document.getElementById("live-nombre")
const liveNumero = document.getElementById("live-tarjeta")
const liveMes = document.getElementById("live-mes")
const liveYear = document.getElementById("live-año")
const liveCvc = document.getElementById("live-cvc")
const livefranquicia = document.getElementById("franquicia")

const cajaNombre = document.getElementById("nombre-tarjeta")
const cajaNumero = document.getElementById("numero-tarjeta")
const cajaMes = document.getElementById("mes")
const cajaYear = document.getElementById("year")
const cajaCvc = document.getElementById("cvc")

const errorNombre = document.getElementById("errornombre")
const errorNumero = document.getElementById("errornumero")
const errorYear = document.getElementById("erroraño")
const errorMes = document.getElementById("errormes")
const errorCvc = document.getElementById("errorcvc")

cajaNombre.onkeyup = function() {Livefunction(liveNombre, cajaNombre.value, cajaNombre.placeholder)};
cajaNumero.onkeyup = function() {LivefunctionNumero()};
cajaMes.onkeyup = function() {Livefunction(liveMes, cajaMes.value,cero)};
cajaYear.onkeyup = function() {Livefunction(liveYear, cajaYear.value, cero)};
cajaCvc.onkeyup = function() {Livefunction(liveCvc, cajaCvc.value, cvc)};


boton1.addEventListener("click", Confirmacion);

segundapantalla.style.display="none";

cajaNumero.addEventListener('keyup', (e) =>{
  const valorInput = e.target.value;
  cajaNumero.value = valorInput
  //Eliminar espacio de texto, lo reemplaza por nada
    .replace(/\s/g, "")
    //espaciado de numeros
    .replace(/([0-9]{4})/g, "$1 ")
 
  /*.replace(valorInput,function () {
                   let i=0;
                    let x = cajaNumero.value.split("");
                    while (i < x.length - 4) {
                    x[i] = "#";
                    i++;} 
                    return x.join("");
                  })
  */
  //quitar ultimo espacio
    .trim();
}
)


function LivefunctionNumero() {
  const creditCardNumber=cajaNumero.value;
  const escondido = validator.maskify(creditCardNumber);
  liveNumero.innerHTML = escondido;
  const mensaje = validator.franquicia(creditCardNumber);
  livefranquicia.innerHTML = mensaje;
 
  if (!cajaNumero.value){
    liveNumero.innerHTML = ceros;
  }
}

function Livefunction(live,caja,placeholder){
  live.innerHTML = caja;
  if (!caja){
    live.innerHTML = placeholder;
  }
}

function Confirmacion(){
  const regExp = /[a-zA-Z]/g;
  const regExpnum = /\d+/g;
  const mensaje="Solo se aceptan numeros";
  const mensaje2="Dato en blanco";
  const mensaje3="Solo se aceptan letras";

  let rb = 0;
  let ra = 0;
  let rc = 0;
  let rd = 0;
  let re = 0;
  let rf = 0;

  const colorojo= "1px solid hsl(0, 100%, 66%)";



  if ((regExpnum).test(cajaNombre.value)) {
    errorNombre.innerHTML = mensaje3;
    cajaNombre.style.border = colorojo;
  } else if (!cajaNombre.value){
    errorNombre.innerHTML = mensaje2;
    cajaNombre.style.border = colorojo;
  } else{
    errorNombre.innerHTML = " ";
    cajaNombre.style.border = null;
    ra=1;
  }

  if (regExp.test(cajaNumero.value)) {
    errorNumero.innerHTML = mensaje;
    cajaNumero.style.border = colorojo;
  } else if (!cajaNumero.value) {
    errorNumero.innerHTML = mensaje2;
    cajaNumero.style.border = colorojo;
  } else{
    errorNumero.innerHTML = " ";
    cajaNumero.style.border = null;
    rb=1;
  }

  if (regExp.test(cajaMes.value) ) {
    errorMes.innerHTML = mensaje;
    cajaMes.style.border = colorojo;
  } else if (cajaMes.value>12){
    errorMes.innerHTML = "Mes incorrecto";
  } else if (!cajaMes.value){
    errorMes.innerHTML = mensaje2;
    cajaMes.style.border = colorojo;
  } else{
    errorMes.innerHTML = " ";
    cajaMes.style.border = null;
    rc=1;
  }

  if (regExp.test(cajaYear.value)) {
    errorYear.innerHTML = mensaje;
    cajaYear.style.border = colorojo;
  } else if (cajaYear.value<23 && cajaYear.value>0) {
    errorYear.innerHTML = "Año expirado";
    cajaYear.style.border = colorojo;
  } else if (!cajaYear.value){
    errorYear.innerHTML = mensaje2;
    cajaYear.style.border = colorojo;
  } else{
    errorYear.innerHTML = " ";
    cajaYear.style.border = null;
    rd=1;
  }
  
  if (regExp.test(cajaCvc.value)) {
    errorCvc.innerHTML = mensaje;
    cajaCvc.style.border = colorojo;
  } else if (cajaCvc.value.length>0 && cajaCvc.value.length<3){
    errorCvc.innerHTML = "Faltan digitos";
    cajaCvc.style.border = colorojo;
  } else if (!cajaCvc.value){
    errorCvc.innerHTML = mensaje2;
    cajaCvc.style.border = colorojo;
  } else{
    errorCvc.innerHTML = " "; 
    cajaCvc.style.border = null;
    re=1;
  }
  const creditCardNumber=cajaNumero.value;
  const valido=validator.isValid(creditCardNumber)

  if ( valido === true){
    rf=1;
  }else{
    errorNumero.innerHTML = "Número de tarjeta no válido";
    cajaNumero.style.border = colorojo;
  }

  if (ra===1 && rb===1 && rc===1 && re===1 && rd===1 && rf===1){
    Segundapantalla();
  }
}

function Segundapantalla() {
  segundapantalla.style.display="block";
  datosprimerapantalla.style.display="none";
}


