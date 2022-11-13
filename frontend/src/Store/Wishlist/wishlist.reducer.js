const initState = {
  wishlists: [],
};

export const wishlistReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_WISHLIST":
      const ItemIndex = state.wishlists.findIndex(
        (item) => item.id === action.payload.id
      );
      //quantity
      if (ItemIndex >= 0) {
        state.wishlists[ItemIndex].quantity += 1;
        return {
          ...state,
          wishlists: [...state.wishlists],
        };
      } else {
        const temp = { ...action.payload, quantity: 1 };
        return {
          ...state,
          wishlists: [...state.wishlists, temp],
        };
      }
    case "DEL_WISHLIST":
      const data = state.wishlists.filter((ele) => ele.id !== action.payload);
      return {
        ...state,
        wishlists: data,
      };

    //individual item
    case "RMV_ONE":
      const ItemIndex_dec = state.wishlists.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.wishlists[ItemIndex_dec].quantity >= 1) {
        const dltItems = (state.wishlists[ItemIndex_dec].quantity -= 1);
        console.log([...state.wishlists, dltItems]);

        return {
          ...state,
          wishlists: [...state.wishlists],
        };
      } else if (state.wishlists[ItemIndex_dec].quantity === 1) {
        const data = state.wishlists.filter((el) => el.id !== action.payload);

        return {
          ...state,
          wishlists: data,
        };
      }
    default: {
      return state;
    }
  }
};
