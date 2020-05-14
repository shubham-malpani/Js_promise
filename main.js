
const url = "http://127.0.0.1:8000/poll/camfeed/";

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
        "camera_id": index,
        "person_id": "12" + index,
        "date": date_time,
        "is_present": _.sample([false, false, true, false, false, true, false]),
        "camera_details": "face_exists",
        "message": "face found",
        "face_cordinate": "[]",
        "match_score": "Matched",
        "person_image_url": ""
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