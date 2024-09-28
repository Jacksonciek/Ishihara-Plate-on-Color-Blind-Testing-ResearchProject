var app = angular.module('CBApp', ["ui.router"]);

app.controller('NavbarController', function($scope) {
    // Initialize the menu state
    $scope.isMenuOpen = false;

    // Function to toggle the menu
    $scope.toggleMenu = function() {
        $scope.isMenuOpen = !$scope.isMenuOpen;
    };
});
