const DoctorCard = ({ id, docName, docPosition, docDesc, docNumber, docImg }) => {
    console.log("id", id);
    console.log("docName", docName); 
    console.log("docPosition", docPosition);
    console.log("docDesc", docDesc);
    console.log("docNumber", docNumber);
    console.log("docImg", docImg);
    return (
        <div
        className="h-auto max-w-full flex flex-col rounded-lg bg-amber-50 text-black shadow-secondary-1 dark:bg-surface-dark md:max-w-1xl md:flex-row mt-2 mx-4 md:mx-8">
        <img
            className="w-full h-48 object-cover rounded-t-lg md:w-48 md:h-auto md:rounded-l-lg"
            src={docImg}
            alt={docName} />
        <div className="flex flex-col justify-start p-4 md:p-6">
            <h5 className="mb-1 text-lg font-semibold text-black md:text-xl">{docName}</h5>
            <p className="text-sm text-black">{docPosition}</p>
            <p className="mb-2 mt-2 text-sm md:text-base text-black">{docDesc}</p>
            <button
                className="mt-2 bg-yellow-200 text-black font-semibold py-2 px-4 border border-yellow-800 hover:border-transparent rounded w-full max-w-xs sm:max-w-sm"
                onClick={() => window.location.href = `tel:${docNumber}`}
            >
                Contact: {docNumber}
            </button>
        </div>
    </div>
    
    
    
    
    );
}

export default DoctorCard;