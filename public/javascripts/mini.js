//var tinder = require('tinderjs');

$(document).ready(function () {
  console.log($("button").data("token"));
  console.log($("button").data("id"));

//  var client = new tinder.TinderClient();
//  var _ = require('underscore')
//
//  $("button").on("click", function(e) {
//    e.preventDefault();
//
//    client.authorize(
//      $("button").data("token"),
//      $("button").data("id"),
//      function() {
//
////      var defaults = client.getDefaults()
////      var recs_size = defaults.globals.recs_size;
//
//      client.getRecommendations(5, function(error, data){
//        _.chain(data.results)
//        .pluck('_id')
//        .each(function(id) {
//          client.like(id, function(error, data) {
//            console.log("Will fuck for food...");
//            if (data.matched) {
//              client.sendMessage(id, "Will fuck for food...");
//
//            }
//          });
//        });
//      });
//    });
//  });
});
