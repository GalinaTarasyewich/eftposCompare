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
