import React from 'react';
import { Categories, LoadingBlock, PizzaBlock, SortPopup} from '../components';
import { useSelector, useDispatch } from 'react-redux';

import { setCategory } from '../redux/actions/filters';
import {fetchPizzas} from '../redux/actions/pizzas';


const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [{ name: 'популярности', type: 'popular' },
                  { name: 'цене', type: 'price' },
                  { name: 'алфавиту', type: 'alphabet' }]

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items)
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
  const {sortBy, category} = useSelector(({filters}) => filters)


  React.useEffect(()=>{
    dispatch(fetchPizzas())
    }, [dispatch]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [dispatch]);

  
  

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={onSelectCategory}
          items={categoryNames}
          activeCategory = {category}
        />

        <SortPopup
          activeSortType = {sortBy}
          items={sortItems}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded ?items.map((obj) => (
          <PizzaBlock key={obj.id} isLoading={true} {...obj} />
        ))
        :Array(12)
        .fill(0)
        .map((_, index) => <LoadingBlock key={index}/>)}


      </div>
    </div>


  )
}

export default Home;
