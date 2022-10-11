import './SumHeader.scss';
import sumBtn from '../../../assets/images/img-basket.png';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

function SumHeader () {

const amount = useSelector(state => state.basket.countProducts)
const sum = useSelector(state => state.basket.sumProducts) 

    return (
        <div className="sum-header">
             <p className="sum-header__amount"> {amount} товара <br/> на сумму {sum} ₽ </p>
             <Link to="/basket" >
                 <img src={sumBtn} alt="Иконка корзины"></img>
            </Link>
        </div>
       
    )
}

export default SumHeader;