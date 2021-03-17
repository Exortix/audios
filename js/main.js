function audioLists(title, source) {
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    clon.querySelector('.figure > .figure-caption').innerText = title;
    clon.querySelector('.figure > .audio').setAttribute('src', source);
    document.body.appendChild(clon);
}

audios = []
$.ajax({
    method:'GET',
    url:'https://api.npoint.io/2f74c75fa5b79d4afc33',
    success:function (response) {
        audios = response;
        audios.forEach(audio => {
            audioLists(audio.title,audio.source)
        });
        localStorage.setItem('audios', JSON.stringify(audios));
    },
    error:function () {
        audios = JSON.parse(localStorage.getItem('audios'));
        audios.forEach(audio => {
            audioLists(audio.title,audio.source)
        });
    }
});
