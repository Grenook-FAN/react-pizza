import React from 'react';
import { Categories, LoadingBlock, PizzaBlock, SortPopup} from '../components';
import { useSelector, useDispatch } from 'react-redux';

import { setCategory, setSortBy } from '../redux/actions/filters';
import {fetchPizzas} from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';


const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [{ name: 'популярности', type: 'popular',order:'desc' },
                  { name: 'цене', type: 'price',order:'desc' },
                  { name: 'алфавиту', type: 'name',order:'asc'  }]

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items)
  const cartItems = useSelector(({ cart }) => cart.items)
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
  const {sortBy, category} = useSelector(({filters}) => filters)


  React.useEffect(()=>{
    dispatch(fetchPizzas(sortBy, category))
    }, [dispatch,category,sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [dispatch]);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, [dispatch]);

  const HandleAddPizzaToCart = (obj) =>{
    dispatch(addPizzaToCart(obj))
  }
  


  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={onSelectCategory}
          items={categoryNames}
          activeCategory = {category}
        />

        <SortPopup
          onSelectSortPopup={onSelectSortType}
          activeSortType = {sortBy.type}
          items={sortItems}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded ?items.map((obj) => (
          <PizzaBlock onClickAddPizza={HandleAddPizzaToCart}
           key={obj.id}
            addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
             {...obj} />
        ))
        :Array(12)
        .fill(0)
        .map((_, index) => <LoadingBlock key={index}/>)}


      </div>
    </div>


  )
}

export default Home;
