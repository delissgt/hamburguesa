import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
    // console.log('data from Burguer builder ingredients', props);
    let transformedIngredients = Object.keys(props.ingredients)
        .map( ingredKey => {
          return [...Array(props.ingredients[ingredKey])].map((_, i) => {
              return <BurgerIngredient type={ingredKey} key={ingredKey + i} />
          })
        })
        .reduce((arr, el)=> {
            return arr.concat(el)
        }, []);

    // console.log('transformed', transformedIngredients);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

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