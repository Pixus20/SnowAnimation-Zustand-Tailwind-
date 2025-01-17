import { OrderCart } from "./OrderCart"
import { TotalOrder } from "./TotalOrder"

const OrderLIst = () => {
  return (
    <div className=" w-full flex flex-col sm:flex-row items-start justify-center ">
      <div className="w-full sm:w-[70%]">
          <OrderCart/>
          <OrderCart/>
          <OrderCart/>
          <OrderCart/>
      </div>
      <div className="w-full sm:w-[30%]">
          <TotalOrder/>
      </div>
    </div>
  )
}

export default OrderLIst