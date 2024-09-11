import { Field, Formik } from 'formik';
import React from 'react'

function Updteuser({user}) {


    const handleSubmit = (second) => { 


        



     }
  return (
    <div><Formik
    initialValues={{
        image: user?.user?.image?.url,
        name: user?.user?.name,
        address: user?.user?.address,
        phone: user?.user?.phone,
        email: user?.user?.email,
    }}
    validationSchema={SignupSchema}
    onSubmit={handleSubmit}
>
    {({ errors, touched }) => {
        return (
            <Form>
                <div className=" mt-5 md:mt-0 md:col-span-2">
                    <div className="bg-white space-y-6">
                        <div>
                            <label
                                htmlFor="image"
                                className="block text-gray-500 font-medium text-sm leading-none mb-2"
                            >
                                Photo
                            </label>
                            <div className="mt-1 flex items-center">
                                <div className="w-full text-center">
                                    <label
                                        tabIndex={0}
                                        className="flex flex-col w-full h-fit px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer "
                                    >
                                        {' '}
                                        {selectedImage ? (
                                            <img
                                                src={selectedImage}
                                                alt="Selected"
                                                className="max-h-32 max-w-32 mx-auto"
                                            />
                                        ) : (
                                            <>
                                                <span className="mx-auto flex justify-center">
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="none"
                                                        strokeWidth="2"
                                                        viewBox="0 0 24 24"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="text-3xl text-emerald-500"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <polyline points="16 16 12 12 8 16"></polyline>
                                                        <line x1="12" y1="12" x2="12" y2="21"></line>
                                                        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                                        <polyline points="16 16 12 12 8 16"></polyline>
                                                    </svg>
                                                </span>
                                                <p className="text-sm mt-2 text-black">
                                                    Drag your image here
                                                </p>
                                                <em className="text-xs text-gray-400">
                                                    Only *.jpeg and *.png images will be accepted
                                                </em>
                                            </>
                                        )}
                                        {/* <Field
                                            id="image"
                                            name="image"
                                            accept="image/jpeg, image/png, image/svg+xml"
                                            type="file"
                                            tabIndex="-1"
                                            style={{ display: 'none' }}
                                            autoComplete="off"
                                            onChange={handleImageChange}
                                        /> */}
                                    </label>

                                    <aside className="flex flex-row flex-wrap mt-4">
                                        <div className="inline-flex border rounded-md border-gray-100 w-24 max-h-24 p-2">
                                            <p className="text-semibold text-sm">
                                                {selectedFileName && selectedFileName}
                                            </p>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    {/* <div className="mt-10 sm:mt-0">
                        <div className="md:grid-cols-6 md:gap-6">
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <div className="lg:mt-6 mt-4 bg-white">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="name"
                                                className="block text-gray-500 font-medium text-sm leading-none mb-2"
                                            >
                                                Full Name
                                            </label>
                                            <div className="relative">
                                                <Field
                                                    id="name"
                                                    name="name"
                                                    placeholder="Full Name"
                                                    className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                                                />
                                            </div>
                                            <span className="text-red-400 text-sm mt-2">
                                                {errors.name && touched.name && (
                                                    <div>{errors.name}</div>
                                                )}
                                            </span>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="address"
                                                className="block text-gray-500 font-medium text-sm leading-none mb-2"
                                            >
                                                Your Address
                                            </label>
                                            <div className="relative">
                                                <Field
                                                    id="address"
                                                    name="address"
                                                    placeholder="Your Address"
                                                    className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                                                />
                                            </div>
                                            <span className="text-red-400 text-sm mt-2">
                                                {errors.address && touched.address && (
                                                    <div>{errors.address}</div>
                                                )}
                                            </span>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="phone"
                                                className="block text-gray-500 font-medium text-sm leading-none mb-2"
                                            >
                                                Phone/Mobile
                                            </label>
                                            <div className="relative">
                                                <Field
                                                    id="phone"
                                                    name="phone"
                                                    placeholder="Your Mobile Number"
                                                    className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                                                />
                                            </div>
                                            <span className="text-red-400 text-sm mt-2">
                                                {errors.phone && touched.phone && (
                                                    <div>{errors.phone}</div>
                                                )}
                                            </span>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="email"
                                                className="block text-gray-500 font-medium text-sm leading-none mb-2"
                                            >
                                                Email Address
                                            </label>
                                            <div className="relative">
                                                <Field
                                                    id="email"
                                                    name="email"
                                                    placeholder="Your Email"
                                                    className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"
                                                />
                                            </div>
                                            <span className="text-red-400 text-sm mt-2">
                                                {errors.email && touched.email && (
                                                    <div>{errors.email}</div>
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3 mt-5 text-right">
                                        <button
                                            type="submit"
                                            className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-emerald-500 text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-emerald-600 h-12 mt-1 text-sm lg:text-sm w-full sm:w-auto"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? 'Updating Profile' : 'Update Profile'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </Form>
        );
    }}
</Formik></div>
  )
}

export default Updteuser