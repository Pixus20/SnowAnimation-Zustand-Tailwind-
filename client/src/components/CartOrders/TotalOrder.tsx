
export const TotalOrder = () => {
  return (
    <div className='sm:ml-2 flex justify-center bg-green-400 py-2 sm:px-1 w-full sm:mt-1 rounded-md' >
      <div className="flex items-start flex-col ">
      <div className="flex">
         <h1>
            Кількість:
         </h1>
         <p>3</p>
      </div>
      <div className="flex">
         <h1>
         Total:
         </h1>
         <p> 14124 грн</p>
      </div>
      <button className=" p-2 uppercase  bg-purple-200 rounded-md hover:bg-purple-700 transition-colors ease-in-out duration-300">Купити </button>
      </div>
    </div>
  )
}
