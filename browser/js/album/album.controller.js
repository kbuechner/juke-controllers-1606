juke.controller('AlbumCtrl', function($scope, $http, $log){
	$http.get('/api/albums/1')
	.then(function(response){
		album = response.data
		album.imageUrl = '/api/albums/' + album.id + '/image'
		$scope.album = album
		console.log(album)
	})
	.catch($log.error)
})