function updateProductCart(products, isAdd) {
    const productInput = document.getElementById(products + '-number');
    let inputUpdate = productInput.value;

    if (isAdd == true) {
        inputUpdate = parseInt(inputUpdate) + 1;
    } else if (isAdd == false && inputUpdate > 0) {
        inputUpdate = parseInt(inputUpdate) - 1;
    }
    productInput.value = inputUpdate;


}