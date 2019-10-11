// Inicializar o módulo.
let nomeApp = 'EscolaWebApp'
let modulos = []
var app = angular.module(nomeApp, modulos);

// Estrutura básica para uma função no controller

let homeController = function($scope){
  $scope.nome = "";

  $scope.desejarBoasVindas = function() {
    let nome = $scope.nome;
    $scope.mensagem = "Olá, " + nome;
  }
}

app.controller ('HomeController', homeController);

// Aluno

let alunoController = function($scope){
  $scope.nome = "";
  $scope.matricula = "";
  $scope.cpf = "";
  $scope.nascimento = "";
  $scopee.fk_id_endereco = 0;
  $scope.fk_id_curso = 0;
}

app.controller ('AlunoController', alunoController);

// Campus

let campusController = function($scope){
  $scope.sigla = "";
  $scope.cidade = "";
}

app.controller ('CampusController', campusController);

// Curso

let cursoController = function($scope){
  $scope.nome = "";
  $scope.fk_id_turno = 0;
}

app.controller ('CursoController', cursoController);

// Disciplina

let disciplinaController = function($scope){
  $scope.nome = "";
  $scope.fk_id_professor = 0;
}

app.controller ('DisciplinaController', disciplinaController);

// Endereço

let enderecoController = function($scope){
  $scope.logradouro = "";
  $scope.complemento = "";
  $scope.bairro = "";
  $scope.cep = "";
  $scope.numero = "";
}

app.controller ('EnderecoController', enderecoController);

// Escola

let escolaController = function($scope){
  $scope.nome = "";
  $scope.fk_id_endereco = 0;
  $scope.fk_id_campus = 0;
}

app.controller ('EscolaController', escolaController);

// Professor

let professorController = function($scope){
  $scope.nome = "";
  $scope.fk_id_endereco = 0;
}

app.controller ('ProfessorController', professorController);

// Turma

let turmaController = function($scope){
  $scope.nome = "";
  $scope.fk_id_curso = 0;
}

app.controller ('TurmaController', turmaController);

// Turno

let turnoController = function($scope) {
  $scope.nome = "";
}

app.controller ('TurnoController', turnoController)
