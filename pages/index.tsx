import React, { useEffect, useState } from 'react'
import GoogleMapComponent from '@/components/map'
import { getAllPatientsService } from '@/services/patient.service'
import { IPatient } from '@/interfaces/Patient.interface'

const MapPage = () => {
  const [patients, setPatients] = useState<IPatient[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllPatientsService()
        setPatients(data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchData()
    const interval = setInterval(fetchData, 10000) // cada 10s

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <h1>Ubicación del Paciente</h1>
      <GoogleMapComponent patients={patients} />
    </div>
  )
}

export default MapPage