import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function NewPage() {
  const [formData, setFormData] = useState(null);

  // Fetch data from localStorage when component mounts
  useEffect(() => {
    const savedData = localStorage.getItem('form');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  if (!formData) {
    return <div>Loading... or no data found</div>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-orange-600 mb-6">Submitted Form Data</h1>
      
      <div className="space-y-4">
        {/* Display each field */}
        <div>
          <h3 className="font-semibold">Email:</h3>
          <p>{formData.email}</p>
        </div>

        <div>
          <h3 className="font-semibold">Address:</h3>
          <p>{formData.address}</p>
          {formData.address2 && <p>{formData.address2}</p>}
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold">City:</h3>
            <p>{formData.city}</p>
          </div>
          <div>
            <h3 className="font-semibold">State:</h3>
            <p>{formData.state}</p>
          </div>
          <div>
            <h3 className="font-semibold">Zip:</h3>
            <p>{formData.zip}</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Age:</h3>
          <p>{formData.age}</p>
        </div>

        <div>
          <h3 className="font-semibold">ID Proof:</h3>
          {formData.idProof ? (
            <p>
              {formData.idProof.name} ({formData.idProof.type}, {Math.round(formData.idProof.size / 1024)} KB)
            </p>
          ) : (
            <p>No file uploaded</p>
          )}
        </div>
      </div>

      <Link 
        to="/" 
        className="mt-6 inline-block bg-orange-500 !text-white py-2 px-4 rounded hover:bg-orange-600"
      >
        Back to Form
      </Link>
    </div>
  );
}

export default NewPage;