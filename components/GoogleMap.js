import React from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

const containerStyle = {
  width: "800px",
  height: "400px",
  border: "2px",
}

const center = {
  lat: -3.745,
  lng: -38.523,
}

const GoogleMaps = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBPG0tal5fQdVpUjKElsVf85fSObL1YebM">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}

export default GoogleMaps
