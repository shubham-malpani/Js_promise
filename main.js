
const url = "http://api-url.com/;";

var myHeaders = new Headers({
    "Content-Type": "application/json"
});

let isRunning = false;

function onbtnClick(event) {
    isRunning = !isRunning

    document.getElementById("cam1").innerText = isRunning ? "Stop" : "Start"

    setInterval(function () {
        if(isRunning){
            let date_time = new Date();
            let promise = []
            for (var i = 1; i <= 100; i++) {
                promise.push(send(i, date_time))
            }
        }
    }, 15000)
}

var send = function (index, date_time) {

    let request = {
       //payload
    }

    let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(request)
    };

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log("error", error));
}
