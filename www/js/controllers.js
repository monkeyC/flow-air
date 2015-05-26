angular.module('starter.controllers', [])


.controller('FlowersCtrl', function($scope, Flowers) {
  $scope.flowers = Flowers.all();
  $scope.remove = function(flower) {
    Flowers.remove(flower);
  }
})

.controller('FlowerDetailCtrl', function($scope, $stateParams, Flowers) {
  $scope.flower = Flowers.get($stateParams.flowerId);
})

.controller('DashCtrl', function($scope, Dashs) {
    $scope.dashs = Dashs.all();
  $scope.remove = function(dash) {
    Dashs.remove(dash);
  }
})

.controller('DashDetailCtrl', function($scope, $stateParams, Dashs) {
  $scope.dash = Dashs.get($stateParams.dashId);
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
