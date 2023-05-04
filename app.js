$(function () {
    $('form').submit(function (event) {
        var data = $(this).serialize();
        $.post("https://hooks.zapier.com/hooks/catch/14888944/33njn26/silent/", data, function () {});
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
