const calcbtn = document.getElementById('calcbtn');

calcbtn.addEventListener('click', (event) => {
  event.preventDefault();
  const arrayString = document.getElementById('array').value.replace(' ', '');
  const array = arrayString.split(',').map(Number);

  const differences = array.slice(1).map((num, i) => num - array[i]);
  const difference = differences.pop();
  const previousDifference = differences.pop();

  const nextNumber = array[array.length - 1] + (difference === previousDifference? difference : difference + (difference - previousDifference));
  document.getElementById('nextNum').value = nextNumber;
});