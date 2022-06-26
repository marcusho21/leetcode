/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
const isValid = (s: string): boolean => {
	const parens = new Map();
	parens.set(')', '(');
	parens.set(']', '[');
	parens.set('}', '{');

	if (
		s.length % 2 !== 0 ||
		s[0] === ')' ||
		s[0] === '}' ||
		s[0] === ']' ||
		s[s.length - 1] === '(' ||
		s[s.length - 1] === '{' ||
		s[s.length - 1] === '['
	)
		return false;

	const stack: string[] = [];
	for (let i = 0; i < s.length; i++) {
		if (parens.has(s[i])) {
			if (stack.length === 0) {
				return false;
			} else {
				const open = stack.pop();

				if (open !== parens.get(s[i])) {
					return false;
				}
			}
		} else {
			stack.push(s[i]);
		}
	}

	return stack.length === 0;
};
// @lc code=end
