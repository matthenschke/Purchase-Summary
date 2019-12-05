import { PROMO_CODE } from "../actions/types";

const initialState = {
  value: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROMO_CODE:
      console.log("promo code");
      return {
        ...state,
        value: action.payload
      };
    default:
      return state;
  }
}
