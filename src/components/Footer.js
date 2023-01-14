import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer class="relative bg- pt-8 pb-6 bg-main text-white">
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      ></link>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      ></link>
      <div class="container mx-auto px-4 ">
        <div class="lg:flex md:flex max-[640px]:flex-col flex-wrap lg:justify-between max-[640px]:justify-center items-center">
          <div className="flex justify-center">
            <Image
              src="/assets/Footer.svg"
              className="m-0"
              height={200}
              width={200}
            />
          </div>
          <div class="mt-6 lg:mb-0 mb-6 flex justify-center">
            <button
              class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i class="fab fa-twitter"></i>
            </button>
            <button
              class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i class="fab fa-facebook-square"></i>
            </button>
            <button
              class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i class="fab fa-github"></i>
            </button>
          </div>
        </div>
        <hr class="my-6 border-blueGray-300" />
        <div class="flex flex-wrap items-center md:justify-between justify-center  text-gray-400">
          <div class="w-full md:w-4/12 px-4 mx-auto text-center ">
            <div class="text-sm font-semibold py-1  text-gray-400">
              <p id="get-current-year">Copyright © {year} School System</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
