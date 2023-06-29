import './App.css';
// import './component/style.css'
import Transaction from "./component/Transaction";
import FormComponent from './component/FormComponent';
import { useState, useEffect } from 'react';
import DataContext from './data/DataContext';
import ReportComponent from './component/ReportComponent';
// import Item from './component/Item';



const Title = () => <h1>บัญชีรายรับ - รายจ่าย</h1>

function App() {
//   const initdata = [
//     {id:1,title: "ค่ารักษาพยาบาล", amount:1500},
//     {id:2,title: "ค่าน้ำมัน", amount:1000},
//     {id:3,title: "ค่าใช้จ่ายทั่วไป", amount:2000},
  
// ]

  // const initState = [
  //   {id: 1, title:"ค่าเช่า",amount: -1500},
  //   {id: 2, title:"ค่าขายของ",amount: 2500},
  //   {id: 3, title:"ค่าประกัน",amount: -1200}
  // ]
  const [items,setItems] = useState([])
        //ให้ข้อมููลว่าง
  // const [items,setItems] = useState([])

  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)


  const onAddNewItem = (newItem)=>{
    // console.log("ส่งมาจาก FormConponent",newItem)

  
    setItems((prevItem) => {
      return [newItem,...prevItem]
    })
  }
  useEffect (()=>{
    const amounts = items.map(items=>items.amount)
    const income = amounts.filter(Element=>Element>0).reduce((total,Element)=>total+=Element,0)
    const expense = (amounts.filter(Element=>Element<0).reduce((total,Element)=>total+=Element,0))*-1
    
    setReportIncome(income)
    setReportExpense(expense)
  },[items,reportIncome,reportExpense])

  return (
    <DataContext.Provider value={
      {
        income: reportIncome,
        expense: reportExpense
      }
    }>
       <div className='container'>
       <ReportComponent />

          <Title />
          <FormComponent onAddItem={onAddNewItem}/>
          <Transaction item ={items}/>


        </div>
    </DataContext.Provider>
   
  );
}

export default App;
