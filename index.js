function openApplicationForm() {
    document.getElementById("applicationForm").style.display = "block";
  }

  function closeApplicationForm() {
    document.getElementById("applicationForm").style.display = "none";
  }

  function applyWithExistingInfo() {
    // Code to fill the form with existing information from the website
    // ...

    // After filling the form, submit it automatically
    document.getElementById("applicationForm").querySelector("form").submit();
  }

// Submit form event listener
document.getElementById('contactForm').addEventListener('submit', function (e) {
e.preventDefault(); // Prevent the default form submission
showPopupModal(); // Show the popup modal
this.reset(); // Reset the form
});

// Function to show the popup modal
function showPopupModal() {
$('#popupModal').modal('show');
setTimeout(function () {
  $('#popupModal').modal('hide');
}, 3000); // Hide the modal after 3 seconds (adjust the duration as needed)
}
