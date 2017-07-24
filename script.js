navigator.getUserMedia  = navigator.getUserMedia ||
                          navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia;

if(navigator.getUserMedia) {
	navigator.getUserMedia({audio: true},
				function(stream) {
					var microphone = context.createMediaStreamSource(stream);
					microphone.connect(context.destination);
				}, errorCallback);
}
else {
	alert('Browser does not support getUserMedia.');
}