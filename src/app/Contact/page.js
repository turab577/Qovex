'use client'
import { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";  // Make sure this style is imported

export default function Contact() {
  const [result, setResult] = useState("");  // Added state for result message
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Directly use the phone value from the state
    formData.append("phone", phone);  // Use the full phone number including country code
    formData.append("name", name);  // Append name to form data
    formData.append("email", email);  // Append email to form data
    formData.append("message", message);  // Append message to form data

    formData.append("access_key", "1f0ad236-946d-4c38-a488-5287a6255ed6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "An error occurred");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto max-w-4xl bg-white p-8 rounded-lg shadow-xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2a3d66]">Get in Touch</h1>
          <p className="text-lg text-[#5e6d77] mt-4">
            We would love to hear from you. Please fill out the form below and we will get back to you soon!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <form onSubmit={onSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold text-[#2a3d66] mb-2">Your Name</label>
                <input
                required
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-[#d1d9e6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c8fdd]"
                  value={name}
                  onChange={(e) => setName(e.target.value)} // Update state when name is entered
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-[#2a3d66] mb-2">Email Address</label>
                <input
                required
                  type="email"
                  id="email"
                  placeholder="youremail@example.com"
                  className="w-full px-4 py-3 border border-[#d1d9e6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c8fdd]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update state when email is entered
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-semibold text-[#2a3d66] mb-2">Phone Number</label>
                <PhoneInput
                  country={'us'}  // Set default country
                  value={phone}
                  onChange={setPhone}
                  inputStyle={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #d1d9e6",
                    borderRadius: "8px",
                    fontSize: "16px",
                    paddingLeft: "50px" // Ensure padding for country flag
                  }}
                  dropdownClass="custom-dropdown"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-[#2a3d66] mb-2">Your Message</label>
                <textarea
                required
                  id="message"
                  rows="4"
                  placeholder="Tell us more about your project"
                  className="w-full px-4 py-3 border border-[#d1d9e6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c8fdd]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)} // Update state when message is entered
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#74c8b0] cursor-pointer text-white font-semibold rounded-lg hover:bg-[#02461f] transition duration-200"
              >
                Submit
              </button>
            </form>

            {/* Show submission status */}
            <div className="mb-6">
              <p className="text-center text-lg text-[#74c8b0]">{result}</p>
            </div>
          </div>

          <div className="flex-1 bg-[#f2f6ff] rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#2a3d66] mb-4">Why Contact Us?</h2>
            <p className="text-sm text-[#5e6d77]">
              We offer a range of services to help you bring your ideas to life. Whether you need web development, app development, or digital marketing expertise, our team is ready to help. Fill out the form and let us know how we can support you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
