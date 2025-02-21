const ContactUsComponent = () => {
    return (
      <section id="contact" className="bg-gray-100 py-12 px-6 md:px-12 mt-16">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-[#804BEA] to-[#40237B] bg-clip-text text-transparent mb-6">Contact Me</h2>
          <p className="text-center mb-6">
            Have any questions or feedback? Fill out the form below and I&apos;ll get back to you soon.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8750F7]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8750F7]"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8750F7]"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#804BEA] to-[#40237B] text-white font-bold py-2 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default ContactUsComponent;  