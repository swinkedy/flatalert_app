angular.module('fartModule', ['ionic'])

.controller('FeedCtrl', function($scope, $http, APICallsFactory, $ionicLoading, Farts) {
    /*$scope.show = function() {
        $ionicLoading.show({
            template: 'Loading...'
        });
    };*/
    /*$scope.allFarts = APICallsFactory.getAllFarts().then(function(promise) {        
        return promise;
    });*/
    /*$scope.hide = function(){
        $ionicLoading.hide();
    };*/
    $scope.allFarts = Farts.all();
})

.controller('RankingsCtrl', function($scope, Farts) {
    $scope.chats = Farts.all();
    $scope.remove = function(chat) {
        Farts.remove(chat);
    }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Farts) {
    $scope.chat = Farts.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
    $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
    $scope.friend = Friends.get($stateParams.friendId);
})

.controller('MyFartsCtrl', function($scope, APICallsFactory) { 
    $scope.allFarts = APICallsFactory.getAllFarts().then(function(allFarts) {        
       // alert(Object.keys(allFarts[0]));

        
        var data = {
            labels: allFarts[0].fartwaveArray,
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: allFarts[0].fartwaveArray
                }
            ]
        };

        // Get context with jQuery - using jQuery's .get() method.
        for (var i = 0; i <= allFarts.length; i++) {
            var ctx = $("#myChart" + allFarts[i].id).get(0).getContext("2d");
        }

        var myLineChart = new Chart(ctx).Line(data, {
            bezierCurve: true
        }); 
        
        return allFarts
    });
});
