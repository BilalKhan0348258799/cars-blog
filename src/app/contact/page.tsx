// src/app/contact/page.tsx

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="container mx-auto py-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg mb-10 text-center">
          If you have any questions, feel free to reach out using the options below!
        </p>

        {/* Email Section */}
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-2xl font-semibold mb-2">Email Us</h2>
          <p className="text-gray-600 mb-4">Send us an email for any inquiries.</p>
          <a
            href="mailto:muhammadbilalfareed94@gmail.com"
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
          >
            Email Us
          </a>
        </div>

        {/* WhatsApp Section */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-2">WhatsApp</h2>
          <p className="text-gray-600 mb-4">Contact us directly via WhatsApp for quick responses.</p>
          <a
            href="https://wa.me/000011112222"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all"
          >
            Message on WhatsApp
          </a>
        </div>
      </main>
    </div>
  );
};

export default Contact;
