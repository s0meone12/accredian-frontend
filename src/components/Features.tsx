import React from 'react';
import { UserPlus, Mail, Gift, ThumbsUp } from 'lucide-react';

const Features = () => {
  const steps = [
    {
      icon: <UserPlus className="h-8 w-8 text-blue-600" />,
      title: "Sign Up",
      description: "Create your account or login to get started"
    },
    {
      icon: <Mail className="h-8 w-8 text-blue-600" />,
      title: "Refer Friends",
      description: "Share the referral link with your friends"
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-blue-600" />,
      title: "Friend Enrolls",
      description: "Your friend enrolls in a course using your referral"
    },
    {
      icon: <Gift className="h-8 w-8 text-blue-600" />,
      title: "Earn Rewards",
      description: "Both you and your friend get exciting rewards"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How Do I Refer?</h2>
          <p className="mt-4 text-lg text-gray-600">Follow these simple steps to start earning rewards</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-50 rounded-full">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;