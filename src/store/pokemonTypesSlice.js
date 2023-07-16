import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPokemonTypes = createAsyncThunk(
  'fetchPokemonTypes',
  async function (_, thunkAPI) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/type`);
      if (!response.ok) {
        throw new Error(`HTTP Response Code: ${response.status}`);
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
    }
  }
);

const initialState = {
  pokemonTypes: [],
  isLoading: false,
  error: null,
};

const pokemonTypesSlice = createSlice({
  name: 'pokemonTypes',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonTypes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.pokemonTypes = action.payload;
      })
      .addCase(fetchPokemonTypes.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPokemonTypes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const pokemonTypes = pokemonTypesSlice.reducer;
