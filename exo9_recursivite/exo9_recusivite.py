# Etape 1
def sum1(array):
    result = 0
    for element in array:
        result += element
    return result

arr = [1, 2, 3, 4]

print("sum1")
print(sum1(arr))

# Etape 2
def sum2(array):
    if len(array) == 1:
        return array[0]
    else:
        return array[0] + sum2(array[1:])

print("sum2")
print(sum2(arr))

# Etape 3
def findSum(array, N):
    if N <= 0:
        return 0
    else:
        return findSum(array, N - 1) + array[N - 1]

print("find sum")
print(findSum(arr, len(arr)))

# Etape 4
def factorial(x):
    if x == 0:
        return 1
    else:
        return x * factorial(x - 1)

print("factorial ")
print(factorial(4))


def fibonacci(x):
    if x < 2:
        return x
    else:
        return fibonacci(x - 1) + fibonacci(x - 2)

print("fibo")
print(fibonacci(6))