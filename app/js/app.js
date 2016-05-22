//var uniqueRentalz = angular.module('uniqueRentalz', []);

var uniqueRentalz = angular.module('uniqueRentalz', ['ui.router', 'ngSanitize', 'vegas']);

uniqueRentalz.controller('indexCtrl', function ($scope, Services) {


    //Give submenu a active class
    $scope.select = function (item) {
        $scope.selected = item;
    };

    $scope.isActive = function (item) {
        return $scope.selected === item;
    };

    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) === path) {
            return 'active';
        } else {
            return '';
        }
    }
});

uniqueRentalz.filter('removeSpaces', [function () {
    return function (string) {
        if (!angular.isString(string)) {
            return string;
        }
        return string.replace(/[\s]/g, '');
    };
}])

uniqueRentalz.config(function ($stateProvider, $urlRouterProvider) {

    //URL Redirect
    $urlRouterProvider.when("", "/welcome");
    $urlRouterProvider.when("/products", "/products/product_a");

    $stateProvider

        .state('welcome', {
        url: "/welcome",
        templateUrl: "templates/pagetype_c.html",
        controller: "uniwelcomeCtrl",
    })

    .state('about', {
        url: "/about",
        templateUrl: "templates/pagetype_a.html",
        controller: "aboutCtrl"
    })

    .state('products', {
        url: "/products",
        templateUrl: "templates/pagetype_b.html",
        controller: "productsCtrl"
    })

    .state('products.product_a', {
        url: "/product_a",
        templateUrl: "templates/product_a.html",
        controller: "productsCtrl"
    })

    .state('products.product_b', {
        url: "/product_b",
        templateUrl: "templates/product_b.html",
        controller: "productsCtrl"
    })

    .state('products.product_a.product_white', {
        url: "/product_white",
        templateUrl: "templates/content.html",
        controller: function ($scope) {
            $scope.content = "White";
            $scope.image = "prod_white.jpg";
        }
    })

    .state('products.product_a.product_black', {
        url: "/product_black",
        templateUrl: "templates/content.html",
        controller: function ($scope) {
            $scope.content = "Black";
            $scope.image = "prod_grey.jpg";
        }
    })

    .state('products.product_a.product_red', {
        url: "/product_red",
        templateUrl: "templates/content.html",
        controller: function ($scope) {
            $scope.content = "Red";
            $scope.image = "prod_red.jpg";

        }
    })

    .state('products.product_a.product_cream', {
        url: "/product_cream",
        templateUrl: "templates/content.html",
        controller: function ($scope) {
            $scope.content = "Cream";
            $scope.image = "prod_cream.jpg";
        }
    })

    .state('products.product_a.product_blue', {
        url: "/product_blue",
        templateUrl: "templates/content.html",
        controller: function ($scope) {
            $scope.content = "Blue";
            $scope.image = "prod_blue.jpg";
        }
    })

    .state('products.product_a.padding_mono', {
        url: "/padding_mono",
        templateUrl: "templates/content.html",
        controller: function ($scope) {
            $scope.content = "Chair covers";
            $scope.image = "chair-cusions.jpg";
        }
    })
    
        .state('products.product_a.padding_color', {
        url: "/padding_color",
        templateUrl: "templates/content.html",
        controller: function ($scope) {
            $scope.content = "Colour chair covers";
            $scope.image = "chair-color.jpg";
        }
    })

    .state('uni', {
        url: "/uni",
        templateUrl: "templates/pagetype_a.html",
        controller: "uniqueCtrl"
    })


    .state('contact', {
        url: "/contact",
        templateUrl: "templates/pagetype_d.html",
        controller: "unicontactCtrl"
    })

});
