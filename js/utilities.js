function getInputFieldValueByID(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);

    return inputValueNumber;

}

function getInputValue(id) {
    const input = document.getElementById(id).value;
    return input;
}

function getTextFieldValueByID(id) {

    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);

    return textNumber;
};



function showSectionByID(id){
    // hide all the sections
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('send-money-form').classList.add('hidden');
    document.getElementById('get-bonus-form').classList.add('hidden');
    document.getElementById('pay-bill-form').classList.add('hidden');
    document.getElementById('transaction-form').classList.add('hidden');


    // show the section with the provided id as a parameter
    document.getElementById(id).classList.remove('hidden');

}