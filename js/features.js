document.getElementById('show-addMoney-btn').addEventListener('click', function(){
    console.log('add Money form clicked')
    showSectionByID('add-money-form');
})

document.getElementById('show-cashOut-btn').addEventListener('click', function(){
    console.log('Cash Out button clicked');
    showSectionByID('cash-out-form');
})

document.getElementById('show-transferMoney-btn').addEventListener('click', function(){
    console.log('Transfer Money button clicked');
    showSectionByID('send-money-form');
})

document.getElementById('show-getBonus-btn').addEventListener('click', function(){
    console.log('Get bonus button clicked');
    showSectionByID('get-bonus-form');
})

document.getElementById('show-payBill-btn').addEventListener('click', function(){
    console.log('Pay bill button clicked');
    showSectionByID('pay-bill-form');
})

document.getElementById('show-transaction-btn').addEventListener('click', function(){
    console.log('Transaction Button Clicked');
    showSectionByID('transaction-form');
})