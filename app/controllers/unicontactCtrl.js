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