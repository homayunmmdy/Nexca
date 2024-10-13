import { PriceDataType } from '@/types/entities'
import Link from 'next/link'
import React from 'react'

export const PriceItem = ({data}: {data : PriceDataType}) => {
  return (
    <>
    <div className="mx-auto flex max-w-lg space-y-8 items-start flex-col rounded-3xl border border-indigo-400 hover:border-indigo-700 p-6 xl:p-8">
              <h3 className="text-lg font-normal ">{data.planType}</h3>
              <div className="my-8 flex items-baseline justify-center ">
                <span className="mr-2 text-5xl font-extrabold">${data.price}</span>
                <span>/month</span>
              </div>

              <p className="font-light sm:text-sm">
                {data.description}
              </p>
              <Link href="/admin" className="cursor-pointer bg-gray-900 w-full rounded-md  p-3 text-center text-sm font-semibold text-white shadow-sm  hover:-translate-y-1">
                Get started
              </Link>
              <ul
                role="list"
                className="mb-8 space-y-4 text-left  text-sm"
              >
                {data.features?.map((feature: string, index: string | number) => (

                <li key={index} className="flex items-center space-x-3 ">
                  <svg
                    className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>{feature}</span>
                </li>
                ))}
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Unlimited widgets</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>All analytics features</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Priority support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Lifetime updates</span>
                </li>
              </ul>
            </div>
    </>
  )
}
