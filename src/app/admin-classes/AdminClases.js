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
                            <button onClick={() => HandleOpen(index)} class=" w-[10%] px-4 py-2 flex font-medium text-darker">
                                {item.title}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-[6%] mt-[2%]">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>

                            </button>
                            <div id={index} class="  flex flex-wrap  rounded-lg py-4 mt-2 ">
                                {item.courses && item.courses.map((c) => {
                                    return (
                                        <div class="flex items-center ml-[1%]   py-3 w-[15%]  bg-lighter text-[#FFFFFF] rounded-lg " role="alert">
                                            <div style={{
                                                marginButton: 0
                                            }} class="text-sm  text-center  ml-[5%] ">
                                                <p className='mb-0 h-full'>{c.coursename}</p>
                                            </div>
                                            <div class="flex items-center ml-auto space-x-2">
                                                <button type="button" class=" text-draker  rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 " data-dismiss-target="#toast-undo" aria-label="Close">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>

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
