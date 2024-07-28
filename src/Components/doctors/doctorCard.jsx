const DoctorCard = ({ id, docName, docPosition, docDesc, docNumber, docImg }) => {
    console.log("id", id);
    console.log("docName", docName); 
    console.log("docPosition", docPosition);
    console.log("docDesc", docDesc);
    console.log("docNumber", docNumber);
    console.log("docImg", docImg);
    return (
        <div
            className="h-36 flex flex-col rounded-lg bg-amber-50 text-black shadow-secondary-1 dark:bg-surface-dark md:max-w-1xl md:flex-row mt-2 ml-40 mr-36">
            <img
                className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg"
                src={docImg}
                alt={docName} />
            <div className="flex flex-col justify-start p-3">
                <h5 className="mb-0.5 text-xl font-semibold font-medium text-black">{docName}</h5>
                <p className="text-xs text-black">
                    {docPosition}
                </p>
                <p className="mb-2 mt-2 text-base text-black">
                    {docDesc}
                </p>
                <p className='font-semibold text-black'>Contact: {docNumber}</p>
            </div>
        </div>
    );
}

export default DoctorCard;