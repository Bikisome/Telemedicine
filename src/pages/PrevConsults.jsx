import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import {
  Search,
  Calendar,
  Clock,
  DollarSign,
  Activity,
  FileText,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

const PreviousConsults = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("consultations");
  const [selectedConsult, setSelectedConsult] = useState(null);

  // Sample data
  const consultations = [
    {
      id: 1,
      doctorName: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      date: "2024-03-20",
      time: "10:30 AM",
      duration: "30 mins",
      fee: 1500,
      status: "completed",
      prescription: true,
      followUp: "2024-04-20",
      notes: "Regular checkup, blood pressure normal",
      avatar:
        "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      doctorName: "Dr. Rajesh Kumar",
      specialty: "Dermatologist",
      date: "2024-03-15",
      time: "2:00 PM",
      duration: "20 mins",
      fee: 1200,
      status: "completed",
      prescription: true,
      followUp: null,
      notes: "Skin condition improving",
      avatar:
        "data:image/jpeg;base64,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",
    },
    {
      id: 3,
      doctorName: "Dr. Emily Chen",
      specialty: "Pediatrician",
      date: "2024-03-10",
      time: "11:15 AM",
      duration: "45 mins",
      fee: 1800,
      status: "completed",
      prescription: true,
      followUp: "2024-03-25",
      notes: "Vaccination completed",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvA-i6vache-k99dtI4ThSgnPJctyvMkBmiIsM1VgHyUGFIZwyXaJdo-I&s",
    },
  ];

  const totalSpending = consultations.reduce(
    (total, consult) => total + consult.fee,
    0
  );

  const specialtyStats = consultations.reduce((acc, consult) => {
    acc[consult.specialty] = (acc[consult.specialty] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.entries(specialtyStats).map(([name, value]) => ({
    name,
    value,
  }));

  const COLORS = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444"];

  const filteredConsultations = consultations.filter((consult) => {
    const matchesSearch =
      consult.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      consult.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" ||
      (selectedFilter === "withPrescription" && consult.prescription) ||
      (selectedFilter === "withFollowUp" && consult.followUp);
    return matchesSearch && matchesFilter;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl shadow-lg p-6 mb-6 text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Previous Consultations</h1>
            <p className="text-indigo-100">Track your medical journey</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">₹{totalSpending}</div>
            <div className="text-indigo-100">Total Investment</div>
          </div>
        </div>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-6 flex flex-col md:flex-row gap-4"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by doctor name or specialty..."
            className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          <option value="all">All Consultations</option>
          <option value="withPrescription">With Prescription</option>
          <option value="withFollowUp">With Follow-up</option>
        </select>
      </motion.div>

      {/* Tabs */}
      <div className="mb-6">
        <motion.div
          className="flex gap-4 border-b"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {["consultations", "analytics"].map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 font-medium relative ${
                activeTab === tab ? "text-indigo-600" : "text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {activeTab === tab && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
                  layoutId="activeTab"
                />
              )}
            </button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {/* Consultations Tab */}
        {activeTab === "consultations" && (
          <motion.div
            key="consultations"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid gap-4"
          >
            {filteredConsultations.map((consult) => (
              <motion.div
                key={consult.id}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 cursor-pointer"
                onClick={() => setSelectedConsult(consult)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex justify-between items-start">
                  <div className="flex gap-4">
                    <img
                      src={consult.avatar}
                      alt={consult.doctorName}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">
                        {consult.doctorName}
                      </h3>
                      <p className="text-gray-600">{consult.specialty}</p>
                      <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(consult.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {consult.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />₹{consult.fee}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        consult.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {consult.status}
                    </span>
                    {consult.prescription && (
                      <button className="mt-2 flex items-center gap-1 text-indigo-600 text-sm hover:underline">
                        <FileText className="h-4 w-4" />
                        View Prescription
                      </button>
                    )}
                  </div>
                </div>
                {consult.followUp && (
                  <div className="mt-3 pt-3 border-t text-sm">
                    <span className="text-gray-600">Follow-up: </span>
                    <span className="font-medium">
                      {new Date(consult.followUp).toLocaleDateString()}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Analytics Tab */}
        {activeTab === "analytics" && (
          <motion.div
            key="analytics"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold mb-4">
                  Consultations by Specialty
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Specialty Distribution</h3>
                <div className="space-y-4">
                  {Object.entries(specialtyStats).map(
                    ([specialty, count], index) => (
                      <motion.div
                        key={specialty}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-gray-600">{specialty}</span>
                          <span className="font-medium">{count}</span>
                        </div>
                        <div className="bg-gray-200 rounded-full h-2">
                          <motion.div
                            className="bg-indigo-600 rounded-full h-2"
                            initial={{ width: 0 }}
                            animate={{
                              width: `${(count / consultations.length) * 100}%`,
                            }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6"
              >
                <Activity className="h-6 w-6 text-indigo-600 mb-2" />
                <div className="text-2xl font-bold">₹{totalSpending}</div>
                <div className="text-gray-600">Total Spent</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6"
              >
                <TrendingUp className="h-6 w-6 text-green-600 mb-2" />
                <div className="text-2xl font-bold">
                  ₹{Math.round(totalSpending / consultations.length)}
                </div>
                <div className="text-gray-600">Average per Visit</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6"
              >
                <Calendar className="h-6 w-6 text-orange-600 mb-2" />
                <div className="text-2xl font-bold">{consultations.length}</div>
                <div className="text-gray-600">Total Consultations</div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Consultation Detail Modal */}
      <AnimatePresence>
        {selectedConsult && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setSelectedConsult(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-6 max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4">
                  <img
                    src={selectedConsult.avatar}
                    alt={selectedConsult.doctorName}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-bold">
                      {selectedConsult.doctorName}
                    </h3>
                    <p className="text-gray-600">{selectedConsult.specialty}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedConsult(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-gray-600 text-sm mb-1">Date & Time</div>
                  <div className="font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-indigo-600" />
                    {new Date(selectedConsult.date).toLocaleDateString()}
                  </div>
                  <div className="font-medium flex items-center gap-2 mt-1">
                    <Clock className="h-4 w-4 text-indigo-600" />
                    {selectedConsult.time}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-gray-600 text-sm mb-1">
                    Duration & Fee
                  </div>
                  <div className="font-medium flex items-center gap-2">
                    <Activity className="h-4 w-4 text-indigo-600" />
                    {selectedConsult.duration}
                  </div>
                  <div className="font-medium flex items-center gap-2 mt-1">
                    <DollarSign className="h-4 w-4 text-indigo-600" />₹
                    {selectedConsult.fee}
                  </div>
                </div>
              </div>

              {selectedConsult.notes && (
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Consultation Notes</h4>
                  <div className="bg-gray-50 rounded-lg p-3 text-gray-600">
                    {selectedConsult.notes}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                {selectedConsult.prescription && (
                  <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    <FileText className="h-4 w-4" />
                    Download Prescription
                  </button>
                )}

                {selectedConsult.followUp && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-lg">
                    <Calendar className="h-4 w-4" />
                    Follow-up:{" "}
                    {new Date(selectedConsult.followUp).toLocaleDateString()}
                  </div>
                )}

                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <ArrowRight className="h-4 w-4" />
                  Book Follow-up
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PreviousConsults;
