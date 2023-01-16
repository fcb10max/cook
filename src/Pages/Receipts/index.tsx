import React from 'react'
import { IReceipt } from '../../App'

interface IReceiptsComponentProps {
  receipts: IReceipt[]
}

const Receipts:React.FC<IReceiptsComponentProps> = ({receipts}) => {
  return (
    <div>Receipts</div>
  )
}

export default Receipts