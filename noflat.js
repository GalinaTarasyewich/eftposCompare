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

//
// $('.feeQ').change(function() {
//   if ($(this).val() === 'Yes') {
//     $('.feeHide').show();
//   } else {
//     $('.feeHide').hide();
//   }
// });




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



function showHighRiskComments() {
  var mccInput = document.getElementsByName("mcc")[0];
  var highRiskCommentsInput = document.getElementsByName("highRiskComments")[0];
  var selectedOption = mccInput.value;

  if (selectedOption === "0780 - LOW - LANDSCAPE/HORTICULTURAL SERVICES" ||
    selectedOption === "1520 - LOW - GENERAL CONTRACTORS RESIDENTIAL/COMMERCIAL" ||
    selectedOption === "1711 - LOW - HEATING/PLUMBING AND AIR CONDITIONING CONTRACTORS" ||
    selectedOption === "1731 - LOW - ELECTRICAL CONTRACTORS" ||
    selectedOption === "1740 - LOW - MASONRY/TILE/PLASTER/INSULATION CONTRACTORS" ||
    selectedOption === "1750 - LOW - CARPENTRY CONTRACTORS" ||
    selectedOption === "1761 - LOW - ROOFING/SIDING/SHEET METAL CONTRACTORS" ||
    selectedOption === "1771 - HIGH - CONTRACTORS - CONCRETE" ||
    selectedOption === "1799 - LOW - CONTRACTORS-SPECIAL TRADE - (NOT CLASSIFIED ELSEWHERE)" ||
    selectedOption === "3501 - LOW - HOLIDAY INNL" ||
    selectedOption === "3502 - LOW - BEST WESTERN" ||
    selectedOption === "3503 - LOW - SHERATON" ||
    selectedOption === "3504 - LOW - HILTON" ||
    selectedOption === "3508 - LOW - QUALITY INN" ||
    selectedOption === "3509 - LOW - MARRIOTT" ||
    selectedOption === "3512 - LOW - INTER-CONTINENTAL" ||
    selectedOption === "3519 - LOW - PULLMAN INTERNATIONAL HOTELS" ||
    selectedOption === "3528 - LOW - THUNDERBIRD/RED LION" ||
    selectedOption === "3533 - LOW - HOTEL IBIS" ||
    selectedOption === "3535 - LOW - HILTON INTERNATIONAL" ||
    selectedOption === "3537 - LOW - ANA HOTELS" ||
    selectedOption === "3512 - LOW - INTER-CONTINENTAL" ||
    selectedOption === "3519 - LOW - PULLMAN INTERNATIONAL HOTELS" ||
    selectedOption === "3528 - LOW - THUNDERBIRD/RED LION" ||
    selectedOption === "3533 - LOW - HOTEL IBIS" ||
    selectedOption === "3535 - LOW - HILTON INTERNATIONAL" ||
    selectedOption === "3537 - LOW - ANA HOTELS" ||
    selectedOption === "3542 - LOW - ROYAL HOTELS" ||
    selectedOption === "3544 - LOW - CIGAHOTELS" ||
    selectedOption === "3562 - LOW - COMFORT INN" ||
    selectedOption === "3579 - LOW - HOTEL MERCURE" ||
    selectedOption === "3595 - LOW - HOSPITALITY INNS" ||
    selectedOption === "3612 - LOW - MOEVENPICK HOTELS" ||
    selectedOption === "3615 - LOW - TRAVELODGE" ||
    selectedOption === "3635 - LOW - RESO HOTELS" ||
    selectedOption === "3640 - LOW - HYATT" ||
    selectedOption === "3641 - LOW - SOFITEL HOTELS" ||
    selectedOption === "3642 - LOW - NOVOTEL" ||
    selectedOption === "3649 - LOW - RADISSON HOTEL" ||
    selectedOption === "3652 - LOW - EMBASSY HOTELS" ||
    selectedOption === "3661 - LOW - METROPOLE HOTELS" ||
    selectedOption === "3690 - LOW - COURTYARD BY MARRIOTT" ||
    selectedOption === "3692 - LOW - DOUBLETREE HOTEL" ||
    selectedOption === "3695 - LOW - EMBASSY SUITES" ||
    selectedOption === "3700 - LOW - MOTEL 6" ||
    selectedOption === "3701 - LOW - LA MANSION DEL RIO" ||
    selectedOption === "3704 - LOW - ROYCE HOTEL" ||
    selectedOption === "3714 - LOW - FOUR SEASONS (AUSTRALIA)" ||
    selectedOption === "3716 - LOW - CARLTON HOTELS" ||
    selectedOption === "3717 - LOW - CITY LODGE HOTELS" ||
    selectedOption === "3722 - LOW - WYNDHAM" ||
    selectedOption === "3736 - LOW - COLORADO BELLE/EDGEWATER RESORT" ||
    selectedOption === "3747 - LOW - CLUBCORP/CLUBRESORTS" ||
    selectedOption === "3749 - LOW - THE BEVERLY HILLS HOTEL" ||
    selectedOption === "3750 - LOW - CROWNE PLAZA HOTELS" ||
    selectedOption === "3755 - LOW - THE HOMESTEAD" ||
    selectedOption === "3763 - LOW - CHATEAU ELAN WINERY AND RESORT" ||
    selectedOption === "3778 - LOW - FOUR POINTS HOTELS" ||
    selectedOption === "3779 - LOW - W HOTELS" ||
    selectedOption === "3785 - LOW - OUTRIGGER HOTELS AND RESORTS" ||
    selectedOption === "3824 - LOW - ARIA" ||
    selectedOption === "4214 - HIGH - MOVING AND STORAGE COMPANIES" ||
    selectedOption === "4225 - HIGH - PUBLIC WAREHOUSING" ||
    selectedOption === "4411 - HIGH - STEAMSHIP/CRUISE LINES" ||
    selectedOption === "4457 - HIGH - BOAT RENTALS & LEASING" ||
    selectedOption === "4722 - HIGH - TRAVEL AGENCIES AND TOUR OPERATORS" ||
    selectedOption === "5094 - HIGH - PRECIOUS STONES/METALS/JEWELRY" ||
    selectedOption === "5511 - HIGH - CAR & TRUCK DEALERS/NEW/USED-SALES/SERVICE/REPAIRS/PARTS AND LEASING" ||
    selectedOption === "5521 - HIGH - CAR & TRUCK DEALERS/USED ONLY" ||
    selectedOption === "5571 - HIGH - MOTORCYCLE DEALERS" ||
    selectedOption === "5592 - LOW - MOTOR HOME DEALERS" ||
    selectedOption === "5599 - LOW - MISCELLANEOUS AUTOMOTIVE/AIRCRAFT AND FARM EQUIPMENT DEALERS (NOT ELSEWHERE CLASSIFIED)" ||
    selectedOption === "5712 - LOW - FURNITURE /HOME FURNISHINGS AND EQUIPMENT STORES (NOT APPLIANCES)" ||
    selectedOption === "5713 - LOW - CARPET STORES" ||
    selectedOption === "5713 - LOW - FLOOR COVERING STORES" ||
    selectedOption === "5714 - LOW - DRAPERY & UPHOLSTERY STORES" ||
    selectedOption === "5718 - LOW - FIREPLACES & ACCESSORIES" ||
    selectedOption === "5719 - LOW - MISCELLANEOUS HOME FURNISHING SPECIALTY STORES" ||
    selectedOption === "5944 - HIGH - JEWELRY STORES/WATCHES/CLOCKS AND SILVERWARE STORES" ||
    selectedOption === "5992 - LOW - FLORISTS" ||
    selectedOption === "6300 - LOW - INSURANCE SALES/UNDERWRITING AND PREMIUMS" ||
    selectedOption === "6513 - LOW - REAL EST AGNTS & MGRS RENTALS" ||
    selectedOption === "7011 - LOW - HOTELS/MOTELS/RESORTS/BED AND BREAKFASTS/CENTRAL RESERVATION SERVICES (NOT ELSEWHERE CLASSIFIED)" ||
    selectedOption === "7032 - LOW - SPORTING/RECREATIONAL CAMPS" ||
    selectedOption === "7033 - LOW - TRAILER PARKS/CAMPGROUNDS" ||
    selectedOption === "7379 - HIGH - COMPUTER MAINTENANCE/REPAIR/SERVICE" ||
    selectedOption === "7513 - LOW - TRUCK/UTILITY TRAILER RENTALS" ||
    selectedOption === "7519 - LOW - MOTOR HOME RENTALS" ||
    selectedOption === "7911 - LOW - DANCE HALLS/STUDIOS/SCHOOLS" ||
    selectedOption === "7922 - HIGH - THEATRICAL PRODUCERS AND TICKET SALES (EVENTS)" ||
    selectedOption === "7929 - HIGH - BANDS/ORCHESTRAS/ENTERTAINERS" ||
    selectedOption === "7997 - LOW - MEMBERSHIP CLUBS (SPORTS/RECREATION/ATHLETIC), COUNTRY CLUBS AND PRIVATE GOLF COURSES" ||
    selectedOption === "8211 - HIGH - ELEMENTARY/SECONDARY SCHOOLS" ||
    selectedOption === "8220 - LOW - COLLEGES/UNIVERSITIES/JUNIOR COLLEGES/PROFESSIONAL SCHOOLS" ||
    selectedOption === "8241 - HIGH - CORRESPONDENCE SCHOOLS" ||
    selectedOption === "8244 - HIGH - BUSINESS/SECRETARIAL SCHOOL" ||
    selectedOption === "8249 - HIGH - TRADE/VOCATIONAL SCHOOLS" ||
    selectedOption === "8299 - HIGH - SCHOOLS AND EDUCATIONAL SERVICES (NOT CLASSIFIED ELSEWHERE)" ||
    selectedOption === "8351 - LOW - CHILD CARE SERVICES") {
    highRiskCommentsInput.value = "Merchants accepts payment at completion of work.";
  } else {
    highRiskCommentsInput.value = "";
  }
}


