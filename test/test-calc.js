const Calc = require("../src/calc");
const {expect} = require("chai");
require("mocha");

describe("Calculate function", () => {

	let calc = new Calc();

	it("gets 'Ivan' and should return 398", () => {
		const result = calc.hash("Ivan");

		expect(result).to.equal(398);
	});

});