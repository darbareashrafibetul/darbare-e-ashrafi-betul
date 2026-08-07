export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-green-950 to-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl text-center">

        <h2 className="mb-6 text-5xl font-bold text-yellow-300">
          Contact Us
        </h2>

        <p className="mb-12 text-lg text-gray-300">
          Feel free to visit Darbare e Ashrafi Betul or contact us for any
          spiritual guidance and information.
        </p>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl border border-yellow-500/30 bg-black/30 p-8">
            <h3 className="mb-3 text-2xl font-bold text-yellow-300">
              📍 Address
            </h3>

            <p className="text-gray-300">
              Darbare e Ashrafi Betul
              <br />
              Betul, Madhya Pradesh
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-500/30 bg-black/30 p-8">
            <h3 className="mb-3 text-2xl font-bold text-yellow-300">
              📞 Phone
            </h3>

            <p className="text-gray-300">
              +91 XXXXXXXXXX
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-500/30 bg-black/30 p-8">
            <h3 className="mb-3 text-2xl font-bold text-yellow-300">
              ✉ Email
            </h3>

            <p className="text-gray-300">
              info@darbareashrafibetul.com
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}