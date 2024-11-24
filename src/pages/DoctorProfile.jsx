import React from 'react';
import { Home, GraduationCap, Search, Star, Heart } from 'lucide-react';

const DoctorProfile = () => {
  const doctor = {
    name: "Dr. Sarah Johnson",
    qualifications: "MBBS, DPM - Psychiatry",
    languages: ["English", "Hindi", "Telugu"],
    rating: 4.2,
    experience: "8 yrs",
    clinic: {
      name: "Healthcare Medical Center",
      address: "01 Medical Plaza, Healthcare District, Near Central Hospital, New York, NY 10001"
    },
    about: "Dr. Sarah Johnson is an expert and experienced Psychiatrist with an experience of 8 years. The doctor specializes in Psychological Health Disorders, Mental Health Disorders, Menstruation Issues, Safe Sexual Practices, Sexuality etc.",
    specialization: ["Mental Health", "Psychological Care"],
    education: [
      {
        institute: "Medical Institute of Sciences",
        degree: "MBBS"
      },
      {
        institute: "State Medical College",
        degree: "DPM - Psychiatry"
      }
    ]
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-purple-50 min-h-screen">
      {/* Doctor Header */}
      <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <div className="text-3xl">
              👩‍⚕️
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold">{doctor.name}</h2>
                <p className="text-gray-600 text-sm">{doctor.qualifications}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm bg-gray-100 px-2 py-0.5 rounded">sexiology</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  {doctor.languages.map((lang) => (
                    <span key={lang} className="text-sm text-gray-500">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm">Ratings : {doctor.rating} ⭐</span>
                </div>
                <p className="text-sm text-gray-600">Experience: {doctor.experience}</p>
                <Heart className="w-5 h-5 text-red-500 mt-1 ml-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clinic Location */}
      <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
        <div className="flex items-start gap-4">
          <Home className="w-6 h-6 text-gray-500" />
          <div className="flex-1">
            <h3 className="font-semibold text-gray-700">{doctor.clinic.name}</h3>
            <p className="text-sm text-gray-600">{doctor.clinic.address}</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors">
            BOOK NOW
          </button>
        </div>
      </div>

      {/* About */}
      <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-gray-200"></div>
          <div>
            <h3 className="font-semibold mb-2">About the doctor</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {doctor.about}
            </p>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-6 h-6 text-gray-600" />
            <h3 className="font-semibold">Education</h3>
          </div>
          {doctor.education.map((edu, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-8 h-8">
                <GraduationCap className="w-6 h-6 text-gray-400" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">{edu.institute}</h4>
                <p className="text-sm text-gray-600">{edu.degree}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Specialization */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Search className="w-6 h-6 text-gray-600" />
            <h3 className="font-semibold">Specialization</h3>
          </div>
          <div className="flex gap-2">
            {doctor.specialization.map((spec, index) => (
              <span
                key={index}
                className="bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-700"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;