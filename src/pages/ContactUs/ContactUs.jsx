import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Map from "./Map";

const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <ContactForm />
      <ContactInfo />
      <Map />
    </div>
  );
};

export default ContactUs;
