import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-gray-100">
      <header className="relative h-64 overflow-hidden">
        <img
          src="/src/assets/images/aboutus.jpg"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-center">
            From preschool to pre-tertiary, our students enjoy fun, interactive
            and relevant lessons and are empowered to think beyond the confines
            of the classroom.
          </p>
          <button className="mt-4 bg-[#49BBBD] hover:bg-yellow-500 text-white py-2 px-4 rounded">
            See More
          </button>
        </div>
      </header>
      <section className="py-10 text-center">
        <h2 className="text-2xl font-semibold">
          Preparing Students to Achieve Success
        </h2>
      </section>
      {/* <div className="max-w-6xl mx-auto">
        <img
          src="/src/assets/images/large-image.jpg"
          alt="Large"
          className="w-full h-auto"
        />
      </div> */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-6 p-6">
        <div className="bg-[#EBF5FF] p-4 rounded-lg shadow-lg flex">
          <img
            src="/src/assets/images/abt1.jpg"
            alt="Small 1"
            className="w-1/3 h-auto mr-4"
          />
          <div>
            <h3 className="font-bold text-lg">
              Developing Confident and Successful Learners
            </h3>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="mt-4 bg-[#49BBBD] hover:bg-yellow-500 text-white py-2 px-4 rounded">
              View More
            </button>
          </div>
        </div>
        <div className="bg-[#EBF5FF] p-4 rounded-lg shadow-lg flex">
          <img
            src="/src/assets/images/abt2.jpg"
            alt="Small 2"
            className="w-1/3 h-auto mr-4"
          />
          <div>
            <h3 className="font-bold text-lg">
              Enjoy Learning with a Unique Classroom Experience
            </h3>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="mt-4 bg-[#49BBBD] hover:bg-yellow-500 text-white py-2 px-4 rounded">
              View More
            </button>
          </div>
        </div>
        <div className="bg-[#EBF5FF] p-4 rounded-lg shadow-lg flex">
          <img
            src="/src/assets/images/abt3.jpg"
            alt="Small 3"
            className="w-1/3 h-auto mr-4"
          />
          <div>
            <h3 className="font-bold text-lg">
              Passionate Teachers That Make a Difference
            </h3>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="mt-4 bg-[#49BBBD] hover:bg-yellow-500 text-white py-2 px-4 rounded">
              View More
            </button>
          </div>
        </div>
      </div>
      <div>
        <section className="py-10 text-center bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Our Teachers</h2>
          <Slider {...settings} className="mt-6">
            <div className="p-4">
              <img
                src="/src/assets/images/teacher1.jpg"
                alt="Teacher 1"
                className="w-full h-auto rounded-lg"
              />
              <h3 className="mt-2 font-bold">John Carvan</h3>
            </div>
            <div className="p-4">
              <img
                src="/src/assets/images/teacher2.jpg"
                alt="Teacher 2"
                className="w-full h-auto rounded-lg"
              />
              <h3 className="mt-2 font-bold">Miss Smith Ellen</h3>
            </div>
            <div className="p-4">
              <img
                src="/src/assets/images/teacher3.jpg"
                alt="Teacher 3"
                className="w-full h-auto rounded-lg"
              />
              <h3 className="mt-2 font-bold">John Carvan</h3>
            </div>
            {/* Thêm nhiều giáo viên hơn nếu cần */}
          </Slider>
        </section>
        <section className="py-10 text-center">
          <h2 className="text-2xl font-semibold mb-6">Why it works</h2>
          <div className="flex justify-around max-w-6xl mx-auto">
            <div className="p-4">
              <img
                src="/src/assets/images/learning.jpg"
                alt="Personalized learning"
                className="w-16 h-16 mx-auto"
              />
              <h3 className="font-bold mt-4 ">Personalized learning</h3>
              <p>
                Students practice at their own pace, first filling in gaps in
                their understanding and then accelerating their learning.
              </p>
            </div>
            <div className="p-4">
              <img
                src="/src/assets/images/trust.jpg"
                alt="Trusted content"
                className="w-16 h-16 mx-auto"
              />
              <h3 className="font-bold mt-4">Trusted content</h3>
              <p>
                Created by experts, library of trusted practice and lessons
                covers math, science, and more. Always free for learners and
                teachers.
              </p>
            </div>
            <div className="p-4">
              <img
                src="/src/assets/images/empower.png"
                alt="Tools to empower teachers"
                className="w-16 h-16 mx-auto"
              />
              <h3 className="font-bold mt-4">Tools to empower teachers</h3>
              <p>
                Teachers can identify gaps in their students’ understanding,
                tailor instruction, and meet the needs of every student.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
