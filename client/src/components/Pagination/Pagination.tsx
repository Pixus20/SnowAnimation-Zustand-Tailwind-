"use client"
const Pagination = () => {
  return (
   <div className="flex justify-around py-2">
      <div className="gap-5 flex text-white">
         <button className="w-10 h-10 bg-green-500 rounded-sm">
            1
         </button>
         <button className="w-10 h-10 bg-green-500 rounded-sm">
            2
         </button>
         <button className="w-10 h-10 bg-green-500 rounded-sm">
            3
         </button>
      </div>
      <div className="gap-5 flex text-white">
         <button className="w-10 h-10 bg-green-500 rounded-sm">
            3
         </button>
         <button className="w-10 h-10 bg-green-500 rounded-sm">
            2
         </button>
         <button className="w-10 h-10 bg-green-500 rounded-sm">
            1
         </button>
      </div>
   </div>
  )
}

export default Pagination