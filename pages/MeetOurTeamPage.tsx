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
        imageUrl="https://www.foodbusinessnews.net/ext/resources/2020/11/BlackOwnedBusinessMeeting_Lead.jpg?height=667&t=1606316879&width=1080"
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