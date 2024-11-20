
import { useBookings } from "../../ViewModal/Hooks/BookingHooks/useBookings";
import BookingTable from "../features/Bookings/BookingTable";
import FiltersAndSortingOperations from "../../ViewModal/Operations/FiLtersAndSortingOperations";
import Spinner from "../UI/Spinner";




function Bookings() {

  const {isLoading} = useBookings()

  if(isLoading) return <Spinner/>

  return (
   <div>
   <div className="flex justify-between items-center mb-8">
    <h2 className="text-orange-800 text-3xl font-[500]">Bookings</h2>
    <div>

     <FiltersAndSortingOperations filterField="status" filteringOptions={[
          { value: "all", label: "All" },
          { value: "checked-out", label: "Checked out" },
          { value: "checked-in", label: "Checked in" },
          { value: "unconfirmed", label: "Unconfirmed" },
        ]}
        
        sortingOptions={[
          { value: "startDate-desc", label: "Sort by date (recent first)" },
          { value: "startDate-asc", label: "Sort by date (earlier first)" },
          {
            value: "totalPrice-desc",
            label: "Sort by amount (high first)",
          },
          { value: "totalPrice-asc", label: "Sort by amount (low first)" },
        ]}
        />
    </div>
   </div>
   <BookingTable/>
   </div>
  );
}

export default Bookings;
