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

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
NEW:
https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en


3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

// Originally callback-based
/* navigator.geolocation.getCurrentPosition(
  position => console.log(position),
  err => console.error(err)
); */

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    /*     navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err)
    ); */
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = function (lat, lng) {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      console.log(`Your coords: ${lat}; ${lng}`);
      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
      );
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Error loading location: ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.countryName}`);
      console.log(data);
      return fetch(`${countriesApi}name/${data.countryName}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);
      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.log(`${err.message} 💥`))
    .finally((countriesContainer.style.opacity = 1));
};

/* console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0); // normal callback queue
Promise.resolve('Resolved promise 1') // immediate success
  .then(res => console.log(res)); // Microtasks queue (priority!)

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 10000000000; i++) {}
  console.log(res);
});

console.log('Test end');
 */

/* const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery drav is happening...');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You Win!💪');
    } else {
      reject(new Error('You Lost your money 🤦‍♂️'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout()
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));

Promise.resolve('hello').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x)); */

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 onsecds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

// Promisifying setTimeout()
/* const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const imageContainer = document.querySelector('.images');
    const img = document.createElement('img');
    img.src = imgPath; // implicitly async

    // img.addEventListener() would be an alternative here
    img.onload = () => {
      imageContainer.appendChild(img);
      resolve(img);
    };
    img.onerror = () => {
      reject(new Error(`Failed to load image at ${imgPath}`));
    };
  });
};

let img;
createImage('img/img-1.jpg')
  .then(res => {
    img = res;
    return wait(2);
  })
  .then(() => {
    img.style.display = 'none';
    return createImage('img/img-4.jpg');
  })
  .then(res => {
    img = res;
    return wait(2);
  })
  .then(() => {
    img.style.display = 'none';
    //return Promise.resolve();
  })
  .catch(err => console.error(err)); */

// btn.addEventListener('click', createImages);

/* const whereAmINow = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    console.log(`Your coords: ${lat}; ${lng}`);
    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
    );
    const dataGeo = await resGeo.json();
    console.log(dataGeo);
    const res = await fetch(`${countriesApi}name/${dataGeo.countryName}`);
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
    countriesContainer.style.opacity = 1;
    return `You are in ${dataGeo.city}, ${dataGeo.countryName}`;
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`Something went wrong 💥 ${err.message}`);
    throw err;
  }
};
btn.addEventListener('click', whereAmINow);
//whereAmINow();
//console.log('FIRST');

console.log('1: Will get location');
(async function () {
  try {
    const city = await whereAmINow();
    console.log(`1: ${city}`);
  } catch (err) {
    console.error(`2: ${err}`);
  }
  console.log('3: Finished getting location');
})(); */

/* const get3Countries = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(`${countriesApi}name/${c1}`),
      getJSON(`${countriesApi}name/${c2}`),
      getJSON(`${countriesApi}name/${c3}`),
    ]);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
get3Countries('switzerland', 'usa', 'swaziland'); */

// Promise.race
/* (async function () {
  const res = await Promise.race([
    getJSON(`${countriesApi}name/italy`),
    getJSON(`${countriesApi}name/switzerland`),
    getJSON(`${countriesApi}name/swaziland`),
  ]);
  console.log(res[0]);
})(); */

/* const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};
Promise.race([getJSON(`${countriesApi}name/italy`), timeout(1)])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err)); */

// Promise.allSettled
/* Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Also success'),
]).then(res => console.log(res));

// Promise.any
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Also success'),
]).then(res => console.log(res)); */

///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const imageContainer = document.querySelector('.images');
    const img = document.createElement('img');
    img.src = imgPath; // implicitly async

    // img.addEventListener() would be an alternative here
    img.onload = () => {
      imageContainer.appendChild(img);
      resolve(img);
    };
    img.onerror = () => {
      reject(new Error(`Failed to load image at ${imgPath}`));
    };
  });
};

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const loadNPause = async function () {
  try {
    let img = await createImage('img/img-1.jpg');
    console.log(img);
    await wait(2);
    img.style.display = 'none';
    img = await createImage('img/img-2.jpg');
    img.style.display = 'block';
    console.log(img);
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};
(async function () {
  await loadNPause();
})();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async imgPath => await createImage(imgPath));
    console.log(imgs);
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};

(async function () {
  await loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
})();
