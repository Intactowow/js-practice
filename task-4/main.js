var input = document.getElementById('num'),
    result = document.querySelector('.result');
    arr = '';
    index = 0;

input.addEventListener('click', function(e) {
  result.innerHTML = 0;
});

input.addEventListener('blur', function(e) {
  var sum = 0;
  input = e.target.value;
  arr = input.split(' ');
  index = arr.length;

  for (var i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }
  result.innerHTML = parseFloat(sum / index, 0);
});
