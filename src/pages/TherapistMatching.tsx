import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TherapistMatchingForm from '@/components/TherapistMatchingForm';

const TherapistMatching = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <TherapistMatchingForm />
      </main>
      <Footer />
    </div>
  );
};

export default TherapistMatching;