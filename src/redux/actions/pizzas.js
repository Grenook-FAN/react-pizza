import axios from 'axios';

export const setLoaded = payload => ({
  type:'SET_LOADED',
  payload
})


export const fetchPizzas = (sortBy, category) => dispatch => {
    dispatch({
      type:'SET_LOADED',
      payload: false,
    });
    axios.get(`https://my-json-server.typicode.com/greenok-prog/react-pizza/pizzas?${category !== null ? `category=${category}`:''}&_sort=${sortBy}&_order=desc`).then(({ data }) => {
      console.log(data);
      dispatch(setPizzas(data))
    })
};

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});

