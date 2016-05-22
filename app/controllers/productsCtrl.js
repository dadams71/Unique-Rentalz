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


