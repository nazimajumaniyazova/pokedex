import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPokemonData = createAsyncThunk(
  'fetchPokemonData',
  async function (id, thunkAPI) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${id}/`
      );
      if (!response.ok) {
        throw new Error('Server Error');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
    }
  }
);

const initialState = {
  pokemonData: {},
  isLoading: false,
  error: null,
};

const pokemonsSlice = createSlice({
  name: 'pokemonData',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.pokemonData = action.payload;
      })
      .addCase(fetchPokemonData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPokemonData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const pokemonData = pokemonsSlice.reducer;
