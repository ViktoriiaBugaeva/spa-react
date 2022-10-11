import './CardBasket.scss';
import buttonBasket from '../../../assets/images/vector-btn-basket.png';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../../store/redusers/basketReducer';
import {Link} from 'react-router-dom';
import { enlargeProduct } from '../../../store/redusers/cardReducer.js';

function CardBasket ({id, url, title, price}) {

    const dispatch = useDispatch()

    let itemCardsArray = {
        id: id,
        img: url,
        name: title,
        price: price
    
    }

    const handleRemoveProduct = (event) => {
        event.preventDefault();
        dispatch(removeProduct(itemCardsArray))
    } 

    const handleEnlargeProduct = () => {
        dispatch(enlargeProduct(itemCardsArray))
    }


    return (
        <Link className="card-basket" to="/bigcard" onClick={handleEnlargeProduct}>
            <div className="card-basket__img-wrapper">
              <img className="card-basket__img" src={url} alt="Фото блюда"></img>
            </div>
            <p className="card-basket__title"> {title} </p>
            <div className="card-basket__order">
                <span className="card-basket__price">{price}</span>
                <button onClick={handleRemoveProduct} className='card-basket__btn'>
                    <img className="card__btn-img" src={buttonBasket} alt="Иконка  удаления из корзины"></img>
                </button>
            </div>
    
        </Link>
    )
}

export default CardBasket; 