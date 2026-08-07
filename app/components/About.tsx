import AnimationProvider from "./AnimationProvider";

export default function About() {
  return (
    <AnimationProvider>
      <section
        id="about"
        className="bg-black px-6 py-24 text-white"
      >
        <div className="mx-auto max-w-5xl text-center">

          <h2 className="mb-6 text-4xl font-bold text-yellow-300">
            About Darbar
          </h2>

          <p className="text-lg leading-9 text-gray-300">
            Darbare e Ashrafi Betul is a sacred spiritual center dedicated
            to peace, faith, humanity and service. Thousands of devotees
            from different places visit every year to seek blessings,
            participate in religious gatherings and experience spiritual
            peace.
          </p>

        </div>
      </section>
    </AnimationProvider>
  );
}