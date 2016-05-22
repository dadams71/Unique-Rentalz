uniqueRentalz.factory('Services', function ($http) {
    return {        
        mainData: function() {
            return $http.get('data/maindata.json').then(function (response){
                return response.data;
            });
        }
    }
});
