import React from "react";
import "../../styles/teacher.css";

export default function Create_assignment({handleChange, formInputData, handleSubmit}) {
  
  return (
    
      <section className="TeacherAssignment-1">
        
<div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
            <div className="flex flex-col justify-between ">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Create assignment</h2>
              </div>
              <img src="https://mambaui.com/assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
            </div>

            <div class="rounded bg-white max-w-md  overflow-hidden shadow-xl p-9 content-center">
              <form class="space-y-4" action="#" method="POST">
                <input type="hidden" name="remember" value="True" />
                <div class="rounded-md shadow-sm -space-y-px">
                  <div class="grid gap-6">
                    <div class="col-span-12">
                  
                      <input
                        type="text"
                        name="Title"
                        id="Title"
                      
                        placeholder="Title"
                        onChange={handleChange} value={formInputData.Title}
                        
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="col-span-12">
                      
                      <input
                        type="date"
                        name="DueDate"
                        id="DueDate"
                        
                        placeholder="Due Date"
                        onChange={handleChange} value={formInputData.DueDate}
                        class=" focus:ring-indigo-700 focus:border-indigo-700 block w-full  sm:text-lg border-gray-600 rounded-md"
                      />
                    </div>
                  </div>
                </div>

                <div>
              
                  <textarea
                    id="message"
                    rows="3"
                    className="w-full rounded dark:bg-gray-800"
                    placeholder="Description"
                  />
                </div>

                <div>
                <button
              className="bg-darker py-2 px-4 rounded text-white lg:mt-0 md:mt-2 lg:w-fit md:w-full max-[640px]:mt-2 max-[640px]:w-full sm:w-full hover:bg-main"
              onClick={handleSubmit}
              type="submit"
              id="btnsubmit"
            >
              Assign
            </button>
                </div>
              </form>
            </div>
          </div>
        
      </section>

      
    
  );
}
