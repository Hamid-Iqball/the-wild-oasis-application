import CabinTable from "../features/cabins/CabinTable";


function Cabins() {


  return (
<section>
  <div className="flex justify-between items-center mb-8">
    <h1 className="text-3xl font-semibold text-orange-800">All Cabins</h1>
    <p className="text-[1rem] font-[500]">Filter/Sort</p>
  </div>
  <div>
    <CabinTable/>
  </div>
</section>
  );
}

export default Cabins;
