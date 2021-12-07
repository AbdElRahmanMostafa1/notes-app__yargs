const fs = require("fs");

const person = {
  name: "Abdo",
  age: 22,
};

fs.writeFileSync("person.json", JSON.stringify(person));

const personBuff = fs.readFileSync("./person.json");
const personJson = personBuff.toString();
console.log(personJson);
personObject = JSON.parse(personJson);
personObject.name = "Hamada";
personObject.age = 90;
console.log(personObject);

fs.writeFileSync("./person.json", JSON.stringify(personObject));
