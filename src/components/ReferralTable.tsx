import { useState, useEffect } from 'react';

interface Referral {
  id: number;
  yourName: string;
  yourEmail: string;
  friendName: string;
  friendEmail: string;
  program: string;
  createdAt: string;
}


const ReferralTable = () => {
  const [activeProgram, setActiveProgram] = useState('web-development');
  const [referralData, setReferralData] = useState<Referral[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Hardcoded Programs (Sidebar)
  const programs = [
    { id: 'web-development', name: 'Web Development' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'cyber-security', name: 'Cyber Security' },
    { id: 'cloud-computing', name: 'Cloud Computing' }
  ];

  // Fetch Data from API
  useEffect(() => {
    const fetchReferrals = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/referrals');
        const data = await response.json();
        console.log("API Data:", data); // Debugging
        setReferralData(data); // Store API response
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };

    fetchReferrals();
  }, []);

  // Filter referrals for the selected program
  const filteredReferrals = referralData.filter(
    (referral) => referral.program.toLowerCase().replace(/\s/g, "-") === activeProgram
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Referral List</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar - Hardcoded Programs */}
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

          {/* Table - Shows Filtered Referrals */}
          <div className="w-full md:w-2/3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Referrer Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Referrer Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Friend Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Friend Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                        Loading...
                      </td>
                    </tr>
                  ) : error ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-4 text-center text-red-500">
                        {error}
                      </td>
                    </tr>
                  ) : filteredReferrals.length > 0 ? (
                    filteredReferrals.map((referral) => (
                      <tr key={referral.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {referral.yourName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {referral.yourEmail}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {referral.friendName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {referral.friendEmail}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(referral.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                        No referrals for this program.
                      </td>
                    </tr>
                  )}
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
