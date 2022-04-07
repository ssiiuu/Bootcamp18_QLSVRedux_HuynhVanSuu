import { BAT_LOADING, TAT_LOADING } from "../constants/loadingConstant";

const initialState = {
  isLoading: true,
};

export const loadingReducer = (state = initialState, { type }) => {
  switch (type) {
    case BAT_LOADING:
      state.isLoading = true;
      return { ...state };
    case TAT_LOADING:
      state.isLoading = false;
      return { ...state };
    default:
      return { ...state };
  }
};
