
// changes fees according to pricing selection
function showPricing() {
  var select = document.getElementById("pricing");
  var merchantServiceFee = document.getElementById("merchantServiceFee");
  var debitCardFee = document.getElementById("debitCardFee");
var countertopFee = document.querySelector('.countertopFee');
var mobileIntegratedFee = document.querySelector('.mobileIntegratedFee');
const mobileEftposFeeInput = document.querySelector('.mobileEftposFee');




  var selectedOption = select.options[select.selectedIndex].value;
  switch (selectedOption) {

    case "Flat Rate Offer":
      merchantServiceFee.value = "0.88%";
      debitCardFee.value = "0.88%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;
    case "Pricing approved by Product":
      merchantServiceFee.value = "";
      debitCardFee.value = "";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";
            break;

    case "Accountants":
      merchantServiceFee.value = "0.88%";
      debitCardFee.value = "0.88%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;
    case "Automotive Body Repair Stores":
      merchantServiceFee.value = "0.49%";
      debitCardFee.value = "0.49%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

            break;
    case "Automotive Parts Stores":
      merchantServiceFee.value = "0.49%";
      debitCardFee.value = "0.49%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

            break;

    case "Bakeries":
      merchantServiceFee.value = "0.78%";
      debitCardFee.value = "0.78%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;
    case "Butchers":
      merchantServiceFee.value = "0.49%";
      debitCardFee.value = "0.49%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;
    case "Child Care Centres":
      merchantServiceFee.value = "0.88%";
      debitCardFee.value = "0.88%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";
      break;

    case "Clothing Stores":
      merchantServiceFee.value = "0.60%";
      debitCardFee.value = "0.60%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;
    case "Computer Stores":
      merchantServiceFee.value = "0.69%";
      debitCardFee.value = "0.69%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;
    case "Drinking Places":
      merchantServiceFee.value = "0.60%";
      debitCardFee.value = "0.60%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;
    case "Dry Cleaners":
      merchantServiceFee.value = "0.75%";
      debitCardFee.value = "0.75%";
      comments1.value = "RATES ARE INDUSTRY APPROVED"
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;
    case "Floor Covering Stores":
      merchantServiceFee.value = "0.62%";
      debitCardFee.value = "0.62%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;
    case "Florists":
      merchantServiceFee.value = "0.60%";
      debitCardFee.value = "0.60%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;
    case "Furniture Stores":
      merchantServiceFee.value = "0.49%";
      debitCardFee.value = "0.49%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;
    case "Gifts & Souvenir Stores":
      merchantServiceFee.value = "0.55%";
      debitCardFee.value = "0.55%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;

    case "Hairdressers & Beauticians":
      merchantServiceFee.value = "0.59%";
      debitCardFee.value = "0.59%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;

    case "Hardware Stores":
      merchantServiceFee.value = "0.49%";
      debitCardFee.value = "0.49%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;
    case "Home Furnishing Stores":
      merchantServiceFee.value = "0.75%";
      debitCardFee.value = "0.75%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;
    case "Landscaping / Garden Centres":
      merchantServiceFee.value = "0.55%";
      debitCardFee.value = "0.55%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;

    case "Liquor Stores":
      merchantServiceFee.value = "0.49%";
      debitCardFee.value = "0.49%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;


    case "Jewellery Stores":
      merchantServiceFee.value = "0.55%";
      debitCardFee.value = "0.55%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;

    case "Mechanics":
      merchantServiceFee.value = "0.47%";
      debitCardFee.value = "0.47%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;


    case "Medical Practitioners":
      merchantServiceFee.value = "0.70%";
      debitCardFee.value = "0.70%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;
    case "Membership Clubs":
      merchantServiceFee.value = "0.85%";
      debitCardFee.value = "0.85%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;
    case "Miscellaneous General Merchandise":
      merchantServiceFee.value = "0.45%";
      debitCardFee.value = "0.45%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;
    case "Pest Control":
      merchantServiceFee.value = "0.88%";
      debitCardFee.value = "0.88%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;
    case "Pet Shops":
      merchantServiceFee.value = "0.49%";
      debitCardFee.value = "0.49%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;

    case "Petrol Stations":
      merchantServiceFee.value = "0.35%";
      debitCardFee.value = "0.35%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;
    case "Pharmacies":
      merchantServiceFee.value = "0.55%";
      debitCardFee.value = "0.55%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;

    case "Schools & Educational Services":
      merchantServiceFee.value = "0.80%";
      debitCardFee.value = "0.80%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;
    case "Sporting Goods Stores":
      merchantServiceFee.value = "0.50%";
      debitCardFee.value = "0.50%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;
    case "Supermarkets (Buying group members)":
      merchantServiceFee.value = "0.39%";
      debitCardFee.value = "0.39%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;

    case "Supermarkets & Grocery Stores":
      merchantServiceFee.value = "0.50%";
      debitCardFee.value = "0.50%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;
    case "Swimming Pool Stores":
      merchantServiceFee.value = "0.69%";
      debitCardFee.value = "0.69%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;

    case "Tobacconists":
      merchantServiceFee.value = "0.33%";
      debitCardFee.value = "0.33%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;
    case "Tradies":
      merchantServiceFee.value = "0.80%";
      debitCardFee.value = "0.80%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;

    case "Tyre Stores":
      merchantServiceFee.value = "0.35%";
      debitCardFee.value = "0.35%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;
    case "Variety Stores":
      merchantServiceFee.value = "0.49%";
      debitCardFee.value = "0.49%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";

      break;
    case "Vets":
      merchantServiceFee.value = "0.39%";
      debitCardFee.value = "0.39%";
      mobileEftposFeeInput.value = "Waived"
      countertopFee.value = "Waived";
      mobileIntegratedFee.value = "Waived";
      
      break;

    case "ARAMA Members":
      merchantServiceFee.value = "0.79%";
      debitCardFee.value = "$0.15";
      mobileEftposFeeInput.value = "$26"
      countertopFee.value = "$29";
      mobileIntegratedFee.value = "$32";


      break;
    case "Boost Juice":
      merchantServiceFee.value = "1.05%";
      debitCardFee.value = "$0.05";
      mobileEftposFeeInput.value = "$29"
      countertopFee.value = "$29";
      mobileIntegratedFee.value = "$32";

      break;
    case "Cafés":
      merchantServiceFee.value = "0.85%";
      debitCardFee.value = "$0.08";
      mobileEftposFeeInput.value = "$29"
      countertopFee.value = "$29";
      mobileIntegratedFee.value = "$32";

      break;
    case "Coffee Shops":
      merchantServiceFee.value = "1.30%";
      debitCardFee.value = "$0.06";
      mobileEftposFeeInput.value = "$29"
      countertopFee.value = "$29";
      mobileIntegratedFee.value = "$32";

      break;
    case "Convenience Stores":
      merchantServiceFee.value = "0.88%";
      debitCardFee.value = "$0.07";
      mobileEftposFeeInput.value = "$29"
      countertopFee.value = "$29";
      mobileIntegratedFee.value = "$32";

      break;

    case "Discount Stores":
      merchantServiceFee.value = "0.80%";
      debitCardFee.value = "$0.08";
      mobileEftposFeeInput.value = "$29"
      countertopFee.value = "$29";
      mobileIntegratedFee.value = "$32";


      break;
    case "Dominos":
      merchantServiceFee.value = "0.78%";
      debitCardFee.value = "$0.08";
      mobileEftposFeeInput.value = "$26"
      countertopFee.value = "$26";
      mobileIntegratedFee.value = "$29";


      break;

    case "Fruit & Veg Shops":
      merchantServiceFee.value = "0.85%";
      debitCardFee.value = "$0.07";
      mobileEftposFeeInput.value = "$29"
      countertopFee.value = "$29";
      mobileIntegratedFee.value = "$32";

      break;

    case "Gloria Jeans":
      merchantServiceFee.value = "1.18%";
      debitCardFee.value = "$0.06";
      mobileEftposFeeInput.value = "$29"
      countertopFee.value = "$29";
      mobileIntegratedFee.value = "$32";

      break;
    case "Go Vita and other Health Food Stores":
      merchantServiceFee.value = "0.70%";
      debitCardFee.value = "$0.07";
      mobileEftposFeeInput.value = "$29"
      countertopFee.value = "$29";
      mobileIntegratedFee.value = "$32";

      break;
    case "Newsagencies (Non Membership)":
      merchantServiceFee.value = "0.85%";
      debitCardFee.value = "$0.12";
      mobileEftposFeeInput.value = "$29"
      countertopFee.value = "$29";
      mobileIntegratedFee.value = "$32";

      break;
    case "Newsagencies ALNA members":
      merchantServiceFee.value = "0.73%";
      debitCardFee.value = "$0.05";
      mobileEftposFeeInput.value = "$26"
      countertopFee.value = "$26";
      mobileIntegratedFee.value = "$29";

      break;
    case "Pizza Hut":
      merchantServiceFee.value = "0.78%";
      debitCardFee.value = "$0.08";
      mobileEftposFeeInput.value = "$26"
      countertopFee.value = "$26";
      mobileIntegratedFee.value = "$29";

      break;

    case "Real Estate Agencies":
      merchantServiceFee.value = "0.78%";
      debitCardFee.value = "$0.15";
      mobileEftposFeeInput.value = "$29"
      countertopFee.value = "$29";
      mobileIntegratedFee.value = "$32";

      break;
    case "Registered Charities or Not for Profit Organisations":
      merchantServiceFee.value = "0.30%";
      debitCardFee.value = "$0.05";
      mobileEftposFeeInput.value = "$29"
      countertopFee.value = "$29";
      mobileIntegratedFee.value = "$32";

      break;

    case "Restaurants":
      merchantServiceFee.value = "0.82%";
      debitCardFee.value = "$0.10";
      mobileEftposFeeInput.value = "$29"
      countertopFee.value = "$29";
      mobileIntegratedFee.value = "$32";

      break;

    case "Takeaway Food":
      merchantServiceFee.value = "0.90%";
      debitCardFee.value = "$0.09";
      mobileEftposFeeInput.value = "$29"
      countertopFee.value = "$29";
      mobileIntegratedFee.value = "$32";

      break;
    case "Taxis":
      merchantServiceFee.value = "1.25%";
      debitCardFee.value = "$0.15";
      mobileEftposFeeInput.value = "$29"
      countertopFee.value = "$29";
      mobileIntegratedFee.value = "$32";

      break;

    default:
      merchantServiceFee.value = "";
      debitCardFee.value = "";
      mobileEftposFeeInput.value = ""
      countertopFee.value = "";
      mobileIntegratedFee.value = "";


  }
}
