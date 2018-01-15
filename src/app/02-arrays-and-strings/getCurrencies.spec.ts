import { getCurrencies } from "./getCurrencies";

describe("getCurrencies function", () =>{

	it("should return the support currencies", () =>{

		const result = getCurrencies();

		expect(result).toContain('EUR');
		expect(result).toContain('USD');
		expect(result).toContain('AUD');
	});
});