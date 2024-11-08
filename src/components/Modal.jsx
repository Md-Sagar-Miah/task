import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modal = ({ handleModalOpen }) => {
    const [files, setFiles] = useState([])
    const handleFileUpload = (e) => {
        e.preventDefault()
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append("files", files[i])
        }

        fetch("http://localhost:4000/api/upload/", {
            method: "POST",
            body: formData
        }).then(res => {
            if (res.ok) {
                toast.success("File uploaded.")
                setFiles([])
            }
        }).catch((error) => {
            toast.error(error.toString())

        })

    }
    return (
        <div className="flex min-h-screen items-center justify-center p-4 text-slate-400 bg-slate-300" >
            <div className="w-full max-w-md rounded-lg bg-white border ">
                <div className="p-6">
                    <form onSubmit={handleFileUpload}>
                        <div className="mb-4">
                            <label
                                htmlFor="file"
                                className="mb-1 block text-lg font-medium text-slate-700 "
                            >Upload Files</label>
                            <input
                                onChange={(e) => setFiles([...e.target.files])}
                                multiple
                                type="file"
                                id="file"
                                name="file"
                                required
                                className="w-full rounded-md border border-gray-600  px-3 py-2  shadow-sm "
                            />
                        </div>
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={handleModalOpen}
                                type="button"
                                className="rounded-md borde px-4 py-2 text-sm font-medium text-gray-300 bg-gray-500 hover:bg-gray-600  "
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                            >
                                Save
                            </button>

                        </div>
                    </form>

                    {files.length > 0 && (
                        <ul className="mt-5 text-slate-600">
                            {files.map((file, index) => {
                                const lastDotIndex = file.name.lastIndexOf(".");
                                const extension = file.name.slice(lastDotIndex + 1);
                                return (
                                    <li className='flex justify-between my-2 overflow-auto' key={index}>
                                        <span><span className='me-1'>{index + 1}.</span>{file.name} - {file.size} bytes</span>
                                        {['png', 'jpeg', 'jpg'].includes(extension) ? <img className=' h-5 w-5' src={URL.createObjectURL(file)} alt='file'></img> : <p>{extension}</p>}
                                    </li>
                                )
                            })}
                        </ul>
                    )}
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Modal
