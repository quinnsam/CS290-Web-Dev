var deepEqual = function (x,y) {
	if (typeof x == "object" && typeof y == "object") {
		if (x != null && y != null) {
			// Compare lengths
			if (Object.keys(x).length != Object.keys(y).length) {
				return false;
			}
			for (var e in x) {
				if (y.hasOwnProperty(e)) {
					if (! deepEqual(x[e], y[e])) {
						return false;
					}
				} else {
					return false;
				}
			}
			return true;
		}
	} else if (x !== y) {
		return false;
	} else {
		return true;
	}
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
