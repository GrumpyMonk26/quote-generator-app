const btnEl = document.getElementById('btn');
const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');

const apiURL = 'https://api.quotable.io/random';

async function getQuote() {
  try {
    btnEl.textContent = 'Loading....';
    btnEl.disabled = true;
    quoteEl.textContent = 'Updating...';
    authorEl.textContent = 'Updating...';
    const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.authorSlug;
    quoteEl.textContent = quoteContent;
    authorEl.textContent = `~ ${quoteAuthor}`;
    btnEl.textContent = 'Get a Quote';
    btnEl.disabled = false;
    console.log(quoteContent, quoteAuthor);
  } catch (error) {
    console.log(error);
    quoteEl.textContent = 'An error has happened, please try again later';
    authorEl.textContent = '';
    btnEl.textContent = 'Get a Quote';
    btnEl.disabled = false;
  }
}

btnEl.addEventListener('click', getQuote);

getQuote();
