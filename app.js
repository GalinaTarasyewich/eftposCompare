$(function() {
  $('form').submit(function(event) {
    var data = $(this).serialize();
    $.post("https://hooks.zapier.com/hooks/catch/14888944/33njn26/silent/", data, function() {});
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
    case "Flat Rate Offer":
      merchantServiceFee.value = "0.88%";
      debitCardFee.value = "0.88%";
      break;
    case "Pricing approved by Product":
      merchantServiceFee.value = "";
      debitCardFee.value = "";
      comments1.value = "RATES ARE INDUSTRY APPROVED"
      break;
    case "Accountants":
      merchantServiceFee.value = "0.88%";
      debitCardFee.value = "0.88%";
      break;
    case "Automotive Body Repair Stores":
      merchantServiceFee.value = "0.49%";
      debitCardFee.value = "0.49%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"
      break;
    case "Automotive Parts Stores":
      merchantServiceFee.value = "0.49%";
      debitCardFee.value = "0.49%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"
      break;

    case "Bakeries":
      merchantServiceFee.value = "0.78%";
      debitCardFee.value = "0.78%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;
    case "Butchers":
      merchantServiceFee.value = "0.49%";
      debitCardFee.value = "0.49%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;
    case "Child Care Centres":
      merchantServiceFee.value = "0.88%";
      debitCardFee.value = "0.88%";
      break;

    case "Clothing Stores":
      merchantServiceFee.value = "0.60%";
      debitCardFee.value = "0.60%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;
    case "Computer Stores":
      merchantServiceFee.value = "0.69%";
      debitCardFee.value = "0.69%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;
    case "Drinking Places":
      merchantServiceFee.value = "0.60%";
      debitCardFee.value = "0.60%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;
    case "Dry Cleaners":
      merchantServiceFee.value = "0.75%";
      debitCardFee.value = "0.75%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;
    case "Floor Covering Stores":
      merchantServiceFee.value = "0.62%";
      debitCardFee.value = "0.62%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;
    case "Florists":
      merchantServiceFee.value = "0.60%";
      debitCardFee.value = "0.60%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;
    case "Furniture Stores":
      merchantServiceFee.value = "0.49%";
      debitCardFee.value = "0.49%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;
    case "Gifts & Souvenir Stores":
      merchantServiceFee.value = "0.55%";
      debitCardFee.value = "0.55%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;

    case "Hairdressers & Beauticians":
      merchantServiceFee.value = "0.59%";
      debitCardFee.value = "0.59%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;

    case "Hardware Stores":
      merchantServiceFee.value = "0.49%";
      debitCardFee.value = "0.49%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;
    case "Home Furnishing Stores":
      merchantServiceFee.value = "0.75%";
      debitCardFee.value = "0.75%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;
    case "Landscaping / Garden Centres":
      merchantServiceFee.value = "0.55%";
      debitCardFee.value = "0.55%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;

    case "Liquor Stores":
      merchantServiceFee.value = "0.49%";
      debitCardFee.value = "0.49%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;


    case "Jewellery Stores":
      merchantServiceFee.value = "0.55%";
      debitCardFee.value = "0.55%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;

    case "Mechanics":
      merchantServiceFee.value = "0.47%";
      debitCardFee.value = "0.47%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;


    case "Medical Practitioners":
      merchantServiceFee.value = "0.70%";
      debitCardFee.value = "0.70%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;
    case "Membership Clubs":
      merchantServiceFee.value = "0.85%";
      debitCardFee.value = "0.85%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;
    case "Miscellaneous General Merchandise":
      merchantServiceFee.value = "0.45%";
      debitCardFee.value = "0.45%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;
    case "Pest Control":
      merchantServiceFee.value = "0.88%";
      debitCardFee.value = "0.88%";

      break;
    case "Pet Shops":
      merchantServiceFee.value = "0.49%";
      debitCardFee.value = "0.49%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;

    case "Petrol Stations":
      merchantServiceFee.value = "0.35%";
      debitCardFee.value = "0.35%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;
    case "Pharmacies":
      merchantServiceFee.value = "0.55%";
      debitCardFee.value = "0.55%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;

    case "Schools & Educational Services":
      merchantServiceFee.value = "0.80%";
      debitCardFee.value = "0.80%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;
    case "Sporting Goods Stores":
      merchantServiceFee.value = "0.50%";
      debitCardFee.value = "0.50%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;
    case "Supermarkets (Buying group members)":
      merchantServiceFee.value = "0.39%";
      debitCardFee.value = "0.39%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;

    case "Supermarkets & Grocery Stores":
      merchantServiceFee.value = "0.50%";
      debitCardFee.value = "0.50%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;
    case "Swimming Pool Stores":
      merchantServiceFee.value = "0.69%";
      debitCardFee.value = "0.69%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;

    case "Tobacconists":
      merchantServiceFee.value = "0.33%";
      debitCardFee.value = "0.33%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;
    case "Tradies":
      merchantServiceFee.value = "0.80%";
      debitCardFee.value = "0.80%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;

    case "Tyre Stores":
      merchantServiceFee.value = "0.35%";
      debitCardFee.value = "0.35%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;
    case "Variety Stores":
      merchantServiceFee.value = "0.49%";
      debitCardFee.value = "0.49%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;
    case "Vets":
      merchantServiceFee.value = "0.39%";
      debitCardFee.value = "0.39%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"

      break;

    default:
      merchantServiceFee.value = "";
      debitCardFee.value = "";

  }
}


// ........................ADD HIGH RISK COMMENTS DEPENDS ON THE MCC
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
