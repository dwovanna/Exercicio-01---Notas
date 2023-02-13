/******************************************************
 * Objetivo: Sistema de média escolares
 * Autor: Dwovanna Santos
 * Data: 10/02/2023
 * Versão: 1.0
*****************************************************/

//import da biblioteca readline
var readline = require('readline');
const { Console } = require('console');

//Cria o objeto para ser especialista em entrada de dados pelo teclado
var entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

//Função de CallBack para entrar nome do aluno
entradaDados.question('Nome do Aluno: \n', function(aluno){

    // Recebe o que é digitado no teclado
    let nomeAluno = aluno;

//Função CallBack para entrar sexo do aluno
entradaDados.question('Sexo do Aluno: \n', function(generoAluno){
    //Recebe digitado pelo teclado
    let sexoAluno = generoAluno.toUpperCase();

    let entradaAluno;

    switch(sexoAluno) {
        case "MASCULINO":
        entradaAluno = "O Aluno";
        break;

        case "FEMENINO":
        entradaAluno = "A Aluna";
        break;
    }
    

//Função de CallBack para entrar nome do professor
entradaDados.question('Nome do Professor: \n', function(nome){
    //Recebe o que é digitado no teclado
    let nomeProfessor = nome;

    

//Função de CallBack para entrar sexo do professor
entradaDados.question('Sexo do Professor: \n', function(generoProfessor){
    //Recebe o que é digitado pelo teclado
    let sexoProfessor = generoProfessor.toUpperCase();

    let entradaProfessor;

    switch(sexoProfessor) {
        case "MASCULINO":
        entradaProfessor = "PROFESSOR";
        break;

        case "FEMENINO":
        entradaProfessor = "PROFESSOR:";
        break;
    }

//Função de CallBack para entrar nome do curso
entradaDados.question('Nome do Curso: \n', function(curso){
    //Recebe o que é digitado pelo teclado
    let nomeCurso =  curso

//Função de CallBack para entrar nome da Disciplina
entradaDados.question('Nome da disciplina: \n', function(disciplina){
    //Recebe o que é digitado pelo teclado
    let nomeDisciplina =  disciplina


//Função de CallBack para entrar a nota1
entradaDados.question('Digite a nota1: \n', function(nota1){
    let valor1 = nota1;
    
    //Função de CallBack para entrar nota2
    entradaDados.question('Digite a nota2: \n', function(nota2){
        let valor2 = nota2;

        //Função de CallBack para entrar nota3
        entradaDados.question('Digite a nota3: \n', function(nota3){
            let valor3 = nota3;

             //Função de CallBack para entrar nota4
            entradaDados.question('Digite a nota4: \n', function(nota4){
                let valor4 = nota4;
                let media;

// Erro para entrada vazia
if(valor1 =='' || valor2 == '' || valor3 == '' || valor4 == '')
{
    console.log('ERRO: Voce deixou de entrar com algum valor.')

// Erro para entrada de texto
}else if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4))
{
    console.log('ERRO: Voce não digitou um número válido.')

// Erro para entrada de dados entre 0 e 100
}else if( valor1 < 0 || valor2 < 0 || valor3 < 0 || valor4 < 0)
{
    console.log('ERRO: Número minímo é 0')

} else if (valor1 > 100 || valor2 > 100 || valor3 > 100 || valor4 > 100)
{  
    console.log('ERRO: Número máximo é 100')
}

      
     
                else{
                //Calculo das notas
                media = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4))/4;

                 //Resultado
                console.log('Média do Aluno: ' + media.toFixed(1));

                 // validação se o aluno foi reprovado ou não

                if(media >= 70)
                {
                    console.log('Status do Aluno: APROVADO!');
                }else 
                {
                    console.log('Statatus do Aluno: REPROVADO!');

                // Se a nota for entre 50 e 69 precisa da nota do exame
                } if (media >= 50 && media <= 69){
                    console.log('Será necessário a nota do exame');
                entradaDados.question('Digite a nota do exame: \n', function(exame){
                    let notaExame = exame;
                });

                }                                 
               
                }

                // Tela Final
                console.log(entradaAluno, aluno, "foi Aprovado na disciplina", nomeDisciplina, "\n",  "CURSO:" + curso, "\n", entradaProfessor, nome, "\n", "NOTAS DO ALUNO:" + valor1, valor2, valor3, valor4, "\n", "MÉDIA FINAL:" + media);


                  });
                });
              });
            });
          });
        });
      });
     });
   });
});