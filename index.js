let nome = prompt("Digite o nome do personagem");
let idade = parseInt(prompt("Digite a idade"));
let classe = prompt("Digite a sua classe");
let error = true;

do {
    if (classe !== "monge" && classe !== "guerreiro" && classe !== "ninja" && classe !== "mago") {
        classe = prompt("A sua classe não foi reconhecida, tente novamente: ");
    } else {
        error = false;
    }
} while (error === true);

class Personagem {
    constructor(nome, idade, classe) {
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
    }

    getAtaque() {
        switch (this.classe) {
            case "mago":
                return "magia";
            case "guerreiro":
                return "espada";
            case "monge":
                return "artes marciais";
            case "ninja":
                return "shuriken";
            default:
                return "debug";
        }
    }

    atacar() {
        const ataque = this.getAtaque();
        console.log(`O ${this.classe} atacou usando ${ataque}`);
    }
}

let personagem = new Personagem(nome, idade, classe);

personagem.atacar();

