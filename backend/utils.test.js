const { generateshortUrL, appendOrigin } = require('./utils');

describe('Testing util functions', () => {

  test('generateshortUrL return a string of length 6', () => {
    let regex = new RegExp("^[A-Za-z0-9]*$");
    expect(generateshortUrL('https://yahoo.com').length).toBe(6);
    expect(regex.test(generateshortUrL('https://yahoo.com'))).toBe(true);
  });

  test('generateshortUrL return a string with valid characters', () => {
    let regex = new RegExp("^[A-Za-z0-9]*$");
    expect(regex.test(generateshortUrL('https://yahoo.com'))).toBe(true);
  });

  test('appendOrigin appends origin URL to shortUrl in response', async () => {
    const response = { url: 'https://google.com', shortUrl: 'hGkOpE' }
    const result = appendOrigin('https://test.com', response);
    const parsed = JSON.parse(result);
    console.log(parsed)
    expect(parsed.shortUrl).toBe('https://test.com/hGkOpE');
  });

});