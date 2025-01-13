
const Color = () => {
   return (
    <div className="flex gap-5 items-center">
    <label htmlFor="color" className="uppercase font-semibold">
      Колір :
    </label>
    <select
      name="color"
      id="color"
      className="p-2 border-none rounded-sm bg-green-500 "
    >
      <option value="green" className="bg-green-500">
        Зелений
      </option>
      <option value="red" className="bg-green-500">
        Червоний
      </option>
      <option value="blue" className="bg-green-500">
        Синій
      </option>
      <option value="white" className="bg-green-500">
        Білий
      </option>
      <option value="yellow" className="bg-green-500">
        Жовтий
      </option>
      <option value="combine" className="bg-green-500">
        Комбінований
      </option>
    </select>
  </div>
   )
 }
 
 export default Color