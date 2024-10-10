let livro = {}
let livro2 = {}

livro.nome = prompt("Digite o nome do primeiro livro: ")
livro.autor = prompt("Digite o nome do autor: ")
livro.ano = prompt("Digite o ano de publicação do livro: ")

let antigo = livro.nome

livro2.nome = prompt("Digite o nome do segundo livro: ")
livro2.autor = prompt("Digite o nome do autor: ")
livro2.ano = prompt("Digite o ano de publicação do livro: ")

if(livro.ano > livro2.ano){
    antigo = livro2.nome
}

console.log(`O livro mais antigo é o ${antigo}`)

if (livro.nome == "estudando programação" ||livro2.nome == "estudando programação") {
    console.log("Sim existe o livro estudando programação")
} 

else {
    console.log("Não existe o livro estudando programação")
}

if (livro.autor == livro2.autor) {
    console.log("Os autores dos dois livros são o mesmo")
    
} 