import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Contact() {
  const position = [19.6942,72.7690]; // Example coordinates for Bangalore

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="order-2 lg:order-1">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <p>
              <strong>Address:</strong><br />
              123 Rotaract Street<br />
              Palghar, Maharashtra 401404
            </p>
            <p>
              <strong>Email:</strong><br />
              info@rotaractclub.org
            </p>
            <p>
              <strong>Phone:</strong><br />
              +91 1234567890
            </p>
          </div>
        </div>
        
        <div className="h-[300px] lg:h-[400px] order-1 lg:order-2">
          <MapContainer 
            center={position} 
            zoom={13} 
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                Rotaract Club
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default Contact;