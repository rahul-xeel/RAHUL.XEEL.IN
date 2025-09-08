// ******************************************//
// BLOCKING FOR CLICKS
// ******************************************//


document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

document.addEventListener("keydown", function (e) {
    if (
        (e.ctrlKey && e.key.toLowerCase() === 'u') ||
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i') ||
        (e.key === 'F12')
    ) {
        e.preventDefault();
    }
});



// ******************************************//
// SHOWING CURRENT YEAR
// ******************************************//

let current_year = new Date().getFullYear();

let footer_content = "© " + current_year + " | Made with ❤️ by Rahulxeel";

document.getElementById('footer_content').innerText = footer_content;





// ******************************************//
// MSG SUBMISSION
// ******************************************//

function submit() {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let msg = document.getElementById('msg').value;
    document.getElementById('submit').style.display = "none";


    let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://rahul-xeel-api.rf.gd/PORTFOLIO/MSG/send.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.onload = function() {
    if (xhr.status === 200) {
      document.getElementById("response").innerHTML = xhr.responseText;
    }
  };

  xhr.send("name="+name+"&email="+email+"msg="+msg);





    document.getElementById('submit').style.display = "none";
    document.getElementById('submitted').style.display = "flex";

}




