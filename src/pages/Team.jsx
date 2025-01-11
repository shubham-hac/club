import { useState } from 'react'

function Team() {
  const [selectedYear, setSelectedYear] = useState('2024')
  
  const teamMembers = {
    '2024': [
      { 
        name: 'John Doe',
        position: 'CEO',
        image: 'https://source.unsplash.com/random/800x600/?ceo'
      },
      { 
        name: 'Jane Smith',
        position: 'COO',
        image: 'https://source.unsplash.com/random/800x600/?coo'
      },
      { 
        name: 'Mike Johnson',
        position: 'Lead Developer',
        image: 'https://source.unsplash.com/random/800x600/?developer'
      },
      { 
        name: 'Sarah Lee',
        position: 'UX Designer',
        image: 'https://source.unsplash.com/random/800x600/?designer'
      },
      { 
        name: 'Chris Brown',
        position: 'Marketing Manager',
        image: 'https://source.unsplash.com/random/800x600/?marketing'
      },
      { 
        name: 'Emily Davis',
        position: 'Content Strategist',
        image: 'https://source.unsplash.com/random/800x600/?content'
      },
    ],
    '2023': [
      { 
        name: 'Alex Wilson',
        position: 'CTO',
        image: 'https://source.unsplash.com/random/800x600/?tech'
      },
      { 
        name: 'Olivia Taylor',
        position: 'HR Director',
        image: 'https://source.unsplash.com/random/800x600/?hr'
      },
      { 
        name: 'Daniel Brown',
        position: 'Senior Developer',
        image: 'https://source.unsplash.com/random/800x600/?coding'
      },
      { 
        name: 'Sophia Chen',
        position: 'Product Manager',
        image: 'https://source.unsplash.com/random/800x600/?product'
      },
      { 
        name: 'Ethan Wright',
        position: 'Sales Director',
        image: 'https://source.unsplash.com/random/800x600/?sales'
      },
      { 
        name: 'Isabella Lopez',
        position: 'Customer Support Lead',
        image: 'https://source.unsplash.com/random/800x600/?support'
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Team</h1>
      
      <div className="mb-8 flex justify-center">
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {Object.keys(teamMembers).map(year => (
            <option key={year} value={year}>Year {year}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers[selectedYear].map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-64">
              <img
                src={member.image} 
                alt={member.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-700">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team

