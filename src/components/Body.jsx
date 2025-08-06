import React, { useState, useCallback } from 'react';
import AgeSliderInput from './AgeSliderInput';
import Sidebar from './Sidebar';
import File from './File';
import Button from './Button';
import Navbar from './Navbar';
function Body() {  
  const [form, setForm] = useState({
    email: "",
    password: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    age: 50,
    termsChecked: false,
    idProof: null
  },[]);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    termsChecked: "",
    idProof: ""
  },[]);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const validateZip = (zip) => {
    return /^\d{5,6}(?:[-\s]\d{4})?$/.test(zip);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    
    setForm(prev => ({
      ...prev,
      [name]: fieldValue
    }));

    // Validate on change
    let error = "";
    if (value.trim() === "" && type !== 'checkbox' && name !== 'address2') {
      error = "This field is required";
    } else {
      switch (name) {
        case 'email':
          error = !validateEmail(value) ? "Please enter a valid email address" : "";
          break;
        case 'password':
          error = !validatePassword(value) ? "Password must be at least 8 characters" : "";
          break;
        case 'zip':
          error = !validateZip(value) ? "Please enter a valid zip code" : "";
          break;
        default:
          break;
      }
    }

    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {...errors};

    // Required fields validation
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!form.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (!validatePassword(form.password)) {
      newErrors.password = "Password must be at least 8 characters";
      valid = false;
    }

    if (!form.address.trim()) {
      newErrors.address = "Address is required";
      valid = false;
    }
              
    if (!form.city.trim()) {
      newErrors.city = "City is required";
      valid = false;
    }

    if (!form.state) {
      newErrors.state = "State is required";
      valid = false;
    }

    if (!form.zip) {
      newErrors.zip = "Zip code is required";
      valid = false;
    } else if (!validateZip(form.zip)) {
      newErrors.zip = "Please enter a valid zip code";
      valid = false;
    }

    if (!form.termsChecked) {
      newErrors.termsChecked = "You must accept the terms and conditions";
      valid = false;
    }

    if (!form.idProof) {
      newErrors.idProof = "ID proof is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Prepare form data for console output
      const formData = {
        ...form,
        idProof: form.idProof ? {
          name: form.idProof.name,
          size: form.idProof.size,
          type: form.idProof.type
        } : null
      };
      
      console.log("form =", formData);
      localStorage.setItem('form', JSON.stringify(formData));
      console.log("form.localstorage =", JSON.parse(localStorage.getItem('form')));
      
      // Form is valid, proceed with submission
      alert("Form submitted successfully!");
    } else {
      // Form is invalid, scroll to first error
      const firstErrorField = document.querySelector('[aria-invalid="true"]');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };
      
       
  // Handler for age changes from AgeSliderInput
 const handleAgeChange = useCallback((newAge) => {
  setForm(prev => ({
    ...prev,
    age: newAge
  }));
}, []);
  // Handler for file upload changes
  const handleFileChange = (file) => {
    setForm(prev => ({
      ...prev,
      idProof: file
    }));
    setErrors(prev => ({
      ...prev,
      idProof: ""
    }));
  };

  // Handler for terms checkbox
  const handleTermsChange = useCallback((isChecked) => {
  setForm(prev => ({ ...prev, termsChecked: isChecked }));
  setErrors(prev => ({ ...prev, termsChecked: "" }));
}, []);
 
  return (

    <div>
      <Navbar/>
    <div className='flex min-h-screen bg-gray-50'>
      <Sidebar/>
      
      <div className="flex-1 flex flex-col items-center p-6 lg:p-10">
        <div className="w-full max-w-2xl">
          {/* Header Section */}
          <div className='mb-8 text-center'>
            <h2 className='text-3xl font-bold text-orange-600 mb-2'>Personal Information</h2>
            <p className='text-orange-500'>Please fill out the form below to complete your registration</p>
          </div>
          
          {/* Form Container */}
          <form className="bg-white rounded-xl shadow-lg overflow-hidden" onSubmit={handleSubmit} noValidate>
            <div className="p-8 space-y-6">
              {/* Email & Password Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className='text-orange-600 font-medium'>Email*</label>
                  <input 
                    className={`border ${errors.email ? 'border-red-500' : 'border-orange-200'} rounded-lg p-3 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all`}
                    type="email" 
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                    required
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                
                <div className="flex flex-col space-y-2">
                  <label className='text-orange-600 font-medium'>Password*</label>
                  <input 
                    className={`border ${errors.password ? 'border-red-500' : 'border-orange-200'} rounded-lg p-3 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all`}
                    type="password" 
                    name="password"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={handleChange}
                    aria-invalid={!!errors.password}
                    required
                  />
                  {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>
              </div>

              {/* Address Section */}
              <div className="space-y-6">
                <div className="flex flex-col space-y-2">
                  <label className='text-orange-600 font-medium'>Address*</label>
                  <input 
                    className={`border ${errors.address ? 'border-red-500' : 'border-orange-200'} rounded-lg p-3 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all`}
                    type="text" 
                    name="address"
                    placeholder="1234 Main St"
                    value={form.address}
                    onChange={handleChange}
                    aria-invalid={!!errors.address}
                    required
                  />
                  {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                </div>
                
                <div className="flex flex-col space-y-2">
                  <label className='text-orange-600 font-medium'>Address 2 (Optional)</label>
                  <input 
                    className='border border-orange-200 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all' 
                    type="text" 
                    name="address2"
                    placeholder="Apartment, studio, or floor"
                    value={form.address2}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              {/* City, State, Zip Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className='text-orange-600 font-medium'>City*</label>
                  <input 
                    className={`border ${errors.city ? 'border-red-500' : 'border-orange-200'} rounded-lg p-3 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all`}
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    aria-invalid={!!errors.city}
                    required
                  />
                  {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                </div>
                
                <div className="flex flex-col space-y-2">
                  <label className='text-orange-600 font-medium'>State*</label>
                  <select 
                    className={`border ${errors.state ? 'border-red-500' : 'border-orange-200'} rounded-lg p-3 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all appearance-none bg-white`}
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    aria-invalid={!!errors.state}
                    required
                  >
                    <option value="">Select state</option>
                    <option value="new delhi">New Delhi</option>
                    <option value="new york">New York</option>
                    <option value="madrid">Madrid</option>
                    <option value="berlin">Berlin</option>
                    <option value="tokyo">Tokyo</option>
                    <option value="lisbon">Lisbon</option>
                  </select>
                  {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
                </div>
                
                <div className="flex flex-col space-y-2">
                  <label className='text-orange-600 font-medium'>Zip Code*</label>
                  <input 
                    className={`border ${errors.zip ? 'border-red-500' : 'border-orange-200'} rounded-lg p-3 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all`}
                    type="text"
                    name="zip"
                    value={form.zip}
                    onChange={handleChange}
                    aria-invalid={!!errors.zip}
                    required
                  />
                  {errors.zip && <p className="text-red-500 text-sm">{errors.zip}</p>}
                </div>
              </div>
              
              {/* Terms & File Upload */}
              <File 
                onFileChange={handleFileChange}
                onTermsChange={handleTermsChange}
                initialTermsChecked={form.termsChecked}
                error={errors.idProof || errors.termsChecked}
              />
              {errors.idProof && <p className="text-red-500 text-sm">{errors.idProof}</p>}
              {errors.termsChecked && <p className="text-red-500 text-sm">{errors.termsChecked}</p>}
              
              {/* Age Slider */}
              <AgeSliderInput 
                initialAge={form.age}
                onAgeChange={handleAgeChange}
              />
              
              {/* Submit Button */}
              <div className="pt-6">
                <button 
                  className='w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-6 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold text-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2' 
                  type="submit"
                >
                  Complete Registration
                </button>
              </div>
            </div>
          </form> 
           <Button/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Body;