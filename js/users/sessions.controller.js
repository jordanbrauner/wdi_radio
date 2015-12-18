(function(){
  angular
  .module("wdiRadio")
  .controller("SessionsController", function($auth, $state, $scope){
    this.signinForm = {};
    this.signupForm = {};

    this.signin = function() {
      $auth.submitLogin(this.signinForm)
      .then(function(resp) {
        $state.go('songIndex');
      })
      .catch(function(resp) {
        console.log("Signin failure:", resp);
      });

    };

    this.signup = function() {
      $auth.submitRegistration(this.signupForm)
      .then(function(resp) {
        $state.go('songIndex');
      })
      .catch(function(resp) {
        console.log("Signup failure:", resp);
      });

    };

    $scope.$on('$stateChangeSuccess',
    function(event, toState, toParams, fromState, fromParams){
      if(toState.name == 'signout') {
        console.log("sign out test");
        $auth.signOut();
      }
    });
  });
})();
