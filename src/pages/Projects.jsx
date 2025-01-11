import { useState } from 'react';

function Projects() {
  const [selectedYear, setSelectedYear] = useState('2024');
  
  const projects = {
    '2024': [
      { 
        title: 'Clean Water Initiative',
        description: 'Providing clean water solutions to rural areas',
        image: 'https://source.unsplash.com/random/800x600/?water'
      },
      { 
        title: 'Youth Leadership Program',
        description: 'Mentoring young leaders in our community',
        image: 'https://source.unsplash.com/random/800x600/?leadership'
      },
    ],
    '2023': [
      { 
        title: 'Food Drive',
        description: 'Collecting and distributing food to those in need',
        image: 'https://source.unsplash.com/random/800x600/?food'
      },
      { 
        title: 'Environmental Workshop',
        description: 'Education on sustainable practices',
        image: 'https://source.unsplash.com/random/800x600/?environment'
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Projects</h1>
      
      <div className="mb-8 flex justify-center">
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {Object.keys(projects).map(year => (
            <option key={year} value={year}>Year {year}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects[selectedYear].map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;