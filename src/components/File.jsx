import React, { useState, useEffect } from 'react';

function File({ onFileChange, onTermsChange, initialTermsChecked }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [termsChecked, setTermsChecked] = useState(initialTermsChecked);

  // Notify parent when terms change
useEffect(() => {
  onTermsChange(termsChecked);
}, [termsChecked, onTermsChange]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ['application/pdf', 'image/png', 'image/jpeg'];
      const maxSize = 5 * 1024 * 1024; 
      
      if (!validTypes.includes(file.type)) {
        alert('Please upload a PDF, PNG, or JPG file');
        return;
      }
      
      if (file.size > maxSize) {
        alert('File size exceeds 5MB limit');
        return;
      }
      
      setSelectedFile(file);
      onFileChange(file);
    }
  };

  return (
    <div className="space-y-6 pt-2">
      {/* Terms Checkbox */}
      <div className="flex items-start space-x-3">
        <input 
          id="terms-check"
          className='mt-1 h-5 w-5 text-orange-500 rounded focus:ring-orange-400' 
          type="checkbox" 
          checked={termsChecked}
          onChange={(e) => setTermsChecked(e.target.checked)}
          required
        />
        <label htmlFor="terms-check" className='text-orange-600'>
          I agree to the <span className="font-semibold">terms and conditions</span> and <span className="font-semibold">privacy policy</span>
        </label>
      </div>
      
      {/* File Upload */}
      <div className="flex flex-col space-y-2">
        <label className='text-orange-600 font-medium'>Upload ID Proof</label>
        <div className="flex items-center space-x-4">
          <label className="flex-1 border-2 border-dashed border-orange-200 rounded-lg p-4 text-center cursor-pointer hover:bg-orange-50 transition-colors">
            <input 
              type="file" 
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf,.png,.jpg,.jpeg"
            />
            {selectedFile ? (
              // tells me about the size of the file
              <div className="text-orange-500">
                <p className="font-medium">{selectedFile.name}</p>
               
                <p className="text-xs text-orange-400 mt-1">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            ) : (
              <>
                <span className="text-orange-500">Click to upload or drag and drop</span>
                <p className="text-xs text-orange-400 mt-1">PDF, PNG, JPG (Max. 5MB)</p>
              </>
            )}
          </label>
        </div>
      </div>
    </div>
  );
}

export default File;