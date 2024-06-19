'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
//const countriesApi = 'https://countries-api-836d.onrender.com/countries/';
const countriesApi = 'https://restcountries.com/v3.1/';

///////////////////////////////////////

/* const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `${countriesApi}name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText)[0];
    console.log(data);

    const [_c, firstCur] = Object.entries(data.currencies)[0];
    const currency = firstCur.name;
    const [_l, firstLang] = Object.entries(data.languages)[0];
    const language = firstLang;

    const html = `
  <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              data.population / 1000000
            ).toFixed(1)} million people</p>
            <p class="country__row"><span>🗣️</span>${language}</p>
            <p class="country__row"><span>💰</span>${currency}</p>
          </div>
        </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('switzerland');
getCountryData('usa'); */

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const [_c, firstCur] = Object.entries(data.currencies)[0];
  const currency = firstCur.name;
  const [_l, firstLang] = Object.entries(data.languages)[0];
  const language = firstLang;
  const html = `
  <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              data.population / 1000000
            ).toFixed(1)} million people</p>
            <p class="country__row"><span>🗣️</span>${language}</p>
            <p class="country__row"><span>💰</span>${currency}</p>
          </div>
        </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  //countriesContainer.style.opacity = 1;
};
/*
const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `${countriesApi}name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);

    // Get neighbour contries
    const neighbour = data.borders?.[0];
    if (!neighbour) return; // guard clause

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `${countriesApi}alpha/${neighbour}`);
    request2.send();
    // 2nd event listener depends on first (because it is inside it)!
    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('switzerland'); */

/* const request = fetch(`${countriesApi}name/switzerland`);
console.log(request);
 */

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

const getCountryData = function (country) {
  // Country 1
  getJSON(`${countriesApi}name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) throw new Error('No neighbour found'); // guard clause

      // Country 2
      return getJSON(`${countriesApi}alpha/${neighbour}`, 'Country not found');
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.log(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err.message}\n`);
    })
    .finally(() => {
      // hide loading spinners, show contents etc.
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('switzerland');
  getCountryData('australia');
});
