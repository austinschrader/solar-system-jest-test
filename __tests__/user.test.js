import { User } from './../src/js/user.js';

describe('User', () => {
	test('should correctly output the Earth age of the User object', () => {
		let user = new User(45);
		expect(user.earthAge).toEqual(45);
	});

	test('should correctly output the Mercury age of the User object', () => {
		let user1 = new User(45);
		expect(user1.mercuryAge()).toEqual(45 * 0.24);
	});
});
