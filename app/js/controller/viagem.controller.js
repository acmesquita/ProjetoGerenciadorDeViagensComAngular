angular.module('app').controller('viagemCtrl', function($scope, $rootScope) {

  $scope.viagens = [];

  $scope.adicionar = function(viagem) {
    var v = angular.copy(viagem);
    v.id = $scope.viagens.length + 1;
    $scope.viagens.push(v);
    $scope.$apply();
  };

  $scope.irParaDespesas = function(viagem) {

    $rootScope.viagem = viagem;
    
  }

});
