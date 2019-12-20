/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
    let stack = [];
    s = s.split('');
    const BRACKETS = {
        '{' : '}',
        '[' : ']',
        '(' : ')',
    };

    for(e of s) {

        // if last item on stack is opposite parenthesis, pop from stack
        if (BRACKETS[stack[stack.length - 1]] === e) {
            stack.pop()
        } else {
            // if we push closing, then it's invalid, return false
            if (e ===')' || e ==='}' || e ==='}') {return false;}

            // if not, we are pushing one of the opening to the stack
            stack.push(e);
        }
    }

    // if stack is empty, state is valid
    return stack.length === 0;
};