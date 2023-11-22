function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    contact: document.getElementById("contact").value,
  };

  const serviceID = "service_t1c3z62";
  const templateID = "template_4qf9kwh";
  const userID = "2vB4jopM-hK4OiVbR"; // Replace with your EmailJS public key

  emailjs.init(userID); // Initialize EmailJS with the public key

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      document.getElementById("contact").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch(err => {
      console.log(err);
      alert("Error sending message. Please try again later.");
    });
}


  let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue+"+";
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});