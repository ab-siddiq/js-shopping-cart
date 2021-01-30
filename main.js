function productPriceCalculation(product, isIncrease) {
    const productInput = document.getElementById(product + "-count");
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;

    document.getElementById(product + "-count").innerText = productNewCount;
    calculateTotal();
}

function calculateTotal() {
    const phoneCount = productInput("phone");
    const caseCount = productInput("case");
    const totalCount = productInput("total");
    const grandCount = productInput("grand");
    const taxCount = productInput("tax");


    let phonePrice = phoneCount * 1219;
    let casePrice = caseCount * 59;
    let subTotal = phonePrice + casePrice;
    let tax = Math.round(subTotal * .1);
    let grandTotal = subTotal + tax;


    document.getElementById("phone-total").innerText = "$" + phonePrice;
    document.getElementById("case-total").innerText = "$" + casePrice;
    document.getElementById("total-count").innerHTML = "$" + subTotal;
    document.getElementById("tax-count").innerHTML = "$" + tax;
    document.getElementById("grand-count").innerHTML = "$" + grandTotal;

}

function productInput(productId) {
    const productInput = document.getElementById(productId + "-count");
    const productCount = parseInt(productInput.value);
    return productCount;
}