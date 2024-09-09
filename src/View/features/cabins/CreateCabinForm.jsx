import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../../MainButton'
import SmallButton from '../../SmallButton'

function CreateCabinForm() {
 
 const {register , handleSubmit} = useForm()

 function onSubmit(data){
  console.log(data)
 }


  return ( 
  <form className='max-w-full mt-4 bg-white py-2 rounded-md' onSubmit={handleSubmit(onSubmit)}>
    <div className='grid grid-cols-3 gap-8 max-w-full m-4 h-fit border-b border-slate-200 p-3 '>
      <label htmlFor="name" className='text-normal font-[500] text-[#3F4858]'>Cabin name</label>
      <input type="text" id='name' {...register('name')} className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' />
    </div>

    <div className=' grid grid-cols-3 gap-8  max-w-full m-4 h-fit border-b border-slate-200 p-3'>
      <label htmlFor="maxCapacity" className='text-lg font-[500] text-[#3F4858]'>Maximum capacity</label>
      <input type="text" id='maxCapacity' {...register("maxCapacity")} className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' />
    </div>
    <div className='grid grid-cols-3 gap-8  max-w-full m-4 h-fit border-b border-slate-200 p-3'>
      <label htmlFor="regularPrice" className='text-lg font-[500] text-[#3F4858]'>Price</label>
      <input type="text" id='regularPrice' {...register("regularPrice")} className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' />
    </div>
    <div className='grid grid-cols-3 gap-8 max-w-full m-4 h-fit border-b border-slate-200 p-3'>
      <label htmlFor="discount" className='text-lg font-[500] text-[#3F4858]' defaultValue={0}>Discount</label>
      <input type="number" id='discount' {...register("discount")} placeholder='0' className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none '/>
    </div>
    <div className='grid grid-cols-3 gap-8  max-w-full m-4 h-fit border-b border-slate-200 p-3'>
      <label htmlFor="description" className='text-lg font-[500] text-[#3F4858]'>Description for website</label>
      <textarea type="text" id='description' {...register("description")} className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' />
    </div>
    <div className='grid grid-cols-3 gap-8  max-w-full m-4 h-fit border-b border-slate-200 p-3'>
      <label htmlFor="image" className='text-lg font-[500] text-[#3F4858]'>Cabin photo</label>
      <input type="text" id='image' {...register("image")} className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' />
    </div>
    <div className='flex items-center justify-end gap-4 pr-8'>
      <SmallButton>
        Cancel
      </SmallButton>
      <Button>
        Add Cabin
      </Button>
    </div>
  </form>
  )
}

export default CreateCabinForm