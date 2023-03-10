
const validator = {
  Maskify: function(creditCardNumber) {
    const x=creditCardNumber.replace(/\s/g, '').split("");
    let i=0;
    while (i < x.length - 4) {
      x[i] = "#";
      i++;
    } 
    return x.join("");
  },
    
  IsValid: function(creditCardNumber){
    let y=0;
    const x=creditCardNumber.replace(/\s/g, '').split("").reverse();
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
  }
};

export default validator;


