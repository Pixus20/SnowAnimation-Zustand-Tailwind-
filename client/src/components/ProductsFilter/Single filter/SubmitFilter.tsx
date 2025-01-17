'use client'

import { CheckIcon } from "lucide-react"

export const SubmitFilter = () => {
  return (
    <button className='p-1 uppercase bg-green-500 rounded-sm hover:opacity-80 transition-colors duration-200 ease-in-out text-white'>
      <CheckIcon/>
   </button>
  )
}
