// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='commentForm']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        fullName: {
            required: true,
            minlength: 5
        },
        Comments: "required",
        email: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },
        
      },
      // Specify validation error messages
      messages: {
        fullName: {
            required: "Please enter your Full Name",
            minlength: "Your name must be at least 5 characters long"
        },
        Comments: "Please enter a comment or a question",
        email: "Please enter a valid email address"
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  });