'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function CreateCourse(props) {

    // const [users, setUsers] = useState('');
    const router = useRouter();

    // let accesstoken = JSON.parse(localStorage.getItem('access')) || 0
    let config = {
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('access'))}`
        }
    }

    useEffect(() => {
        const URLUSERS = "https://school-system-final-project.herokuapp.com/account/getUsers/"
        axios
            .get(URLUSERS, config)
            .then((res) => {
                // res.data.map((item)=>{
                //     let obj = {
                //       "id":item.id,
                //       "username": item.username,
                //       "role": item.role,
                //     }
                setUsers(res.data);

                //   })
            })
            .catch((error) => {
                updateToken();
                router.refresh();
            })

    }, [])

    const URL =
        "https://school-system-final-project.herokuapp.com/course/create/";

    const handleCreateCourse = (e) => {
        e.preventDefault();
        console.log(users);
        // let body = {
        //     name: e.target.name.value,
        //     user: e.target.user.value,
        //     time: e.target.time.value,
        //     classes: e.target.classes.value,
        // };
        // axios
        //     .post(URL, body)
        //     .then((res) => {
        //         alert(`${body["username"]} is added.`);
        //     })
        //     .catch((err) => {
        //         alert(`ERROR`);
        //         updateToken();
        //         handleCreateCourse();
        //     });
    };
    const URLTOKEN = "https://school-system-final-project.herokuapp.com/api/token/refresh/";

    const updateToken = () => {
        let body = {
            refresh: JSON.parse(localStorage.getItem('refresh'))
        };

        axios
            .post(URL, body, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('access'))}`
                }
            })
            .then((res) => {
                alert(`${body["name"]} is added.`);
            })
            .catch((err) => {
                router.refresh();
                handleCreateCourse();
                alert("From handleCreateCourse");
            });
    };
    // const URLTOKEN = "https://school-system-final-project.herokuapp.com/api/token/refresh/";

    async function updateToken() {
        // let body = {
        //     refresh: JSON.parse(localStorage.getItem('refresh'))
        // };

        // let res = await axios.post(URLTOKEN, body)
        // localStorage.setItem("refresh", JSON.stringify(res.data["refresh"]));

    }

    return (
        <>
            <div className="flex items-center justify-center p-12 admin-grid-1">
                <div className="mx-auto w-full max-w-[550px]">
                <h2 className="flex items-center justify-center p-6 text-xl font-bold">
        Create Course
      </h2>
      <section className="flex flex-col justify-center min-h-screen py-6 bg-center bg-cover bg-fixedbg-gray-100 bg-form-pattern mb-[40%] bg- sm:py-12" >
                <section className="relative py-3 sm:max-w-xl sm:mx-6 ">
                    
                    <section className="relative px-4 py-10 shadow-inner shadow-lighter sm:rounded-3xl sm:p-20 ">
                        <section className="max-w-md mx-auto">
                            
                            <section className="sectionide-y sectionide-lighter"></section>
      
                    <form
                        onSubmit={handleCreateCourse}
                    >
                        <div className="mb-3">
                            <label
                                for="name"
                                className="block mb-2 text-base font-medium text-darker"
                            >
                                Course Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Course Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                        </div>
                        {/* <div className="mb-5">
                        <div className="mb-3">
                            <label
                                for="email"
                                className="block mb-2 text-base font-medium text-darker"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                name="user"
                                id="user"
                                placeholder="Username"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"

                            />
                        </div>
                        <div className="mb-3">
                        </div> */}
                        <div className="mb-5">
                            <label
                                for="subject"
                                className="block mb-2 text-base font-medium text-darker"
                            >
                                Class Time
                            </label>
                            <input
                                type="time"
                                name="time"
                                id="time"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                onChange={(e) => console.log(e)}

                            />
                        </div>
                        <div className="mb-3">
                            <label
                                for="message"
                                className="block mb-2 text-base font-medium text-darker"
                            >
                                class No.
                            </label>
                            <input
                                type="number"
                                name="classes"
                                id="classes"
                                placeholder="class No."
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"

                            />
                        </div>






                        <div>
                            <button
className="w-full px-8 py-2 mt-2 text-base font-semibold text-white rounded-md outline-none hover:shadow-form bg-main hover:bg-lighter"                            >
                                Create New Course
                            </button>
                        </div>
                    </form>
                    </section>
                    </section>
                    </section>
                    </section>
                    
                    

                </div>
            </div>
        </>
    );
}
