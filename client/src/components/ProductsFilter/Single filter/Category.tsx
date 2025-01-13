
const Category = () => {
  return (
   <div className="flex gap-5 items-center">
   <label htmlFor="category" className="uppercase font-semibold">
     Категорія :
   </label>
   <select
     name="category"
     id="category"
     className="p-2 border-none rounded-sm bg-green-500 "
   >
     <option value="mechanic" className="bg-green-500">
       Механічні
     </option>
     <option value="ornament" className="bg-green-500">
       Орнамент
     </option>
     <option value="hanging" className="bg-green-500">
       Підвісні
     </option>
   </select>
 </div>
  )
}

export default Category