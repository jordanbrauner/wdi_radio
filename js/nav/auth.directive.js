(function(){
  angular
    .module("wdiRadio")
    .directive("authNav", function($auth) {
      return {
        templateUrl: "js/nav/_auth.html",
        replace: true,
        restrict: 'E',
        link: function(scope) {
          console.log(scope.currentUser);

          // update scope/view on successful signin
          scope.$on('auth:login-success', function(ev, user) {
            scope.currentUser = user;
          });

          scope.$on('auth:logout-success', function(ev, user) {
            console.log("logout-success test");
            scope.currentUser = false;
          });

          // set initial state, for currentUser, when directive is loaded
          $auth.validateUser()
            .then(function(user){
              scope.currentUser = user;
            })
            .catch(function(err){
              scope.currentUser = undefined;
            });
        }
      };
    });
})();
