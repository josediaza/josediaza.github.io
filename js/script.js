(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery
















function validateForm() {
    document.getElementById("myForm").submit();
}

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.script["myForm"]["email"].value;
 var xLen = x.length;
 var yLen = y.length; 
    if (xLen>20) {
        alert("Enter a valid name");
        return false;
    }
    else if(yLen>20)
    	alert("Enter a valid email address")
        return false;
}


function myFunction() {
    var x = document.createElement("SCRIPT");
    var t = document.createTextNode("confirm('josediaz.arrechea@gmail.com')");
    x.appendChild(t);
    document.body.appendChild(x);
}