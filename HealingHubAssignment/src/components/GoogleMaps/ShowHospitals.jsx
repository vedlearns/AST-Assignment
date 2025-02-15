import CardComponent from "./CardComponent"

const ShowHospitals=({places})=>{
return(
  <>
  <div id="list">
  <h2 className="text-4xl font-serif font-bold text-white p-6 rounded-lg shadow-xl shadow-black/20 text-left">
    List of Hospitals within 5km
  </h2> 
  <div className="w-full flex justify-center">
    {places.length > 0 ? (
      <div className="w-full mt-6 p-5 space-y-6 flex flex-col items-center">
        {places.map((place, index) => (
            <CardComponent key={index} place={place} />
        ))}
      </div>
    ) : (
      <p className="text-center text-gray-500 mt-4">No places found</p>
    )}
  </div>
  </div>
</>

)}

export default ShowHospitals