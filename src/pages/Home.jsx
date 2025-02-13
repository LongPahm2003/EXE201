import { FaCalendarCheck, FaFileInvoiceDollar, FaUsers } from "react-icons/fa";
import studentImg from "../assets/images/student.jpg";
const Home = () => {
  const features = [
    {
      icon: <FaFileInvoiceDollar className="text-white text-3xl" />, 
      title: "Online Billing, Invoicing, & Contracts",
      description: "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts.",
    },
    {
      icon: <FaCalendarCheck className="text-white text-3xl" />, 
      title: "Easy Scheduling & Attendance Tracking",
      description: "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance.",
    },
    {
      icon: <FaUsers className="text-white text-3xl" />, 
      title: "Customer Tracking",
      description: "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization.",
    },
  ];
  return (
    <div>
      <div className="bg-[#49BBBD] text-white py-16 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold">
              <span className="text-yellow-400">Studying</span> Online is now
              much easier
            </h1>
            <p className="mt-4 text-lg">
              DevKid is an interesting platform that will teach you in a more
              interactive way.
            </p>
            <div className="mt-6 flex items-center space-x-4">
              <button className="bg-white text-teal-500 px-6 py-2 rounded-lg font-semibold">
                Join for free
              </button>
              <button className="flex items-center space-x-2">
                <span className="w-10 h-10 bg-white text-teal-500 flex items-center justify-center rounded-full">
                  ▶
                </span>
                <span>Watch how it works</span>
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center relative mt-8 md:mt-0">
            <img src={studentImg} alt="Student" className="w-64" />
            <div className="absolute top-10 right-10 bg-white p-2 rounded-lg shadow-lg">
              <p className="text-sm font-semibold">250K Assisted Student</p>
            </div>
            <div className="absolute bottom-10 right-10 bg-white p-2 rounded-lg shadow-lg">
              <p className="text-sm font-semibold">
                Congratulations
                <br />
                Your admission completed
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-16 px-8">
        <h2 className="text-3xl font-bold">Our Success</h2>
        <p className="text-gray-600 max-w-xl mx-auto mt-4">
          Omare id fames interdum porttitor nulla turpis etiam. Diam vitae
          sollicitudin at nec nam et pharetra gravida.
        </p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-teal-500 text-3xl font-bold">
          <div>
            <span className="block text-black text-xl">15K+</span> Students
          </div>
          <div>
            <span className="block text-black text-xl">75%</span> Total success
          </div>
          <div>
            <span className="block text-black text-xl">35</span> Main questions
          </div>
          <div>
            <span className="block text-black text-xl">26</span> Chief experts
          </div>
        
        </div>
      </div>
      <div className="text-center py-12 bg-white">
      <h2 className="text-2xl font-bold text-gray-900">
        <span className="text-gray-900">All-In-One</span> <span className="text-teal-500">Cloud Software.</span>
      </h2>
      <p className="mt-2 text-gray-600 max-w-xl mx-auto">
        DevKid is one powerful online software suite that combines all the tools needed to run a successful school or office.
      </p>
      <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-teal-500 rounded-full">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
            <p className="mt-2 text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;
