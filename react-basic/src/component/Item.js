import PropTypes from 'prop-types';
import './Item.css'
// import DataContext from '../data/DataContext';
// import { useContext } from 'react';



const Item = (props) => {
    const {title,amount} = props
    const status = amount<0 ? "expense" : "income"
    const symbol = amount <0 ? "-" : "+"
    // const name = useContext(DataContext)
    return (
        <div>
            <li className={status}>{title}  <span>{symbol}{Math.abs(amount)}</span>
                {/* <DataContext.Consumer>
                    {name=><h3>{name}</h3>}  
                </DataContext.Consumer> */}
                {/* <h2>{name}</h2> */}
            </li>
        </div>
    );
}

Item.prototype={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}

export default Item