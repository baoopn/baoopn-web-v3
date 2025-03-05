import ContactForm from "./ui/ContactForm";
import ContactLinks from "./ui/ContactLinks";
import { Reveal } from "./utils/Reveal";
import { FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-24">
      <div className="max-w-4xl m-auto flex items-center flex-col px-4 gap-4">
        <Reveal>
          <h2 className="text-4xl font-semibold text-center">Contact</h2>
        </Reveal>

        <Reveal>
          <p className="mt-8 mb-12 text-center max-w-2xl">
            Feel free to reach out to me for any queries or opportunities.
            <br />I will get back to you as soon as possible.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactLinks className="col-span-1 w-full m-auto p-4 items-center"/>
          <ContactForm className="col-span-1 max-w-4xl mx-auto p-4" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;