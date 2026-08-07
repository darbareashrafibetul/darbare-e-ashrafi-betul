export default function Footer() {
  return (
    <footer className="border-t border-yellow-500/20 bg-black py-10 text-center">
      <h3 className="text-2xl font-bold text-yellow-300">
        Darbare e Ashrafi Betul
      </h3>

      <p className="mt-2 text-gray-400">
        Makhdoom Baba Darbar
      </p>

      <p className="mx-auto mt-6 max-w-2xl text-gray-500">
        May Allah bless everyone with peace, faith, good health and guidance.
      </p>

      <div className="mt-8 flex justify-center gap-8 text-yellow-300">
        <a href="#home" className="hover:text-yellow-400">
          Home
        </a>

        <a href="#about" className="hover:text-yellow-400">
          About
        </a>

        <a href="#gallery" className="hover:text-yellow-400">
          Gallery
        </a>

        <a href="#contact" className="hover:text-yellow-400">
          Contact
        </a>
      </div>

      <p className="mt-8 text-sm text-gray-600">
        © 2025 Darbare e Ashrafi Betul. All Rights Reserved.
      </p>
    </footer>
  );
}