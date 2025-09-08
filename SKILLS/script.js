// ******************************************//
// BLOCKING FOR CLICKS
// ******************************************//


document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

document.addEventListener("keydown", function(e) {
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

    let footer_content = "© "+ current_year + " | Made with ❤️ by Rahulxeel";

    document.getElementById('footer_content').innerText = footer_content;

