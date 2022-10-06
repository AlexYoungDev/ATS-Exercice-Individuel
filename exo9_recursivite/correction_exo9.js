// Etape 1
function sum1(array) {
	let res = 0;
  for (const element of array) {
  	res += element;
  }
  return res;
}

// Etape 2
function sum2(array) {
    if (array.length === 0) {
    	return 0;
    } else {
    	return array[0] + sum2(array.slice(1));
    }
}

// Etape 3
function factorial(x) {
    if (x === 0) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }
}

// Etape 4
function fibonacci(x) {
		if (x < 2) {
				return x;
		} else {
				return fibonacci(x-1) + fibonacci(x-2)
		}
}