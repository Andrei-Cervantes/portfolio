import { Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../../lib/utils";
import astronaut from "../../assets/astronaut.png";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { LoaderCircle } from "lucide-react";
import ContactItem from "../Common/ContactItem";

const contactItem = [
  {
    icon: <Mail className="h-6 w-6 text-primary" />,
    text: "andrei29.cervantes@gmail.com",
  },
  {
    icon: <Phone className="h-6 w-6 text-primary" />,
    text: "+63 915 650 6046",
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    text: "Manila, Philippines",
  },
];

const ContactsSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSending(true);
    emailjs
      .sendForm(serviceId, templateId, formRef.current!, publicKey)
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message. Please try again later.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Every great project starts with the right party. Whether it's a new
          build, an idea to optimize, or just a good dev talk, let's connect and
          make it happen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
          <div className="space-y-8 flex flex-col items-center">
            <img
              className="animate-float w-[342px] h-[342px]"
              src={astronaut}
              alt="astronaut"
            />

            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="flex items-center justify-center gap-4 transition-all duration-500">
                {contactItem.map((item) => (
                  <ContactItem icon={item.icon} text={item.text} />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs h-full">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col justify-between h-full"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                    placeholder="Your name here..."
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                    placeholder="Your email here..."
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Your message here..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100",
                )}
                disabled={isSending}
              >
                Send Message
                <Send size={16} />
                {isSending && (
                  <LoaderCircle size={16} className="ml-2 animate-spin" />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
