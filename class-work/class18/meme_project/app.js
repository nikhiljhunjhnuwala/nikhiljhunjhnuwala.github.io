$('.meme-form').submit(function(event){
    event.preventDefault();
    console.log('submit');
    var memeInput = $('.meme-input').val();
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+memeInput+"&api_key=YI26QuGd9wNgL8weaTp1CMUsVdbUa1yi&limit=5");
    xhr.done(function(data) { 
        var memes = data.data;
        memes.forEach(function(meme){
            var memeUrl = meme.images.looping.mp4;
            $('.video-wrapper').append('<video src="'+memeUrl+'" autoplay></video>');
        })
        console.log("success got data", data.data); });

})

