function tabuada(numeros: number[]): string {
  let result: string = "";

  for (const numero of numeros) {
    for (let multiplicador = 0; multiplicador < 10; multiplicador++) {
      result += `${numero} x ${multiplicador} = ${numero * multiplicador} \n`;
    }
    result += `------------- \n`
  }

  return result
}

console.log(tabuada([1, 5, 2]));
