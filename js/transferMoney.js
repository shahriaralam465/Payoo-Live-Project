document.getElementById('btn-transfer-money').addEventListener('click', function (event) {
    event.preventDefault();


    const acNumber = getInputValue('input-account-num');
    const transferMoney = getInputFieldValueByID('input-transfer-money');
    const pinNumber = getInputFieldValueByID('input-transfer-money-pin');
    const balance = getTextFieldValueByID('main-balance');

    if (isNaN(acNumber, pinNumber, transferMoney)) {
        alert('Failed to send Money : Not a number')
        return;
    }

    if (transferMoney > balance) {
        alert('Failed to send money : Transfer Level reached')
        return;
    }


    if (acNumber === '11223344' && pinNumber === 1234) {

        const newBalance = balance - transferMoney;
        document.getElementById('main-balance').innerText = newBalance;

        // alert('Send Money successful')

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
                        <h3 class="text-lg font-bold">Send Money</h3>
                        <p class="text-sm">Money Send: ${transferMoney}Tk. New Balance: ${newBalance}Tk.</p>
                        <p class="text-[8px]">
                            <b>${currentTime}</b> 
                        </p>
                    </div>
            </div>
    
        `
        document.getElementById('transaction-container').appendChild(div);

    }
    else {
        alert('Failed to send money: Please full all the required')
    }
})