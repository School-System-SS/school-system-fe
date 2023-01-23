import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useRouter } from 'next/navigation';




export default function AdminClases() {
    const router=useRouter()
    const [allCourses, setallCourses] = useState("")
    const COURSES_URL =
        "https://school-system-final-project.herokuapp.com/api/v1/course/get-all/";
    const DELETE_COURSES =
        "https://school-system-final-project.herokuapp.com/api/v1/course/delete/"


    let config = {
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("access"))}`,
        },
    };

    useEffect(() => {
        axios
            .get(COURSES_URL, config)
            .then((res) => {
                setallCourses(res.data)


            }
            )
            .catch((err) => {
            })

    })

    const handelDeleteCousres = (item) => {
        axios
            .delete(DELETE_COURSES + item.pk, config)
            .then((res) => {
                alert("Deleted")
            })

    }

    function handelOpenCourseUsers(item){
        router.push("/admin-studentList")
        
        
    }





    const HandleOpen = (arg) => {
        const menu = document.getElementById(arg);
        menu.classList.toggle('hidden');
    }

    return (
        <section className='mt-[3%] ml-[2%]'>
            {allCourses && allCourses.map((item, index) => {
                
                    return (
                        
                        <section className='mt-[1%]'>
                        <div >
                            <button onClick={() => HandleOpen(index)} class=" w-[10%] px-4 py-2 flex font-medium text-darker">
                                {item.name}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-[6%] mt-[2%]">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>

                            </button>

                        
                            <div id={index} class="  flex flex-wrap  rounded-lg py-4 mt-2 ">
                                {allCourses && allCourses.map((c) => {
                                    if (item.name == c.name) {
                                        return (
                                            <div  onClick={()=>handelOpenCourseUsers(item)}   class="flex items-center ml-[1%]   py-3 w-[15%]  bg-lighter text-[#FFFFFF] rounded-lg " role="alert">
                                                <div style={{
                                                    marginButton: 0
                                                }} class="text-sm  text-center  ml-[5%] ">
                                                    <p className='h-full mb-0'>{c.grade_level}</p>
                                                </div>
                                                <div class="flex items-center ml-auto space-x-2">
                                                    <button onClick={() => handelDeleteCousres(c)} type="button" class=" text-draker  rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 " data-dismiss-target="#toast-undo" aria-label="Close">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>

                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                            </div>

                        </div>

                            
                    </section>
                )
            })}

            </section>
        )
    }
    