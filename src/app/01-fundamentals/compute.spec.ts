import { compute } from './compute';

describe('compute function', () =>{

	it('should return 0 if input is negative', () =>{

		const result = compute(-2);

		expect(result).toBe(0);

	});

	it('should increment it is possitive', () =>{

		const result = compute(2);

		expect(result).toBe(3);

	});

});