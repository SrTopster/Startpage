//Link builder
var webs = {"Youtube":"https://www.youtube.com",
"Discord":"https://discord.com/activity",
"Steam":"https://steamcommunity.com/id/topster_/",
"Twitter":"https://twitter.com/home",
"Twitch":"https://www.twitch.tv/",
"4chan":"https://www.4chan.org/"}

for (var link in webs){
    var a = document.createElement("a");
    a.innerHTML = link+"<br>";
    a.href = webs[link];
    document.getElementById("links").appendChild(a);
}
//Image chager
var image = document.getElementById("img");
var clicks = 2
function changeimage(){
    if (clicks == 8){
        clicks = 1;
        document.getElementById("stuff").style.visibility = "visible";
    }
    image.src = "webp/"+clicks+".webp";
    clicks += 1;
}
//Engine changer
function engine(){
    search = document.getElementById("search")
    if (search.action == "https://www.google.com/search"){
        search.action = "https://duckduckgo.com/"
        document.getElementById("q").placeholder = "DuckDuckGo Search"
    }
    else{
        search.action = "https://www.google.com/search"
        document.getElementById("q").placeholder = "Google Search"
    }
}
//Clock
setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":"+ min + ":" + sec;

    document.getElementById("clock")
        .innerHTML = currentTime;
}
showTime();