function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Check if username and password match the default values
    if (username === "user" && password === "password") {
      // Redirect to home.html
      window.location.href = "home.html";
      return false; // Prevent form submission
    } else {
      alert("Invalid username or password. Please try again.");
      return false; // Prevent form submission
    }
  }
  