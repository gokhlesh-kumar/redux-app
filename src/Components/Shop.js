import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../States'

const Shop = () => {
  const balance = useSelector(state => state.amount)
  const dispatch = useDispatch();
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
      <h1>Deposit / Withdraw Money</h1>
      <button className='btn btn-primary mx-2' onClick={()=> {withdrawMoney(100)}} >-</button>
      Updated Balance {balance}
      <button className='btn btn-primary mx-2' onClick={()=> {depositMoney(100)} }>+</button>
    </div>
  )
}

export default Shop
