//Link builder
var webs = {"Youtube":"https://www.youtube.com",
"Discord":"https://discord.com/activity",
"Steam":"https://steamcommunity.com/id/topster_/",
"Twitter":"https://twitter.com/home",
"Twitch":"https://www.twitch.tv/",
"4chan":"https://www.4chan.org/"}

//search engines
var search_engines = {"Google Search":"https://www.google.com/search",
"DuckDuckGo Search":"https://duckduckgo.com/",
"YouTube Search":"https://youtube.com/search"}

var search_engines_len = Object.keys(search_engines).length
var current_search_engine = 0

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
function engine_changer(){   
    search = document.getElementById("search")
    search_input = document.getElementById("search_input")
    current_search_engine += 1
    if (current_search_engine > search_engines_len-1) {
        current_search_engine = 0
    }
    search.action = Object.values(search_engines)[current_search_engine]
    search_input.placeholder = Object.keys(search_engines)[current_search_engine]
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