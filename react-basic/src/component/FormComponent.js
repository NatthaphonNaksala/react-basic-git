import './FormComponent.css'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';


const FormComponent = (props) => {

    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)
    const [formValid,setFormValid] = useState(false)

    const inputTitle = (event) => {
        // console.log(event.target.value)
        setTitle(event.target.value)
    }
    const inputAmount = (event) =>{
        // console.log(event.target.value)
        setAmount(event.target.value)
    }
    const saveItem = (event) => {
        event.preventDefault()
        const itemData = {
            id: uuidv4(),
            title: title,
            amount: Number(amount)
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount(0)
        // console.log(itemData);
        // console.log("บันทึกข้อมูลเรียบร้อย")
    }

    useEffect(()=> {
        const checkData = title.trim().length>0 && amount!==0
        setFormValid(checkData)
    //    if(checkData){
    //     setFormValid(true)
    //    }
    },[title,amount])
    return (
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการ" onChange={inputTitle} value={title}></input>
                </div>
                <br></br>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="0" onChange={inputAmount} value={amount}></input>
                </div>
                <br></br>
                <div>
                    <button type="submit" className="btn" disabled={!formValid}>เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent