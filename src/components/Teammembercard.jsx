import { useState } from 'react';
import { User } from 'lucide-react';
import Vanshika from "../assets/vanshika.jpeg"
import Yuktika from "../assets/yuktika.jpeg"
import Yankit from "../assets/Yankit.jpg"
import Kushagra from "../assets/Kushagra.jpg"
const TeamMemberCard = ({ name, Email, imageUrl,url }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-green-200 min-h-[350px]">
      <div className="bg-gradient-to-r from-green-400 to-green-600 h-24 relative">
        <div className="absolute left-1/2 -bottom-12 transform -translate-x-1/2">
          <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-100">
            {imageUrl && !imageError ? (
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <User size={48} className="text-gray-400" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-16 px-4 pb-6 text-center">
        <h3 className="font-bold text-xl text-gray-800">{name}</h3>
        <p className="text-green-600 font-medium text-sm">{Email}</p>
       <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors"
          >
            View Profile
          </a>
      </div>
    </div>
  );
};

export default function TeamMembersGrid() {
  const teamMembers = [
    {
      id: 1,
      name: "Vanshika Garg",
      Email: "vanshikagarg819@gmail.com",
      imageUrl: Vanshika,
      url:"https://www.linkedin.com/in/vanshika-garg-b94b45262/"
    },
    {
      id: 2,
      name: "Yuktika Sood",
      Email: "yuktika19@gamil.com",
      imageUrl: Yuktika,
      url:'https://www.linkedin.com/in/yuktika-sood-988795257/'
    },
    {
      id: 3,
      name: "Yankit Kumar",
      Email: "yankitkumar80@gmail.com",
      imageUrl: Yankit,
      url:"https://www.linkedin.com/in/yankit-kumar-8b7401292/"
    },
    {
      id: 4,
      name: "Kushagra Grover",
      Email: "groverkush2@gmail.com",
      imageUrl: Kushagra,
      url:"https://github.com/Kushagra00000"
    }
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.id}
            name={member.name}
            Email={member.Email}
            imageUrl={member.imageUrl}
            url={member.url}
          />
        ))}
      </div>
    </div>
  );
}
