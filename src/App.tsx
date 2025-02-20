import { useState } from 'react';
import Header from './components/Header';
import Features from './components/Features';
import ReferralTable from './components/ReferralTable';
import Footer from './components/Footer';
import ReferralModal from './components/ReferralModal';
import { ArrowRight } from 'lucide-react';


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      Hero Section
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Share Knowledge, Earn Rewards
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Refer your friends to our courses and earn exciting rewards. Help them start their learning journey while you earn benefits.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Refer Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="Students learning together"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Features />
      <ReferralTable />
      <Footer />
      
      <ReferralModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;