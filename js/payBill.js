document.getElementById('btn-pay-bill').addEventListener('click', function (event) {
    event.preventDefault();

    const acNumber = getInputValue('input-ac-num');
    const payAmount = getInputFieldValueByID('input-pay-bill-money');
    const pinNumber = getInputFieldValueByID('input-pay-bill-pin');

    const balance = getTextFieldValueByID('main-balance');


    if(isNaN(acNumber, payAmount, pinNumber)){
        alert('Failed To Pay bill');
        return;
    }

    if(payAmount > balance){
        alert('Failed to Pay bill');
        return;
    }

    if (acNumber === '11223344' && pinNumber === 1234) {
        const newBalance = balance - payAmount;
        document.getElementById('main-balance').innerText = newBalance;

        alert(`Account Balance Was : ${balance}TK. New Balance: ${newBalance} TK.`);

        const div = document.createElement('div');
        div.classList.add('bg-gray-50');
        div.classList.add('rounded-lg');
        div.classList.add('p-3');
        div.classList.add('w-full');
        div.classList.add('space-y-2');
        
        div.innerHTML = `
            <div class="flex flex-row justify-start items-center gap-2">
                 <img class="bg-slate-200 p-2 rounded-full" src="./img/grp.png" alt="">
                    <div>
                        <h3 class="text-lg font-bold">Pay Bill</h3>
                        <p class="text-sm"> Pay Amount: ${payAmount}Tk. New Balance: ${newBalance}Tk.</p>
                         <p class="text-[8px]">
                            <b>${currentTime}</b> 
                        </p>
                    </div>
            </div>
    
        `
        document.getElementById('transaction-container').appendChild(div);
    }
    else{
        alert('Failed to Pay bill')
    }

});