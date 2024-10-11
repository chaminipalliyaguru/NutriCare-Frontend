import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DoctorCard from '../Components/doctors/doctorCard'

function FindDoctor() {
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function getAll() {
    try {
      setLoading(true)
      const response = await axios.get('https://nutricarebe-ffhmggb4gefgbwch.canadacentral-01.azurewebsites.net/doctor/get-all')
      setDoctors(response.data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getAll()
  }, [])

  return (
    <div>
      <div className='mt-16 font-serif flex flex-col text-center font-semibold text-stone-700 text-3xl md:text-4xl lg:text-5xl subpixel-antialiased tracking-normal p-8 md:p-12 lg:p-16 mx-4 md:mx-8 lg:mx-16'>
        <p>
          Connect with Trusted <br /> Healthcare Professionals
        </p>
      </div>

      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {!loading && !error && doctors.map((doctor) => {
          return (
            <DoctorCard
              key={doctor._id}
              id={doctor._id}
              docName={doctor.docName}
              docPosition={doctor.docPosition}
              docDesc={doctor.docDesc}
              docNumber={doctor.docNumber}
              docImg={doctor.docImg}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FindDoctor;
