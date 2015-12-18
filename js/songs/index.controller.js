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
    // // Attempt #3, having objects outside of the this.song "scope"
    // this.artist = [];
    // this.artistsData = []

    // // Attempt #1
    // this.songs = SongFactory.query(function(allSongs){
      // self.artists = [];
      // self.artistsData = [];
      // for(var i = 0; i < allSongs.length; i++){
      //   var selectedSong = allSongs[i];
      //   var newArtist = allSongs[i].artist;
      //   var artistNum = self.artists.indexOf(newArtist);
      //   if (artistNum === -1){
      //     var artistSongData = {"artist": newArtist, "artistSongs": []};
      //     artistSongData.artistSongs.push(selectedSong);
      //     self.artistsData.push(artistSongData);
      //     self.artists.push(newArtist);
      //   }
      //   else{
      //     self.artistsData[artistNum].artistSongs.push(selectedSong);
      //   }
      // });

      //Attempt #2 -- setting everything as song.specail array, hope is you can access data by saying this.songs.special
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
    console.log(self);
    console.log(self.songs);
    console.log(self.artists);
  }
})();
