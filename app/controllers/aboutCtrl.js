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