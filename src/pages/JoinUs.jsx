import { useState } from 'react';
import axios from 'axios';

function JoinUs() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    mobile: '',
    email: '',
    gender: '',
    pincode: '',
    role: '',
  });
  const [locationData, setLocationData] = useState(null);

  const handlePincodeChange = async (pincode) => {
    if (pincode.length === 6) {
      try {
        const response = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
        if (response.data[0].Status === 'Success') {
          setLocationData(response.data[0].PostOffice[0]);
        }
      } catch (error) {
        console.error('Error fetching pincode data:', error);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Join Us</h1>
      
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Age</label>
              <input
                type="number"
                required
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block mb-1 font-medium">Gender</label>
              <select
                required
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.gender}
                onChange={(e) => setFormData({...formData, gender: e.target.value})}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Mobile Number</label>
              <input
                type="tel"
                required
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.mobile}
                onChange={(e) => setFormData({...formData, mobile: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>
          
          <div>
            <label className="block mb-1 font-medium">Pincode</label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.pincode}
              onChange={(e) => {
                setFormData({...formData, pincode: e.target.value});
                handlePincodeChange(e.target.value);
              }}
            />
          </div>
          
          {locationData && (
            <div className="bg-gray-100 p-4 rounded">
              <p className="font-medium">Location Details:</p>
              <p>City: {locationData.District}</p>
              <p>State: {locationData.State}</p>
              <p>Area: {locationData.Name}</p>
            </div>
          )}
          
          <div>
            <label className="block mb-1 font-medium">What would you like to be?</label>
            <select
              required
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
            >
              <option value="">Select Role</option>
              <option value="volunteer">Volunteer</option>
              <option value="member">Member</option>
              <option value="partner">Partner</option>
            </select>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default JoinUs;