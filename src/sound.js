var pouet = new Audio('./assets/pouet.mp3');

document.getElementById('pouet').addEventListener('click', function() {
    console.log("ok");
    pouet.play();
});
