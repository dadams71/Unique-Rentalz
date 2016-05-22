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
