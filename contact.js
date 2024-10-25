function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

// calling id from html

function tap() {
  let Name = document.getElementById("name");
  let Email = document.getElementById("email");
  let num = document.getElementById("number");
  let texts = document.getElementById("text");
  let Help = document.getElementById("help");

  let NameValue = Name.value;
  let EmailValue = Email.value;
  let NumberValue = num.value;
  let TextValue = texts.value;
  let HelpValue = Help.value;

  if (!NameValue) {
    alert("Please enter your Name.");
  } else if (!EmailValue) {
    alert("Please enter your Email.");
  } else if (!NumberValue) {
    alert("Please enter your Phone Number.");
  } else if (!TextValue) {
    alert("Please enter your Message.");
  } else if (!HelpValue) {
    alert("Please let us know how we can help you.");
  } else {
    // All fields are filled
    alert("Thank you for submitting your information!");
  }
}
