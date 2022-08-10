# étape 1

def sum1(array):
    result = 0
    for number in array: # 
        result += number
    return result

print(sum1[1, 2, 3, 4, 5])

# étape 2

def sum2(array,arrayLength):
    if arrayLength == 0:
        return 0
    else: return array[arrayLength-1] + sum2(array, arrayLength-1)
        return