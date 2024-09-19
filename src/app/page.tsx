import Image from "next/image";

export default function Home() {
  return (
    <>
      <main
        id="home"
        className="relative bg-gradient-to-r from-navy-blue to-light-blue text-white py-16 md:py-32 overflow-hidden"
      >
        <section className="text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/background-2.jpg"
              fill
              alt="Background"
              quality={100}
              className="object-cover"
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10">
            <div className="w-full md:w-1/2 pr-4 md:pl-32 mb-8 md:mb-0">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in-up text-center md:text-left">
                Welcome to Rentalin
              </h1>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90 animate-fade-in-up animation-delay-200 text-center md:text-left">
              Applications that make travel more comfortable, ready to help mobility anytime and anywhere
              </p>
              <div className="animate-fade-in-up animation-delay-400 flex justify-center md:justify-start">
                <button className="bg-white text-black px-4 sm:px-8 py-2 sm:py-4 rounded-full text-sm sm:text-lg font-semibold hover:bg-opacity-90 transition duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-float">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="mr-2 sm:mr-3 text-xl sm:text-2xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path>
                  </svg>{" "}
                  <span className="animate-fade-in">Google Play</span>
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative md:pr-32">
              <Image
                alt="Tangkapan Layar Aplikasi Rentalin"
                src="/images/7 home-left.png"
                width={300}
                height={600}
                className="mx-auto relative z-10 animate-float"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] [transform:scaleX(1)] rotate-0">
            <svg
              className="relative block w-[calc(300%+1.3px)] h-[60px] sm:h-[120px] md:h-[150px] md:w-[calc(142%+1.3px)] animate-wave"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="fill-white"
              ></path>
            </svg>
          </div>
        </section>
      </main>
      {/* about */}
      <section id="about" className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box animate-fade-in-up">
              <img
                src="images/our_team.png"
                alt="About Us Rent"
                className="max-lg:mx-auto rounded-3xl"
              />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                  About Us{" "}
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Driven by a passion for seamless mobility solutions,
                  we&apos;ve meticulously developed Rentalin to empower
                  travelers and commuters alike. Our mission is to provide a
                  comprehensive bike rental platform, enabling you to access
                  convenient, eco-friendly transportation that enhances your
                  journey at every turn. With Rentalin, we&apos;re
                  revolutionizing urban mobility, one ride at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9">
            <div className="lg:pr-24 flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-2xl lg:text-4xl text-black mb-9 max-lg:text-center">
                  Rentalin is here to make things easier
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Rentalin is not just a bike rental application. It is a
                  revolutionary mobility solution. We go beyond conventional
                  rental concepts, prioritizing ease of access, flexibility, and
                  user experience. Every feature, from bike search to payment
                  processing, is meticulously designed to enhance efficiency and
                  deliver maximum satisfaction to our users. With Rentalin,
                  we&apos;re redefining urban transportation, one ride at a
                  time.
                </p>
              </div>
            </div>
            <div className="img-box animate-fade-in-up">
              <img
                src="images/pilihan_motor.png"
                alt="About Us"
                className="max-lg:mx-auto rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            Featured Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 640 512"
                className="text-5xl md:text-6xl mb-6 text-navy-blue mx-auto"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512.9 192c-14.9-.1-29.1 2.3-42.4 6.9L437.6 144H520c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24h-45.3c-6.8 0-13.3 2.9-17.8 7.9l-37.5 41.7-22.8-38C392.2 68.4 384.4 64 376 64h-80c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h66.4l19.2 32H227.9c-17.7-23.1-44.9-40-99.9-40H72.5C59 104 47.7 115 48 128.5c.2 13 10.9 23.5 24 23.5h56c24.5 0 38.7 10.9 47.8 24.8l-11.3 20.5c-13-3.9-26.9-5.7-41.3-5.2C55.9 194.5 1.6 249.6 0 317c-1.6 72.1 56.3 131 128 131 59.6 0 109.7-40.8 124-96h84.2c13.7 0 24.6-11.4 24-25.1-2.1-47.1 17.5-93.7 56.2-125l12.5 20.8c-27.6 23.7-45.1 58.9-44.8 98.2.5 69.6 57.2 126.5 126.8 127.1 71.6.7 129.8-57.5 129.2-129.1-.7-69.6-57.6-126.4-127.2-126.9zM128 400c-44.1 0-80-35.9-80-80s35.9-80 80-80c4.2 0 8.4.3 12.5 1L99 316.4c-8.8 16 2.8 35.6 21 35.6h81.3c-12.4 28.2-40.6 48-73.3 48zm463.9-75.6c-2.2 40.6-35 73.4-75.5 75.5-46.1 2.5-84.4-34.3-84.4-79.9 0-21.4 8.4-40.8 22.1-55.1l49.4 82.4c4.5 7.6 14.4 10 22 5.5l13.7-8.2c7.6-4.5 10-14.4 5.5-22l-48.6-80.9c5.2-1.1 10.5-1.6 15.9-1.6 45.6-.1 82.3 38.2 79.9 84.3z"></path>
              </svg>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Wide Choice
              </h3>
              <p className="text-gray-600">
                Choose from a wide range of motorcycles for every occasion.
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 576 512"
                className="text-5xl md:text-6xl mb-6 text-navy-blue mx-auto"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"></path>
              </svg>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Real-time Tracking
              </h3>
              <p className="text-gray-600">
                Track your bike in real-time and ensure your journey is safe and
                secure.
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 640 512"
                className="text-5xl md:text-6xl mb-6 text-navy-blue mx-auto"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z"></path>
              </svg>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Safety Rental
              </h3>
              <p className="text-gray-600">
                Verified users and secure payment options.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* #contact */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="lg:mb-0 mb-10">
              <div className="group w-full h-full">
                <div className="relative h-full">
                  <img
                    src="images/contactus2.png"
                    alt="ContactUs tailwind section"
                    className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover"
                  />
                  <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                    Contact us
                  </h1>
                  <div className="absolute bottom-0 w-full lg:p-11 p-5 transform lg:-translate-y-3/4 -translate-y-1/4">
                    <div className="bg-white rounded-lg p-6 block">
                      <a href="#" className="flex items-center mb-6">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[30px] h-[30px]" // Tambahkan kelas ini
                        >
                          <path
                            d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z"
                            stroke="#4F46E5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <h5 className="text-black text-base font-normal leading-6 ml-5">
                          081234567890
                        </h5>
                      </a>
                      <a href="#" className="flex items-center mb-6">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[30px] h-[30px]" // Tambahkan kelas ini
                        >
                          <path
                            d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z"
                            stroke="#4F46E5"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        <h5 className="text-black text-base font-normal leading-6 ml-5">
                          rentalinofficial36@gmail.com
                        </h5>
                      </a>
                      <a href="#" className="flex items-center">
                        <svg
                          className="w-[60px] h-[60px]" // Ubah kelas ini
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M25 12.9169C25 17.716 21.1939 21.5832 18.2779 24.9828C16.8385 26.6609 16.1188 27.5 15 27.5C13.8812 27.5 13.1615 26.6609 11.7221 24.9828C8.80612 21.5832 5 17.716 5 12.9169C5 10.1542 6.05357 7.5046 7.92893 5.55105C9.8043 3.59749 12.3478 2.5 15 2.5C17.6522 2.5 20.1957 3.59749 22.0711 5.55105C23.9464 7.5046 25 10.1542 25 12.9169Z"
                            stroke="#4F46E5"
                            strokeWidth="2"
                          />
                          <path
                            d="M17.5 11.6148C17.5 13.0531 16.3807 14.219 15 14.219C13.6193 14.219 12.5 13.0531 12.5 11.6148C12.5 10.1765 13.6193 9.01058 15 9.01058C16.3807 9.01058 17.5 10.1765 17.5 11.6148Z"
                            stroke="#4F46E5"
                            strokeWidth="2"
                          />
                        </svg>
                        <h5 className="text-black text-base font-normal leading-6 ml-5">
                          Jl. Boulevard Grand Depok City, Tirtajaya, Kec.
                          Sukmajaya, Kota Depok, Jawa Barat, Indonesia 16412
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
              <h2 className="text-blue-950 font-manrope text-4xl font-semibold leading-10 mb-11">
                Send Us a Message
              </h2>
              <input
                type="text"
                className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder="Nama"
              />
              <input
                type="email"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder="Email"
              />
              <input
                type="tel"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder="Telepon"
              />
              <div className="mb-10">
                <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">
                  Preferred method of communication
                </h4>
                <div className="flex">
                  <div className="flex items-center mr-11">
                    <input
                      id="radio-group-1"
                      type="radio"
                      name="radio-group"
                      className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor="radio-group-1"
                      className="ml-2 flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
                    >
                      Email
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="radio-group-2"
                      type="radio"
                      name="radio-group"
                      className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor="radio-group-2"
                      className="ml-2 flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
                    >
                      Phone
                    </label>
                  </div>
                </div>
              </div>
              <input
                type="text"
                className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder="Message"
              />
              <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-blue-600 bg-blue-950 shadow-sm">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-blue-950 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image
              src="/images/rentalin_logo_baru_01.png"
              alt="Logo Rentalin"
              width={80}
              height={50}
            />
          </div>
          <div className="text-white text-xs sm:text-sm">
            © 2024 Rentalin. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
