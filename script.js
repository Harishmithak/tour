$(document).ready(function() {
  // Fetch cake data from the JSON file
  $.getJSON('packages.json', function(data) {
    var specialsContainer = $('#specials-container');
   
    
    $.each(data.packages, function(index, item) {
      var packages = $('<div class="item"></div>');
      packages.append('<img src="'+ item.image + '" alt="' + item.name + '" id="img"> ');
      packages.append('<h3 id="ca1">' + item.name + '</h3>');
      packages.append('<h3 id="p1">Price: &#x20b9;' + item.price + '</h3>');
      packages.append('<a href="#sec"><button type="button" class="btn btn-success" id="atc" >BOOK NOW</button></a>')
      specialsContainer.append(packages);
    });
  
 
  });
});
$(document).ready(function() {
    $('#bookingform').validate({
      rules: {
        destination: 'required',
        members: 'required',
        email: {
          required: true,
          email: true
        },
        arrivalDate: 'required',
        leavingDate: 'required',
        details: 'required'
      },
      messages: {
        destination: 'Please enter your destination',
        members: 'Please enter the number of members',
        email: {
          required: 'Please enter your email address',
          email: 'Please enter a valid email address'
        },
        arrivalDate: 'Please select an arrival date',
        leavingDate: 'Please select a leaving date',
        details: 'Please enter your name and details'
      }
   
    });
  });
