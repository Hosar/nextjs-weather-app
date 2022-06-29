import React from 'react'

export function Input({...props}) {
    return(
        <input
            {...props}
            type="text"
            className="
            form-control
            block
            px-4
            py-2
            text-xl
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
            placeholder="eg. 90001,us"
        />
    )
}
