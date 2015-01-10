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

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
