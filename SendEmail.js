document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("Subject").value;
  let message = document.getElementById("message").value;
  document.querySelector(".contact-form").reset();
  sendEmail(name, subject, message, email);
}

function sendEmail(name, subject, message, email) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "ziko10sporty@gmail.com",
    Password: "ewmiqcgkcrzwhedt",
    To: "fromvaliiri@gmail.com",
    From: "ziko10sporty@gmail.com",
    Subject: `${subject}`,
    Body: ` Name : ${name} <br/> Email : ${email} <br/> Message : ${message}`,
  }).then((message) => alert(" email sent succesfully"));
}
