import React from "react";
import { RiHandCoinLine } from "react-icons/ri";
import { HiOutlineUsers } from "react-icons/hi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import NewsPostCard from "./NewsPostCard";
import Footer from "./Footer";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { TfiCup } from "react-icons/tfi";

const newsPosts = [
  {
    title: "Positive Expected Value (+EV) Bets",
    description:
      "Discover over 200 positive expected value bets to beat the odds.",
    imageSrc:
      "https://media.istockphoto.com/id/1372316693/photo/full-length-shot-of-a-young-female-rider-jumping-over-a-hurdle-on-her-horse.jpg?s=612x612&w=0&k=20&c=7jZNbCOj_qoji0gQftPFdd4i4AOi56ePKEvNOvGYO_E=",
    author: {
      name: "John Doe",
      profileImage: "https://via.placeholder.com/50",
    },
    postingTime: "1 hour ago",
  },
  {
    title: "Multiple Races Everyday",
    description:
      "Join us for daily excitement with over 50 races happening every day.",
    imageSrc:
      "https://media.istockphoto.com/id/1626929406/photo/brown-mare-with-female-show-jumper-in-sunlight.jpg?s=612x612&w=0&k=20&c=M6K58w712MDIdaYtrz8YuAuuAMs_bm2aT8GCkxc3hOs=",
    author: {
      name: "Jane Smith",
      profileImage: "https://via.placeholder.com/50",
    },
    postingTime: "2 hours ago",
  },
  {
    title: "Arbitrage Bets",
    description:
      "Learn about over 99 arbitrage bets to maximize your earnings.",
    imageSrc:
      "https://media.istockphoto.com/id/629319124/photo/young-horseman-on-show-jumping-competition.jpg?s=612x612&w=0&k=20&c=U2hSotCq3J-Gb0Nsbkd4CyE935_rBXLeVoOyKqHeApA=",
    author: {
      name: "Michael Brown",
      profileImage: "https://via.placeholder.com/50",
    },
    postingTime: "3 hours ago",
  },
  {
    title: "Recommended Tips Everyday",
    description:
      "Get daily recommended tips from experts to enhance your betting strategies.",
    imageSrc:
      "https://media.istockphoto.com/id/1603261563/photo/dressage-horse-and-rider-in-uniform-during-equestrian-jumping-competition.jpg?s=612x612&w=0&k=20&c=2KJ7EzopzzKLhQTfbhfSk6AtkBB1z8xm7jLBCJacx60=",
    author: {
      name: "Emily Johnson",
      profileImage: "https://via.placeholder.com/50",
    },
    postingTime: "4 hours ago",
  },
  {
    title: "Arbitrage Bets",
    description:
      "Learn about over 99 arbitrage bets to maximize your earnings.",
    imageSrc:
      "https://media.istockphoto.com/id/629319124/photo/young-horseman-on-show-jumping-competition.jpg?s=612x612&w=0&k=20&c=U2hSotCq3J-Gb0Nsbkd4CyE935_rBXLeVoOyKqHeApA=",
    author: {
      name: "Michael Brown",
      profileImage: "https://via.placeholder.com/50",
    },
    postingTime: "3 hours ago",
  },
  {
    title: "Recommended Tips Everyday",
    description:
      "Get daily recommended tips from experts to enhance your betting strategies.",
    imageSrc:
      "https://media.istockphoto.com/id/1603261563/photo/dressage-horse-and-rider-in-uniform-during-equestrian-jumping-competition.jpg?s=612x612&w=0&k=20&c=2KJ7EzopzzKLhQTfbhfSk6AtkBB1z8xm7jLBCJacx60=",
    author: {
      name: "Emily Johnson",
      profileImage: "https://via.placeholder.com/50",
    },
    postingTime: "4 hours ago",
  },
];

