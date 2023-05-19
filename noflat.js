$(function() {
  $('form').submit(function(event) {
    var data = $(this).serialize();
    $.post("https://hooks.zapier.com/hooks/catch/14888944/36yr6qc/silent/", data, function() {});
    return true;
  });
});



// Show or hide elements based on user input
$('.changeOwner').change(function() {
  if ($(this).val() === 'Yes') {
    $('.oldTerminal').show();
  } else {
    $('.oldTerminal').hide();
  }
});


$('.nameRegistered').change(function() {
  if ($(this).val() === 'Yes- Fillout below') {
    $('.businessDetails').show();
  } else {
    $('.businessDetails').hide();
  }
});




$('.wishComm').change(function() {
  if ($(this).val() === 'Yes') {
    $('.commText').show();
  } else {
    $('.commText').hide();
  }
});


$('.feeQ').change(function() {
  if ($(this).val() === 'Yes') {
    $('.feeHide').show();
  } else {
    $('.feeHide').hide();
  }
});


$('.postalAddress').change(function() {
  if ($(this).val() === 'Yes') {
    $('.postalAddressHide').show();
  } else {
    $('.postalAddressHide').hide();
  }
});


$('.pricingHighRisk').change(function() {
  if ($(this).val() === 'Auto Parts Stores' || $(this).val() === 'Mechanics' || $(this).val() === 'Tyre Stores') {
    $('.commentsHide').show();
  } else {
    $('.commentsHide').hide();
  }
});


$('.director1PostalAddress').change(function() {
  if ($(this).val() === 'Yes') {
    $('.director1PostalHide').show();
  } else {
    $('.director1PostalHide').hide();
  }
});

$('.director2PostalAddress').change(function() {
  if ($(this).val() === 'Yes') {
    $('.director2PostalHide').show();
  } else {
    $('.director2PostalHide').hide();
  }
});

$('.director3PostalAddress').change(function() {
  if ($(this).val() === 'Yes') {
    $('.director3PostalHide').show();
  } else {
    $('.director3PostalHide').hide();
  }
});

$('.director4PostalAddress').change(function() {
  if ($(this).val() === 'Yes') {
    $('.director4PostalHide').show();
  } else {
    $('.director4PostalHide').hide();
  }
});

$('.howManyDirectors').change(function() {
  if ($(this).val() === '4') {
    $('.director4Hide').show();
  } else {
    $('.director4Hide').hide();
  }
});

$('.howManyDirectors').change(function() {
  if ($(this).val() === '3' || $(this).val() === '4') {
    $('.director3Hide').show();
  } else {
    $('.director3Hide').hide();
  }
});

$('.howManyDirectors').change(function() {
  if ($(this).val() === '2' || $(this).val() === '3' || $(this).val() === '4') {
    $('.director2Hide').show();
  } else {
    $('.director2Hide').hide();
  }
});

const offerTrial = document.getElementById("offerTrial");
const trialAlert = document.getElementById("trialAlert");

offerTrial.addEventListener("change", function() {
  if (offerTrial.value === "Yes") {
    trialAlert.classList.remove("d-none");
  } else {
    trialAlert.classList.add("d-none");
  }
});






