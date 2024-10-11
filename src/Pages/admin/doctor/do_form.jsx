import { useState, useEffect } from 'react';
import { IoIosClose } from "react-icons/io";
import axios from 'axios';

export default function DoctorForm({ doctor, closeForm }) {
    const [loading, setLoading] = useState(false);
    const [formDoctor, setFormDoctor] = useState({
        docName: '',
        docPosition: '',
        docDesc: '',
        docNumber: '',
        docImg: '',
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (doctor) {
            setFormDoctor(doctor);
        }
    }, [doctor]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormDoctor({
            ...formDoctor,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formDoctor.docName) newErrors.docName = 'Name is required';
        if (!formDoctor.docPosition) newErrors.docPosition = 'Position is required';
        if (!formDoctor.docDesc) newErrors.docDesc = 'Description is required';
        if (!formDoctor.docNumber) newErrors.docNumber = 'Contact number is required';
        if (!formDoctor.docImg) newErrors.docImg = 'Image URL is required';
        return newErrors;
    };

    const handleSave = () => {
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        saveDoctor({ ...doctor, ...formDoctor });
    };

    async function saveDoctor(doctor) {
        try {
            setLoading(true);
            let response;
            if (!doctor._id) {
                response = await axios.post('https://nutricarebe-ffhmggb4gefgbwch.canadacentral-01.azurewebsites.net/doctor/create', formDoctor);
            } else {
                response = await axios.put('https://nutricarebe-ffhmggb4gefgbwch.canadacentral-01.azurewebsites.net/doctor/update/' + doctor._id, formDoctor);
            }
            console.log(response);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
            closeForm();
        }
    }

    return (
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="flex justify-between mb-8 align-middle">
                <h2 className="text-2xl font-bold mb-6 text-center">Doctor Form</h2>
                <button className="py-2 px-6 rounded-full shadow-md flex align-middle" onClick={closeForm}><IoIosClose size={40}/></button>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Name:</label>
                <input
                    type="text"
                    name="docName"
                    value={formDoctor.docName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.docName && <p className="text-red-500">{errors.docName}</p>}
            </div>
            
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Position:</label>
                <input
                    type="text"
                    name="docPosition"
                    value={formDoctor.docPosition}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.docPosition && <p className="text-red-500">{errors.docPosition}</p>}
            </div>
            
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Description:</label>
                <input
                    type="text"
                    name="docDesc"
                    value={formDoctor.docDesc}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.docDesc && <p className="text-red-500">{errors.docDesc}</p>}
            </div>
            
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Contact Number:</label>
                <input
                    type="number"
                    name="docNumber"
                    value={formDoctor.docNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.docNumber && <p className="text-red-500">{errors.docNumber}</p>}
            </div>
            
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Image URL:</label>
                <input
                    type="text"
                    name="docImg"
                    value={formDoctor.docImg}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.docImg && <p className="text-red-500">{errors.docImg}</p>}
            </div>
            
            <button onClick={handleSave} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                {loading ? 'Loading...' : 'Save'}
            </button>
        </div>
    );
}
