"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../../SideB";
import swal from "sweetalert";

function details() {
  const [inDetails, setInDetails] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const[assignTitle, setAssignTitle] = useState("")
  const[assigndueDate, setAssigndueDate] = useState("")
  const[assigndesc, setAssignDesc] = useState("")
  const REFRESH =
    "https://school-system-final-project.herokuapp.com/api/token/refresh/";
  

  

  useEffect(() => {
    let config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("access"))}`,
      },
    };
    let refreshBody = {
      refresh: JSON.parse(localStorage.getItem("refresh")),
    };
    axios
      .post(REFRESH, refreshBody)
      .then((res) => {
        localStorage.setItem("access", JSON.stringify(res.data.access));
      })
      .catch((err) => {});
    setInDetails(true);
    setAssignTitle(JSON.parse(localStorage.getItem("item"))["title"])
    setAssigndueDate(JSON.parse(localStorage.getItem("item"))["dueDate"])
    setAssignDesc(JSON.parse(localStorage.getItem("item"))["description"])
  }, []);

  const handleUpdateAssignment = (e) => {
    e.preventDefault();
    const URL_ASSIGNMENT = `https://school-system-final-project.herokuapp.com/api/v1/studentAssignment/update/${JSON.parse(localStorage.getItem("id"))["pk"]} `;
  let config = {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("access"))}`,
    },
  };
    let body = {
      attachment: e.target.attachment.value,
    };
    axios
      .put(URL_ASSIGNMENT, body, config)
      .then((res) => {
        swal({
          title: "Good job!",
          text: "Submitted Successfully",
          icon: "success",
          buttons: false,
          timer: 3000,
        });
      })
      .catch((err) => {
        swal({
            title: "Error!",
            text: "Submitted Successfully",
            icon: "error",
            buttons: false,
            timer: 3000,
          });
      });
  };

  return (
    <section className="flex ">
      <SideBar inDetails={inDetails} />
      <section className="w-[70%] h-full ml-[35%] mt-[5%]">
        <div
          id="staticModal"
          data-modal-backdrop="static"
          className="rounded-lg break-words md:inset-0 h-modal md:h-full"
        >
          <div className="relative w-full h-full max-w-2xl border md:h-auto rounded-xl">
            <div className="relative bg-white rounded-lg shadow ">
              <div className="flex items-start justify-between text-[#FFFFFF] bg-main p-4 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {assignTitle}
                </h3>

                <p>{assigndueDate}</p>
              </div>
              <div className="p-6 space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Description
                </h3>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 ">
                  {assigndesc}
                </p>
              </div>

              <form onSubmit={handleUpdateAssignment}>
                <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <div class="flex items-center justify-between px-3 py-2 border-b">
                    <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                      <div class="flex items-center space-x-1 sm:pr-4">
                        <button
                          type="button"
                          class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span class="sr-only">Attach file</span>
                        </button>
                        <button
                          type="button"
                          class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span class="sr-only">Embed map</span>
                        </button>
                        <button
                          type="button"
                          class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span class="sr-only">Upload image</span>
                        </button>
                        <button
                          type="button"
                          class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span class="sr-only">Format code</span>
                        </button>
                        <button
                          type="button"
                          class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span class="sr-only">Add emoji</span>
                        </button>
                      </div>
                      <div class="flex flex-wrap items-center space-x-1 sm:pl-4">
                        <button
                          type="button"
                          class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span class="sr-only">Add list</span>
                        </button>
                        <button
                          type="button"
                          class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span class="sr-only">Settings</span>
                        </button>
                        <button
                          type="button"
                          class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span class="sr-only">Timeline</span>
                        </button>
                        <button
                          type="button"
                          class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span class="sr-only">Download</span>
                        </button>
                      </div>
                    </div>
                    <button
                      type="button"
                      data-tooltip-target="tooltip-fullscreen"
                      class="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="sr-only">Full screen</span>
                    </button>
                    <div
                      id="tooltip-fullscreen"
                      role="tooltip"
                      class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                      Show full screen
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                  <div class="px-4 py-2 bg-white rounded-b-lg ">
                    <label for="editor" class="sr-only">
                      Publish post
                    </label>
                    <textarea
                      id="editor"
                      name="attachment"
                      rows="8"
                      class="block w-full px-3 text-sm text-gray-800 bg-white border-0  focus:ring-0 dark:text-white dark:placeholder-gray-400"
                      placeholder="Write an article..."
                      required
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  class="inline-flex items-center mb-3 ml-[40%] px-5 py-2.5 text-sm font-medium text-center text-white bg-main rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-lighter"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
export default details;
