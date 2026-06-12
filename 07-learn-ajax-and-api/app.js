import axios from './node_modules/axios/dist/esm/axios.js';

const getPeople = async () => {
  try {
    const res = await fetch('https://swapi.info/api/people');
    const data = await res.json();
    // for (const key in data) {
    //   console.log(`${key}: ${data[key].name} - ${data[key].gender}`);
    // }
    console.table(data);
  } catch (error) {
    console.log('Error', error.message);
  }
};

const getJoke = async () => {
  try {
    const res = await fetch('https://icanhazdadjoke.com/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    const data = await res.json();

    console.table(data);
  } catch (err) {
    console.log('Error:', err.message);
  }
};

const getTV = async (keyword) => {
  try {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${keyword}`);
    const data = await res.json();

    for (const value of data) {
      console.log(value.show);
    }
  } catch (error) {
    console.log(error);
  }
};

const getPokemon = async () => {
  try {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=500');
    const dataPokemon = await res.data.results;
    for (let i = 0; i < dataPokemon.length; i++) {
      console.log(dataPokemon[i].name);
    }
  } catch (error) {
    console.log(error);
  }
};

// getPeople();
// getJoke();
// getTV('ninja warior');
// getPokemon();
