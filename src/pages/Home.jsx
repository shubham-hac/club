function Home() {
  return (
    <div className="w-full">
      <div className="text-center py-12 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Welcome to Rotaract Club</h1>
        <p className="text-xl text-gray-100">Empowering Youth Through Service and Leadership</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <h3 className="text-xl font-bold mb-2">Community Service</h3>
          <p className="text-gray-600">Making a difference in our local community through meaningful projects.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <h3 className="text-xl font-bold mb-2">Professional Development</h3>
          <p className="text-gray-600">Building leadership skills and professional networks.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <h3 className="text-xl font-bold mb-2">International Understanding</h3>
          <p className="text-gray-600">Promoting peace and cultural exchange worldwide.</p>
        </div>
      </div>

      <div className="text-center p-8 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8">Latest Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-bold mb-2">Upcoming Event</h3>
            <p className="text-gray-600">Join us for our next community service project this weekend!</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-bold mb-2">New Partnership</h3>
            <p className="text-gray-600">We're excited to announce our collaboration with local schools.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;