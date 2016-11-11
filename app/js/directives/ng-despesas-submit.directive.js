angular.module('app').directive('ngViagemSubmit', function() {
  return {
    restrict: 'E',
    require: '^form',
    scope: {
      submit: '&',
    },
    template: '<button type="button" class="btn btn-primary">Salvar</button>',
    link: function($scope, $element, $attrs, viagemCtrl){
        $element.on('click', function() {
          if (viagemCtrl.$valid){
            $scope.submit();
          }
          else{
            alert('Formuário Inválido.');
          }
        });
    }
  }
});
