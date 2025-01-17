import { RotateCw } from 'lucide-react'

export const LoadMore = () => {
  return (
   <div className='flex justify-center py-2 text-white flex-col items-center'>
      <p className='text-xl'>Завантажити ще...</p>
      <RotateCw size={60}  className='cursor-pointer'/>
   </div>
  )
}
