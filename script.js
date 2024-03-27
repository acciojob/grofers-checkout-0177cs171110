document.addEventListener('DOMContentLoaded', function() {
  const getSumBtn = document.createElement("button");
  getSumBtn.textContent = "Get Total Price";
  document.body.appendChild(getSumBtn);

  const getSum = () => {
    const prices = document.querySelectorAll('.price');
    let totalPrice = 0;

    prices.forEach(price => {
      totalPrice += parseFloat(price.textContent);
    });

    // Check if total price row already exists, if yes, update it; otherwise, create a new row
    let totalRow = document.getElementById('totalRow');
    if (totalRow) {
      totalRow.querySelector('.total-price').textContent = `Total Price: Rs ${totalPrice}`;
    } else {
      totalRow = document.createElement('tr');
      totalRow.setAttribute('id', 'totalRow');
      const totalItemCell = document.createElement('td');
      totalItemCell.textContent = 'Total Price:';
      totalRow.appendChild(totalItemCell);
      const totalPriceCell = document.createElement('td');
      totalPriceCell.setAttribute('class', 'total-price');
      totalPriceCell.textContent = `Rs ${totalPrice}`;
      totalRow.appendChild(totalPriceCell);
      document.querySelector('table').appendChild(totalRow);
    }
  };

  getSumBtn.addEventListener("click", getSum);
});
