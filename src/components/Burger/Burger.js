import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients).map(
        ingredKey => {
          return [...Array(props.ingredients[ingredKey])].map((_, i) => {
              return <BurgerIngredient type={ingredKey} key={ingredKey + i} />
          })
        }
    );
    console.log('propsENG', props.ingredients);


    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {/*<BurgerIngredient type="cheese"/>*/}
            {/*<BurgerIngredient type="meat"/>*/}
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );

};

export default burger;