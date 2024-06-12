import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Ul = styled('ul')`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  list-style: none;
  margin: 0;
  padding: 0;
  padding: 20px;
  background-color: #fff700;
`;

const Pokemon = styled('li')`
  border-radius: 16px;
  background-color: #fffacd;
  text-align: center;
  padding: 16px;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.05);
    background-color: #ffeb3b;
  }

  img {
    max-width: 100px;
    height: auto;
    margin-bottom: 10px;
  }

  span {
    font-size: 1.5em;
    color: #ff0000;
  }

  table {
    text-align: left;
    margin-top: 12px;
    width: 100%;
  }

  th, td {
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }

  th {
    color: #ff0000;
  }
`;

const Header = styled('h2')`
  text-align: center;
  color: #ff0000;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  margin-top: 20px;
`;

const Pokemons = () => {
  const [Pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
        const pokemonList = response.data.results;
        const detailedPokemonPromises = pokemonList.map(pokemon =>
          axios.get(pokemon.url)
        );
        const detailedPokemonResponses = await Promise.all(detailedPokemonPromises);
        const detailedPokemonData = detailedPokemonResponses.map(res => res.data);
        setPokemons(detailedPokemonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <>
      <Header>Pokémon</Header>
      <Ul>
        {Pokemons.map(pokemon => (
          <Pokemon key={pokemon.id}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <span>
              <b>{pokemon.name}</b>
            </span>
            <table>
              <tbody>
                <tr>
                  <th>Height :</th>
                  <td>{pokemon.height}</td>
                </tr>
                <tr>
                  <th>Weight :</th>
                  <td>{pokemon.weight}</td>
                </tr>
                <tr>
                  <th>Base Experience :</th>
                  <td>{pokemon.base_experience}</td>
                </tr>
              </tbody>
            </table>
          </Pokemon>
        ))}
      </Ul>
    </>
  );
};

export default Pokemons;
