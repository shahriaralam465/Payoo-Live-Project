document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();

    const accountNumber = getInputValue('ac-number');
    const cashOutAmount = getInputFieldValueByID('input-cash-out-money');
    const pinNumber = getInputFieldValueByID('input-cash-out-pin');

    const accountBalance = getTextFieldValueByID('main-balance');

    if (isNaN(accountNumber, cashOutAmount, pinNumber)) {
        alert('Failed To Cash Out : Provided Field Requires Number');
        return;
    }
    if (cashOutAmount > accountBalance) {
        alert('Failed To Cash Out : Cash Out Limit Crossed');
        return;
    }

    if (accountNumber === '11223344' && pinNumber === 1234) {

        newbalance = accountBalance - cashOutAmount;

        document.getElementById('main-balance').innerText = newbalance;


        // add to transaction
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
                        <h3 class="text-lg font-bold">Cash Out</h3>
                        <p class="text-sm">Money Amount: <b>${cashOutAmount}Tk.</b> New Balance:<b> ${newbalance}Tk.</b></p>
                        <p class="text-[8px]">
                            <b>${currentTime}</b> 
                        </p>
                    </div>
            </div>
    
        `
        document.getElementById('transaction-container').appendChild(div);
    }
    else{
        alert('Failed to Cash out')
    }
});