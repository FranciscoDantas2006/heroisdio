🛡️ Classificador de Nível de Herói — DIO

Este repositório contém o projeto desenvolvido para o desafio "Classificador de Nível de Herói", da Digital Innovation One (DIO).
O objetivo é colocar em prática conceitos fundamentais de lógica de programação utilizando JavaScript.

📘 Descrição do Desafio

Você deve criar um programa que classifica um herói com base em sua quantidade de experiência (XP).
O programa utiliza variáveis, operadores, estruturas condicionais e (opcionalmente) laços de repetição.

🧠 Regras de Classificação
Faixa de XP	Nível
XP < 1000	Ferro
1001–2000	Bronze
2001–5000	Prata
5001–7000	Ouro
7001–8000	Platina
8001–9000	Ascendente
9001–10000	Imortal
≥ 10001	Radiante
🗂️ Saída Esperada

O programa deve exibir:

O Herói de nome {nome} está no nível de {nivel}

📄 Exemplo de Execução

Entrada:

let nome = "Arthas"
let xp = 8500


Saída:

O Herói de nome Arthas está no nível de Ascendente

📁 Arquivos do Projeto

classificador.js → contém o código principal do desafio.

README.md → explicação completa do projeto.

🚀 Como Executar o Projeto

Certifique-se de ter o Node.js instalado.

Baixe ou clone o repositório.

Abra o terminal na pasta do projeto.

Execute:

node classificador.js

🧩 Código Utilizado
let nome = "Arthas"
let xp = 8500
let nivel = ""

if (xp < 1000) {
    nivel = "Ferro"
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze"
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata"
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro"
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina"
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente"
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal"
} else if (xp >= 10001) {
    nivel = "Radiante"
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`)

✨ Melhorias Possíveis

Você pode melhorar o projeto incluindo:

Entrada de dados via prompt.

Interface visual (HTML/CSS/JS).

Uso de funções.

Lista de vários heróis.

Menu interativo.

Se quiser, posso criar qualquer uma dessas versões para você. 😉

📝 Autor

Projeto desenvolvido para fins educacionais no bootcamp da DIO.
Sinta-se à vontade para evoluir este código e incrementar seu portfólio!
