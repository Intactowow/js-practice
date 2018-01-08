var elem = document.getElementsByClassName('num'),
    result = document.getElementsByClassName('result'),
    sum = 0;

document.getElementById('btn-sum').onclick = function() {

  for (var i = 0; i < elem.length; i++) {
    sum += +elem[i].value;
  }

  result[0].innerHTML = sum;
};
