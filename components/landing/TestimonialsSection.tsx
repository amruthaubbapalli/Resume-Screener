import React from 'react';

const testimonials = [
  {
    quote: "This tool has completely transformed our initial screening phase. We're now able to focus our energy on the human side of recruiting, building relationships with top-tier candidates.",
    name: "Amrutha",
    title: "HR Manager, Tech Corp",
  },
  {
    quote: "The consistency and objectivity the AI brings is a game-changer for our diversity and inclusion goals. We're discovering incredible talent we might have otherwise overlooked.",
    name: "Sanvi",
    title: "Lead Recruiter, Creative Agency",
  },
  {
    quote: "I was skeptical at first, but the accuracy is astonishing. The AI not only identifies keywords but understands context, giving us a much richer analysis of each candidate.",
    name: "Sai",
    title: "Talent Acquisition Lead, FinTech Startup",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
            Trusted by Modern Hiring Teams
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Hear what professionals are saying about the future of recruitment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <figure key={index} className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md flex flex-col">
              <blockquote className="text-slate-600 dark:text-slate-300 italic flex-grow">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <div className="font-semibold text-slate-800 dark:text-white">{testimonial.name}</div>
                <div className="text-slate-500 dark:text-slate-400">{testimonial.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;