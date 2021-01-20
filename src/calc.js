class Calc {

	constructor() {

	}

	hash(name) {
		this.m = 0;
		let acc = 0;
		for (let i = 0; i < name.length; i++) {
			acc += name.charCodeAt(i);
		}
		return acc;
	}
}

module.exports = Calc;