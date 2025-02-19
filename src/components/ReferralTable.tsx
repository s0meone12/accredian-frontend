import React, { useState } from 'react';

const ReferralTable = () => {
  const [activeProgram, setActiveProgram] = useState('web-development');

  const programs = [
    {
      id: 'web-development',
      name: 'Web Development',
      referrerBonus: '₹5,000',
      refereeDiscount: '10% off'
    },
    {
      id: 'data-science',
      name: 'Data Science',
      referrerBonus: '₹6,000',
      refereeDiscount: '15% off'
    },
    {
      id: 'cyber-security',
      name: 'Cyber Security',
      referrerBonus: '₹4,500',
      refereeDiscount: '12% off'
    },
    {
      id: 'cloud-computing',
      name: 'Cloud Computing',
      referrerBonus: '₹5,500',
      refereeDiscount: '10% off'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Referral Benefits</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <div className="space-y-2">
              {programs.map((program) => (
                <button
                  key={program.id}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeProgram === program.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveProgram(program.id)}
                >
                  {program.name}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Program
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Referrer Bonus
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Referee Discount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {programs
                    .filter((program) => program.id === activeProgram)
                    .map((program) => (
                      <tr key={program.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {program.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {program.referrerBonus}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {program.refereeDiscount}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralTable;