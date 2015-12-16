"use strict";

(function() {
  angular
    .module("wdiRadio", [
      "ui.router",
      "songs"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ]);

  function RouterFunction($stateProvider) {
    $stateProvider
      .state("songIndex", {
        url: "/songs",
        templateUrl: "js/songs/index.html",
        controller: "SongIndexController",
        controllerAs: "SongIndexViewModel"
      })
      .state("songShow", {
        url: "/songs/:id",
        templateUrl: "js/songs/show.html",
        controller: "SongShowController",
        controllerAs: "SongShowViewModel"
      });
  }
})();
