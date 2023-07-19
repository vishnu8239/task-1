
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const companyName = document.getElementById("companyName").value;
    const jobTitle = document.getElementById("jobTitle").value;
    const likeTo = document.getElementById("likeTo").value;
    const hearAboutUs = document.getElementById("hearAboutUs").value;
    const additionalInfo = document.getElementById("additionalInfo").value;
    

    
    if (!firstName || !lastName || !email || !companyName || !jobTitle || !likeTo || !hearAboutUs || !additionalInfo) {
      alert("Please fill in all the required fields.");
      return; 
    }

    
    const formData = `First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Company Name: ${companyName}, Job Title: ${jobTitle}, I'd like to: ${likeTo}, How did you hear about us: ${hearAboutUs}, Anything else you'd like us to know: ${additionalInfo}`;
    alert(formData);
    
  });


  document.getElementById("email").addEventListener("input", function() {
    const email = this.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.classList.add("is-invalid");
    } else {
      this.classList.remove("is-invalid");
    }
  });
