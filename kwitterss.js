user_name = document.getElementById("user_name");
localStorage.setItem("user_name", user_name);

var nam = localStorage.getItem("user_name");
document.getElementById("use").innerHTML=nam;

function addroom(){
    room_name = document.getElementById("roomname");
    localStorage.setItem("roomname", room_name);
    window.location("kwitter_page.html");
}

function getData() {
    firebase.database().ref("/").on('value',function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
        })
    })
}
