angular.module('app', []).
controller('myCtrl', function($scope) {
   var words = [ 
    {label: "Female Name"},
    {label: "Professional Title"},
    {label: "Tedious Task"},
    {label: "Dirty Task"},
    {label: "Celebrity"},
    {label: "Useless Skill"},
    {label: "Adjective"},
    {label: "Obnoxiuous Celebrity"},
    {label: "Huge Number"}

  ];
  words.map(function(obj){
    obj["value"] = obj.label;
  })
  $scope.words = words;
});