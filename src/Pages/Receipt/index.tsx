import React from 'react'
import { useParams } from 'react-router-dom'
import { IReceipt } from '../../App';

interface IReceiptComponentProps {
  receipts: IReceipt[]
}


const Receipt:React.FC<IReceiptComponentProps> = () => {
  const {id} = useParams();

  return (
    <div>Receipt</div>
  )
}

export default Receipt