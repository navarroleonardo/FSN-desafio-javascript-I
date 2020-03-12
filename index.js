// Base a ser utilizada
const alunosDaEscola = [{ nome: "Henrique", notas: [], cursos: [], faltas: 5 }, { nome: "Edson", notas: [], cursos: [], faltas: 2 }, { nome: "Bruno", notas: [10, 9.8, 9.6], cursos: [], faltas: 0 }, { nome: "Guilherme", notas: [10, 9.8, 9.6], cursos: [{ nomeDoCurso: "Full Stack", dataMatricula: new Date }], faltas: 0 }, { nome: "Carlos", notas: [], cursos: [], faltas: 0 }, { nome: "Lucca", notas: [10, 9.8, 9.6], cursos: [{ nomeDoCurso: "UX", dataMatricula: new Date }], faltas: 0 }];

// implementação

function adicionarAluno(nomeNovoAluno) {
    /*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
    E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
    A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/
    alunosDaEscola.push({
        nome: nomeNovoAluno,
        notas: [],
        cursos: [],
        faltas: 0
    });
    if (alunosDaEscola.find(aluno => aluno.nome === nomeNovoAluno) != undefined) {
        console.log("O(a) aluno(a) " + nomeNovoAluno + " foi inserido(a) na base.")
    }
}

const formatarNotas = aluno => {
    let stringRetorno = ""
    for (let i = 0; i < aluno.notas.length; i++) {
        if (i > 0) {
            stringRetorno = stringRetorno + ", "
        }
        stringRetorno = stringRetorno + aluno.notas[i]
    }
    if (stringRetorno != "") {
        return stringRetorno;
    } else {
        return "O aluno ainda não foi avaliado.";
    }
}

const formatarCursos = aluno => {
    let stringRetorno = ""
    for (let i = 0; i < aluno.cursos.length; i++) {
        if (i > 0) {
            stringRetorno = stringRetorno + ", "
        }
        stringRetorno = stringRetorno + aluno.cursos[i].nomeDoCurso
    }
    if (stringRetorno != "") {
        return stringRetorno;
    } else {
        return "O aluno ainda não foi matriculado em algum curso.";
    }
}

function listarAlunos() {
    /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
    Vale dizer que As informações deverão ser exibidas em um formato amigável.*/
    let indiceAluno = 0;
    for (let i = 0; i < alunosDaEscola.length; i++) {
        indiceAluno = i + 1;
        console.log(indiceAluno + "° Aluno: " + alunosDaEscola[i].nome);
        console.log("   - Notas: " + formatarNotas(alunosDaEscola[i]))
        console.log("   - Cursos: " + formatarCursos(alunosDaEscola[i]));
        console.log("   - Faltas: " + alunosDaEscola[i].faltas);
    }
}

function buscarAluno(nomeAlunoProcurado) {
    /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. 
    Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. 
    E deverá devolver um aluno em seu retorno. */
    const alunoEncontrado = alunosDaEscola.find(aluno => aluno.nome === nomeAlunoProcurado);
    if (alunoEncontrado != undefined) {
        console.log("O(a) aluno(a) " + nomeAlunoProcurado + " está cadastrado em nossa base.")
        return alunoEncontrado
    } else {
        console.log("O(a) aluno(a) " + nomeAlunoProcurado + " não foi encontrado em nossa base.")
    }
}

function matricularAluno(nome, curso) {
    /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso.
    Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
    Lembre-se de exibir o feedback para o usuário. */
    alunosDaEscola.forEach(aluno => {
        if (aluno.nome == nome) {
            aluno.cursos.push({ nomeDoCurso: curso, dataMatricula: new Date() });
            console.log("O(a) aluno(a) " + nome + " foi matriculado no curso " + curso);
            console.log("Agora, o(s) curso(s) em que " + nome + " está matriculado(a) são: ");
            for (let i = 0; i < aluno.cursos.length; i++) {
                console.log("- " + aluno.cursos[i].nomeDoCurso);
            }
        }
    })
}

function aplicarFalta(nomeAlunoAusente) {
    /* Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. 
    Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso. */
    alunosDaEscola.forEach(aluno => {
        if (aluno.nome == nomeAlunoAusente) {
            aluno.faltas++;
            console.log("O(a) aluno(a) " + nomeAlunoAusente + " faltou, e agora possui " + aluno.faltas + " falta(s).");
        }
    });
}

function aplicarNota(nomeAlunoAvaliado, nota) {
    /*Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas. 
    Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.*/
    alunosDaEscola.forEach(aluno => {
        if (aluno.nome == nomeAlunoAvaliado && aluno.cursos.length > 0) {
            aluno.notas.push(nota);
            console.log("O(a) aluno(a) " + nomeAlunoAvaliado + " recebeu a nova nota " + nota + ".")
            console.log("Suas notas agora são: " + formatarNotas(aluno));
        } else {
            if (aluno.cursos.length = 0) {
                console.log("O(a) aluno(a) " + nomeAlunoAvaliado + " não está matriculado em nenhum curso");
            }
        }
    });
}

function aprovarAluno(nomeAluno) {
    /*Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não.
    Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
    Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.*/
    alunosDaEscola.forEach(aluno => {
        if (aluno.nome == nomeAluno) {
            let media = aluno.notas.reduce((a, b) => a + b) / aluno.notas.length;
            if (aluno.faltas <= 3 && media >= 7 && aluno.cursos.length > 0) {
                console.log("O(a) aluno(a) " + nomeAluno + " está aprovado.");
            } else {
                console.log("O(a) aluno(a) " + nomeAluno + " está reprovado.");
            }
        }
    })
}

console.log("Testando a 1a função: Adicionar Aluno.")
adicionarAluno("Marjori");
adicionarAluno("Ana Beatriz");
adicionarAluno("Maria Fernanda");
console.log("");

console.log("Testando a 2a função: Listar Alunos.")
listarAlunos("");
console.log("");

console.log("Testando a 3a função: Buscar Aluno.")
buscarAluno("Marjori");
buscarAluno("Adolf");
console.log("");

console.log("Testando a 4a função: Matricular Aluno.")
matricularAluno("Marjori", "Web Full Stack Blend");
matricularAluno("Marjori", "ADS");
console.log("");

console.log("Testando a 5a função: Aplicar Falta.")
aplicarFalta("Marjori");
aplicarFalta("Marjori");
console.log("");

console.log("Testando a 6a função: Aplicar Nota.")
aplicarNota("Marjori", 7.4);
aplicarNota("Marjori", 9.2);
console.log("");

console.log("Testando a 7a função: Aprovar Aluno.");
aprovarAluno("Marjori");