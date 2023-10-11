function soletrar(palavra: string): string {
  let result: string = "";

  for (let index = 0; index < palavra.length; index++) {
    result += `${palavra[index]}-`;
  }

  return result.slice(0, -1);
}

console.log(soletrar("programador"));
