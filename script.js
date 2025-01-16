<script>
  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get values from form fields
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if both fields are filled
    if (email && message) {
      // Simulate sending email and show success message
      alert(Message sent from ${email}!\nYour message: ${message});
      
      // Reset form after submission
      document.getElementById('email-form').reset();
    } else {
      // If any field is empty, show error message
      alert('Please fill in all fields');
    }
  }
</script>