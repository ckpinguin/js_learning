'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
//const countriesApi = 'https://countries-api-836d.onrender.com/countries/';
const countriesApi = 'https://restcountries.eu/rest/v2/';

///////////////////////////////////////

const request = new XMLHttpRequest();
