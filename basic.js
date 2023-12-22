let depositInput = document.getElementById('deposit-input');
let withdrawInput = document.getElementById('withdraw-input');
const depositBtn = document.getElementById('deposit-btn')
const withdrawBtn = document.getElementById('withdraw-btn')

let newBalance;
let newWithdrawAmount;

depositBtn.addEventListener('click', function(){
  let currentDeposit = parseFloat(document.getElementById('deposit-total').innerText)
  depositAmount = parseFloat(depositInput.value)
  newBalance = currentDeposit + depositAmount; 
  document.getElementById('deposit-total').innerText = newBalance
  document.getElementById('balance-total').innerText = newBalance

// start
   let DepositHistory = document.getElementById('depositList' );
   let date = new Date();
   let count = DepositHistory.childElementCount;
   let DateTime = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
   let P = document.createElement('p' );
   P.innerHTML= `${count+1}.-->${depositAmount}.00TK Time:- ${DateTime}`;
   DepositHistory.appendChild(P);

// end

  withdrawInput
})


withdrawBtn.addEventListener('click', function(){
  let withdrawAmout = parseFloat(withdrawInput.value)
  if(newBalance < withdrawAmout){
    alert('Your balance is too low')
  }else{
    newBalance -= withdrawAmout
    document.getElementById('balance-total').innerText = newBalance
    let previousWithdrawAmount =  parseFloat(document.getElementById('withdraw-total').innerText);
    let currentWithdrawAmount = previousWithdrawAmount + withdrawAmout
    document.getElementById('withdraw-total').innerText = currentWithdrawAmount


    let withdrawHistory = document.getElementById('withdrawList' );
    let date = new Date();
    let count = withdrawHistory.childElementCount;
    let DateTime = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    let P = document.createElement('p' );
    P.innerHTML= `${count+1}.-->${withdrawAmout}.00TK Time:- ${DateTime}`;
    withdrawHistory.appendChild(P);
  }

})