// changes fees according to pricing selection
function showPricing() {
  var select = document.getElementById("pricing");
  var merchantServiceFee = document.getElementById("merchantServiceFee");
  var debitCardFee = document.getElementById("debitCardFee");
  var comments1 = document.getElementById("comments1");

  var selectedOption = select.options[select.selectedIndex].value;
  switch (selectedOption) {
    case "ARAMA Members":
      merchantServiceFee.value = "0.79%";
      debitCardFee.value = "$0.15";
      break;
    case "Boost Juice":
      merchantServiceFee.value = "1.05%";
      debitCardFee.value = "$0.05";
      break;
    case "Cafés":
      merchantServiceFee.value = "0.85%";
      debitCardFee.value = "$0.08";
      break;
    case "Coffee Shops":
      merchantServiceFee.value = "1.30%";
      debitCardFee.value = "$0.06";
      break;
    case "Convenience Stores":
      merchantServiceFee.value = "0.88%";
      debitCardFee.value = "$0.07";
      break;

    case "Discount Stores":
      merchantServiceFee.value = "0.80%";
      debitCardFee.value = "$0.08";

      break;
    case "Dominos":
      merchantServiceFee.value = "0.78%";
      debitCardFee.value = "$0.08";

      break;

    case "Fruit & Veg Shops":
      merchantServiceFee.value = "0.85%";
      debitCardFee.value = "$0.07";
      break;

    case "Gloria Jeans":
      merchantServiceFee.value = "1.18%";
      debitCardFee.value = "$0.06";

      break;
    case "Go Vita and other Health Food Stores":
      merchantServiceFee.value = "0.70%";
      debitCardFee.value = "$0.07";

      break;
    case "Newsagencies (Non Membership)":
      merchantServiceFee.value = "0.85%";
      debitCardFee.value = "$0.12";

      break;
    case "Newsagencies ALNA members":
      merchantServiceFee.value = "0.73%";
      debitCardFee.value = "$0.05";

      break;
    case "Pizza Hut":
      merchantServiceFee.value = "0.78%";
      debitCardFee.value = "$0.08";

      break;
    case "Pricing approved by Product":
      merchantServiceFee.value = "";
      debitCardFee.value = "";

      break;
    case "Real Estate Agencies":
      merchantServiceFee.value = "0.78%";
      debitCardFee.value = "$0.15";

      break;
    case "Registered Charities or Not for Profit Organisations":
      merchantServiceFee.value = "0.30%";
      debitCardFee.value = "$0.05";

      break;

    case "Restaurants":
      merchantServiceFee.value = "0.82%";
      debitCardFee.value = "$0.10";

      break;

    case "Takeaway Food":
      merchantServiceFee.value = "0.90%";
      debitCardFee.value = "$0.09";

      break;
    case "Taxis":
      merchantServiceFee.value = "1.25%";
      debitCardFee.value = "$0.15";

      break;

    default:
      merchantServiceFee.value = "";
      debitCardFee.value = "";

  }
}

                    // EFTPOS RENTAL FEES
// Get the required elements
const eftposTerminalInputs = document.querySelectorAll('.eftposTerminal');
const pricingSelect = document.querySelector('#pricing');
const mobileEftposFeeInput = document.querySelector('.mobileEftposFee');

// Add an event listener to each eftposTerminal input
Array.from(eftposTerminalInputs).forEach(input => {
  input.addEventListener('input', updateMobileEftposFee);
});

// Add an event listener to the pricing select
pricingSelect.addEventListener('change', updateMobileEftposFee);

function updateMobileEftposFee() {
  const allowedOptions29 = ['Boost Juice', 'Cafés', 'Coffee Shops', 'Convenience Stores', 'Discount Stores', 'Fruit & Veg Shops', 'Gloria Jeans', 'Go Vita and other Health Food Stores', 'Newsagencies (Non Membership)', 'Pricing approved by Product', 'Real Estate Agencies', 'Registered Charities or Not for Profit Organisations', 'Restaurants', 'Takeaway Food', 'Taxis'];
  const allowedOptions26 = ['ARAMA Members', 'Dominos', 'Newsagencies ALNA members', 'Pizza Hut'];

  // Check if some eftposTerminal inputs are not empty and pricing selection
  const is26 = Array.from(eftposTerminalInputs).some(input => input.value !== '') && allowedOptions26.includes(pricingSelect.value);

  const is29 = Array.from(eftposTerminalInputs).some(input => input.value !== '') && allowedOptions29.includes(pricingSelect.value);

  // Set the value of mobileEftposFeeInput to "$29" if all conditions are true
  if (is29) {
    mobileEftposFeeInput.value = '$29';
  } else if (is26){
    mobileEftposFeeInput.value = '$26'
  }
   else {
    mobileEftposFeeInput.value = '';
  }
}









