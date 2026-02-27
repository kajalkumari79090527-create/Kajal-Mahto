import React from 'react'

import Admission from './Admission';

const AdmissionNow = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">

        {/* Header */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-[2px] w-20 bg-cyan-600"></div>
          <h1 className="mx-4 text-xl md:text-2xl font-bold text-cyan-600 tracking-wide">
            ADMISSION
          </h1>
          <div className="h-[2px] w-20 bg-cyan-600"></div>
        </div>

        {/* Content */}
        <div className="text-gray-800 leading-relaxed text-[15px] space-y-4">

          <p>
            1. NTPC MAITI बड़कागांव निजी औद्योगिक प्रशिक्षण संस्थान ग्राम-टोंग, जिला- हजारीबाग,
            झारखंड का संचालन झारखंड सरकार टूल रूम रांची द्वारा किया जाता है। NCVT पाठ्यक्रम
            के अंतर्गत आईटीआई प्रशिक्षण हेतु इलेक्ट्रीशियन-20 सीट, फिटर-20 सीट एवं वेल्डर-40 सीट
            NSQF LEVEL-4,5 में नवीनतम सत्र में नामांकन हेतु ऑनलाइन आवेदन पत्र स्वीकार किया जाता है।
            NTPC परियोजना प्रभावित क्षेत्र के योग्य इच्छुक महिला एवं पुरुष उम्मीदवार ऑनलाइन आवेदन दे सकते हैं।
            संस्थान के वेबसाइट www.maitibarkagaon.in पर आवेदन दे सकते हैं अथवा ऑफलाइन आवेदन संस्थान में जमा कर सकते हैं।
          </p>
           <p>2. प्रशिक्षण अवधि :- दो वर्ष</p>

          <p>3. आयु सीमा :- न्यूनतम आयु 14 वर्ष एवं अधिकतम 40 वर्ष के बीच होना चाहिए।</p>

          <div>
            <p className="font-semibold">
              4. ऑनलाइन आवेदन करने के समय आवेदक निम्नलिखित प्रमाण पत्र स्कैन फॉर्मेट में अपने साथ रखें:
            </p>

            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>यदि जमीन दावादारी का दावा कर रहे हैं - वंशावली/परिवारिक सूची (प्रमाणित CO)</li>
              <li>आवेदक का नाम/पिता/माता/पति का नाम से संबंधित आधार कार्ड</li>
              <li>मैट्रिक अंक प्रमाण पत्र एवं उम्र प्रमाण पत्र जिसका दावा कर रहे हैं</li>
              <li>पासपोर्ट साइज रंगीन फोटो</li>
              <li>आवेदक का हस्ताक्षर</li>
              <li>जाति प्रमाण पत्र यदि दावा करते हैं</li>
              <li>आवासीय प्रमाण पत्र</li>
              <li>यदि EPC श्रेणी में आते हैं, तो प्रमाण पत्र अपलोड करें</li>
              <li>
                NTPC/DLAO से प्राप्त बैठके का प्रमाणपत्र/पासबुक का छायाप्रति
                (प्रथम पृष्ठ एवं NTPC से प्राप्त मुआवजा का पृष्ठ)
              </li>
              <li>दिव्यांग प्रमाण पत्र (यदि लागू हो)</li>
            </ul>
          </div>
            <p>
            नामांकन की सम्पूर्ण प्रक्रिया NTPC MAITI बड़कागांव निजी औद्योगिक प्रशिक्षण संस्थान
            ग्राम-टोंग, जिला- हजारीबाग, पिन नं-825311 में ऑनलाइन/ऑफलाइन के माध्यम से होगी।
          </p>

          <p>
            आवेदन भरने की प्रक्रिया संस्थान के वेबसाइट www.maitibarkagaon.in ऑनलाइन अथवा
            ऑफलाइन आवेदन दे सकते हैं।
          </p>

          <p>
            अधिक जानकारी के लिए ईमेल/फोन के माध्यम से संपर्क कर सकते हैं।
          </p>

          <div className="pt-4 border-t mt-6">
            <p><strong>E-mail:</strong> ntpcmaiti@gmail.com, info@jgmsmetr.com</p>
            <p><strong>Phone No:</strong> 06551299950</p>
          </div>

        </div>
      </div>
      {/* <Table /> */}
      <Admission/>
    </div>


  );
}

export default AdmissionNow