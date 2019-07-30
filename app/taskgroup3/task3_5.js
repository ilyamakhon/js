let arr = [1, [2], [3, [4]]];
function flatten(arr) {
	return arr.join(',').split(',');
}

let res = flatten(arr);

console.log(res);