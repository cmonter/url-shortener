const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
const userEvent = require('@testing-library/user-event');
const { fireEvent } = require('@testing-library/dom')

describe('index', () => {
  
  let dom = new JSDOM(html);
  let container = dom.window.document;

  test('renders the elements', () => {
    expect(container.querySelector('#inputURL')).not.toBeNull();
    expect(container.querySelector('#btn')).not.toBeNull();
    expect(container.querySelector('#shortURL')).not.toBeNull();
  });

  test('click btn with valid url', () => {
    const btn = container.querySelector('#btn');

    btn.addEventListener('click', () => {
      container.querySelector('#shortURL').href = 'https://yahoo.com';
      container.querySelector('#shortURL').textContent = 'http://localhost:5500/AjTuiS';
    });

    fireEvent.click(btn);
    expect(container.querySelector('#shortURL').textContent).toBe('http://localhost:5500/AjTuiS');
  });

  test('click btn with invalid url', () => {
    const btn = container.querySelector('#btn');

    btn.addEventListener('click', () => {
      container.querySelector('#shortURL').textContent = 'Invalid URL';
    });

    fireEvent.click(btn);
    expect(container.querySelector('#shortURL').textContent).toBe('Invalid URL');
  });


});
