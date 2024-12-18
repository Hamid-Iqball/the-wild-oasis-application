import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../../Modal/Services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckIn(){
const queryClinet = useQueryClient()
const navigate = useNavigate()

    //here we will be using the useMutation hook.
   const {mutate:checkin , isLoading:isCheckingIn} =  useMutation({
    mutationFn:({bookingId,breakfast})=>updateBooking(bookingId,
        {
            status: 'checked-in',
            isPaid:true,
            ...breakfast
        }
    ),

    onSuccess:(data)=>{
        toast.success(`Booking #${data.id} successfully checked in`)
        queryClinet.invalidateQueries({active:true})
        navigate('/bookings')
    },

    onError:()=>{

        toast.error('There was an error while checking in')
    }
   });

   return {checkin, isCheckingIn}

}