document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();


    // const acNumber = getInputFieldValueByID('input-account-number');
    const acNumber = document.getElementById('input-account-number').value;
    const addMoney = getInputFieldValueByID('input-add-money');
    const pinNumber = getInputFieldValueByID('input-add-money-pin');
    const accountBalance = getTextFieldValueByID('main-balance');

    if (isNaN(acNumber, addMoney)) {
        alert('Failed To add Money');
        return;
    }

    if (acNumber === '0011223344' && pinNumber === 1234) {
        console.log('money added');

        const balance = accountBalance + addMoney;

        document.getElementById('main-balance').innerText = balance;
        // add to transaction history
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
                        <h3 class="text-lg font-bold">Add Money</h3>
                        <p class="text-sm"> Money Added: ${addMoney}Tk. New Balance: ${balance}Tk.</p>
                        <p class="text-[8px]">
                            <b>${currentTime}</b> 
                        </p>
                    </div>
            </div>
    
        `
        document.getElementById('transaction-container').appendChild(div);
    }


    else {
        alert('failed to add money')
    }
})