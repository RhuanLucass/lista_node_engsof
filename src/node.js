  'use strict'
  
  var age = 24;
  let myName = "Rhuan Lucas"; // 1
  const birthDate = "07/11/1999"; //2
  console.log("Age: ", age);
  console.log("Name: ", myName);
  console.log("Birth Date: ", birthDate);
  console.log("---------------------");

  // 4
  const handleChangeValues = () => {
    if (age === 24 || myName === "Rhuan Lucas") {
      //8, 11 e 13
      age++;
    }
    myName = "Rhuan Fernandes";
    console.log("new Age: ", age);
    console.log("new Name: ", myName);
    console.log("---------------------");
  };
  handleChangeValues();

  let value1 = 100;
  const value2 = 50;

  const sum = value1 + value2; // 6
  console.log("Soma: ", sum);

  const name = "Rhuan";
  const surname = "Lucas";

  const concatName = name !== surname ? `${name} ${surname}` : name; // 7, 12 e 24
  console.log("Concatenação: ", concatName);

  value1 > 10 && value1--; /*9 e 10*/
  console.log("Decremento: ", value1);
  console.log("---------------------");

  switch (
    name //14
  ) {
    case "Rhuan":
      console.log("Nome!");
      break;

    case "Fernandes":
      console.log("Sobrenome!");
      break;

    default:
      console.log("Error");
  }
  console.log("---------------------");

  let value3 = 10;
  const value4 = 5;

  for (let i = value4; value3 >= i; i++) {
    //15
    console.log("Valor de i++ no for: ", i);
  }
  console.log("---------------------");

  while (value3 >= value4) {
    // 16
    console.log("Valor de value3 no while: ", value3);
    value3--;
  }
  console.log("---------------------");

  const array = [10, 20, 30, 40, 50]; // 20
  const arrayObj = [
    {
      id: 0,
      value: 10,
    },
    {
      id: 1,
      value: 20,
    },
    {
      id: 2,
      value: 30,
    },
  ]; //21

  array.forEach((value, index) => {
    //18
    console.log(`Valor do array[${index}]: ${value}`);
  });
  console.log("---------------------");

  const idObj = arrayObj.map((value) => {
    //17
    return value.id;
  });
  console.log(`Ids do objeto: ${idObj}`);
  console.log("---------------------");

  console.log("Campos do objeto: ");
  for (let value in arrayObj[0]) {
    //19
    console.log(value);
  }
  console.log("---------------------");
  
  const set = new Set([10, 20, 30, 40, 50]); //22
  console.log("Conteúdo de Set: ", set);
  console.log("---------------------");
  
  import util from 'util';
  const objEqual = util.isDeepStrictEqual(arrayObj[0], set[0]); // 23
  console.log("Os objetos são iguais? ", objEqual);
  console.log("Valor do objeto[0]: ", arrayObj[0]?.value); // 25
  console.log("---------------------");