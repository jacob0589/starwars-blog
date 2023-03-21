export const favoritesStore = {
    favorites: [], // [{name:"Luke", uid:1, categoria:"people", link:"/people/1"},{}]

}

export function favoritesActions(getStore, getActions, setStore) {
    return {
      addFavorite: async (objeto) => {
        let store = getStore();
        let arrTemp = store.favorites.slice(); //copio el estado centralizado
  
        if (arrTemp.some((item) => item.name === objeto.name)) {
          return; //saldría de la función aquí
        }
  
        arrTemp.push(objeto);
        setStore({ ...store, favorites: arrTemp }); // [..favoritos, objeto]
        return true;
      },
  
      deleteFavorite: async (uid) => {
        let store = getStore();
        let arrTemp = store.favorites.slice(); //copio el estado centralizado
  
        const index = arrTemp.findIndex((item) => item.uid === uid);
        if (index === -1) {
          return; //saldría de la función aquí
        }
  
        arrTemp.splice(index, 1);
        setStore({ ...store, favorites: arrTemp });
        return true;
      },
    };
  }