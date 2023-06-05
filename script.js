

$(document).ready(function () {
  // Fetch cake data from the JSON file
  $.getJSON('packages.json', function (data) {
    var specialsContainer = $('#specials-container');


    $.each(data.packages, function (index, item) {
      var packages = $('<div class="item col-3"></div>');
      packages.append('<img src="' + item.image + '" alt="' + item.name + '" id="img"> ');
      packages.append('<h3 id="ca1">' + item.name + '</h3>');
      packages.append('<h3 id="p1">Price: &#x20b9;' + item.price + '</h3>');
      packages.append('<a href="#sec"><button type="button" class="btn btn-success" id="atc" >BOOK NOW</button></a>')
      specialsContainer.append(packages);
    });


  });
});

// $(document).ready(function () {
//   $('#bookingform').validate({
//     rules: {
//       destination: 'required',
//       members: 'required',
//       email: {
//         required: true,
//         email: true
//       },
//       arrivalDate: 'required',
//       leavingDate: 'required',
//       details: 'required'
//     },
//     messages: {
//       destination: 'Please enter your destination',
//       members: 'Please enter the number of members',
//       email: {
//         required: 'Please enter your email address',
//         email: 'Please enter a valid email address'
//       },
//       arrivalDate: 'Please select an arrival date',
//       leavingDate: 'Please select a leaving date',
//       details: 'Please enter your name and details'
//     }

//   });
// });


function writeBookings() {
  const destination = document.getElementById("destination").value;
  const members = document.getElementById("members").value;
  const email = document.getElementById("email").value;
  const arrivalDate = document.getElementById("arrivaldate").value;
  const leavingDate = document.getElementById("leavingdate").value;
  const details = document.getElementById("details").value;


  const xhttp = new XMLHttpRequest();

  xhttp.open("POST", "http://localhost:3000/Bookings");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(
    JSON.stringify({
    
      destination: destination,
      members: members,
      email: email,
      arrivaldate: arrivalDate,
      leavingdate: leavingDate,
      details:details
    })
  );
  console.log("success");

    // Add your code here to handle form submission and show the confirmation box
    alert("Form submitted successfully!"); // Example confirmation message
  
 

}


// Example starter JavaScript for disabling form submissions if there are invalid fields
 (function () {
'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
