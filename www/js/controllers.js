angular.module('fartModule', ['ionic'])

.controller('FeedCtrl', function($scope, $http, APICallsFactory, $ionicLoading, Farts) {
    $scope.allFarts = [];

    $scope.refresh = function() {
        APICallsFactory.getAllFarts().then(function(data) { 
            $scope.allFarts = data;
            
            var ctx;
            var dataset;
            var myLineChart;

            for (var key in $scope.allFarts) {
                var fart = $scope.allFarts[key];

                dataset = {
                    labels: fart.fartwaveArray,
                    datasets: [
                        {
                            label: "Fart n." + fart.id,
                            fillColor: "rgba(220,220,220,0.2)",
                            strokeColor: "rgba(220,220,220,1)",
                            pointColor: "rgba(220,220,220,1)",
                            pointStrokeColor: "#fff",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgba(220,220,220,1)",
                            data: fart.fartwaveArray
                        }
                    ]
                };

                ctx = $("#myChart_" + fart.id).get(0).getContext("2d");
                
                alert(typeof ctx);

                myLineChart = new Chart(ctx).Line(dataset, {
                    bezierCurve: true
                }); 
            }
        })
    }

    $scope.refresh();



    //$scope.allFarts = Farts.all();
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
    var myLineCharts = [];
    //var ctx = $(".myChart").get(0).getContext("2d");

    $scope.allFarts = APICallsFactory.getAllFarts().then(function(allFarts) {        
        // alert(Object.keys(allFarts[0]));
        //allFarts = allFarts.slice(0,19);

        var data = {
            labels: allFarts[0].fartwaveArray,
            datasets: [
                {
                    label: "Fart n." + allFarts[0].id,
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

        var ctx = $("#myChart").get(0).getContext("2d");

        myLineCharts[0] = new Chart(ctx).Line(data, {
            bezierCurve: true
        }); 

        return allFarts;
    });
});
