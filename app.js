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
    case "Supermarkets(Buying group members)":
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

    case "Tobacconist":
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
