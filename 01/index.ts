const users = [
  {
    nome: "João",
    pets: ["Max"],
  },
  {
    nome: "Ana",
    pets: ["Pingo", "Lulu"],
  },
  {
    nome: "Beatriz",
    pets: ["Lessie"],
  },
  {
    nome: "Carlos",
    pets: ["Farofa", "Salsicha", "Batata"],
  },
  {
    nome: "Antonio",
    pets: ["Naninha"],
  },
];

function searchPet(lista: { nome: string; pets: string[] }[], petName: string) {
  let userFinded;

  for (const user of lista) {
    if (user.pets.includes(petName)) {
      userFinded = user;
    }
  }

  if (userFinded) {
    return `O dono(a) do(a) ${petName} é o(a) ${userFinded.nome}`;
  } else {
    return `Que pena ${petName}, não encontramos seu dono(a)`;
  }
}

console.log(searchPet(users, "Pingo"));
