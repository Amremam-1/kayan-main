import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";



const MapComponent2 = () => {
    const latitude = 30.8482828;
    const longitude = 30.861378;

    return (
      <MapContainer center={[latitude, longitude]} zoom={18} style={{ height: "600px" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>
            A pretty CSS3 popup.
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
  
  export default MapComponent2;
  

