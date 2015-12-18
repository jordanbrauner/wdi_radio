( function(){
  angular
    .module("songs")
    .directive( "songForm", [
        "SongFactory",
        "$state",
        "$sce",
        SongFormDirectiveFunction
      ]);

  function SongFormDirectiveFunction(SongFactory, $state, $sce){
      return{
        // templateUrl: "./_song_form.html",
        templateUrl: "js/songs/_song_form.html",
        replace: true,
        scope: {
          song: "=",
          formType: "@"
        },
        link: function(scope){
          scope.create = function(){
            scope.song.$save( function(response){
              $state.go("songShow", {id: scope.song.id}, {reload: true});
            });
          };
          scope.update = function(){
            scope.song.$update({ id: scope.song.id }, function(response){
              $state.go("songShow", {id: scope.song.id}, {reload: true});
            });
          };
        }
      };
    }
})();
