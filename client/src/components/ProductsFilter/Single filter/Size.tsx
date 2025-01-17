const Size = () => {
   return (
      <div className="flex gap-5 items-center">
      <label htmlFor="size" className="uppercase font-semibold text-white">
        Розмір :
      </label>
      <select
        name="size"
        id="size"
        className="p-2 border-none rounded-sm bg-green-500 text-white"
      >
        <option value="small" >
          Малий
        </option>
        <option value="normal" >
          Середній
        </option>
        <option value="big" >
          Великий
        </option>
      </select>
    </div>
     )
}

export default Size