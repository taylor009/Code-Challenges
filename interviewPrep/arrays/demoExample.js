const strings = ['a', 'b', 'c', 'd'];
//4 *4 16 bytes of storage.

strings[3]

// push (adds to the end of the array) O(1) operation
strings.push('e')

// pop (removes the last item of the array) O(1) operation
strings.pop()

//unshift (adds at the beginning of the array) O(n) operation
strings.unshift('x')

// splice (remove or add items from the array) O(n) operation
strings.splice(2, 0, 'alien')
