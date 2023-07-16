import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
export const fetchPokemons = createAsyncThunk(
  'fetchPokemons',
  async function ({ limit = 20, name = '' }, thunkAPI) {
    let url = '';
    if (name !== '' && name !== undefined) {
      url = BASE_URL + `/${name}/`;
    } else {
      url = BASE_URL + `?offset=20&limit=${limit}`;
    }
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP Response Code: ${response.status}`);
      }
      const data = await response.json();

      if (name === '') {
        const pokemonsArr = [];
        const func = async () => {
          for (let item of data.results) {
            const r = await fetch(item.url);
            const m = await r.json();
            pokemonsArr.push(m);
          }
        };
        await func();
        return pokemonsArr;
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
    }
  }
);

const initialState = {
  pokemons: [],
  isLoading: false,
  error: null,
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    filterPokemonsByType(state, action) {
      const types = action.payload;
      if (types.length === 0) {
        return;
      }
      state.pokemons = state.pokemons.filter((pokemon) => {
        let count = 0;
        for (let i = 0; i < pokemon.types.length; i++) {
          if (types.includes(pokemon.types[i].type.name)) {
            count += 1;
          }
        }
        if (count >= types.length) {
          return true;
        } else {
          return false;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (Array.isArray(action.payload)) {
          state.pokemons = action.payload;
        } else {
          state.pokemons = [action.payload];
        }
      })
      .addCase(fetchPokemons.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { filterPokemonsByType } = pokemonsSlice.actions;

export const pokemons = pokemonsSlice.reducer;