// ......................INTEGRATED POS FEES RENTAL COUNTERTOP
// Define a function to check the input fields and update the countertopFee field
function updateCountertopFee() {
  // Get the input fields and select element
  const countertopTerminal = document.querySelector('.countertop');
  const pricing = document.querySelector('#pricing');
  const countertopFee = document.querySelector('.countertopFee');

  // Define an array of allowed options
  const allowedOptions29 = ['ARAMA Members', 'Boost Juice', 'Cafés', 'Coffee Shops', 'Convenience Stores', 'Discount Stores', 'Fruit & Veg Shops', 'Gloria Jeans', 'Go Vita and other Health Food Stores', 'Newsagencies (Non Membership)', 'Pricing approved by Product', 'Real Estate Agencies', 'Registered Charities or Not for Profit Organisations', 'Restaurants', 'Takeaway Food', 'Taxis'];
  const allowedOptions26 = ['Dominos', 'Newsagencies ALNA members', 'Pizza Hut'];


  // Check if countertopTerminal field has a value and pricing field is selected to an allowed option
  if (countertopTerminal.value !== '' && allowedOptions29.includes(pricing.value)) {
    // Add $29 to the countertopFee field
    countertopFee.value = '$29';
  } else if (countertopTerminal.value !== '' && allowedOptions26.includes(pricing.value)) {
    // Add $26 to the countertopFee field
    countertopFee.value = '$26';
  }else
   {
    countertopFee.value = ''; // Clear the countertopFee field if the conditions are not met
  }
}

// Call the updateCountertopFee function when the change event is triggered on the countertopTerminal or pricing field
document.querySelector('.countertop').addEventListener('change', updateCountertopFee);
document.querySelector('#pricing').addEventListener('change', updateCountertopFee);





//  .../.........................MOBILE INTEGRATED RENTAL Fees

// Get the required elements
const mobileInputs = document.querySelectorAll('.mobile');
// const pricingSelect = document.querySelector('#pricing');
const mobileIntegratedFee = document.querySelector('.mobileIntegratedFee');

// Add an event listener to each eftposTerminal input
Array.from(mobileInputs).forEach(input => {
  input.addEventListener('input', updateMobileIntegratedFee);
});

// Add an event listener to the pricing select
pricingSelect.addEventListener('change', updateMobileIntegratedFee);

function updateMobileIntegratedFee() {
  const allowedOptions32 = ['ARAMA Members', 'Boost Juice', 'Cafés', 'Coffee Shops', 'Convenience Stores', 'Discount Stores', 'Fruit & Veg Shops', 'Gloria Jeans', 'Go Vita and other Health Food Stores', 'Newsagencies (Non Membership)', 'Pricing approved by Product', 'Real Estate Agencies', 'Registered Charities or Not for Profit Organisations', 'Restaurants', 'Takeaway Food', 'Taxis'];
  const allowedOptions29 = ['Dominos', 'Newsagencies ALNA members', 'Pizza Hut'];

  // Check if some eftposTerminal inputs are not empty and pricing selection
  const is29 = Array.from(mobileInputs).some(input => input.value !== '') && allowedOptions29.includes(pricingSelect.value);

  const is32 = Array.from(mobileInputs).some(input => input.value !== '') && allowedOptions32.includes(pricingSelect.value);

  // Set the value of mobileEftposFeeInput to "$29" if all conditions are true
  if (is32) {
    mobileIntegratedFee.value = '$32';
  } else if (is29){
    mobileIntegratedFee.value = '$29'
  }
   else {
    mobileIntegratedFee.value = '';
  }
}


