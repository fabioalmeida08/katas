// esse é um kata bem parecido que eu me lembro de já ter visto anteriormente
// codeWars e ao resolver ele obtive um insigth de como resolver o o primero exercicio
// de uma maneira menos custosa

const distinct = (a: Array<number>): number => {
  return [...new Set(a)].length
}

console.log(
  distinct([
    1, 1, 1, 1, 1, 2, 3, 4, 5, 66, 7, 7, 8, 5, 2, 1,
  ])
)
