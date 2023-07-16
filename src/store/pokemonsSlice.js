import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPokemons = createAsyncThunk(
  'fetchPokemons',
  async function (_, thunkAPI) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`
      );
      if (!response.ok) {
        throw new Error('Server Error');
      }
      const data = await response.json();
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.pokemons = action.payload;
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
export const pokemons = pokemonsSlice.reducer;
