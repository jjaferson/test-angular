var app = angular.module('StarterApp', ['ngMaterial'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('altTheme')
	.primaryPalette('purple');
})

angular.forEach(global[0].VehAvailRSCore.VehVendorAvails, function (dataCar) {
  angular.forEach(dataCar.VehAvails, function(avails){
	avails.TotalCharge['@EstimatedTotalAmount'] = parseFloat(avails.TotalCharge['@EstimatedTotalAmount']);
	avails.total= parseFloat(avails.TotalCharge['@EstimatedTotalAmount']);
  });
});
	

app.controller('AppCtrl', ['$scope', function($scope, $mdSidenav){
	$scope.dataCar = global[0].VehAvailRSCore.VehVendorAvails;
	$scope.dataRent = global[0].VehAvailRSCore.VehRentalCore;
}]);