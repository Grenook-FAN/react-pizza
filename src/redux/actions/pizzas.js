import axios from 'axios';

export const setLoaded = payload => ({
  type:'SET_LOADED',
  payload
})


export const fetchPizzas = ( sortBy ) => dispatch => {
    dispatch({
      type:'SET_LOADED',
      payload: false,
    });
    axios.get(`https://my-json-server.typicode.com/greenok-prog/react-pizza/pizzas?_sort=${sortBy}&_order=desc`).then(({ data }) => {
      //?${category !== null ? `category=${category}`:''}&_sort=${sortBy}&_order=desc
      dispatch(setPizzas(data))
    })
};

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});

