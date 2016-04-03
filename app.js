angular.module('app', []).
controller('myCtrl', function($scope) {
   var words = [ 
    {label: "Female Name",
     type: 'femalename',
     value: '',
     index: 0
    },
    {label: "Professional Title",
      type: 'title',
     value: '',
     index: 1
    },
    {label: "Tedious Task",
      type: 'tedioustask',
     value: '',
     index: 2
    },
    {label: "Dirty Task",
      type: 'dirtytask',
     value: '',
     index: 3
    }

  ];  
  $scope.words = words;
});