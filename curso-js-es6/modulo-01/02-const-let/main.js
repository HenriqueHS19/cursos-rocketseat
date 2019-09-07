function teste(x){
  //let é uma variavel que só visivel dentro de seu escopo
  let y = 10;

  if (x > 5) {
    let y = 8;
    console.log(x, y);
  }
  else {
    console.log(x, y);
  }
}

teste(10);

//Const é um tipo de variavel que não pode ser alterada
const num = 10;

console.log(num);
