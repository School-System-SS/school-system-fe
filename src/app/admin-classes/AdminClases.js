import React from 'react'
import { data } from "./data"



export default function AdminClases() {
    const HandleOpen = (arg) => {
        const menu = document.getElementById(arg);
        menu.classList.toggle('hidden');
    }

    return (
        <section className='mt-[3%] ml-[2%]'>
            {data && data.map((item, index) => {
                return (

                    <section className='mt-[1%]'>
                        <div >
                            <a onClick={() => HandleOpen(index)} class=" w-[10%] px-4 py-2 flex font-medium text-darker">
                                {item.title} 
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-[6%] mt-[2%]">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>

                            </a>
                            <div id={index} class="m-2  flex flex-wrap  rounded-lg py-4 mt-2 ">
                                {item.courses && item.courses.map((c) => {
                                    return (
                                        <div class="flex items-center ml-[1%]   py-3 w-[15%]  bg-lighter text-[#FFFFFF] rounded-lg  " role="alert">
                                            <div class="text-sm  text-center  ml-[10%] ">
                                                <p>{c.coursename}</p>
                                            </div>
                                            <div class="flex items-center ml-auto space-x-2">
                                                <button type="button" class=" text-draker  rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 " data-dismiss-target="#toast-undo" aria-label="Close">
                                                    <svg aria-hidden="true" class="w-5 h-5 text-" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    </section>

                )
            })}
        </section>
    )
}
