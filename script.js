const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  //==============================================================
  //❓Create a new speech recognition
  //==============================================================
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";          // Set language to English
    recognition.continuous = true;       // Keep listening until stopped
    recognition.interimResults = true;   // Show partial results while speaking

  //==============================================================
  //❓Start recognition when "#startBtn" button is clicked
  //==============================================================
    document.querySelector("#startBtn").addEventListener("click", () => {
  recognition.start();
  document.querySelector("#startBtn").style.display = "none";

  // 🔥 让 Tiri 出现
  document.querySelector("#mainText1").style.display = "block";
  document.querySelector("#mainText4").style.display = "block";
});


  //==============================================================
  //✅ Define keywords and what happens when they are spoken
  //==============================================================
    const keywords = {
      "where": () => {
         const role = document.querySelector("#mainText4");
        role.style.opacity = "1";
        role.style.fontSize = "48px";  
        img.style.top = "30px";
        img.style.left = "30px";
        img.style.transform = "rotate(20deg)";
        document.querySelector("#mainText2").className = "variable4";
        document.querySelector("#image").style.bottom = "130px";
        document.querySelector("#image").style.left = "130px";
        document.querySelector("#mainText2").style.rotate = "20deg";
        document.body.style.backgroundColor = "#44ff00";
      },

      "when": () => {
         const role = document.querySelector("#mainText5");
        role.style.opacity = "1";
        role.style.fontSize = "48px";  
        img.style.top = "30px";
        img.style.left = "30px";
        img.style.transform = "rotate(20deg)";
        document.querySelector("#mainText2").className = "variable1";
        document.querySelector("#image").style.bottom = "130px";
        document.querySelector("#image").style.left = "130px";
        document.querySelector("#mainText2").style.rotate = "20deg";
        document.body.style.backgroundColor = "#44ff00";
      },
      "she is": () => {
        const role = document.querySelector("#mainText3");
        role.style.opacity = "1";
        role.style.fontSize = "48px";  
        img.style.top = "30px";
        img.style.left = "30px";
        img.style.transform = "rotate(20deg)";

        document.querySelector("#mainText3").className = "variable1";
        document.querySelector("#image").src = "./img/morakana_deeptalking.jpg";
        document.querySelector("#image").style.top = "30px";
        document.querySelector("#image").style.left = "30px";
        document.querySelector("#image").style.rotate = "20deg";
        document.body.style.backgroundColor = "#44ff00";
      },
      "talk": () => {
        document.querySelector("#mainText2").className = "variable2";
        document.querySelector("#image").src = "";
        document.body.style.backgroundImage = "url('./img/tiri_oracle2.jpg')"; 
      },
    };

  //==============================================================
  //❓Process recognized speech results
  //==============================================================
    recognition.onresult = (event) => {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      document.querySelector("#mainText2").textContent = transcript; // Show what user said
      const lowerTranscript = transcript.toLowerCase();
      for (const key in keywords) { 
        if (lowerTranscript.includes(key.toLowerCase())) { // Check if keyword is spoken
          document.querySelector("#mainText2").textContent = key; // Display the keyword
          keywords[key](); // Run the keyword action
          break; // Stop checking after first match
        }
      }
    };

  //==============================================================
  //❓Restart recognition automatically when it ends
  //==============================================================
    recognition.onend = () => {
      recognition.start();
    };

  //==============================================================
}
