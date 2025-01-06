document.getElementById('btn-get-bonus').addEventListener('click', function (event) {
    event.preventDefault();


    const coupon = getInputValue('input-get-bonus');
    const balance = getTextFieldValueByID('main-balance');

    // 10% extra
    if (coupon === 'GET10%EXTRA') {

        const bonusAmount = balance * 0.1;
        const newbalance = balance + bonusAmount;

        document.getElementById('main-balance').innerText = newbalance;


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
                        <h3 class="text-lg font-bold">Bonus 10%</h3>
                        <p class="text-sm">Bonus Amount: <b>${bonusAmount}Tk.</b> New Balance: <b>${newbalance}Tk.</b></p>
                         <p class="text-[8px]">
                            <b>${currentTime}</b> 
                        </p>
                    </div>
            </div>
    
        `
        document.getElementById('transaction-container').appendChild(div);

        alert("previously balance was :" + " " + balance + "  After Adding 10% bonus for account value :" + " " + newbalance);
    }

    else{
        alert('Failed To add Bonus')
    }
})