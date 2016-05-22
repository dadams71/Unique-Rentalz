uniqueRentalz.controller('aboutCtrl', function ($scope, Services, $filter, $sce) {


    Services.mainData().then(function (data) {

        //Get specific data from id
        var results = $filter('filter')(data.mainData, {
           id: 1
      })[0];
        $scope.title = results.title;
        $scope.parent = results.parent;
        $scope.nav = results;
        $scope.navsubs = results.navsubs;
        $scope.mainimage = results.mainimage;
        $scope.content = $sce.trustAsHtml( results.content );
        $scope.comment = $sce.trustAsHtml (results.comment );
        
    })   
});

uniqueRentalz.controller('productsCtrl', function ($scope, Services, $filter, $sce) {


    Services.mainData().then(function (data) {

        //Get specific data from id
        var results = $filter('filter')(data.mainData, {
            id: 2
        })[0];
        $scope.title = results.title;
        $scope.parent = results.parent;
        $scope.navsubs = results.navsubs;
        $scope.mainimage = results.mainimage;
        $scope.comment = $sce.trustAsHtml(results.comment);
        $scope.content = $sce.trustAsHtml(results.content);
    })

    
        Services.mainData().then(function (data) {

        //Get specific data from id
        var results = $filter('filter')(data.mainData, {
            id: 5
        })[0];
        $scope.title2 = results.title;
        $scope.parent2 = results.parent;
        $scope.navsubs2 = results.navsubs;
        $scope.mainimage2 = results.mainimage;
        $scope.contenttwo = $sce.trustAsHtml(results.content);
    })
});

uniqueRentalz.controller('unicontactCtrl', function ($scope, Services, $filter, $sce) {

    Services.mainData().then(function (data) {

        //Get specific data from id
        var results = $filter('filter')(data.mainData, {
            id: 4
        })[0];
        $scope.all = results.myData;
        $scope.title = results.title;
        $scope.parent = results.parent;
        $scope.id = results.id;
        $scope.content = $sce.trustAsHtml( results.content);
    })
});

uniqueRentalz.controller('uniqueCtrl', function ($scope, Services, $filter, $sce) {
    
        Services.mainData().then(function (data) {

        //Get specific data from id
        var results = $filter('filter')(data.mainData, {
           id: 3
      })[0];
        $scope.title = results.title;
        $scope.parent = results.parent;
        $scope.navsubs = results.navsubs;
        $scope.mainimage = results.mainimage;
        $scope.content = $sce.trustAsHtml( results.content );
        $scope.comment = $sce.trustAsHtml( results.comment );
        
    })
});

uniqueRentalz.controller('uniwelcomeCtrl', function ($scope, Services, $filter, $sce) {

    Services.mainData().then(function (data) {

        //Get specific data from id
        var results = $filter('filter')(data.mainData, {
            id: 0
        })[0];
        
        var $slideItems = "[{ src: 'images/contact-screen-background.jpg' }, { src: 'images/login-screen-background.jpg' }, { src: 'images/login-screen-background2.jpg' }]";
        
        $scope.title = results.title;
        $scope.parent = results.parent;
        $scope.content = $sce.trustAsHtml(results.content);
//        $scope.slideitems = $sce.trustAsHtml(
//            "[{ src: 'images/contact-screen-background.jpg' }, { src: 'images/login-screen-background.jpg' }, { src: 'images/login-screen-background2.jpg' }]"
//        );
        
        $scope.slideitems = "[{ src: 'images/contact-screen-background.jpg' }]";
    })
});