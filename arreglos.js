

//variables de inicio y fin del array
end=100;
start =1;
function random(end, start) {
    return Math.floor(Math.random() * (start - end + 1) + end);
  
}
  //se  Crea el array y se inicializa
  
  let amount =[] =new Array(end,start);
  //inicializo el array en cero
  for (let i= 0; i< 10; i++) {
    
  }
  
  // 
  for (let i = 1; i <= 100; i++) {
    // aleatorio entre 1 y 100
    let randomI = random(1,99);
 //aca guardo el array 
    amount[randomI]++;
  
//   function random();
  console.log(amount);
}