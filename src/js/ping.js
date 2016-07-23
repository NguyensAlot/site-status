/**
 * Created by Anthony on 7/22/2016.
 */


function ping(e) {
    if(e.keyCode == 13) {
        var url = document.getElementById("urlToCheck").value;
        //this.inUse = true;
        var img = new Image();

        img.onload = function() {
            document.getElementById("status").src = "../../res/up.png";
        };
        img.onerror = function() {
            document.getElementById("status").src = "../../res/down.png";
        };
        img.src = (url.includes("http://")) ? url : "http://" + url;
        setTimeout(function() { alert("timeout"); }, 1500);
    }
}


document.getElementById("wrapper").addEventListener("onkeypress", ping);