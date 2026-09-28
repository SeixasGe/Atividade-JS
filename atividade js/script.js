// // 1. Apresentação pessoal
// const nome = "Carlos Silva";
// const idade = 28;
// const cidade = "São Paulo";
// const profissao = "Desenvolvedor de Software";


// console.log("Olá! Meu nome é " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e trabalho como " + profissao + ".");


// // 2. Operações matemáticas
// const num1 = 15;
// const num2 = 5;


// console.log("Soma (" + num1 + " + " + num2 + "): " + (num1 + num2));
// console.log("Subtração (" + num1 + " - " + num2 + "): " + (num1 - num2));
// console.log("Multiplicação (" + num1 + " * " + num2 + "): " + (num1 * num2));
// console.log("Divisão (" + num1 + " / " + num2 + "): " + (num1 / num2));


// // 3. Conversor de idade
// const idadeAnos = 25;
// const mesesVividos = idadeAnos * 12;


// console.log("Uma pessoa de " + idadeAnos + " anos já viveu aproximadamente " + mesesVividos + " meses.");


// // 4. Média de notas
// const nota1 = 8.5;
// const nota2 = 7.0;
// const nota3 = 9.5;


// const media = (nota1 + nota2 + nota3) / 3;
// console.log("A média do aluno é: " + media.toFixed(2));


// // 5. Maioridade
// const idadePessoa = 18;


// if (idadePessoa >= 18) {
// console.log("A pessoa é maior de idade.");
// } else {
// console.log("A pessoa é menor de idade.");
// }


// // 6. Número positivo, negativo ou zero
// const numero = -7;


// if (numero > 0) {
// console.log("O número é positivo.");
// } else if (numero < 0) {
// console.log("O número é negativo.");
// } else {
// console.log("O número é igual a zero.");
// }


// // 7. Par ou ímpar
// const numParImpar = 14;


// if (numParImpar % 2 === 0) {
// console.log("O número " + numParImpar + " é PAR.");
// } else {
// console.log("O número " + numParImpar + " é ÍMPAR.");
// }


// // 8. Situação do aluno
// const n1 = 6.5;
// const n2 = 5.5;
// const mediaAluno = (n1 + n2) / 2;


// let situacao;
// if (mediaAluno >= 7.0) {
// situacao = "Aprovado";
// } else if (mediaAluno >= 5.0) {
// situacao = "Em recuperação";
// } else {
// situacao = "Reprovado";
// }


// console.log("Média: " + mediaAluno.toFixed(1) + " | Situação: " + situacao);


// // 9. Maior entre dois números
// const a = 12;
// const b = 15;


// if (a > b) {
// console.log("O maior número é " + a + ".");
// } else if (b > a) {
// console.log("O maior número é " + b + ".");
// } else {
// console.log("Os dois números são iguais.");
// }


// // 10. Maior entre três números
// const x = 10;
// const y = 25;
// const z = 18;


// const maior = Math.max(x, y, z);
// console.log("Entre " + x + ", " + y + " e " + z + ", o maior número é: " + maior);


// // 11. Cálculo de desconto
// const precoOriginal = 120.00;
// let precoFinal;


// if (precoOriginal > 100.00) {
// const desconto = precoOriginal * 0.10;
// precoFinal = precoOriginal - desconto;
// } else {
// precoFinal = precoOriginal;
// }


// console.log("Preço original: R$ " + precoOriginal.toFixed(2));
// console.log("Preço final com desconto: R$ " + precoFinal.toFixed(2));


// // 12. Controle de acesso
// const idadeAcesso = 20;
// const autorizado = true;


// if (idadeAcesso >= 18 && autorizado) {
// console.log("Acesso permitido.");
// } else {
// console.log("Acesso negado.");
// }


// // 13. Lista de nomes
// const nomes = ["Ana", "Bruno", "Carla", "Daniel", "Eduarda"];


// console.log("Lista de Nomes:");
// nomes.forEach(function(nome) {
// console.log("- " + nome);
// });


// // 14. Lista de compras
// const compras = ["Arroz", "Feijão", "Leite", "Café", "Açúcar"];


// console.log("Total de itens na lista: " + compras.length);
// console.log("Produtos cadastrados:");
// compras.forEach(function(produto) {
// console.log("- " + produto);
// });


// // 15. Cadastro de pessoa
// const pessoa = {
// nome: "Mariana",
// idade: 30,
// cidade: "Curitiba",
// profissao: "Engenheira de Software"
// };


// console.log("=== Dados da Pessoa ===");
// console.log("Nome: " + pessoa.nome);
// console.log("Idade: " + pessoa.idade + " anos");
// console.log("Cidade: " + pessoa.cidade);
// console.log("Profissão: " + pessoa.profissao);


// // 16. Cadastro de produto
// const produto = {
// nome: "Notebook Pro",
// preco: 4500.00,
// categoria: "Eletrônicos",
// disponivel: true
// };


// const statusProd = produto.disponivel ? "disponível" : "indisponível";
// console.log("O produto '" + produto.nome + "', da categoria '" + produto.categoria + "', custa R$ " + produto.preco.toFixed(2) + " e está atualmente " + statusProd + ".");


// // 17. Cadastro de alunos
// const alunos = [
// { nome: "Lucas", idade: 16 },
// { nome: "Beatriz", idade: 17 },
// { nome: "Gabriel", idade: 15 }
// ];


