
const validator = {
  maskify: function(creditCardNumber) {
    const x=creditCardNumber.replace(/\s/g, "").split("");
    let i=0;
    while (i < x.length - 4) {
      x[i] = "#";
      i++;
    } 
    return x.join("");
  },
    
  isValid: function(creditCardNumber){
    let y=0;
    const x=creditCardNumber.replace(/\s/g, "").split("").reverse();
    let suma=0;
    let suma2=0;
    for (let i = 0; i < x.length; i++) {
      if (i % 2 === 1) {
        x[i] = x[i] * 2;
        y=x[i].toString().split("");
        for (let i=0; i<y.length;i++){
          suma += parseInt(y[i],10);
        }
      } else{
        suma2 += parseInt(x[i],10)
      }
    }
    const sumatotal= suma+suma2;
    if (sumatotal % 10 === 0) {
      return true;
    } else {
      return false;
    } 
  },

  franquicia: function(creditCardNumber){
    let mensaje=0;
    let y=0;
    const x=creditCardNumber.replace(/\s/g, "").split("");

    function Array(index) {
      const NewArray = x.slice(0,index).map(index => index);
      const b = NewArray.join("");
      y = parseInt(b,10)
      return y
    }

    Array(4);
    switch (true) {
    case (y ===1800):
    case (y === 2131): 
      mensaje ="JCB";
      break;
    case (y === 2014): 
    case (y === 2149):
      mensaje = "Diners Club / enRoute";
      break;
    case (y === 6011):
      mensaje = "Discover";
      break;   
    default:
      Array(3);
      switch(true){
      case (y>=300 && y<=305):
        mensaje = "Diners Club / Carte Blanche";
        break;
      default: 
        Array(2);
        switch(true) {
        case (y === 34):
        case (y === 37):
          mensaje = "American Express";
          break;
        case (y === 36):
        case (y === 38):
          mensaje = "Diners Club / International";
          break;
        case (y > 50 && y < 56):
          mensaje = "MasterCard";
          break;
        default:
          Array(1);
          switch(true){
          case (y === 3):
            mensaje = "JCB";
            break;
          case (y === 4):
            mensaje = "Visa";
            break;
          default:
            mensaje = "Franquicia no identificada";
          }
        }
      }
    }
    return mensaje;
  }
};
export default validator;