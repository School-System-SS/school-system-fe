
export default function Table_student_list() {
    return (<>

        <section className="flex item-center">

            <section className='w-[70%] h-full m-[10%]'>
                <div className="relative overflow-x-auto shadow-md sm:rounded-xl border ">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 text-center">
                        <thead className="text-xs text-[#FFFFFF] dark:text-gray-400 border bg-darker">
                            <tr>
                                <th scope="col" className="px-6 py-3 hover:bg-gray-50 dark:bg-gray-800 border">
                                    Student  Name
                                </th>
                                <th scope="col" className="px-6 py-3 border">
                                    First Name
                                </th>
                                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800 border">
                                    Last Name
                                </th>
                                <th scope="col" className="px-6 py-3 border ">
                                    Email
                                </th>

                                <th scope="col" className="px-6 py-3 border">
                                    DOB
                                </th>
                                <th scope="col" className="px-6 py-3 border">
                                    Delete
                                </th>

                            </tr>
                        </thead>
                        <tbody>



                            <tr className=" border border-gray-200 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800 border">
                                    User Name
                                </th>
                                <td className="px-6 py-4 border">
                                    Name
                                </td>
                                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border">
                                    Email
                                </td>
                                <td className="px-6 py-4 border">
                                    DOB
                                </td>
                                <td className="px-6 py-4 border">
                                    DOB
                                </td>
                                <td className="px-6 py-4 border">
                                    <button className="bg-darker py-2 px-4 rounded text-[#FFFFFF] lg:mt-0 md:mt-2 lg:w-fit md:w-full max-[640px]:mt-2 max-[640px]:w-full sm:w-full hover:bg-lighter">Delete</button>
                                
                                    {/* <svg fill="none" stroke="currentColor" className="pl-4 w-10 flex justify-center" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                    </svg> */}
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>

            </section>


        </section>

    </>)
}