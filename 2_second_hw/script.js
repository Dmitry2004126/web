const amountInput = document.getElementById('amountInput');
const balanceInput = document.getElementById('balanceInput');
const selectInput = document.getElementById('select');
const processButton = document.getElementById('secondbuttom');
const resultElement2 = document.getElementById('result2');

let currentBalance = null;

processButton.addEventListener('click', () => {
    const amount = Number(amountInput.value);
    const choice = selectInput.value;
    const balance = Number(balanceInput.value);
    
    if (currentBalance == null || currentBalance != balance) {
            currentBalance = balance;
        }
    let bankAccount = {
        balance: currentBalance,
        
        deposit: function(amount) {
            if (amount < 0){
                amount = amount * -1;
            }
            this.balance += amount;
            currentBalance = this.balance;
            updateBalanceDisplay();
            resultElement2.textContent= this.balance;
        },
        withdraw: function(amount) {
            if (this.balance >= amount){
                if (amount < 0){
                    amount = amount * -1;
                }
                this.balance -= amount;
                currentBalance = this.balance;
                updateBalanceDisplay();
                resultElement2.textContent= this.balance;
            }
            else {
                resultElement2.textContent = 'Недостаточно средств на счете';
            }
        },
    };
    
    if (choice === "plus") {
        bankAccount.deposit(amount);
    } else if (choice === "minus") {
        bankAccount.withdraw(amount);
    }
});
function updateBalanceDisplay() {
        balanceInput.value = currentBalance;
}

const inputField = document.getElementById('inputNumber');
const resultElement = document.getElementById('result');
const calculateButton = document.getElementById('firstbuttom');

calculateButton.addEventListener('click', () => {
    let Y = parseInt(inputField.value);
    if (!isNaN(Y)) {
        const calculator = {
            base: Y - 2,

            power: function(y) {
                return Math.pow(this.base, y);
            },
        };

        const result = calculator.power(Y);
        resultElement.textContent = `${Y - 2} в степени ${Y} равно ${result}`;
    } else {
        resultElement.textContent = 'Пожалуйста, введите число';
    }
});

function checkTriangle() {
    const sideA = document.getElementById('sideA').valueAsNumber;
    const sideB = document.getElementById('sideB').valueAsNumber;
    const sideC = document.getElementById('sideC').valueAsNumber;

    // Проверка существования треугольника
    if ((sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA)) {
        alert('Треугольник с такими сторонами не существует.');
    } else {
        alert('Треугольник с такими сторонами существует.');
    }
}