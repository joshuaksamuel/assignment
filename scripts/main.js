
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
 //aristote codes
  window.addEventListener('load', function () {
    const nameModal = new bootstrap.Modal(document.getElementById('nameModal'));
    nameModal.show();

  
    document.getElementById('submitName').addEventListener('click', function () {
      const name = document.getElementById('nameInput').value.trim();
      if (name !== "") {
        document.getElementById('salutation').textContent = `Hi ${name}, will you be my valentine? 💖`;
        nameModal.hide();
      } else {
        alert("Please enter your name 💬");
      }
    });
  });
