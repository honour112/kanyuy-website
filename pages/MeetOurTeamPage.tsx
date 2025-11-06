import React from 'react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import TeamMemberCard from '../components/TeamMemberCard';
import { TEAM_MEMBERS } from '../constants';

const MeetOurTeamPage = () => {
  return (
    <div>
      <PageHero
        title="Meet Our Team"
        subtitle="The creative minds and strategic thinkers behind your brand's success."
        imageUrl="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1920&auto=format&fit=crop"
      />
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <AnimatedSection key={member.name} delay={`delay-${(index % 3) * 100}`}>
                <TeamMemberCard member={member} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeetOurTeamPage;