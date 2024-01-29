const transactions = [
    {
        id: 1,
        name: 'salary',
        amount: 5000,
        date: new Date(),
        type: 'income'
    },
    {
        id: 2,
        name: 'lunch',
        amount: 25,
        date: new Date(),
        type: 'expense'
    },
    {
        id: 3,
        name: 'travel',
        amount: 600,
        date: new Date(),
        type: 'expense'
    },
];
/*
const transactions = [];
const list = document.getElementById("transactionList");*/

function renderList() {
    list.innerHTML = "<li>item</li>";

    transactions.forEach(({id, name, amount, date, type} ) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <div class="name">
                <h4>${name}</h4>
                <p>${new Date(date).toLocaleDateString()}</p>
            </div>

            <div class="amount ${type}" >
                <span>${formatter.format(amount)}</span>
            </div>
        `;

        list.appendChild(li);
    });
}
/*
const transactions = JSON.parse(localStorage.getItem("transtions")) || [];
*/
const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
    signDisplay: "always",
});

const list = document.getElementById("transactionList");
const form = document.getElementById("transactoinForm");
const status = document.getElementById("status");
const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
/*
form.addEventListener("submit", addTransaction);

*/
function deleteTransaction(id) {
    const index = transactions.findIndex((trx) => trx.id === id);
    transactions.splice(index, 1);

    renderList();
}


renderList();
