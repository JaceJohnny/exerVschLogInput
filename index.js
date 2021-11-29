const input = document.querySelector('input');
const header = document.getElementById('header');

input.addEventListener('change', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
  console.log(e.target.value);
}