class Aluno {
    constructor(id, nome, idade, curso, matricula){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }
}

let newAluno = new Aluno(1, 'Yasmim', 22, 'Desenvolvimento Web', true);
let newAluno2 = new Aluno(2, 'Carlos', 19, 'Desenvolvimento Web', true);
let newAluno3 = new Aluno(3, 'Maida', 18, 'Desenvolvimento Web', true);

console.log(`Esse(a) é o(a) novo(a) aluno(a): ${newAluno.nome} e sua idade é ${newAluno.idade} anos`);

console.log(`Esse(a) é o(a) novo(a) aluno(a): ${newAluno2.nome} e sua idade é ${newAluno2.idade} anos`);

console.log(`Esse(a) é o(a) novo(a) aluno(a): ${newAluno3.nome} e sua idade é ${newAluno3.idade} anos`);