const form = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');

const expenses = [];

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get values from inputs
  const name = document.getElementById('name').value.trim();
  const amount = parseFloat(document.getElementById('amount').value);
  const category = document.getElementById('category').value;
  const date = document.getElementById('date').value;

  if (!name || !amount || !category || !date) {
    alert('Please fill out all fields');
    return;
  }

  // Create expense object
  const expense = { name, amount, category, date };
  expenses.push(expense);

  // Clear form inputs
  form.reset();

  // Update the UI
  renderExpenses();
});

function renderExpenses() {
  expenseList.innerHTML = ''; // Clear existing

  expenses.forEach(expense => {
    const li = document.createElement('li');
    li.textContent = `${expense.date} - ${expense.name} (${expense.category}): $${expense.amount.toFixed(2)}`;
    expenseList.appendChild(li);
  });
}
