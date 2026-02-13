//==============================================================
//✅ Main responsive logic
//==============================================================
function responsivePoster() {
  if (window.matchMedia("(max-height: 600px)").matches) {
    document.querySelector("#mainText2").textContent = "4:30 PM";
  } 
  else if (window.matchMedia("(max-height: 700px)").matches) {
    document.querySelector("#mainText2").textContent = "Friday";
  } 
  else { // ℹ️ Default
    document.querySelector("#mainText2").textContent = "Feb 27"; 
  }
}

//==============================================================
//❓Initial run + resize listener
//==============================================================
responsivePoster(); // Initial run
window.addEventListener("resize", responsivePoster); // Update on resize
