let productName = prompt("Enter Product Name: ");
let productPrice = Number(prompt("Enter Product Price : "));
let productQTY = Number(prompt("Enter Product QTY:"));
let subTotal = (productPrice + productQTY);
let salesTax= parseFloat(subTotal * .10).toFixed(2);
let grandTotal= parseFloat(salesTax+subTotal).toFixed(2);

console.log(productName);
console.log(productName);
console.log(productQTY);
console.log(subTotal);
console.log(salesTax);
console.log(grandTotal);


document.getElementById("productInfo").innerHTML=`
<h2>Mighty Morphin Student Store</h2>
<hr>
<p>Product Name: ${productName}</p>
<p>Product Price: ${productPrice}</p>
<p>Product QTY: ${productQTY}</p>
<p>Sub Total: ${subTotal}</p>
<p>Sales Tax (.10): ${salesTax}</p>
<hr>
<p>Grand Total: ${grandTotal}</p>
`;

