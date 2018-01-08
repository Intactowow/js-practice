var elem = document.getElementsByClassName('num');
var result = document.getElementsByClassName('result');
var sum = 0;
document.getElementById('btn-sum').onclick = function() {
  for (var i = 0; i < elem.length; i++) {
    console.log(elem[i].value);
    sum += +elem[i].value;

  }
  result[0].innerHTML = sum;
};
