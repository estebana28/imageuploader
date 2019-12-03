

//--------***********************************----------


// Storage Firebase

var filebutton = document.getElementById("filebutton");
var uploader = document.getElementById("uploader");


// Listen for file selection

filebutton.addEventListener('change', function(e) {
    // Get File
    var file = e.target.files[0];

    // Storage Ref
    var storageRef = firebase.storage().ref('images/' + file.name);


    // Upload file
    var task = storageRef.put(file);

    // Update Bar
    task.on('state_changed',
    
        function progress(snapshot) {
            var porcentaje = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = porcentaje;
        },

        function error(err) {

        },

        function complete() {

        }
    );

});



