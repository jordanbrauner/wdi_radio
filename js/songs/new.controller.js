"use strict";

(function() {
  angular
    .module("songs")
    .controller("SongNewController", [
      "SongFactory",
      "$stateParams",
      SongNewControllerFunction
    ]);

  function SongNewControllerFunction( SongFactory, $stateParams ){
    this.song = new SongFactory();
    console.log()
    this.create = function(){
      this.song.$save();
    };

  }
})();
