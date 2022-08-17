// Crear una función que reciba 4 parámetros: nombre, cédula, teléfono y email. 
//La función debe validar que el nombre esté compuesto por al menos tres palabras
// y que cada una empieza en mayúscula. La cédula debe ser mayor a 1000000000. 
//El teléfono debe iniciar por 3 y debe tener una longitud de 10 dígitos. El email debe ser válido. La función retornará el resultado de la validación en formato JSON.


 
//funcion que recibe cuatro parametros
function Person (name,cc,phone,email){
//for anidado 
for(i=0;i=>3;i++)
   name=name+i;

    for (j=0;j<=1000000000;j++)
    cc=cc+j

   console.log(i+ "el nombre tiene:"+name.length()+j+name.toupperCase());
//validando telefono
   phone =phone.length
   chart
   count
   if (phone>=0 && chart <=9 ){
       count++
   }
   console.log("el numero a sido validado"+count)
   //expresiones qu epuede contener un email
   let regularExpression= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

   let validatemail = "ValidateEmail@a.com"

    console.log(regularExpression.test(validatemail));
 }
    
