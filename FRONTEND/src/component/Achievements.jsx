export default function Achievements() {
  const placements = [
    {
      name: "Arun Raj",
      image: "https://ntpcmaiti.org/assets/site/img/foreign/fpimg01.jpg",
    },
    {
      name: "Gopal Kr. Dangi",
      image: "https://ntpcmaiti.org/assets/site/img/foreign/fpimg02.jpg",
    },
    {
      name: "Sumit Kumar",
      image: "https://ntpcmaiti.org/assets/site/img/foreign/fpimg03.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ===== Heading ===== */}
        <div className="flex items-center justify-center mb-10">
          <div className="h-[2px] w-20 bg-cyan-600"></div>
          <h1 className="mx-6 text-2xl md:text-3xl font-bold text-cyan-600 tracking-wide">
            ACHIEVEMENTS
          </h1>
          <div className="h-[2px] w-20 bg-cyan-600"></div>
        </div>

        {/* ===== DGT Star Ranking ===== */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-green-700 mb-4">
            DGT Star Ranking
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Director General of Training (DGT) vide office memorandum has
            Conducted Grading Of Total ITIs 12, 352 across India in Phase-II as
            per “Framework and Methodology”.
            <span className="font-semibold">
              {" "}
              NTPC-MAITI, Barkagaon Private Industrial Training
              Institute(PR20000210)
            </span>
            , Vill- Dhenga, PO+PS Barkagaon, Dist- Hazaribagh, Jharkhand.
            <span className="text-green-700 font-semibold">
              {" "}
              Get 3.04 out of 5 point and 7th Rank in Jharkhand out of 250 ITIs
            </span>{" "}
            and 1st Rank in Hazaribagh District.
          </p>

          <p className="text-cyan-600 mt-2 cursor-pointer hover:underline">
            Click Here to download DGT Star Ranking Memorandum.
          </p>
        </div>

        {/* ===== Placement Section ===== */}
        <h2 className="text-xl font-semibold text-green-700 mb-6">
          Placement in Foreign Country
        </h2>

        <div className="space-y-6">
          {placements.map((student, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-green-200 to-gray-200 p-6 rounded-md flex flex-col md:flex-row gap-6 items-start"
            >
              {/* Image */}
              <img
                src={student.image}
                alt={student.name}
                className="w-36 h-40 object-cover border"
              />

              {/* Details */}
              <div className="space-y-2">
                <p className="text-lg font-semibold">
                  Company:{" "}
                  <span className="font-bold">
                    Jindal Saw Gulf L.L.C (UAE)
                  </span>
                </p>

                <p>
                  <span className="font-medium">Name:</span> {student.name}
                </p>

                <p>
                  <span className="font-medium">Job Position:</span>{" "}
                  Technical Trainee
                </p>

                <p>
                  <span className="text-lg font-medium">Salary Package:</span>{" "}
                  1800 UAE Dirham’s per month
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
      
    </div>
  );
}