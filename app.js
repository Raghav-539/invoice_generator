

// Get current date and time
var now = new Date();
const options = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
};

var datetime = now.toLocaleString("en-IN", options);

// Insert date and time into HTML
document.getElementById("datetime").innerHTML = datetime;

// function for generating bill 

function generateBill() {
  var amount = parseFloat(document.getElementById("amount").value);
  var gst = parseFloat(document.getElementById("gst").value);
  var discount = parseFloat(document.getElementById("discount").value);
  var quantity = parseFloat(document.getElementById("quantity").value);
  var description = document.getElementById("description").value;

  var totalAmount = amount * quantity;
  var totalGST = totalAmount * (gst / 100);
  var totalDiscount = totalAmount * (discount / 100);
  var finalAmount = totalAmount + totalGST - totalDiscount;

  // Display invoice details in a table
  var tableRow = `
  <tr>
    <td>${description}</td>
    <td>${amount.toFixed(2)}</td>
    <td>${quantity}</td>
    <td>${gst}</td>
    <td>${discount}</td>
    <td>${finalAmount.toFixed(2)}</td>
  </tr>
`;
  document.getElementById("billItems").innerHTML = tableRow;

  // Add generated class to bill container to change background color of table headers
  // Raghav Gupta
  document.getElementById("bill").classList.add("generated");
  document.getElementById("bill").style.display = "block";
}

function printInvoice() {
  var printContents = document.getElementById("bill");
  html2pdf(printContents);
}


