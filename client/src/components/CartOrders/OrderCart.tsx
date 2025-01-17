
export const OrderCart = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-around items-center bg-green-400 sm:px-1 px-0 py-1  rounded-md my-1">
      <div className="w-[140px] h-[140px] flex justify-center items-center">IMAGE</div>
      <div className="flex flex-col items-start justify-start">
        <h1>Title</h1>
        <p>Description</p>
        <div className="flex flex-col">
          <h2>Tags:</h2>
          <div className="flex">
            <p className="flex w-[180px] justify-between">
              <a href="#">Red</a>
              <a href="#">Mechanic</a>
              <a href="#">Big</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
