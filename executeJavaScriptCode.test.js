const executeJavaScriptCode = require('./executeJavaScriptCode');

test('Execute JavaScript code', () => {
  const result = executeJavaScriptCode('5 + 10');
  expect(result).toBe(15);
});