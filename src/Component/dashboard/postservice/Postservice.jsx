import React, { useState, useRef, useEffect } from 'react';
import prop1 from "../../../assets/prop1.png";
import prop2 from "../../../assets/prop2.png";
import prop3 from "../../../assets/prop3.png";
import prop4 from "../../../assets/prop4.png";
import prop5 from "../../../assets/prop5.png";
import {  useNavigate } from 'react-router-dom';
import { LeaseForm } from '../services/lease/LeaseForm';

const PostPropertyForm = () => {
  

  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility
  const dropdownRef = useRef(null); // Reference to the dropdown menu
  const propertyData = {
    propertyTitle: 'Property Title',
    listingId: 'Add Listing ID',
    address: 'Enter complete address',
    price: 'Enter price',
    propertyType: 'Flat',
    status: 'Active',
    numberOfBedrooms: 3,
    numberOfBathrooms: 2,
    squareFootage: 33,
    yearBuilt: 2024,
    parking: 'Yes',
    utilities: 'Lorem',
    appliances: 'No',
    outdoorAreas: 'Yes',
    amenities: 'Yes',
    wheelchairRamp: 'Yes',
    managedBy: 'Owner',
    petsAllowed: 'Yes',
    smokingAllowed: 'Yes',
    neighborhoodFacts: 'No',
    unitTitle: 'Unit Title',
    city: 'Amsterdam',
    state: 'Lorem',
    zip: '82762',
    beds: 3,
    baths: 3
  };

  const  navigate=useNavigate()


  // Handle input changes for form fields
  

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };


  const handleClick = () => {
    // Navigate to the route where LeaseForm is rendered
    navigate('/lease'); // Replace with your actual path
  };
  const rental = () => {
    // Navigate to the route where LeaseForm is rendered
    navigate('/rental'); // Replace with your actual path
  };


  // Close dropdown when clicking outside of it
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  // Add event listener for click outside dropdown
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

 
  return (
    <div className="flex flex-col p-8 bg-white shadow-lg rounded-lg w-full max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Post a Service or Property</h2>
        <div className="flex items-center space-x-4">
          <span className="font-medium">Amanda Smith</span>
          <button className="text-gray-500 hover:text-gray-700"><svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0199 10.1391V7.55906C16.0199 4.23431 13.3247 1.53906 9.9999 1.53906C6.67515 1.53906 3.9799 4.23431 3.9799 7.55906L3.9799 10.1391C3.9799 12.9771 1.3999 13.6651 1.3999 15.2991C1.3999 16.7611 4.7539 17.8791 9.9999 17.8791C15.2459 17.8791 18.5999 16.7611 18.5999 15.2991C18.5999 13.6651 16.0199 12.9771 16.0199 10.1391Z" stroke="#9095A1" stroke-width="2.064" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M9.99973 19.5626C9.13027 19.5626 8.31327 19.5333 7.54443 19.4766C7.88084 20.5497 8.87514 21.28 9.99973 21.28C11.1243 21.28 12.1186 20.5497 12.455 19.4766C11.6862 19.5333 10.8692 19.5626 9.99973 19.5626Z" fill="#9095A1"/>
</svg>
</button>
         
        </div>
      </div>

      {/* Property Details Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Left Section */}
  <div className="p-4 border rounded-md space-y-4">
    <div className="flex items-center justify-between border-b pb-2">
      <h3 className="text-lg font-medium text-gray-700">Property Title</h3>
      <p className="text-gray-500">{propertyData.propertyTitle}</p>
    </div>

    <div className="flex items-center justify-between border-b pb-2">
      <h3 className="text-lg font-medium text-gray-700">Listing ID</h3>
      <p className="text-gray-500">{propertyData.listingId}</p>
    </div>

    <div className="flex items-center justify-between border-b pb-2">
      <h3 className="text-lg font-medium text-gray-700">Address</h3>
      <p className="text-gray-500">{propertyData.address}</p>
    </div>

    <div className="flex items-center justify-between border-b pb-2">
      <h3 className="text-lg font-medium text-gray-700">Price</h3>
      <p className="text-gray-500">{propertyData.price}</p>
    </div>

    <div className="flex items-center justify-between border-b pb-2">
      <h3 className="text-lg font-medium text-gray-700">Property Type</h3>
      <p className="text-gray-500">{propertyData.propertyType}</p>
    </div>

    <div className="flex items-center justify-between border-b pb-2">
      <h3 className="text-lg font-medium text-gray-700">Status</h3>
      <p className="text-gray-500">{propertyData.status}</p>
    </div>

    <div className="flex items-center justify-between border-b pb-2">
      <h3 className="text-lg font-medium text-gray-700">Number of Bedrooms</h3>
      <p className="text-gray-500">{propertyData.numberOfBedrooms}</p>
    </div>
  </div>

  {/* Middle Section */}
  <div className="p-4 border rounded-md space-y-4">
    <div className="flex items-center justify-between border-b pb-2">
      <h3 className="text-lg font-medium text-gray-700">Number of Bathrooms</h3>
      <p className="text-gray-500">{propertyData.numberOfBathrooms}</p>
    </div>

    <div className="flex items-center justify-between border-b pb-2">
      <h3 className="text-lg font-medium text-gray-700">Square Footage</h3>
      <p className="text-gray-500">{propertyData.squareFootage}</p>
    </div>

    <div className="flex items-center justify-between border-b pb-2">
      <h3 className="text-lg font-medium text-gray-700">Year Built</h3>
      <p className="text-gray-500">{propertyData.yearBuilt}</p>
    </div>

    <div className="flex items-center justify-between border-b pb-2">
      <h3 className="text-lg font-medium text-gray-700">Parking</h3>
      <p className="text-gray-500">{propertyData.parking}</p>
    </div>

    <div className="flex items-center justify-between border-b pb-2">
      <h3 className="text-lg font-medium text-gray-700">Utilities</h3>
      <p className="text-gray-500">{propertyData.utilities}</p>
    </div>

    <div className="flex items-center justify-between border-b pb-2">
      <h3 className="text-lg font-medium text-gray-700">Appliances</h3>
      <p className="text-gray-500">{propertyData.appliances}</p>
    </div>
  </div>

  {/* Right Section */}
  <div className="p-4 border rounded-md space-y-4">
    <div className="flex items-center justify-between border-b pb-2">
      <h3 className="text-lg font-medium text-gray-700">Outdoor Areas</h3>
      <p className="text-gray-500">{propertyData.outdoorAreas}</p>
    </div>

    <div className="flex items-center justify-between border-b pb-2">
      <h3 className="text-lg font-medium text-gray-700">Amenities</h3>
      <p className="text-gray-500">{propertyData.amenities}</p>
    </div>

    <div className="flex items-center justify-between border-b pb-2">
      <h3 className="text-lg font-medium text-gray-700">Wheelchair Ramp</h3>
      <p className="text-gray-500">{propertyData.wheelchairRamp}</p>
    </div>

    <div className="flex items-center justify-between border-b pb-2">
      <h3 className="text-lg font-medium text-gray-700">Managed By</h3>
      <p className="text-gray-500">{propertyData.managedBy}</p>
    </div>

    <div className="flex items-center justify-between border-b pb-2">
      <h3 className="text-lg font-medium text-gray-700">Pets Allowed</h3>
      <p className="text-gray-500">{propertyData.petsAllowed}</p>
    </div>

    <div className="flex items-center justify-between border-b pb-2">
      <h3 className="text-lg font-medium text-gray-700">Smoking Allowed</h3>
      <p className="text-gray-500">{propertyData.smokingAllowed}</p>
    </div>

    <div className="flex items-center justify-between border-b pb-2">
      <h3 className="text-lg font-medium text-gray-700">Neighborhood Facts</h3>
      <p className="text-gray-500">{propertyData.neighborhoodFacts}</p>
    </div>
  </div>
</div>

{/* Bottom Section for Unit Info */}
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="p-4 border rounded-md">
    <div className="flex items-center justify-between border-b pb-2">
      <h3 className="text-lg font-medium text-gray-700">Unit Title</h3>
      <p className="text-gray-500">{propertyData.unitTitle}</p>
    </div>

    <div className="flex items-center justify-between border-b pb-2">
      <h3 className="text-lg font-medium text-gray-700">City</h3>
      <p className="text-gray-500">{propertyData.city}</p>
    </div>

    <div className="flex items-center justify-between border-b pb-2">
      <h3 className="text-lg font-medium text-gray-700">State</h3>
      <p className="text-gray-500">{propertyData.state}</p>
    </div>

    <div className="flex items-center justify-between border-b pb-2">
      <h3 className="text-lg font-medium text-gray-700">ZIP Code</h3>
      <p className="text-gray-500">{propertyData.zip}</p>
    </div>
  </div>

  <div className="p-4 border rounded-md">
    <div className="flex items-center justify-between border-b pb-2">
      <h3 className="text-lg font-medium text-gray-700">Bedrooms</h3>
      <p className="text-gray-500">{propertyData.beds}</p>
    </div>

    <div className="flex items-center justify-between border-b pb-2">
      <h3 className="text-lg font-medium text-gray-700">Baths</h3>
      <p className="text-gray-500">{propertyData.baths}</p>
    </div>
  </div>
</div>
<div className='mb-8'>
    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="">Property location</label>
    <div class="w-full">

   
  </div>


</div>
      {/* Property Pictures/Videos Section */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">Property Pictures/Videos</label>
        <div className="flex space-x-4">
          <div className="w-1/4">
            <img src={prop1} alt="Property 1" className="w-full h-auto rounded-md" />
          </div>
          <div className="w-1/4">
            <img src={prop2} alt="Property 2" className="w-full h-auto rounded-md" />
          </div>
          <div className="w-1/4">
            <img src={prop3} alt="Property 3" className="w-full h-auto rounded-md" />
          </div>
          <div className="w-1/4">
            <img src={prop4} alt="Property 4" className="w-full h-auto rounded-md" />
          </div>
          <div className="w-1/4">
            <img src={prop5} alt="Property 5" className="w-full h-auto rounded-md" />
          </div>
        </div>
      </div>

      {/* Property Action Dropdown */}
      <div className="relative items-end justify-end flex">
        <button
          onClick={toggleDropdown}
          className=" p-2 mt-2 bg-violet-700 justify-end items-end text-white font-semibold rounded-md"
        >
          Action
        </button>
        {showDropdown && (
          <div ref={dropdownRef} className="absolute w-full mt-2 bg-white shadow-lg rounded-md z-10">
            <button
             onClick={handleClick}
              className="w-full p-2 text-left hover:bg-gray-200"
            >
              Lease
            </button>
            <button
             onClick={rental}
              className="w-full p-2 text-left hover:bg-gray-200"
            >
              Rental
            </button>
          </div>
        )}
      </div>
</div>
    
    
  );
};

export default PostPropertyForm;