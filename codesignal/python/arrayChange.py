def arrayChange(inputArray):
    sum = 0
    q = inputArray[0]
    for i in inputArray[1:]:
        if i <= q:
            sum += q-i+1
            q = q+1
        else:
            q = i
    return sum




# Example

inputArray = [1, 1, 1] #3

print (arrayChange(inputArray))