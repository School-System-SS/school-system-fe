
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {data} from './data'


export default function Assignment() {


    return (
        <section className='w-full h-full'>
            <section className='w-[70%] h-full m-[10%]'>
                <div className="relative overflow-x-auto shadow-md sm:rounded-xl border ">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 text-center">
                        <thead className="text-xs text-[#FFFFFF] uppercase dark:text-gray-400 border bg-darker">
                            <tr>
                                <th scope="col" className="px-6 py-3 hover:bg-gray-50 dark:bg-gray-800 border">
                                    Assignment Name
                                </th>
                                <th scope="col" className="px-6 py-3 border">
                                    Submissions
                                </th>
                                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800 border">
                                    Grade
                                </th>
                                <th scope="col" className="px-6 py-3 border">
                                    Due Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {data && data.map((item) => {
                                console.log(item);
                                return (
                                    <tr className="border border-gray-200 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800 border">
                                            {item.assignmentName}
                                        </th>
                                        <td className="px-6 py-4 border">
                                            {item.isSubmited ? 
                                            <h6>Submitted</h6>
                                            :
                                            <h6> - </h6>
                                            }
                                        </td>
                                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border">
                                            {item.isSubmited ? 
                                        <h6>
                                            {item.grade}
                                        </h6>    
                                        :
                                        <h6> - </h6>                                        
                                        }
                                        </td>
                                        <td className="px-6 py-4 border">
                                            {item.dueDate}
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>

            </section>
        </section>
    )
}
