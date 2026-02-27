import React from "react";

export default function QuickLinksNotice() {
  const quickLinks = [
    "Directorate General of Training",
    "NCVT MIS Portal",
    "Bharat Skills",
    "NIMI",
    "e-Kalyan",
    "National Scholarship Portal",
    "NTPC",
    "Jh. Govt. Tool Room Ranchi",
  ];

  const notices = [
    "notice 3rd merit list(tandwa) of admission for session 2022-23(welder)",
    "Admission Merit List 2023-24-25",
    "Admission Merit List 2023-24-25",
    "notice 2nd merit list of admission 2022-23-24",
  ];

  return (
    <div className="bg-gray-100 py-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Quick Links */}
        <div className="bg-white border rounded-md shadow-sm">
          <div className="border-b px-5 py-3">
            <h2 className="text-xl font-semibold text-gray-800">
              Quick Links
            </h2>
          </div>

          <div className="p-5">
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-gray-600 mt-1">•</span>
                  <a
                    href="#"
                    className={`${
                      link === "NCVT MIS Portal"
                        ? " text-teal-600 px-1 rounded hover:underline"
                        : "text-teal-600 hover:underline"
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Notice Board */}
        <div className="bg-white border rounded-md shadow-sm">
          <div className="border-b px-5 py-3">
            <h2 className="text-xl font-semibold text-gray-800">
              Notice Board
            </h2>
          </div>

          <div className="p-5 space-y-4">
            {notices.map((notice, index) => (
              <div key={index}>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">➜</span>
                  <a
                    href="#"
                    className="text-teal-600 hover:underline text-sm"
                  >
                    {notice}
                  </a>
                </div>
                {index !== notices.length - 1 && (
                  <hr className="mt-4 border-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

 