function fibonacci(n) {
    var fibArr = [0, 1];
  
    for (var i = 2; i < n; i++) {
      fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }
  
    return fibArr;
  }
  

  var result = fibonacci(10);
  console.log(result);