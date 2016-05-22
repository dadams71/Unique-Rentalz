//Vegas Screenflip directive
angular.module('vegas', [])

.directive('vegas', function () {

    return {
        restrict: 'A',
        transclude: true,
        link: function (scope, el, attr) {
            el.vegas({
                slides: scope.$eval(attr.slides),
                cover: true,
                timer: false,
                animations: 'kenburns',
                overlay: 'bower_components/vegas/dist/overlays/01.png'
            });
        }
    };
});
