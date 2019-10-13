const API_URL = 'http://localhost:5000/videos';
const videosElement = document.querySelector('#videos');

fetch(API_URL)
	.then(response => response.json())
	.then(videos => {
		console.log(videos);
		videos.forEach((video) => {
			const videoElement = document.createElement('div');
			videoElement.className = 'card col-3 co1-sm-auto';

			const img = document.createElement('img');
			const imgRes = video.snippet.thumbnails.standard || video.snippet.thumbnails.medium || video.snippet.thumbnails.high;

			img.src = imgRes.url;
			img.className = 'card-img-top';

			videoElement.appendChild(img);
			
			const mediaBody = document.createElement('div');
			mediaBody.className = 'card-body';

			videoElement.appendChild(mediaBody);
			
			const h5 = document.createElement('h5');
			h5.className = 'card-title';
			h5.textContent = video.snippet.title;
			mediaBody.appendChild(h5);

			videosElement.appendChild(videoElement);
		
		});
	});