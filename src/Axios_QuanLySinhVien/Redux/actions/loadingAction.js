import { BAT_LOADING, TAT_LOADING } from "../constants/loadingConstant";

export const bat_loading_action = () => {
  return {
    type: BAT_LOADING,
  };
};

export const tat_loading_action = () => {
  return {
    type: TAT_LOADING,
  };
};
