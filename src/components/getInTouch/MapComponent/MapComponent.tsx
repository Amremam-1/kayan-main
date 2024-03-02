import React from "react"
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api"
// import locationIcon from "../../../assets/location-icon.png";

const containerStyle = {
  minWidth: "250px",
  minHeight: "750px",
}

const center = {
  lat: 30.8482828,
  lng: 30.861378,
}

function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCQ6WTeNr9eUcfeURSqUybj6qjOG9cUmYA",
  })

  //   const [map, setMap] = React.useState(null)

  //   const onLoad = React.useCallback(function callback(map) {
  //     const bounds = new window.google.maps.LatLngBounds(center);
  //     map.fitBounds(bounds);

  //     setMap(map)
  //   }, [])

  //   const onUnmount = React.useCallback(function callback(map) {
  //     setMap(null)
  //   }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={18}
      // onLoad={onLoad}
      // onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <MarkerF
        // icon={locationIcon}
        // icon={"https://maps.gstatic.com/mapfiles/ms2/micons/ylw-pushpin.png"}
        // icon={<ImLocation size={24} color='#1F4758' />}
        position={{
          lat: 30.8482828,
          lng: 30.861378,
        }}
        // options={{icon: locationIcon}}
      />
    </GoogleMap>
  ) : (
    <></>
  )
}

export default React.memo(MapComponent)
