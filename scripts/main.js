//const name = prompt("Enter your name: ")


function updateImage(src){
    document.getElementById('mainImage').src = src;
}

//event listeners
document.getElementById('yes').addEventListener('click', function(){
    updateImage('images/happy.gif');
});

document.getElementById('no').addEventListener('click', function(){
    updateImage('images/heartbreak.gif');
});
