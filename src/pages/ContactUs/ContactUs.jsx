import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <ContactForm />
      <ContactInfo />

      <div className="mt-12">
        <MapContainer center={[24.88938953803653, 91.89110781554236]} zoom={15} className="rounded-3xl shadow" style={{ height: "25rem", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[24.88938953803653, 91.89110781554236]}>
            <Popup>
              Our Office <br /> Street 12, Block A.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default ContactUs;
