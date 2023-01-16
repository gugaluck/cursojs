console.log(this);

alert('olá');
this.alert('olá 2');

let pessoa = {
    nome: "Gustavo",
    idade: 23,
    falar: function() {
        console.log("olá tudo bem?");
    },
    dizerNome: function() {
        console.log("meu nome é " + this.nome);
    }
}

pessoa.dizerNome();