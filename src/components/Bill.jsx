import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import CurrencyInput from 'react-currency-input-field';
import { GroupButtons } from './GroupButtons';
import { getTipPerPerson, getTotalPerPerson, extractNumber } from '../helpers/Severals';

export const Bill = () => {
  const [formInputs, setFormInputs] = useState({
    bill: 0,
    discount: 0,
    persons: 0,
  })

  const { bill, discount, persons } = formInputs

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormInputs({ ...formInputs, [name]: extractNumber(value) })

  }

  const handleChangeCurrency = (e) => {
    setFormInputs({ ...formInputs, ['bill']: Number(e) })
  }

  const handleReset = () => {
    setFormInputs({
      bill: 0,
      discount: 0,
      persons: 0,
    })
  }

  // useEffect(() => {

  // }, [])

  return (
    <ContainerBill>
      <BillLeft>
        <h1>La Cuenta</h1>
        <div className="bill--billContainer">
          <h3>consumo:</h3>
          <CurrencyInput
            id="input-example"
            name="bill"
            placeholder="Please enter a number"
            prefix="$"
            defaultValue={bill}
            value={isNaN(bill) ? 0 : bill}
            decimalsLimit={2}
            onValueChange={handleChangeCurrency}
          />
        </div>
        <div className="bill--discountContainer">
          <h3>% de propina:</h3>
          <GroupButtons setFormInputs={setFormInputs} />
          <input max="50" name="discount" className="bill-buttonDiscount_custom" onChange={handleChange} type="text" placeholder='custom' />
        </div>
        <div className="bill--personsContainer">
          <h3>personas:</h3>
          <input type="number" name="persons" onChange={handleChange} value={formInputs?.persons} />
        </div>
      </BillLeft>
      <BillRight>
        <h2>Propina</h2>
        <div className="billRight--tipPerson">
          <h3>Propina por persona:</h3>
          <strong className="billRight__subtitle">
            ${getTipPerPerson(bill, discount, persons)}
          </strong>
        </div>
        <div className="billRight--totalPerson">
          <h3>Total por persona:</h3>
          <strong className="billRight__subtitle">
            ${getTotalPerPerson(bill, discount, persons)}
          </strong>
        </div>
        <div className="billRight--buttonReset">
          <button onClick={handleReset}>Reset</button>
        </div>
      </BillRight>
    </ContainerBill>
  )
}


const BillLeft = styled.div`
  
  width:50%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  .bill-buttonDiscount{
    width:25%;
    margin:5px 0;
    margin-right: 5px;
    padding: 5px;
    border: 1px solid #ccc;
  }
  .bill-buttonDiscount_custom{
    margin-top:.5em;
    width:25%;
    height:30px;
  }
  @media (max-width: 768px) {
    width:90%;
  }
`
const BillRight = styled.div`
background: #1A3C40;
width:50%;
padding:1em;
border-radius: 5px;
color:white;
display:flex;
flex-direction:column;
justify-content:space-between;
.billRight--buttonReset button{
  width:100%;
  align-items: center;
  appearance: none;
  background-color: #FCFCFD;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395A;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono",monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;
  &:focus {
    box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  }
  
  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    transform: translateY(-2px);
  }
  
  &:active {
    box-shadow: #D6D6E7 0 3px 7px inset;
    transform: translateY(2px);
  }
}



.billRight__subtitle{
  display:flex;
  flex-direction:column;
  align-items:flex-end;
}
@media (max-width: 768px) {
  width:90%;
}
`

const ContainerBill = styled.div`
  display:wrap;
  width:50%;
  height:60vh;
  border-radius: 10px;
  padding:1em;
  display:flex;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (max-width: 768px) {
    width:100%;
    height:80vh;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
  }
`