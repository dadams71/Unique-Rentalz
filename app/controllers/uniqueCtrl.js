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
