angular.module('starter.services', [])

.factory('APICallsFactory', function($http, $q) {
    return {
        getAllFarts: function() {
            var deferred = $q.defer();
            var currentDateTime = new Date();
            

            $http.get('https://flatalert.herokuapp.com').success(function(callResult) {
                for (var i = 0; i <= callResult.length; i++) {
                    if (callResult[i]) {
                        // recreate array from string and convert to int
                        callResult[i].fartwaveArray = callResult[i].fartwave.split(" ").map(Number); 
                        
                        if (callResult[i].fartomic) { 
                            // adjust units
                            callResult[i].fartomic.maximum = callResult[i].fartomic.maximum * 10;
                            
                            // round max speed
                            callResult[i].fartomic.max_speed = Math.round(callResult[i].fartomic.max_speed);
                            
                            // divide aoc by avogadro constant and transform in kmol (obviously it does not make any sense)
                            callResult[i].fartomic.aoc = Math.round(callResult[i].fartomic.aoc / 6.022e23 / 1000);
                        }
                        
                        // get Date and Time of creation
                        var dateTime = new Date(callResult[i].created_at); //.split("T");
                        var diff = (currentDateTime - dateTime) / 1000; // want it in seconds 
                        var msg;
                        
                        if (diff / 60 <= 1) {                      // less than 1 minute ago
                            msg = "less than 1 minute ago";
                        } else if (diff / 3600 <= 1) {           // less than 1 hour ago
                            msg = Math.round(diff / 60) + " minutes ago";
                        } else if (diff / 86400 <= 1) {         // less than 1 day ago
                            msg = Math.round(diff / 3600) + " hours ago";
                        } else if (diff / 2592000 <= 1) {     // less than 30 days ago
                            msg = Math.round(diff / 86400) + " days ago";
                        } else {
                            msg = dateTime;
                        }                        
                        
                        callResult[i].creationDateTime = msg;
                    }
                }

                deferred.resolve(callResult)});

            return deferred.promise; //callResult.data;
        }
    }
})

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    // Some fake testing data
    var friends = [{
        id: 0,
        name: 'Ben Sparrow',
        notes: 'Enjoys drawing things',
        face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    }, {
        id: 1,
        name: 'Max Lynx',
        notes: 'Odd obsession with everything',
        face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    }, {
        id: 2,
        name: 'Andrew Jostlen',
        notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
        face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
    }, {
        id: 3,
        name: 'Adam Bradleyson',
        notes: 'I think he needs to buy a boat',
        face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
    }, {
        id: 4,
        name: 'Perry Governor',
        notes: 'Just the nicest guy',
        face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
    }];


    return {
        all: function() {
            return friends;
        },
        get: function(friendId) {
            // Simple index lookup
            return friends[friendId];
        }
    }
});
