let pessoa = {
    nome: "Gustavo",
    idade: 23,
    falar: function() {
        console.log("ola tudo bem?");
    },
    soma: function(a, b) {
        return a + b;
    }
};

console.log(pessoa);

pessoa.falar();
var soma = pessoa.soma(2, 2);
console.log(soma);