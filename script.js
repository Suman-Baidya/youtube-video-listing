
const url = 'https://api.freeapi.app/api/v1/public/youtube/videos';

async function getData() {
    const promise = await fetch(url);
    return await promise.json();
}


(async () => {
    const result = await getData();
   
    console.log(result.data.data[0].items.snippet.thumbnails.default);
    console.log(result.data.data[0].items.snippet.title);
    console.log(result.data.data[0].items.snippet.channelTitle);
    
    console.log(result.data.data[0].items.snippet.channelTitle);



    const videos = result.data.data;



    const videoGrid = document.getElementById("videoGrid");
        
        videos.forEach(video => {
            const videoCard = document.createElement("div");
            videoCard.classList.add("video-card");
            videoCard.innerHTML = `
                <img src="${video.items.snippet.thumbnails.standard.url}" alt="${video.items.snippet.title}">
                <div class="video-info">
                    <div class="video-title">${video.items.snippet.title}</div>
                    <div class="channel-name">${video.items.snippet.channelTitle}</div>
                </div>
            `;
            videoGrid.appendChild(videoCard);
        });
    
})();