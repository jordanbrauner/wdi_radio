"use strict";

( function(){
  angular
    .module("songs")
    .controller("SongShowController", [
        "SongFactory",
        "$stateParams",
        "$sce",
        SongShowControllerFunction
    ]);

  function SongShowControllerFunction(SongFactory, $stateParams, $sce){
    this.song = SongFactory.get({id: $stateParams.id}, function(selSong){
      selSong.goodAudioLink = $sce.trustAsResourceUrl(selSong.audio_url);
    });
    console.log(this.song);
    console.log(this.song.goodAudioLink);
  }

})();
