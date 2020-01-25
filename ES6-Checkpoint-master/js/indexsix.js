const pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

getAge= (pet) => {return new Date().getFullYear() - pet.bornOn };

const petsWithAge = []
pets.forEach( (pet)=> {  pet.age = getAge(pet); petsWithAge.push(pet);})
console.log(petsWithAge);

const dogs = pets.filter ( (pet) =>{return pet.type =="dog"})
console.log(dogs);

const jasper = pets.find((x) => {return x.name === "Jasper"})

console.log("Jasper is " + jasper.age + " years old");
