function updateProductCart(products, prices, isAdd) {
    const productInput = document.getElementById(products + '-number');
    let inputUpdate = productInput.value;

    if (isAdd == true) {
        inputUpdate = parseInt(inputUpdate) + 1;
    } else if (isAdd == false && inputUpdate > 0) {
        inputUpdate = parseInt(inputUpdate) - 1;
    }
    productInput.value = inputUpdate;
    const getPrice = document.getElementById(products + '-total');
    getPrice.innerText = inputUpdate * prices
    getSubTotal()
}

function calcSubTotal(products) {
    const productsTotal = document.getElementById(products + '-number');
    const getTotal = parseInt(productsTotal.value);
    return getTotal;
}

function getSubTotal() {
    const phoneTotal = calcSubTotal('phone') * 1219;
    const casetotal = calcSubTotal('case') * 59;
    const inTotal = phoneTotal + casetotal;
    const tax = inTotal * 0.11;
    const discount = inTotal * 0.05;
    const subTotal = inTotal + tax - discount;
    const totalPrice = subTotal
    // console.log(inTotal);
    document.getElementById('sub-total').innerText = inTotal;
    document.getElementById('tax-amount').innerText = ` (+)  ${tax.toFixed(1)}`;
    document.getElementById('discount-amount').innerText = `(-) ${discount.toFixed(1)}`;
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
    // return inTotal;
}