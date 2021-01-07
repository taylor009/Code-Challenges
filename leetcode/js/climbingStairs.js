/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
	const cmb=climb();
	return cmb(n);
};

function climb()
{
	let cache = {};

	return function climbFaster(n)
	{
		if (n in cache)
		{
			return cache[n];
		} else
		{
			if (n > 45)
			{
				return 0;
			}
			if (n === 1)
			{
				return 1;
			}
			if (n > 1 && n < 4)
			{
				return n;
			} else
			{
				cache[n] = climbFaster(n - 2) + climbFaster(n - 1);
				return cache[n];
			}
		}
	}
}
