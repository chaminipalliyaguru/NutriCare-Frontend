import DoctorTable from "./do_list";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DoctorForm from "./do_form";

export default function DoctorAdmin() {
    const [loading, setLoading] = useState(true);
    const [doctors, setDoctors] = useState([]);
    const [error, setError] = useState(null);

    const [docPosition, setdocPosition] = useState('');

    const [showForm, setShowForm] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    async function getAll() {
        try {
            setLoading(true);
            const response = await axios.get('https://nutricarebe-ffhmggb4gefgbwch.canadacentral-01.azurewebsites.net/doctor/get-all');
            setDoctors(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    async function searchDoctor() {
        try {
            setLoading(true);
            if (docPosition === '') {
                return getAll();
            } else {
                const resp = await axios.get('https://nutricarebe-ffhmggb4gefgbwch.canadacentral-01.azurewebsites.net/doctor/search/' + docPosition);
                if (resp.data) setDoctors(resp.data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    async function deleteDoctor(doctor) {
        try {
            setLoading(true);
            if (window.confirm('Are you sure you want to delete this Doctor?')) {
                const response = await axios.delete('https://nutricarebe-ffhmggb4gefgbwch.canadacentral-01.azurewebsites.net/doctor/delete/' + doctor._id);
                console.log(response);
                getAll();
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getAll();
    }, []);

    useEffect(() => {
        searchDoctor();
    }, [docPosition]);

    useEffect(() => {
        if (showForm) {
            setSelectedDoctor(null);
        }
    }, [showForm]);

    useEffect(() => {
        if (selectedDoctor) {
            setShowForm(true);
            // scroll to top
            window.scrollTo(0, 0);
        }
    }, [selectedDoctor]);

    return (
        <>
            <div className="pt-20 px-12">
                <div className="flex justify-between mb-8">
                    <h2 className="text-3xl">Manage Doctors</h2>
                    <button className="py-2 px-6 bg-blue-gray-900 text-white rounded-md shadow-md flex align-middle" onClick={() => setShowForm(true)}>New Doctor</button>
                </div>
                {loading && <div>Loading...</div>}
                {error && <div>Error: {error.message}</div>}
                {showForm && <DoctorForm doctor={selectedDoctor}  closeForm={() => {
                    setShowForm(false)
                    getAll()
                }} />}
                <div className="my-3 bg-white border-1 shadow-md rounded-md p-4">
                    <input type="text" onChange={e => setdocPosition(e.target.value)} value={docPosition} placeholder="Search by Name" className="border-1 border-gray-300 rounded-md p-2" />
                </div>
                {!loading && <DoctorTable doctorList={doctors} selectDoctor={setSelectedDoctor} deleteDoctor={deleteDoctor} />}
            </div>
        </>
    )
}