//          LCR LIMIT
function configureForm() {
  // Get the select elements
  const lcrSelect = document.querySelector('select[name="lcr"]');
  const pricingSelect = document.querySelector('select[name="pricing"]');

  // Get the input elements
  const lcrLimitInput = document.querySelector('input[name="lcrlimit"]');
  const lcrLimitCommentInput = document.querySelector('input[name="lcrlimitComment"]');

  // Add an event listener to the lcrSelect element
  lcrSelect.addEventListener('change', function() {
    // Check if the value of lcrSelect is "Yes"
    if (this.value === 'Yes') {
      // Show the lcrLimitInput and lcrLimitCommentInput elements
      lcrLimitInput.style.display = 'block';
      lcrLimitCommentInput.style.display = 'block';
    } else {
      // Hide the lcrLimitInput and lcrLimitCommentInput elements
      lcrLimitInput.style.display = 'none';
      lcrLimitCommentInput.style.display = 'none';
    }
  });

  // Add an event listener to the pricingSelect element
  pricingSelect.addEventListener('change', function() {
    // Check if the value of pricingSelect is "Boost Juice"
    if (this.value === 'Boost Juice') {
      lcrLimitInput.value = '$5';
      lcrLimitCommentInput.value = '';
    } else if (this.value === 'Cafés') {
      lcrLimitInput.value = '$9';
      lcrLimitCommentInput.value = '';
    }else if (this.value === 'Coffee Shops') {
      lcrLimitInput.value = '$5';
      lcrLimitCommentInput.value = '';
    }else if (this.value === 'Convenience Stores') {
      lcrLimitInput.value = '$8';
      lcrLimitCommentInput.value = '';
    }else if (this.value === 'Discount Stores') {
      lcrLimitInput.value = '$10';
      lcrLimitCommentInput.value = '';
    }else if (this.value === 'Dominos') {
      lcrLimitInput.value = '$10';
      lcrLimitCommentInput.value = '';
    }else if (this.value === 'Fruit & Veg Shops') {
      lcrLimitInput.value = '$8';
      lcrLimitCommentInput.value = '';
    }else if (this.value === 'Gloria Jeans') {
      lcrLimitInput.value = '$5';
      lcrLimitCommentInput.value = '';
    }else if (this.value === 'Go Vita and other Health Food Stores') {
      lcrLimitInput.value = '$10';
      lcrLimitCommentInput.value = '';
    }else if (this.value === 'Newsagencies (Non Membership)') {
      lcrLimitInput.value = '$14';
      lcrLimitCommentInput.value = '';
    }else if (this.value === 'Newsagencies ALNA members') {
      lcrLimitInput.value = '$7';
      lcrLimitCommentInput.value = '';
    }else if (this.value === 'Pizza Hut') {
      lcrLimitInput.value = '$10';
      lcrLimitCommentInput.value = '';
    }else if (this.value === 'Pricing approved by Product') {
      lcrLimitInput.value = '';
      lcrLimitCommentInput.value = '';
    }else if (this.value === 'Real Estate Agencies') {
      lcrLimitInput.value = '$19';
      lcrLimitCommentInput.value = '';
    }else if (this.value === 'Registered Charities or Not for Profit Organisations') {
      lcrLimitInput.value = '$17';
      lcrLimitCommentInput.value = '';
    }else if (this.value === 'Restaurants') {
      lcrLimitInput.value = '$12';
      lcrLimitCommentInput.value = '';
    }else if (this.value === 'Takeaway Food') {
      lcrLimitInput.value = '$10';
      lcrLimitCommentInput.value = '';
    }else if (this.value === 'Taxis') {
      lcrLimitInput.value = '$12';
      lcrLimitCommentInput.value = '';
    }
    else if (this.value === 'ARAMA Members') {
      // Set the value of lcrLimitInput to an empty string and set the comment to "No LCR for this industry"
      lcrLimitInput.value = '$19';
      lcrLimitCommentInput.value = 'No LCR for this industry';
    } else {
      // Set the value of lcrLimitInput and lcrLimitCommentInput to empty strings
      lcrLimitInput.value = '';
      lcrLimitCommentInput.value = '';
    }
  });
}

// Call the function to configure the form
configureForm();



// Add slashes in the dates inputs


// director1
//Put our input DOM element into a jQuery Object
var $dob1 = jQuery('input[name="director1DOB"]');

//Bind keyup/keydown to the input
$dob1.bind('keyup','keydown', function(e){

  //To accomdate for backspacing, we detect which key was pressed - if backspace, do nothing:
	if(e.which !== 8) {
		var numChars = $dob1.val().length;
		if(numChars === 2 || numChars === 5){
			var thisVal = $dob1.val();
			thisVal += '/';
			$dob1.val(thisVal);
		}
  }
});

// director2
var $dob2 = jQuery('input[name="director2DOB"]');

$dob2.bind('keyup','keydown', function(e){

	if(e.which !== 8) {
		var numChars = $dob2.val().length;
		if(numChars === 2 || numChars === 5){
			var thisVal = $dob2.val();
			thisVal += '/';
			$dob2.val(thisVal);
		}
  }
});

// director3
var $dob3 = jQuery('input[name="director3DOB"]');

$dob3.bind('keyup','keydown', function(e){

	if(e.which !== 8) {
		var numChars = $dob3.val().length;
		if(numChars === 2 || numChars === 5){
			var thisVal = $dob3.val();
			thisVal += '/';
			$dob3.val(thisVal);
		}
  }
});


// director4
var $dob4 = jQuery('input[name="director4DOB"]');

$dob4.bind('keyup','keydown', function(e){

	if(e.which !== 8) {
		var numChars = $dob4.val().length;
		if(numChars === 2 || numChars === 5){
			var thisVal = $dob4.val();
			thisVal += '/';
			$dob4.val(thisVal);
		}
  }
});