// console.log("=== Lista de Alunos ===");
// alunos.forEach(function(aluno) {
// console.log("Nome: " + aluno.nome + " | Idade: " + aluno.idade + " anos");
// });


// // 18. Dobro de um número
// function dobro(numero) {
// return numero * 2;
// }


// console.log("O dobro de 5 é: " + dobro(5));
// console.log("O dobro de 12.5 é: " + dobro(12.5));
// console.log("O dobro de -4 é: " + dobro(-4));


// // 19. Calculadora de soma
// function somar(numA, numB) {
// return numA + numB;
// }


// console.log("Teste 1 (10 + 20): " + somar(10, 20));
// console.log("Teste 2 (3.5 + 4.2): " + somar(3.5, 4.2));
// console.log("Teste 3 (-5 + 15): " + somar(-5, 15));


// // 20. Calculadora de média
// function calcularMedia(notaA, notaB) {
// return (notaA + notaB) / 2;
// }


// console.log("Teste 1 (8.0 e 6.0): " + calcularMedia(8.0, 6.0));
// console.log("Teste 2 (10.0 e 9.5): " + calcularMedia(10.0, 9.5));
// console.log("Teste 3 (4.0 e 5.5): " + calcularMedia(4.0, 5.5));


// // 21. Saudação personalizada
// function saudar(nome) {
// return "Seja muito bem-vindo(a), " + nome + "! É um prazer ter você aqui.";
// }


// console.log(saudar("Fernanda"));
// console.log(saudar("Rodrigo"));


// // 22. Tabuada
// const tabuadaNum = 7;


// console.log("=== Tabuada do " + tabuadaNum + " ===");
// for (let i = 1; i <= 10; i++) {
// console.log(tabuadaNum + " x " + i + " = " + (tabuadaNum * i));
// }


// // 23. Contagem crescente
// console.log("Contagem de 1 até 20:");
// let crescente = "";
// for (let i = 1; i <= 20; i++) {
// crescente += i + " ";
// }
// console.log(crescente.trim());


// // 24. Contagem regressiva
// console.log("Contagem Regressiva:");
// for (let i = 10; i >= 0; i--) {
// console.log(i);
// }
// console.log("Fim!");


// // 25. Números pares
// console.log("Números pares entre 1 e 50:");
// let pares = "";
// for (let i = 1; i <= 50; i++) {
// if (i % 2 === 0) {
// pares += i + " ";
// }
// }
// console.log(pares.trim());


// // 26. Soma de uma lista
// const listaNumeros = [10, 25, 30, 45, 50];
// const somaTotal = listaNumeros.reduce(function(acc, curr) {
// return acc + curr;
// }, 0);


// console.log("Lista de números: " + listaNumeros.join(", "));
// console.log("Soma total: " + somaTotal);


// // 27. Média de uma lista
// const listaNotas = [7.5, 8.0, 9.5, 6.0, 8.5];
// const somaNotas = listaNotas.reduce(function(acc, curr) {
// return acc + curr;
// }, 0);
// const mediaLista = somaNotas / listaNotas.length;


// console.log("Notas registradas: " + listaNotas.join(", "));
// console.log("Média calculada: " + mediaLista.toFixed(2));


// // 28. Verificação de disponibilidade
// const produtoEstoque = {
// nome: "Teclado Mecânico",
// preco: 250.00,
// estoque: 5
// };


// if (produtoEstoque.estoque > 0) {
// console.log("O produto '" + produtoEstoque.nome + "' está DISPONÍVEL (" + produtoEstoque.estoque + " unidades em estoque).");
// } else {
// console.log("O produto '" + produtoEstoque.nome + "' está INDISPONÍVEL no momento.");
// }


// // 29. Boletim completo
// const nomeAlunoBoletim = "Juliana Souza";
// const nota1Boletim = 7.5;
// const nota2Boletim = 8.5;
// const mediaBoletim = (nota1Boletim + nota2Boletim) / 2;


// let situacaoBoletim;
// if (mediaBoletim >= 7.0) {
// situacaoBoletim = "Aprovado(a)";
// } else if (mediaBoletim >= 5.0) {
// situacaoBoletim = "Em recuperação";
// } else {
// situacaoBoletim = "Reprovado(a)";
// }


// console.log("=== BOLETIM ===");
// console.log("Aluno(a): " + nomeAlunoBoletim);
// console.log("Média: " + mediaBoletim.toFixed(1));
// console.log("Situação Final: " + situacaoBoletim);


// 30. Desafio final — Sistema de alunos
const turmaAlunos = [
{ nome: "Ana Silva", nota1: 8.5, nota2: 7.5 },
{ nome: "Pedro Santos", nota1: 5.0, nota2: 6.0 },
{ nome: "Clara Costa", nota1: 3.5, nota2: 4.0 }
];


console.log("    SISTEMA DE BOLETIM ESCOLAR      ");


turmaAlunos.forEach(function(aluno) {
const mediaFinal = (aluno.nota1 + aluno.nota2) / 2;
let statusFinal;


if (mediaFinal >= 7.0) {
statusFinal = "Aprovado(a)";
} else if (mediaFinal >= 5.0) {
statusFinal = "Em recuperação";
} else {
statusFinal = "Reprovado(a)";
}


console.log("Nome: " + aluno.nome);
console.log("  Primeira Nota: " + aluno.nota1);
console.log("  Segunda Nota : " + aluno.nota2);
console.log("  Média Final  : " + mediaFinal.toFixed(1));
console.log("  Situação     : " + statusFinal);
console.log("------------------------------------");
});