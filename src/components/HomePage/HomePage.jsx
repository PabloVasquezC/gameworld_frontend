'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import NavBar from '../NavBar/NavBar'
import Logo from '../../assets/gameworld_logo-removebg-preview.png'
import Footer from '../Footer/Footer'
import './HomePage.css'
import Bento from '../BentoSection/BentoSection'


export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loading, setLoading] = useState(true);

  // Simulamos el tiempo de carga
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false),800); 
    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className='main-container'>
      <div>
      {loading ? (
        // Spinner de carga
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <header className="absolute inset-x-0 top-0 z-50">
            <NavBar />
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
              <div className="fixed inset-0 z-50" />
              <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only size-11">Game World</span>
                    <img
                      className=" h-11 w-full"
                      alt="gameworld-logo"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    />
                  </a>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="py-6">
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </Dialog>
          </header>

          <div className="relative isolate px-6 lg:px-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              />
            </div>
            <div className="mx-auto max-w-2xl sm:py-48 lg:py-12 align">
              <div className="text-center">
                <img
                  src={Logo}
                  alt="GameWorld Logo"
                  className="gameworld_logo h-100 w-auto mx-auto my-20 sm:my-0"
                />
                <p className="mt-6 text-2xl text-gray-200 ">
                  &quot;Cuatro de cada cinco gamers recomiendan <em className='font-bold text-[#ee0979]'>GameWorld</em>, Descubre las razones.&quot;
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <button className='explorar-btn rounded-md flex'>
                  <a
                    href="#bentos"
                    className="rounded-md custom-bg-pink px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm "
                  >
                    Explorar<span aria-hidden="true">→</span>
                  </a>
                  </button>
                  
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27....',
                }}
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              />
            </div>
          </div>
            <Bento />
        </>
      )}
    </div>
      <Footer />
    </div>
  );
}
