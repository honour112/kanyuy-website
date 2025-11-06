
import React from 'react';
import { TeamMember } from '../types';
import { LinkedInIcon, WhatsAppIcon } from './IconComponents';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden text-center p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border border-transparent hover:border-primary/20">
      <img
        src={member.imageUrl}
        alt={member.name}
        className="w-36 h-36 rounded-full mx-auto object-cover ring-4 ring-light-gray"
        loading="lazy"
      />
      <h3 className="mt-6 text-xl font-bold text-primary">{member.name}</h3>
      <p className="text-accent font-semibold">{member.role}</p>
      <p className="mt-3 text-gray-600 text-sm h-10">{member.bio}</p>
      <div className="mt-6 flex justify-center space-x-4">
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors duration-300">
          <LinkedInIcon />
        </a>
        <a href={member.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
          <WhatsAppIcon />
        </a>
      </div>
    </div>
  );
};

export default TeamMemberCard;