(function(){
  angular
    .module('songs')
    .directive('songShow', [
      "SongFactory",
      "$state",
      SongDirectiveFunction
  ]);

  function SongDirectiveFunction(SongFactory, $state){
      return {
        templateUrl: "js/songs/_song_show.html",
        replace: true,
        scope: {
          song: "="
        },
        link: function(scope){
          scope.delete = function(){
            scope.song.$delete({id: scope.song.id}, function(response){
              $state.go("songIndex", {}, {reload: true});
            });
          };
        }
      };
    }
})();
