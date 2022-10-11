import React, {useState} from 'react';
import './Products.scss';
import Card from '../../components/elements/Card/Card';
import SumHeader from '../../components/elements/SumHeader/SumHeader';
import { products } from '../../menuList';
import{ v4 as uuidv4 } from 'uuid';
import {Link} from 'react-router-dom';

function Products() {
 

  return (
    <div className='menu'>
      <div className='container'>
        <header className='header'>
          <h1 className='header__title'> Наша продукция </h1>
          <div className='header__block'>
            <SumHeader/>
            <Link to="/" className='header__link'>
              <button className='header__goout'>Выйти</button>
          </Link>
          </div>
          
        </header>
    
        <main className='main-menu'>
          {products.map(item => {
            const { name, description, bigDescription, price, weight, img} = item;
            return (
                <Card
                url={img}
                title={name}
                description={description}
                bigDescription={bigDescription}
                price={price}
                weight={weight}
                id={uuidv4(4)}
                key={uuidv4(4)}
              />     
            )
          })}

        </main>
      </div>
    </div>
  );
}

export default Products;
