import { useContext } from "react";
import DataContext from "../data/DataContext";

const ReportComponent =()=> {
    // const name = useContext(DataContext)
    const {income, expense} = useContext(DataContext)
    return (
        <div>
            {/* !!! {namm} */}
            {/* <DataContext.Consumer>
                {context=> <p>รายรับ :{context.income} รายจ่าย : {context.expense}</p> }
            </DataContext.Consumer> */}
            <p>รายรับ : {income}</p>
            <p>รายจ่าย : {expense}</p>
        </div>
    );
}

export default ReportComponent