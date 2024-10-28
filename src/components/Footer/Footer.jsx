
function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">GameWorld</h3>
            <p className="text-gray-400 text-sm mt-2">
              La mejor plataforma para los amantes de los videojuegos. Explora, juega y comparte.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {/* Icono de Facebook */}
                <path
                  fillRule="evenodd"
                  d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.497v-9.294H9.692V10.62h3.13V8.105c0-3.1 1.894-4.788 4.657-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.917.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.59l-.467 3.086h-3.123V24h6.125C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {/* Icono de Twitter */}
                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.723-.949.564-2.002.974-3.127 1.195-.897-.957-2.173-1.555-3.591-1.555-2.717 0-4.918 2.201-4.918 4.917 0 .385.045.76.126 1.124-4.083-.205-7.702-2.16-10.126-5.134-.423.723-.666 1.561-.666 2.475 0 1.708.869 3.213 2.188 4.099-.806-.026-1.566-.247-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.828-.413.112-.849.171-1.296.171-.314 0-.622-.03-.921-.086.623 1.945 2.432 3.363 4.575 3.403-1.68 1.318-3.809 2.104-6.115 2.104-.397 0-.787-.023-1.174-.067 2.179 1.398 4.768 2.215 7.548 2.215 9.057 0 14.004-7.506 14.004-14.004 0-.213 0-.425-.015-.636.961-.695 1.8-1.562 2.46-2.549l-.047-.02z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {/* Icono de Instagram */}
                <path
                  fillRule="evenodd"
                  d="M7.5 2h9a5.5 5.5 0 015.5 5.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zM12 7.167A4.833 4.833 0 1016.833 12 4.833 4.833 0 0012 7.167zm0 1.5A3.333 3.333 0 1115.333 12 3.333 3.333 0 0112 8.667zm5.25-.917a1.167 1.167 0 11-1.167-1.167 1.167 1.167 0 011.167 1.167z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-400 text-sm">
          © 2024 GameWorld. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
