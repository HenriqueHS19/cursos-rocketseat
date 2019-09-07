const array = [1, 2, 3, 4];

//map retorna cada item ou index do array
const map = array.map(function(item, index){
  return item;
});

console.log(map);

const reduce = array.reduce(function(total, next){
  return total + next;
});

console.log(reduce);

//filtrar somente os valores que são pares
const filter = array.filter(function(item){
  return item % 2 === 0;
});

console.log(filter);

//retorna se o array tiver um valor igual a 4
const find = array.find(function(item){
  return item === 4;
});

console.log(find);
