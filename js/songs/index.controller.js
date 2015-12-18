"use strict";

(function() {
  angular
    .module("songs")
    .controller("SongIndexController", [
      "SongFactory",
      SongIndexControllerFunction
    ]);

  function SongIndexControllerFunction(SongFactory) {
    var self = this;
      this.songs = SongFactory.query(function(allSongs){
      self.artists = [];
      self.artistsData = [];
      for(var i = 0; i < allSongs.length; i++){
        var selectedSong = allSongs[i];
        var newArtist = allSongs[i].artist;
        var artistNum = self.artists.indexOf(newArtist);
        if (artistNum === -1){
          var artistSongData = {"artist": newArtist, "artistSongs": []};
          artistSongData.artistSongs.push(selectedSong);
          self.artistsData.push(artistSongData);
          self.artists.push(newArtist);
        }
        else{
          self.artistsData[artistNum].artistSongs.push(selectedSong);
        }
      }
    });
  }
})();
