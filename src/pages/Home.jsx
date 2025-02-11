import studentImg from "../assets/images/student.jpg";
const Home = () => {
  
  return <div>
     <div className="bg-[#49BBBD] text-white py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold">
            <span className="text-yellow-400">Studying</span> Online is now much easier
          </h1>
          <p className="mt-4 text-lg">
            DevKid is an interesting platform that will teach you in a more interactive way.
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
            <p className="text-sm font-semibold">Congratulations<br/>Your admission completed</p>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center py-16 px-8">
      <h2 className="text-3xl font-bold">Our Success</h2>
      <p className="text-gray-600 max-w-xl mx-auto mt-4">
        Omare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec
        nam et pharetra gravida.
      </p>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-teal-500 text-3xl font-bold">
        <div><span className="block text-black text-xl">15K+</span> Students</div>
        <div><span className="block text-black text-xl">75%</span> Total success</div>
        <div><span className="block text-black text-xl">35</span> Main questions</div>
        <div><span className="block text-black text-xl">26</span> Chief experts</div>
        <div><span className="block text-black text-xl">16</span> Years of experience</div>
      </div>
    </div>
  </div>;
};

export default Home;
