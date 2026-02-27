export default function Members() {
  const members = [
    {
      name: "Mr. Faiz Taiyab",
      designation: "HOP, NTPC PBCMP",
      role: "Chairman",
      image: "https://via.placeholder.com/180x200",
    },
    {
      name: "Shri M.K.Gupta",
      designation: "Principal JGMTRTC, Ranchi",
      role: "Vice Chairman",
      image: "https://via.placeholder.com/180x200",
    },
    {
      name: "Dr. Manish Srivastava",
      designation: "Addl General Manager (TS)",
      role: "Member",
      image: "https://via.placeholder.com/180x200",
    },
    {
      name: "Shri Amit Kumar Asthana",
      designation: "HOD (HR) NTPC, PBCMP",
      role: "Member",
      image: "https://via.placeholder.com/180x200",
    },
    {
      name: "Shri Kamal Kant",
      designation: "HOD (Maintenance) - JGMTRTC, Ranchi",
      role: "Member",
      image: "https://via.placeholder.com/180x200",
    },
    {
      name: "Shri Pankaj Dhyani",
      designation: "General Manager (LA and R&R - NTPC PBCMP)",
      role: "Member Secretary from NTPC for IMC",
      image: "https://via.placeholder.com/180x200",
    },
    {
      name: "Amarendra Kumar",
      designation: "AGM (SSC-FIN), E8",
      role: "Member",
      image: "https://via.placeholder.com/180x200",
    },
    {
      name: "Shri Ashutosh Mishra",
      designation: "Sr. Admin Officer, JGMTRTC, Ranchi",
      role: "Member Secretary",
      image: "https://via.placeholder.com/180x200",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-sm p-6 flex gap-6 items-start"
          >
            {/* Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-48 object-cover border"
            />

            {/* Details */}
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h2>

              <p className="text-gray-600">
                <span className="font-medium text-gray-700">
                  Designation:
                </span>{" "}
                {member.designation}
              </p>

              <p className="text-gray-600">
                <span className="font-medium text-gray-700">
                  Member’s IMC:
                </span>{" "}
                <span className="font-semibold">{member.role}</span>
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
