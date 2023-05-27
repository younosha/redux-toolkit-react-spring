import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './store/items/items.slice';
import { useSpring, animated } from '@react-spring/web';
import { Item } from './components/Item/Item';

function App() {
  const {items, startDelete, startAdd} = useSelector(state => state.items);
  const dispatch = useDispatch();
  const [springs, api] = useSpring(() => ({
    from: { 
      x: 0,
      opacity: 0.2
    },
  }))

  const deleteHandler = () => {
    dispatch(actions.setStartDelete(true));
    setTimeout(() => {
      dispatch(actions.setStartDelete(false));
      dispatch(actions.deleteItem());
    }, 300)
  }

  const addHandler = () => {
    dispatch(actions.setStartAdd(true));
    setTimeout(() => {
      dispatch(actions.setStartAdd(false));
      dispatch(actions.addItem());
    }, 500)
  }

  if (startAdd) {
    api.start({
      from: {
        x: 0,
        opacity: 0.2
      },
      to: {
        x: 100,
        opacity: 1
      },
    })
  }

  return (
    <div className='container'>
      <div className='buttonsContainer'>
        <button disabled={startAdd} onClick={addHandler}>
          Добавить
        </button>
        <button disabled={startDelete || !items.length} onClick={deleteHandler}>
          Удалить
        </button>
      </div>
      <div className='itemsContainer'>
        {startAdd && <animated.div
          style={{
            width: '20%',
            height: 200,
            background: 'brown',
            borderRadius: 20,
            ...springs,
          }}
        />}
        {items.map((_, index) => <Item 
          first={index === 0}
          last={items.length - 1 === index} 
          startDelete={startDelete} 
          startAdd={startAdd} 
          length={items.length !== 0}
        />)}
      </div>
    </div>
  )
}

export default App
