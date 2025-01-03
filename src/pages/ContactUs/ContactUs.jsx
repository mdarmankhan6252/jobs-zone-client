import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="flex gap-4 justify-around items-center pt-4 md:pt-0">
        <div className="hidden lg:block max-w-[50%]">
          <img className="size-full object-cover" src="https://i.ibb.co.com/Mk46FxS/5143151.jpg" alt="Contact Image" />
        </div>

        <div className="w-full lg:w-[450px] p-6 border border-gray-200 rounded-xl">
          <form>
            <h3 className="mb-6 text-2xl leading-normal">Get in touch!</h3>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/2">
                <label className="block mb-2 text-sm">Name</label>
                <input type="text" className="w-full p-2 border border-gray-200 rounded" placeholder="Your name" />
              </div>
              <div className="md:w-1/2">
                <label className="block mb-2 text-sm">Email</label>
                <input type="email" className="w-full p-2 border border-gray-200 rounded" placeholder="Your email" />
              </div>
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm">Subject</label>
              <input type="text" className="w-full p-2 border border-gray-200 rounded" placeholder="Subject" />
            </div>

            <div className="my-4">
              <label className="block mb-2 text-sm">Message</label>
              <textarea className="w-full p-2 border border-gray-200 rounded" rows={4} placeholder="Your message"></textarea>
            </div>

            <button className="w-full py-2 bg-[#6b46c1] transition-all hover:bg-[#553c9a] text-white rounded">Send</button>
          </form>
        </div>
      </div>

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
