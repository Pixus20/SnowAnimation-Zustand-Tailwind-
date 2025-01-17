import OrderLIst from '@/components/CartOrders/OrderLIst'

const index = () => {
  return (
    <div className="flex flex-col items-center  justify-center">
    <div className="w-[80%] flex flex-col justify-center  ">
      <OrderLIst/>
    </div>
  </div>
  )
}

export default index