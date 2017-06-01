"use strict"

app.controller("highway1Ctrl", ["$scope",
  function($scope) {
    $scope.highwayName = "Route 66";
    $scope.highwayDescription = "U.S. Route 66, also known as the Will Rogers Highway, the Main Street of America or the Mother Road, was one of the original highways within the U.S. Highway System. US 66 was established on November 11, 1926, with road signs erected the following year. The highway, which became one of the most famous roads in the United States, originally ran from Chicago, Illinois, through Missouri, Kansas, Oklahoma, Texas, New Mexico, and Arizona before ending at Santa Monica, California, covering a total of 2,448 miles.";
  }
])


// app.controller("SongCtrl", ["$scope",
//   function($scope) {
//     $scope.newSong = { artist: "", album: "", name: ""};
//     $scope.songs =[{ artist: "Britney", album: "In The Zone", name: "Toxic"}];
//     $scope.addSong = function() {
//       $scope.songs.push({
//         artist: $scope.newSong.artist,
//         name: $scope.newSong.name,
//         album: $scope.newSong.album,
//       });
//     };
//   }
// ]);
