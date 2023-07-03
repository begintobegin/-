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
		'playlist': ['5tKPpS-lw4E', '5tKPpS-lw4E', '5tKPpS-lw4E', '5tKPpS-lw4E'],
		'listType': 'playlist',
		'index': 0,
		'startSeconds': 0,
		'suggestedQuality': 'small'
			});
}			

			
		





