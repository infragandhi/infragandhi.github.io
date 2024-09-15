import { describe, expect, test } from 'vitest';
import decodeString from '../utils/decoder';

describe('decoder', () => {
	test('decodes UTF-8 correctly', () => {
		const decodedValue = decodeString('w4FydsOtenTDvGvDtnJmw7pyw7Nnw6lwMTIzJMOfJyte');
		expect(decodedValue).toBe("Árvíztükörfúrógép123$ß'+^");
	});

	test('throws Error when undefined provided', async () => {
		expect(() => decodeString(undefined)).toThrowError(/^Provided string is undefined$/);
	});
});
