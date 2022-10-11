import './SumFooter.scss';
import { useSelector } from 'react-redux';

function SumFooter() {

    const sum = useSelector(state => state.basket.sumProducts)
    return (
        <div className="sum-footer">
             <p className="sum-footer__amount"> Заказ на сумму: <span>{sum} ₽</span>  </p>
             <button className='sum-footer__btn'>
                Оформить заказ
            </button>
        </div>
       
    )
}

export default SumFooter;