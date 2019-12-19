let x = 123;

const reverse = x => {
    x = x > 0 ? Number(x.toString().split("").reverse().join("")) : Number('-' + Math.abs(x).toString().split("").reverse().join(""));
    return -(2 ** 31) < x && x < 2 ** 31 ? x : 0;
};

reverse(x);