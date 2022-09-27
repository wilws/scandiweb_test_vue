export default {


  addItemsToRemoveList(state, payload) {
    // Add item to removeList
    state.removeList.push(payload);
  },



  removeItemsFromRemoveList(state, payload) {
    // remove items from  removeList
    const newProductList = state.removeList.filter(
      (product) => product != payload
    );
    state.removeList = newProductList;
  },



  clearRemoveList(state) {
    // After clicking "Mass Delete", clear the  items in removeList
    state.removeList = [];
  },



  removeSeletedItems(state) {
    // Remove items that are deletced from database
    const removeList = state.removeList;
    if (removeList.length == 0) {
      return;
    }
    const newProductList = state.products.filter(
      (product) => !removeList.includes(product.id)
    );
    state.removeList = [];
    state.products = newProductList;
  },



  createItem(state, payload) {
    // Add item in products list
    const newProductList = [...state.products];
    newProductList.push(payload);
    state.products = newProductList;
  },

  

  updateProductsList(state, payload){
    // After fetching data from db, update the vuex's products list
    console.log(payload);
    state.products = [...payload];
  },
};

