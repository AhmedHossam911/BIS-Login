document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners to form submissions
    document.getElementById("student-form").addEventListener("submit", function(event) {
      event.preventDefault();
      handleLogin("student");
    });
  
    document.getElementById("management-form").addEventListener("submit", function(event) {
      event.preventDefault();
      handleLogin("management");
    });
  
    // Function to handle form submission and validation
    function handleLogin(userType) {
      const form = userType === "student" ? document.getElementById("student-form") : document.getElementById("management-form");
      const username = form.username.value;
      const password = form.password.value;
      const errorElement = userType === "student" ? document.getElementById("student-error") : document.getElementById("management-error");
  
      // Reset previous error messages
      errorElement.textContent = "";
  
      // Perform client-side validation
      if (username.trim() === "") {
        showError(errorElement, "Username cannot be empty");
      } else if (password.trim() === "") {
        showError(errorElement, "Password cannot be empty");
      } else {
        // Here you can perform AJAX calls to check the credentials against the server-side data
        // For this example, let's assume a simple hardcoded authentication check:
        if (userType === "student" && username === "student123" && password === "password123") {
          // Student login successful, redirect or show a success message
          alert("Student Login Successful");
        } else if (userType === "management" && username === "admin" && password === "admin123") {
          // Management login successful, redirect or show a success message
          alert("Management Login Successful");
        } else {
          showError(errorElement, "Invalid username or password");
        }
      }
    }
  
    // Function to display error messages
    function showError(element, message) {
      element.textContent = message;
    }
  });
  