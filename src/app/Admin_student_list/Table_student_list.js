
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

                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>

            </section>


        </section>

    </>)
}