function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* First Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        <div className="flex flex-col justify-center text-center md:text-left">
          <p className="text-purple-600 font-semibold mb-2">
            + Your Expert tools
          </p>
          <h1 className="text-4xl font-bold mb-4">
            Beat the Odds with Data-Driven Bets.
          </h1>
          <p className="text-lg mb-8">
            You get a betting feature, you get a betting feature, everyone gets
            a betting feature! The Dabble app is stuffed with so many features,
            you’ll be as entertained as a cat playing with a laser pointer.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start mb-8">
            <input
              type="text"
              placeholder="Username"
              className="px-4 py-2 border rounded-md border-gray-300 mb-4 md:mb-0 md:mr-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 border rounded-md border-gray-300 mb-4 md:mb-0 md:mr-2"
            />
            <button className="px-4 py-2 bg-gradient-to-r from-[#714DE4] to-[#5E80E8] text-white rounded-md">
              Get Started
            </button>
          </div>
          <p className="text-gray-500">
            Get the best bet in Melbourne, delivered to your inbox every day.
          </p>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute top-5 left-[110px] w-[150px] h-[200px] bg-white rounded-lg shadow-xl -skew-x-3 rotate-[2deg]" />
          <div className="absolute bottom-8 right-[110px] w-[150px] h-[200px] bg-white rounded-lg shadow-xl -skew-x-3 rotate-[2deg]" />
          <img
            src="https://media.istockphoto.com/id/621710158/photo/show-jumping-horse-with-rider-jumping-over-hurdle.jpg?s=612x612&w=0&k=20&c=XpkdEYh5tGXaT5PhFmCN-WXVLfnZlNHepSLFDhg2SpI="
            alt="Horse Racing"
            className="rounded-lg shadow-md w-[400px] h-[500px] max-w-[400px] scale-75 -skew-x-3 rotate-[2deg]"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-gray-100 py-16 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Unlock your betting potential with <br /> industry-leading tools.
          </h2>
          <p className="text-lg text-gray-700">
            You get a betting feature, you get a betting feature, everyone gets
            a betting feature! The Dabble app is stuffed <br />
            with so many features, you’ll be as entertained as a cat playing
            with a laser pointer.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-4xl font-bold mb-2">200+</h3>
            <p className="text-gray-700">Positive Expected Value (+EV) Bets</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-4xl font-bold mb-2">50+</h3>
            <p className="text-gray-700">Multiple Race Everyday</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-4xl font-bold mb-2">99+</h3>
            <p className="text-gray-700">Arbitrage Bets</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-4xl font-bold mb-2">999+</h3>
            <p className="text-gray-700">Recommended Tips Everyday</p>
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <div className="flex items-center space-x-2 text-gray-700">
            <a href="#" className="text-[#6761bd]">
              <RiHandCoinLine size={20} fontWeight={200} />
            </a>
            <p>Best Top Tipper</p>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <a href="#" className="text-[#6761bd]">
              <HiOutlineUsers size={20} fontWeight={200} />
            </a>
            <p>Free Tips</p>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <a href="#" className="text-[#6761bd]">
              <MdOutlineVerifiedUser size={20} fontWeight={200} />
            </a>
            <p>Verified by Experts</p>
          </div>
        </div>
      </div>

      {/* third News Section */}
      <div className="bg-gray-100 py-16 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">News from the Races</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
          {newsPosts.map((post, index) => (
            <NewsPostCard
              key={index}
              title={post.title}
              description={post.description}
              imageSrc={post.imageSrc}
              author={post.author}
              postingTime={post.postingTime}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <button className="btn bg-gray-400 px-10 py-2 rounded-sm text-white">
            Load More News
          </button>
        </div>
      </div>

      {/* fourth Section */}
      <div className="mb-12 flex flex-col justify-center items-center py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Have what it takes to become <br /> A Professional Tippers.
        </h2>
        <p className="text-lg text-gray-700">
          You get a betting feature, you get a betting feature, everyone gets a
          betting feature! The Dabble app is stuffed <br />
          with so many features, you’ll be as entertained as a cat playing with
          a laser pointer.
        </p>
        <div className="flex flex-col p-6 shadow-sm border  rounded-lg mt-6">
          <div className="flex flex-col md:flex-row justify-center md:justify-start">
            <input
              type="text"
              placeholder="Username"
              className="px-4 py-2 border rounded-md border-gray-300 mb-4 md:mb-0 md:mr-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 border rounded-md border-gray-300 mb-4 md:mb-0 md:mr-2"
            />
            <button className="px-4 py-2 bg-gradient-to-r from-[#714DE4] to-[#5E80E8] text-white rounded-md">
              Get Start Let's Tipping
            </button>
          </div>
          <p className="text-gray-500 mt-1 text-start">
            Get the best bet in Melbourne, delivered to your inbox every day.
          </p>
        </div>
      </div>
      {/* Latest Win Section */}
      <div className="bg-gray-100 py-16 w-full px-16">
        <div className="flex justify-between mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest Win</h2>
          <button className="btn bg-gray-400 px-6 py-2 rounded-md text-white text-sm">
            View More +
          </button>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4 w-full">
          <div className="bg-white py-8 rounded-lg shadow-md ">
            <div className="flex justify-between items-center mb-4 px-8">
              <div className="flex items-center">
                <img
                  src="https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBvcnRyYWl0fGVufDB8fDB8fHww"
                  alt="PunterMaster"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-bold">PunterMaster</h3>
                  <p className="text-gray-500 text-sm">Win-Loss 27-50</p>
                  <button className="bg-green-600 text-white  text-sm px-2 py-1 rounded-md">
                    Won @ 39.00
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <button className="ml-auto bg-gray-800 text-white px-4 py-2 rounded-md flex  items-center">
                  <IoIosAddCircleOutline /> <span className="ms-1">Follow</span>
                </button>
                <p className="text-gray-500 mt-3 text-sm">
                  26 April 2023 2:45pm
                </p>
              </div>
            </div>
            <div className="mb-4">
              <div className="w-[90%]">
                <div className="flex justify-between items-center mb-2 border-t text-center ps-8">
                  <span className="font-medium">Parlay Pick</span>
                  <span className="text-[#714DE4] border-t-4 border-[#714DE4]">
                    Pick
                  </span>
                  <span className="font-medium">Analysis</span>
                </div>
                <div className="flex justify-between items-center mb-2 ps-8">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1594069033313-8920df9150b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91cnNlfGVufDB8fDB8fHww"
                        alt="PunterMaster"
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="ml-4">
                        <h3 className="font-bold text-sm">PunterMaster</h3>
                        <p className="text-gray-500 text-sm">Win-Loss 27-50</p>
                      </div>
                    </div>
                  </div>
                  {/* <span className="text-green-500">Win</span> */}
                  <div className="flex flex-col">
                    <button className="ml-auto bg-gray-400 text-white px-4 py-2 rounded-md flex  items-center">
                      <span>$5.50</span>
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2 ps-8">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1594069033313-8920df9150b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91cnNlfGVufDB8fDB8fHww"
                        alt="PunterMaster"
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="ml-4">
                        <h3 className="font-bold text-sm">PunterMaster</h3>
                        <p className="text-gray-500 text-sm">Win-Loss 27-50</p>
                      </div>
                    </div>
                  </div>
                  {/* <span className="text-green-500">Win</span> */}
                  <div className="flex flex-col">
                    <button className="ml-auto bg-gray-400 text-white px-4 py-2 rounded-md flex  items-center">
                      <span>$5.50</span>
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2 ps-8">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1594069033313-8920df9150b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91cnNlfGVufDB8fDB8fHww"
                        alt="PunterMaster"
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="ml-4">
                        <h3 className="font-bold text-sm">PunterMaster</h3>
                        <p className="text-gray-500 text-sm">Win-Loss 27-50</p>
                      </div>
                    </div>
                  </div>
                  {/* <span className="text-green-500">Win</span> */}
                  <div className="flex flex-col">
                    <button className="ml-auto bg-gray-400 text-white px-4 py-2 rounded-md flex  items-center">
                      <span>$5.50</span>
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2 ps-8">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1594069033313-8920df9150b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91cnNlfGVufDB8fDB8fHww"
                        alt="PunterMaster"
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="ml-4">
                        <h3 className="font-bold text-sm">PunterMaster</h3>
                        <p className="text-gray-500 text-sm">Win-Loss 27-50</p>
                      </div>
                    </div>
                  </div>
                  {/* <span className="text-green-500">Win</span> */}
                  <div className="flex flex-col">
                    <button className="ml-auto bg-gray-400 text-white px-4 py-2 rounded-md flex  items-center">
                      <span>$5.50</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-3">
              <div className="flex  flex-col justify-between items-center border p-4">
                <span className="text-gray-500 text-sm">Price</span>
                <span className="font-medium">$10.55</span>
              </div>
              <div className="flex  flex-col justify-between items-center border p-4">
                <span className="text-gray-500 text-sm">Risking</span>
                <span className="font-medium">$1,500</span>
              </div>
              <div className="flex  flex-col justify-between items-center border p-4">
                <span className="text-gray-500 text-sm">Win</span>
                <span className="font-medium">$155,899</span>
              </div>
            </div>
            <div className="px-8">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md w-full mt-2">
                Resulted
              </button>
            </div>
          </div>
          <div className="bg-white py-8 rounded-lg shadow-md ">
            <div className="flex justify-between items-center mb-4 px-8">
              <div className="flex items-center">
                <img
                  src="https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBvcnRyYWl0fGVufDB8fDB8fHww"
                  alt="PunterMaster"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-bold">PunterMaster</h3>
                  <p className="text-gray-500 text-sm">Win-Loss 27-50</p>
                  <button className="bg-green-600 text-white  text-sm px-2 py-1 rounded-md">
                    Won @ 39.00
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <button className="ml-auto bg-gray-800 text-white px-4 py-2 rounded-md flex  items-center">
                  <IoIosAddCircleOutline /> <span className="ms-1">Follow</span>
                </button>
                <p className="text-gray-500 mt-3 text-sm">
                  26 April 2023 2:45pm
                </p>
              </div>
            </div>
            <div className="mb-4">
              <div className="w-[90%]">
                <div className="flex justify-between items-center mb-2 border-t text-center ps-8">
                  <span className="font-medium">Parlay Pick</span>
                  <span className="text-[#714DE4] border-t-4 border-[#714DE4]">
                    Pick
                  </span>
                  <span className="font-medium">Analysis</span>
                </div>
                <div className="flex justify-between items-center mb-2 ps-8">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1594069033313-8920df9150b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91cnNlfGVufDB8fDB8fHww"
                        alt="PunterMaster"
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="ml-4">
                        <h3 className="font-bold text-sm">PunterMaster</h3>
                        <p className="text-gray-500 text-sm">Win-Loss 27-50</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <button className="ml-auto bg-green-500 text-white px-4 py-2 rounded-md flex  items-center">
                      <span>Win</span>
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <button className=" bg-gray-400 text-white px-4 py-2 rounded-md flex  items-center">
                      <span>$5.50</span>
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2 ps-8">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1594069033313-8920df9150b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91cnNlfGVufDB8fDB8fHww"
                        alt="PunterMaster"
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="ml-4">
                        <h3 className="font-bold text-sm">PunterMaster</h3>
                        <p className="text-gray-500 text-sm">Win-Loss 27-50</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <button className=" bg-gray-400 text-white px-4 py-2 rounded-md flex  items-center">
                      <span>Place</span>
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <button className="ml-auto bg-gray-400 text-white px-4 py-2 rounded-md flex  items-center">
                      <span>$5.50</span>
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2 ps-8">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1594069033313-8920df9150b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91cnNlfGVufDB8fDB8fHww"
                        alt="PunterMaster"
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="ml-4">
                        <h3 className="font-bold text-sm">PunterMaster</h3>
                        <p className="text-gray-500 text-sm">Win-Loss 27-50</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <button className=" bg-gray-400 text-white px-4 py-2 rounded-md flex  items-center">
                      <span>Place</span>
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <button className="ml-auto bg-gray-400 text-white px-4 py-2 rounded-md flex  items-center">
                      <span>$5.50</span>
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2 ps-8">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1594069033313-8920df9150b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91cnNlfGVufDB8fDB8fHww"
                        alt="PunterMaster"
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="ml-4">
                        <h3 className="font-bold text-sm">PunterMaster</h3>
                        <p className="text-gray-500 text-sm">Win-Loss 27-50</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <button className=" bg-gray-400 text-white px-4 py-2 rounded-md flex  items-center">
                      <span>Place</span>
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <button className="ml-auto bg-gray-400 text-white px-4 py-2 rounded-md flex  items-center">
                      <span>$5.50</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-3">
              <div className="flex  flex-col justify-between items-center border p-4">
                <span className="text-gray-500 text-sm">Price</span>
                <span className="font-medium">$10.55</span>
              </div>
              <div className="flex  flex-col justify-between items-center border p-4">
                <span className="text-gray-500 text-sm">Risking</span>
                <span className="font-medium">$1,500</span>
              </div>
              <div className="flex  flex-col justify-between items-center border p-4">
                <span className="text-gray-500 text-sm">Win</span>
                <span className="font-medium">$155,899</span>
              </div>
            </div>
            <div className="px-8">
              <button className="bg-[#714DE4] flex items-center justify-center text-white px-4 py-2 rounded-md w-full mt-2">
                <span>Copy Bet</span>
                <span className="flex items-center border-s ms-2 ps-2">
                  <CiUser />
                  155
                </span>
              </button>
            </div>
          </div>
          <div className="grid grid-rows-2 space-y-6">
            <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#714DE4] to-[#5E80E8] text-white px-4 py-6 rounded-lg w-full text-center">
              <p className="">Beat the Odds</p>
              <p className="text-[20px] font-medium">Unlock Your Potential</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#714DE4] to-[#5E80E8] text-white px-4 py-6 rounded-lg w-full text-center">
              <p className="">Beat the Odds</p>
              <p className="text-[20px] font-medium">Unlock Your Potential</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center bg-orange-500 text-white py-6 mt-8 rounded-lg">
          <h3 className="text-5xl font-bold mb-2 me-6">lastLeg®</h3>
          <div>
            <p className="text-2xl mb-1">Your Unfair Advantage on the Punt</p>
            <p className="text-3xl font-bold">
              Save the Best for the Last on LastLeg®
            </p>
          </div>
        </div>
      </div>
      <div className="w-full grid-cols-2 space-x-8 py-8 px-16 grid bg-gray-100">
        <div className="border-r pr-5">
          {/* Most Tipped Horses */}
          <div className="border-b pb-5">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">Most Tipped Horses</h2>
              <button className="btn bg-gray-400 px-6 py-2 rounded-md text-white text-sm">
                View More +
              </button>
            </div>
            <div className="space-y-4">
              {Array(4)
                .fill("")
                .map((_, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-white p-4 shadow rounded-md"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://media.istockphoto.com/id/1317269825/photo/blank-white-short-sleeve-button-down-shirt-mockup-isolated.jpg?s=612x612&w=0&k=20&c=8Zb2O9_odxSimQ8Xr1SihJUY-tNVqz2Krxc6g8_yweU="
                        alt="Profile"
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-semibold">
                          {index + 1}. Lucas the Younger
                        </p>
                        <p className="text-gray-500 text-sm">
                          Sportsbet-Pakenham R7
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-pink-500 text-sm">15 Tips</span>
                      <button className="btn bg-gray-400 px-6 py-2 rounded-md text-white text-sm">
                        $5.55
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* Top BlackBookers */}
          <div className="mt-5">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">Top BlackBookers</h2>
              <button className="btn bg-gray-400 px-6 py-2 rounded-md text-white text-sm">
                View More +
              </button>
            </div>
            <div className="space-y-4">
              {Array(4)
                .fill("")
                .map((_, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-white p-4 shadow rounded-md"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://media.istockphoto.com/id/1317269825/photo/blank-white-short-sleeve-button-down-shirt-mockup-isolated.jpg?s=612x612&w=0&k=20&c=8Zb2O9_odxSimQ8Xr1SihJUY-tNVqz2Krxc6g8_yweU="
                        alt="Profile"
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-semibold">
                          {index + 1}. Lucas the Younger
                        </p>
                        <p className="text-gray-500 text-sm">
                          Sportsbet-Pakenham R7
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600 text-sm font-medium">
                        152 BB
                      </span>
                      <button className="btn bg-gray-400 px-6 py-2 rounded-md text-white text-sm">
                        View
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* Top Tippers */}
        <div>
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">Top Tippers</h2>
            <button className="btn bg-gray-400 px-6 py-2 rounded-md text-white text-sm">
              View More +
            </button>
          </div>
          <div className="space-y-4">
            {Array(6)
              .fill("")
              .map((_, index) => (
                <div className="w-full flex justify-between items-center bg-white pr-4 shadow rounded-md">
                  <div
                    key={index}
                    className="w-[80%] flex justify-between items-center"
                  >
                    <div className="w-full flex items-center justify-between ">
                      <div
                        className={`text-sm flex items-center justify-center  py-2  text-white font-bold w-[70px] rounded-e-xl ${
                          index === 0
                            ? "bg-yellow-500"
                            : index === 1
                            ? "bg-gray-500"
                            : index === 2
                            ? "bg-orange-500"
                            : "bg-gray-300"
                        }`}
                      >
                        <span>
                          <TfiCup />
                        </span>
                        <span className="ms-2">
                          {index + 1}
                          {index === 0
                            ? "st"
                            : index === 1
                            ? "nd"
                            : index === 2
                            ? "rd"
                            : "th"}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <img
                          src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHBvcnRyYWl0fGVufDB8fDB8fHww"
                          alt="Profile"
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="font-medium">Horsetipguru</p>
                          <p className="text-gray-500 text-sm">TIP: 5 BB: 15</p>
                        </div>
                      </div>
                      <div className="py-2">
                        <p className="pr-2">
                          <span className="text-gray-500">POT:</span>{" "}
                          <span className="text-black ms-2">53.36%</span>
                        </p>
                        <p className="border-b"></p>
                        <p className="pr-2">
                          <span className="text-gray-500">Profit:</span>
                          <span className="text-black ms-2">$5,060.00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center py-2 border-l w-[20%]">
                    <span className="text-black font-bold text-lg">
                      18: 3-2-1
                    </span>
                    <span className="text-gray-600 text-sm mb-2">
                      Race: results
                    </span>
                    <div className="w-[80%] bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-sky-400 h-2 rounded-full"
                        style={{ width: `50%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* Free Tippers */}
      <div className="w-full grid-cols-1 space-x-1 py-8 px-16 grid bg-gray-100">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">Most Tipped Horses</h2>
          <button className="btn bg-gray-400 px-6 py-2 rounded-md text-white text-sm">
            View More +
          </button>
        </div>
        <div className="w-full flex justify-between bg-gray-100">
          {Array(3)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="flex flex-col justify-between items-start bg-white  shadow rounded-lg overflow-hidden"
              >
                <div className="px-2 py-4">
                  <button className="bg-gray-200 px-1 rounded-lg mb-2">
                    Contenders
                  </button>
                  <h2 className="font-medium text-lg">Lucas the Younger</h2>
                </div>
                {Array(4)
                  .fill("")
                  .map((_, key) => (
                    <div
                      className="flex items-center space-x-4 border-b w-full px-2 py-2"
                      key={key}
                    >
                      <h2 className="font-medium  text-sm">{key + 1}
                          {key === 0
                            ? "st"
                            : key === 1
                            ? "nd"
                            : key === 2
                            ? "rd"
                            : "th"}</h2>
                      <img
                        src="https://media.istockphoto.com/id/1317269825/photo/blank-white-short-sleeve-button-down-shirt-mockup-isolated.jpg?s=612x612&w=0&k=20&c=8Zb2O9_odxSimQ8Xr1SihJUY-tNVqz2Krxc6g8_yweU="
                        alt="Profile"
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium">
                          {index + 1}. Lucas the Younger
                          <span className="font-normal text-gray-500 text-sm ms-2">
                          (5) 3 Yo (G)
                        </span>
                        </p>
                        <p className="text-gray-500 text-sm">
                          Sportsbet-Pakenham R7
                        </p>
                      </div>
                    </div>
                  ))}
                <div className="flex items-center space-x-4 border-b w-[400px] mt-4">
                  <video controls className="w-full">
                    <source
                      src="https://videos.pexels.com/video-files/3987730/3987730-sd_640_360_24fps.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ))}
        </div>

        {/* Video Component */}
      </div>
      {/* Footer Section */}
      <Footer/>
    </div>
  );
}

export default Landing;
