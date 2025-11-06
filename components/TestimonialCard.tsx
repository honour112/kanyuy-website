
import React from 'react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-accent transition-all duration-300 hover:shadow-lg hover:border-accent-dark">
      <p className="text-gray-600 italic text-lg">"{testimonial.quote}"</p>
      <div className="mt-6">
        <p className="font-bold text-primary text-lg">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;