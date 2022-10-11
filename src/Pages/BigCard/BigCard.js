import './BigCard.scss';
import SumHeader from '../../components/elements/SumHeader/SumHeader';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import backBtn from '../../assets/images/back-from-basket.png';
import {Link, useNavigate} from 'react-router-dom';
import { addProduct } from '../../store/redusers/basketReducer';


function BigCard()  {

    const cardDetail = useSelector(state => state.card.card)

    const dispatch = useDispatch()


    const handleAddProduct = () => {
        dispatch(addProduct(cardDetail))
    }

    
  const nav = useNavigate()
  const goBack = () => nav(-1)  

    return (
      <div className='big-card'>
        <div className='container'>
          <header className='big-card__header'>
           <button onClick={goBack} className='big-card__btn'>
            <img src={backBtn} alt="Кнопка возврата"></img>
          </button>
            <div className='big-card__block'>
              <SumHeader/>
            <Link to="/" className='big-card__link'>
              <button className='big-card__goout'>Выйти</button>
            </Link>
          </div>
          </header>
      
          <main className='big-description'>
            <div className="big-description__img-wrapper">
                <img className="big-description__img" src={cardDetail.img} alt="Фото блюда"></img>
            </div>
            <div className="big-description__block">
              <h2 className="big-description__title">{cardDetail.name}</h2>
              <p className="big-description__description"> {cardDetail.bigDescription} </p>
              <div className="big-description__order">
                  <div className="big-description__price-block">
                      <span className="big-description__price">{cardDetail.price} ₽ /</span>
                      <span className="big-description__weight"> {cardDetail.weight}</span>
                  </div>
                  <button onClick={handleAddProduct} className='big-description__btn'>В корзину</button>
                  
              </div>
            </div>

          </main>
        </div> 
      </div>
    );
  }
  
  export default BigCard;