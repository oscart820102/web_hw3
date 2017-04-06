
// var storage = firebase.storage();
// var pathReference = storage.ref('cloth1.png');

// pathReference.child('cloth1.png').getDownloadURL().then(function(url) {
//   // `url` is the download URL for 'images/stars.jpg'

//   // This can be downloaded directly:
//   var xhr = new XMLHttpRequest();
//   xhr.responseType = 'blob';
//   xhr.onload = function(event) {
//     var blob = xhr.response;
//   };
//   xhr.open('GET', url);
//   xhr.send();

//   // Or inserted into an <img> element:
//   var img = document.getElementById('my_img1');
//   img.src = url;
// }).catch(function(error) {
//   // Handle any errors
// });



var storage = firebase.storage();
var storageRef = firebase.storage().ref();

 //   var filename = document.getElementById('filename').value;
    publicRef = storageRef.child('cloth1.png');
    console.log(publicRef);
    publicRef.getDownloadURL().then(function (url) {
        console.log('url = ', url);
        var img = document.getElementById('my_img1');
        img.src = url;
    });

    publicRef = storageRef.child('ex1.png');
    console.log(publicRef);
    publicRef.getDownloadURL().then(function (url) {
        console.log('url = ', url);
        var img = document.getElementById('my_img2');
        img.src = url;
    });

        publicRef = storageRef.child('ex3.png');
    console.log(publicRef);
    publicRef.getDownloadURL().then(function (url) {
        console.log('url = ', url);
        var img = document.getElementById('my_img3');
        img.src = url;
    });
