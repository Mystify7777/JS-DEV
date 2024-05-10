/*1. Create an empty object called dog
2. Print the the dog object on the console
3. Add name, legs, color, age and bark properties for the dog object. The bark
property is a method which return woof woof
4. Get name, legs, color, age and bark value from the dog object
5. Set new properties the dog object: breed, getDogInfo*/
//1
let dog = {};

//2
console.log(dog);

//3
dog.name = "Zygarde";
dog.legs = 4;
dog.color = "green-black";
dog.age = 5;
dog.bark = function() {
    return "grarrrr woof woof";
};

//4
console.log("Name:", dog.name);
console.log("Legs:", dog.legs);
console.log("Color:", dog.color);
console.log("Age:", dog.age);
console.log("Bark:", dog.bark());

//5
dog.breed = "Pokemon";
dog.getDogInfo = function() {
    return `${this.name} is a ${this.color} ${this.breed} with ${this.legs} legs, aged ${this.age}.`;
};
console.log(dog.getDogInfo());