function copyAddress() {
   var selectElement = document.querySelector('.postalAddress');
   var isDifferent = selectElement.value === 'Yes';

   var buildingSiteInput = document.querySelector('input[name="buildingSite"]');
   var streetSiteInput = document.querySelector('input[name="streetSite"]');
   var suburbSiteInput = document.querySelector('input[name="suburbSite"]');
   var stateSiteInput = document.querySelector('select[name="stateSite"]');
   var postcodeSiteInput = document.querySelector('input[name="postcodeSite"]');

   var buildingPostalInput = document.querySelector('input[name="buildingPostal"]');
   var streetPostalInput = document.querySelector('input[name="streetPostal"]');
   var suburbPostalInput = document.querySelector('input[name="suburbPostal"]');
   var statePostalInput = document.querySelector('select[name="statePostal"]');
   var postcodePostalInput = document.querySelector('input[name="postcodePostal"]');

   if (isDifferent) {
     buildingPostalInput.value = '';
     streetPostalInput.value = '';
     suburbPostalInput.value = '';
     statePostalInput.value = '';
     postcodePostalInput.value = '';
   } else {
     buildingPostalInput.value = buildingSiteInput.value;
     streetPostalInput.value = streetSiteInput.value;
     suburbPostalInput.value = suburbSiteInput.value;
     statePostalInput.value = stateSiteInput.value;
     postcodePostalInput.value = postcodeSiteInput.value;
   }
 }



 function copyBank() {
    var selectElement = document.querySelector('.feeQ');
    var isDifferent = selectElement.value === 'Yes';

    var bsbInput = document.querySelector('input[name="bsb"]');
    var accNumberInput = document.querySelector('input[name="accNumber"]');
    var accountNameInput = document.querySelector('input[name="accountName"]');

    var bsbFeeInput = document.querySelector('input[name="bsbFee"]');
    var accNumberFeeInput = document.querySelector('input[name="accNumberFee"]');
    var accountNameFeeInput = document.querySelector('input[name="accountNameFee"]');

    if (isDifferent) {
      bsbFeeInput.value = '';
      accNumberFeeInput.value = '';
      accountNameFeeInput.value = '';
    } else {
      bsbFeeInput.value = bsbInput.value;
      accNumberFeeInput.value = accNumberInput.value;
      accountNameFeeInput.value = accountNameInput.value;
    }
  }







  //
  // ADD MOTO % functionality
  //
  // attach a bunch of events to both inputs to handle any kind of input change
  ['change', 'keyup', 'paste'].forEach(function(event) {

    // .bind here essentially serves to pass reference of the current updated input, and the other input wich will update
  	cardPresent.addEventListener(event, onPercentageChange.bind(null, cardPresent, cardNotPresent));
    cardNotPresent.addEventListener(event, onPercentageChange.bind(null, cardNotPresent, cardPresent));
  });

  function onPercentageChange(updatedInput, otherInput) {

    var updatedValue = parseInt(updatedInput.value) || 0;

    otherInput.value = 100 - updatedValue + "%";
  }


  function moveCursorBeforePercent() {
    var inputField = document.getElementById("cardPresent");
    if (inputField.value === '') {
      inputField.value = "%";
    }

    // Use setTimeout to set the cursor position after a short delay
    setTimeout(function() {
      inputField.setSelectionRange(0, 0);
    }, 10);
  }
