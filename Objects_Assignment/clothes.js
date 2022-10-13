let Clothes = [];
Clothes.push("Gray t-shirt");
Clothes.push("Red t-shirt");
Clothes.push("Blue t-shirt");
Clothes.push("Slippers");
Clothes.push("Old jeans");
Clothes.pop();
Clothes.push("Green scarf");

console.log(Clothes[2]);
console.log(Clothes);

let favCar = {};

favCar.Color = "Red";
favCar.Covertible = true;
favCar.turnTheKey = function () {
  console.log("The engine is running!");
};

console.log(favCar);
favCar.turnTheKey();

var cloth = [];
cloth.push("A");
cloth.push("B");
cloth.pop();
cloth.push("C");
cloth.pop();
cloth.push("D");
cloth.push("E");

console.log(cloth.length);
