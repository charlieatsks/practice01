const transactions = [
    {
        id: 1,
        name: 'salary',
        amount: 5000,
        date: new Date(),
        type: 'income'
    },
    {
        id: 1,
        name: 'salary',
        amount: 5000,
        date: new Date(),
        type: 'income'
    },
];


const list = document.getElementById("transactionList");

function renderList() {
    list.innerHTML = "<li>item</li>";

    transactions.forEach((transaction) => {
        const li = document.createElement("li");

        li.innerHTML = transaction.amount;

        list.appendChild(li);
    });
}

renderList();



