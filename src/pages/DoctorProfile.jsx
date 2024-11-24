import React, { useState } from 'react';
import { Home, GraduationCap, Search, Star, Heart, MapPin, Clock, Phone, Calendar } from 'lucide-react';

const DoctorProfile = () => {
  const [isLiked, setIsLiked] = useState(false);
  
  const doctor = {
    name: "Dr. Sarah Johnson",
    qualifications: "MBBS, DPM - Psychiatry",
    languages: ["English", "Hindi", "Telugu"],
    rating: 4.2,
    reviews: 128,
    experience: "8 yrs",
    availableTime: "Mon - Sat, 10:00 AM - 6:00 PM",
    phone: "+1 (555) 123-4567",
    clinic: {
      name: "Healthcare Medical Center",
      address: "01 Medical Plaza, Healthcare District, Near Central Hospital, New York, NY 10001"
    },
    about: "Dr. Sarah Johnson is an expert and experienced Psychiatrist with an experience of 8 years. The doctor specializes in Psychological Health Disorders, Mental Health Disorders, Menstruation Issues, Safe Sexual Practices, Sexuality etc.",
    specialization: ["Mental Health", "Psychological Care", "Anxiety", "Depression", "Relationship Counseling"],
    education: [
      {
        institute: "Medical Institute of Sciences",
        degree: "MBBS",
        year: "2012-2018"
      },
      {
        institute: "State Medical College",
        degree: "DPM - Psychiatry",
        year: "2018-2020"
      }
    ]
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-white rounded-xl p-6 mb-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-start gap-6">
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-blue-200 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center relative transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
              <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">👩‍⚕️</div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-all duration-300">
                  {doctor.name}
                </h1>
                <p className="text-gray-600 transform hover:translate-x-1 transition-transform duration-300">{doctor.qualifications}</p>
                <div className="flex gap-2 flex-wrap">
                  {doctor.specialization.map((spec) => (
                    <span 
                      key={spec}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm hover:bg-blue-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="text-right space-y-2">
                <div className="flex items-center gap-2 bg-yellow-50 p-2 rounded-lg transform hover:scale-105 transition-transform duration-300">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold">{doctor.rating}</span>
                  <span className="text-sm text-gray-500">({doctor.reviews} reviews)</span>
                </div>
                <button 
                  className={`p-2 rounded-full transition-all duration-300 ${
                    isLiked ? 'bg-red-50' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart
                    className={`w-5 h-5 transition-all duration-300 transform hover:scale-110 ${
                      isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{doctor.availableTime}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{doctor.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clinic Location */}
      <div className="bg-white rounded-xl p-6 mb-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-50 rounded-lg transform hover:rotate-12 transition-transform duration-300">
            <MapPin className="w-6 h-6 text-blue-500" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors duration-300">{doctor.clinic.name}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{doctor.clinic.address}</p>
          </div>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 hover:shadow-lg transition-all duration-300" >
            Book Appointment
          </button>
        </div>
      </div>

      {/* About */}
      <div className="bg-white rounded-xl p-6 mb-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-purple-50 rounded-lg transform hover:rotate-12 transition-transform duration-300">
            <Search className="w-5 h-5 text-purple-500" />
          </div>
          <h3 className="font-semibold text-gray-800">About the Doctor</h3>
        </div>
        <p className="text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300">
          {doctor.about}
        </p>
      </div>

      {/* Education */}
      <div className="bg-white rounded-xl p-6 mb-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-green-50 rounded-lg transform hover:rotate-12 transition-transform duration-300">
            <GraduationCap className="w-5 h-5 text-green-500" />
          </div>
          <h3 className="font-semibold text-gray-800">Education & Training</h3>
        </div>
        <div className="space-y-8">
          {doctor.education.map((edu, index) => (
            <div key={index} className="flex gap-4 group">
              <div className="relative">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                {index !== doctor.education.length - 1 && (
                  <div className="absolute top-4 left-1.5 w-0.5 h-20 bg-blue-200 transform -translate-x-1/2"></div>
                )}
              </div>
              <div className="flex-1 -mt-1 hover:bg-blue-50 p-3 rounded-lg transition-all duration-300">
                <h4 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {edu.institute}
                </h4>
                <p className="text-gray-600">{edu.degree}</p>
                <p className="text-sm text-gray-500 mt-1">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <h3 className="font-semibold text-gray-800 mb-4">Languages Spoken</h3>
        <div className="flex gap-3">
          {doctor.languages.map((lang) => (
            <span
              key={lang}
              className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;