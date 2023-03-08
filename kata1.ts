// minha primeira tentative de resolver esse problema foi essa
// apos resolver o segundo desafio me veio a ideia de uma refatoração que eu coloquei em seguida

const nopair = (arr: Array<number>): number => {
  //primeiro array que vai agir como uma "cesta"
  let newArr: Array<number> = []

  //loop que percorre o array recebido da fn
  for (let i: number = 0; i < arr.length; i++) {
    //adicionar o item de index i no array
    newArr.push(arr[i])

    //novo array com filtro que adiciona somente valores iguais ao do index no array
    const filteredArray: Array<number> = newArr.filter(
      (x) => x == arr[i]
    )

    // condicional que se caso o array filtrado possuir mais de 2 items
    // são removidos do array principal com um filtro de desigualdade
    if (filteredArray.length >= 2) {
      newArr = newArr.filter((x) => x != arr[i])
    }
  }
  //retornar o único item do array
  return newArr[0]
}

const nopair2 = (arr: Array<number>): number => {
  const newset = new Set()

  for (let i of arr) {
    if (newset.has(i)) {
      newset.delete(i)
    } else {
      newset.add(i)
    }
  }
  return newset.values().next().value
}

console.log(
  nopair2([5, 2, 3, 4, 4, 3, 2]),
  nopair([3, 1, 2, 1, 3])
)
