import './Basket.scss';
import CardBasket from '../../components/elements/CardBasket/Cardbasket';
import SumFooter from '../../components/elements/SumFooter/SumFooter';
import backBtn from '../../assets/images/back-from-basket.png';
import {Link, useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import{ v4 as uuidv4 } from 'uuid';



function Basket() {
  const basket = useSelector(state => state.basket.basket)

  const nav = useNavigate()
  const goBack = () => nav(-1)
 
  
  return (
    <div className='basket'>
      <div className='container'>
        <header className='basket-header'>

          <button onClick={goBack} className='basket-header__btn'>
            <img src={backBtn} alt="Кнопка возврата"></img>
          </button>

          <h1 className='basket-header__title'> Корзина с выбранными товарами </h1>
          <Link to="/" className='basket-header__link'>
            <button className='basket-header__goout'>Выйти</button>
          </Link>
        </header>
    
        <main className='basket-main'>
        {basket.map(item => {
            const {id, name,  price,img} = item;
            return (
              <CardBasket 
              url={img}
              title={name}
              price={price}
              id={id}
              key={uuidv4(4)}
            />        
            )
          })}

        </main>
      </div>

      <footer className='basket-footer'>
        <div className='footer-container'>
          <SumFooter />
        </div> 
      </footer> 
    </div>

  );
}

export default Basket;
