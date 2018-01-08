var input = document.getElementById('num'),
    result = document.getElementsByClassName('result'),
    sum = 0;

input.addEventListener('blur', function(e) {
  sum = e.target.value * 2;
  result[0].innerHTML = sum;
});
