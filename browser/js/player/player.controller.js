juke.controller('PlayerCtrl', function($scope, $http, $log){
	$scope.playing = false;
	var audio = document.createElement('audio');

   $scope.currentSong=null;

  	$scope.pause = function() {
  		audio.pause();
  		$scope.playing = false;
  	}
  	$scope.toggle = function(song){
  		if($scope.playing && $scope.currentSong===song){
  			$scope.pause();
  		}
  		else{
  			if($scope.currentSong !== song){
  				audio.src = '/api/songs/' + song.id + '/audio';
 				$scope.currentSong = song;
 			}
    	audio.play();
    	$scope.playing = true;
  		}
  	}
  	$scope.advance = function(song){
  		var nextIndex = $scope.album.songs.indexOf(song)+1;
  		if(nextIndex === $scope.album.songs.length){
  			nextIndex = 0;
  		}
  		console.log(nextIndex)
  		$scope.toggle($scope.album.songs[nextIndex])
  	}
  	 $scope.retreat = function(song){
  		var prevIndex = $scope.album.songs.indexOf(song)-1;
  		if(prevIndex === -1){
  			prevIndex = $scope.album.songs.length-1;
  		}
  		console.log(prevIndex)
  		$scope.toggle($scope.album.songs[prevIndex])
  	}
  	// $scope.toggle = function() {
  	// 	$scope.playing = !$scope.playing;
  	// }
  	audio.addEventListener('timeupdate', function(){
  		$scope.progress = 100 * audio.currentTime/audio.duration;
  		$scope.$digest();
  	});
  })