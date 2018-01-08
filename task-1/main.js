var inputs = document.getElementsByClassName('num'),
    inputAllSum = document.getElementsByClassName('num-sum'),
    sum = 0;

document.getElementById('btn-sum').onclick = function() {

  for (var i = 0; i < inputs.length; i++) {
    sum += +inputs[i].value;
  }

  inputAllSum[0].value = sum;
  console.log(inputAllSum);
};
