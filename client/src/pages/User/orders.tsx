import OrderHistory from "@/components/Auth/Pages/OrderHistory"
import UserLayout from "@/components/Auth/UserLayout"

const orders = () => {
  return (
    <UserLayout>
      <OrderHistory/>
    </UserLayout>
  )
}

export default orders