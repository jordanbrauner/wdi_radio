/* global $ */
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
        // var artistNum = $.inArray(newArtist, self.artists);
        // var artistNum = jQuery.inArray(newArtist, self.artists);
        var artistNum = self.artists.indexOf(newArtist);
        if (artistNum === -1){
        // if (newArtist in self.artists){
          var artistSongData = {"artist": newArtist, "artistSongs": []};
          artistSongData.artistSongs.push(selectedSong);
          self.artistsData.push(artistSongData);
          self.artists.push(newArtist);
        }
        // if this data (artist name) already exsists within this array then... do not create a new object within the artist array
      }
      console.log(self.artists);
      console.log("now for the big reveal....");
      console.log(self.artistsData);
    });
  }
})();
