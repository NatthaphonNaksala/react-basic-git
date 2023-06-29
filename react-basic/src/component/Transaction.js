import Item from "./Item";
import './Transaction.css'
// import DataContext from "../data/DataContext";
// import { useContext } from "react";


const Transaction = (props) => {
    const {item} = props
    // const name = useContext(DataContext)
    return (
        <div>
            <ul className="item-list">
                {item.map((Element)=> {
                return <Item title={Element.title} amount={Element.amount} key={Element.id} />
                // return <Item {...item}/>
                })}
            </ul>
                {/* {name} */}
        </div>
    );
}

export default Transaction;

