const prompt = require("prompt-sync")();

while (true) {
    console.log("\n===== MENU =====");
    console.log("1 - Cadastrar Herói");
    console.log("2 - Sair");

    let opcao = prompt("Escolha uma opção: ");

    if (opcao === "1") {
        let nome = prompt("Digite o nome do herói: ");
        let xp = Number(prompt("Digite o XP do herói: "));

        let nivel = "";

        if (xp < 1000) nivel = "Ferro";
        else if (xp <= 2000) nivel = "Bronze";
        else if (xp <= 5000) nivel = "Prata";
        else if (xp <= 7000) nivel = "Ouro";
        else if (xp <= 8000) nivel = "Platina";
        else if (xp <= 9000) nivel = "Ascendente";
        else if (xp <= 10000) nivel = "Imortal";
        else nivel = "Radiante";

        console.log(`\nO Herói de nome ${nome} está no nível de ${nivel}`);
    }

    else if (opcao === "2") {
        console.log("\nEncerrando o programa...");
        break;
    }

    else {
        console.log("\nOpção inválida! Tente novamente.");
    }
}
o 