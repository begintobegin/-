//Инициализация плеера
function onYouTubeIframeAPIReady() {
	  player = new YT.Player('player', {
		height: '276',
		playerVars: { 'autoplay': 0, 'controls': 0, 'showinfo': 0, 'rel': 0},
		width: '458',
		videoId: 'CyVuYAHiZb8',
		events: {
		  'onReady': onPlayerReady
		}
  });
}

// Обработчик готовность
function onPlayerReady(event) {
	var player = event.target;
	iframe = document.getElementById('player');
   if(iframe != null ){
    loadPlaylistVideoIds();
	
   }
}
/*Загрузить плейлист*/			
function loadPlaylistVideoIds(){
	player.loadPlaylist({
		'playlist': ['0EqByc92CfQ', 'BVA08cX-kTo', 'lco8qhshXyg', 'CbX3vjHv830', '3qsHveQjvJc', 'Dl_Uv6DYhu4', '7KKkCz0z9AI'],
		'listType': 'playlist',
		'index': 0,
		'startSeconds': 0,
		'suggestedQuality': 'small'
			});
}			

			
		





