'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
//const countriesApi = 'https://countries-api-836d.onrender.com/countries/';
const countriesApi = 'https://restcountries.com/v3.1/';

///////////////////////////////////////

const getCountryData = function (country) {
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
getCountryData('usa');
