
const Size = () => {
   return (
      <div className="flex gap-5 items-center">
      <label htmlFor="size" className="uppercase font-semibold">
        Розмір :
      </label>
      <select
        name="size"
        id="size"
        className="p-2 border-none rounded-sm bg-green-500 "
      >
        <option value="small" className="bg-green-500">
          Малий
        </option>
        <option value="normal" className="bg-green-500">
          Середній
        </option>
        <option value="big" className="bg-green-500">
          Великий
        </option>
      </select>
    </div>
     )
}

export default Size