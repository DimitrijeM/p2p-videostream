var video = document.querySelector("#videoElement");

// if (navigator.mediaDevices.getUserMedia) {       
//     navigator.mediaDevices.getUserMedia({video: true })
//   .then(function(stream) {
//     video.srcObject = stream;
//     console.log(stream);
//   })
//   .catch(function(err0r) {
//     console.log("Something went wrong!");
//   });
// }



var peer = new Peer();
console.log(peer);

// var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(function (stream) {
    console.log(stream)
    var call = peer.call('cvn8y2xln9c00000', stream);
    call.on('stream', function (remoteStream) {
        // Show stream in some video/canvas element.6
        video.srcObject = remoteStream;
    });
}).catch(function (err) {
    console.log('Failed to get local stream', err);
});


// var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
peer.on('call', function (call) {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(function (stream) {
        call.answer(stream); // Answer the call with an A/V stream.
        call.on('stream', function (remoteStream) {
            // Show stream in some video/canvas element.
        });
    }).catch(function (err) {
        console.log('Failed to get local stream', err);
    });
});