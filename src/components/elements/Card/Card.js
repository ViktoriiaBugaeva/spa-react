import './Card.scss';
import cardButton from '../../../assets/images/vector-card.png';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../store/redusers/basketReducer';
import {Link} from 'react-router-dom';
import { enlargeProduct } from '../../../store/redusers/cardReducer.js';

function Card ({id, url, title, description, bigDescription, price, weight}){

    const dispatch = useDispatch()

    let itemCardsArray = {
        id: id,
        img: url,
        name: title,
        price: price,
        description: description,
        bigDescription: bigDescription,
        weight: weight
    }
    
    const handleAddProduct = (event) => {
        event.preventDefault()
        dispatch(addProduct(itemCardsArray))
    }

    const handleEnlargeProduct = () => {
        dispatch(enlargeProduct(itemCardsArray))
    }
    return (
        <Link className="card" to="/bigcard" onClick={handleEnlargeProduct}>
            <div className="card__img-wrapper">
              <img className="card__img" src={url} alt="Фото блюда"></img>
            </div>
            <h2 className="card__title">{title}</h2>
            <p className="card__description"> {description} </p>
            <div className="card__order">
                <div className="card__price-block">
                    <span className="card__price">{price} ₽ /</span>
                    <span className="card__weight"> {weight}</span>
                </div>
                 <button onClick={handleAddProduct} className='card__btn'>
                    <img className="card__btn-img" src={cardButton} alt="Иконка добавления в корзину"></img>
                 </button>
            </div>
    
        </Link>
    )
}

export default Card; 