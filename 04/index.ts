function geradorEtiquetas(item: {
  produto: string;
  lote: number;
  ano: number;
  qtd: number;
}): string[] {
  let result: string[] = [];

  for (let index = 1; index <= item.qtd; index++) {
    result.push(
      `${item.lote} - ${item.ano} - ${index.toString().padStart(3, "0")}`
    );
  }

  return result;
}

console.log(
  geradorEtiquetas({
    produto: "CPU Dual Core 3.0GHZ",
    lote: 321,
    ano: 2022,
    qtd: 5,
  })
);
