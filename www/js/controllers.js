angular.module('fartModule', ['ionic'])

.controller('FeedCtrl', function($scope, $http, APICallsFactory) {
    $scope.allFarts = [];

    $scope.refresh = function() {
        //var r = $.Deferred();

        APICallsFactory.getAllFarts().then(function(data) { 
            $scope.allFarts = data;
            //r.resolve();
        })

        // return r;
    }

    $scope.refresh(); //.done($scope.drawCharts);

    setTimeout(function() {
        for (var key in $scope.allFarts) {
            var fart = $scope.allFarts[key];
            var data = [
                fart.fartwaveArray
            ];

            var line = new RGraph.Line({
                id: 'myChart_' + fart.id,
                data: data,
                options: {
                    spline: true,
                    numxticks: 0,
                    numyticks: 5,
                    background: {
                        grid: false
                    },
                    colors: ['red'],
                    linewidth: 2,
                    gutter: {
                        left: 40,
                        bottom: 10,
                        right: 15
                    },
                    shadow: {
                        color: '#aaa',
                        blur: 5
                    },
                    zoom: {
                        factor: 1
                    },
                    tickmarks: null
                }
            }).draw();
        }
    }, 1500);


    //$scope.allFarts = Farts.all();
})

.controller('RankingsCtrl', function($scope) {
})

.controller('ChatDetailCtrl', function($scope, $stateParams) {
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
        alert(Object.keys($("#myChart").get(0)));
        var ctx = $("#myChart").get(0).getContext("2d");

        myLineCharts[0] = new Chart(ctx).Line(data, {
            bezierCurve: true
        }); 

        return allFarts;
    });
});
