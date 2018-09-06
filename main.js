var video = document.querySelector("#videoElement");
 
if (navigator.mediaDevices.getUserMedia) {       
    navigator.mediaDevices.getUserMedia({video: true })
  .then(function(stream) {
    video.srcObject = stream;
    console.log(stream);
  })
  .catch(function(err0r) {
    console.log("Something went wrong!");
  });
}



var peer = new Peer(); 
console.log(peer);


var conn = peer.connect('another-peers-id');
// on open will be launch when you successfully connect to PeerServer
conn.on('open', function(){
  // here you have conn.id
  conn.send('hi!');
});


