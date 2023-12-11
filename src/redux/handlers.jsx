export const handlePending = state => {
  state.isLoading = true;
};
export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
export const handleFetchFulfilled = (state, action) => {
  handleFulfilled(state);
  state.items = action.payload;
};

export const handleAddContactFulfilled = (state, action) => {
  handleFulfilled(state);
  state.items.push(action.payload);
};

export const handleDeleteContactFulfilled = (state, action) => {
  handleFulfilled(state);
  state.items = state.items.filter(item => item.id !== action.payload.id);
};
