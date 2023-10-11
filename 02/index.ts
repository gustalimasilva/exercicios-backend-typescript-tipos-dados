const usuarios = [
  {
    nome: "Guido",
    idade: 32,
    status: true,
  },
  {
    nome: "Dani",
    idade: 30,
    status: true,
  },
  {
    nome: "João",
    idade: 40,
    status: false,
  },
  {
    nome: "Guilherme",
    idade: 29,
    status: true,
  },
  {
    nome: "Ana",
    idade: 18,
    status: false,
  },
  {
    nome: "José",
    idade: 28,
    status: false,
  },
];

function buscarUsuario(
  lista: { nome: string; idade: number; status: boolean }[],
  busca: string
) {
  const listaFiltrado = lista.filter((user) =>
    user.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return listaFiltrado;
}

console.log(buscarUsuario(usuarios, "JO"));
