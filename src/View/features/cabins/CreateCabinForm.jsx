import toast from 'react-hot-toast'
import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

import SmallButton from '../../SmallButton'
import { createCabin } from '../../../Modal/Services/apiCabins'
import FormItem from '../../FormItem'

 function CreateCabinForm({cabinToEdit={}}) {

  const {id:editID, ...editValues} = cabinToEdit
  const isEditSession = Boolean(editID)
  const {register , handleSubmit, reset,getValues,formState} = useForm(
    {
      defaultValues:isEditSession ? editValues :{}
    }
  )
  const queryClinet =  useQueryClient()
  // biltIn functions in useForm.
  const {errors} = formState;


  // When we are changing something like deleting a row or inserting a new row
  const {mutate , isLoading:isCreating} =useMutation({
    mutationFn:createCabin,
    onSuccess :()=>{
      toast.success("New Cabin Successfully Created");
      queryClinet.invalidateQueries({
        queryKey:['cabins']
      });
      reset();
    },
      onError:(err)=>{
        toast.error(err.message)
      }
    })
    function onSubmit(data){
      // Here the spread operator is to copy paste all the properties, and then override the image property
      mutate({...data,image:data.image[0]});
      console.log(data)
    }
    function onError(errros){
      console.log(errros)
    }
  return ( 
  <form className='max-w-full mt-4 bg-white py-2 rounded-md' onSubmit={handleSubmit(onSubmit,onError)}>

        <FormItem label='Cabin name' error={errors?.name?.message}>
        <input type="text" id='name' {...register('name',{required:"This Field is required"})} className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' disabled={isCreating} />
        </FormItem>

        <FormItem label='Maximum capacity' error={errors?.maxCapacity?.message}>
        <input type="number" id='maxCapacity' {...register("maxCapacity",{required:"This Field is required",min:{
            value:1,
            message:"Capacity should be at least 1"
          }})} className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' disabled={isCreating} />
        </FormItem>

        <FormItem label='Price' error={errors?.regularPrice?.message }>
        <input type="number" id='regularPrice' {...register("regularPrice",{required:"This Field is required"})} className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' disabled={isCreating} />
          </FormItem>

          <FormItem label="Discount" error={errors?.discount?.message}>
          <input type="number" id='discount' {...register("discount",{
                  validate:(value)=>value <= getValues().regularPrice || "Discount must be less than Price" ,required:"This Field is required"
              })} className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none' defaultValue={0} disabled={isCreating}/>
           </FormItem>
   
          <FormItem label="Description" error={errors?.description?.message}>
          <textarea type="text" id='description' {...register("description",{required:"This Field is required"})} className='p-1.5 border rounded-md focus:border-orange-400  focus:ring-orange-400 focus:ring-2 outline-none ' disabled={isCreating}/>
          </FormItem>

          <FormItem label="Cabin photo" error={errors?.image?.message}>
          <input type="file" id='image' {...register("image",{required: isEditSession ? false : "This field is required"})} className='p-1.5 file:bg-orange-700 file:text-slate-50 file:py-3 file:px-4 file:border-none file:rounded-md file:mr-4 hover:file:cursor-pointer   ' disabled={isCreating}/>
          </FormItem>


        <div className='flex items-center justify-end gap-4 pr-8'>
          <SmallButton>
            Cancel
          </SmallButton>
          <button className="border border-grey-500 py-3 px-5 text-slate-50 bg-orange-700 font-semibold rounded-md" 
          disabled={isCreating}>{isEditSession ? "Edit Cabin" :" Add Cabin"}</button>
        </div>
  </form>
  )
}

export default CreateCabinForm