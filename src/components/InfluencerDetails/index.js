import React from "react";
import { RiUserFollowLine } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { BiDownload } from "react-icons/bi";
import InfluencerMoreDetails from "../reusable/InfluencerMoreDetails";

const InfluencerDetails = () => {
  const recentPosts = [
    {
      id: 1,
      imgURL: "https://wallpapercave.com/wp/wp2560791.jpg",
      alt: "ronaldo1",
    },
    {
      id: 2,
      imgURL:
        "https://www.imagediamond.com/blog/wp-content/uploads/2019/10/cristiano-ronaldoed5-743x1024.jpg",
      alt: "ronaldo2",
    },
    {
      id: 3,
      imgURL:
        "https://image.winudf.com/v2/image/Y29tLm1vYmlsZWxpdmUuY3Jpc3RpYW5vcm9uYWxkb2hkd2FsbHBhcGVyc19zY3JlZW5fMF8xNTE4MjkyMTUzXzA3NQ/screen-0.jpg?fakeurl=1&type=.jpg",
      alt: "ronaldo3",
    },
    {
      id: 4,
      imgURL:
        "https://i.pinimg.com/originals/56/f3/27/56f32757671e1ffec46764b5c3550f07.jpg",
      alt: "ronaldo4",
    },
  ];
  return (
    <div className="bg-indigo-900 text-white">
      {/* -----------------------------------------section  1 ----------------------------------------------------------------------- */}
      <div className="flex items-center justify-evenly p-2 mb-4">
        <img
          src="https://s.france24.com/media/display/2e9ae70c-131a-11ec-93a3-005056a97e36/efc6391b39735bf0ec3857860183c094381d25ea.jpg"
          alt="ronaldo"
          className="rounded-full h-32 w-32 shadow-xl"
        />
        <p className="font-medium text-2xl text-center">Cristiano Ronaldo</p>
      </div>
      <div className="text-center mb-4">
        <p className="font-semibold text-2xl mb-1">$390,023 - $650,039</p>
        <p className="text-xs text-blue-300 font-medium">
          Estimated Earnings Per Post
        </p>
      </div>
      {/* -------------------------------------------section 2 ------------------------------------------------------------------------------ */}
      <div className="text-black flex justify-evenly mb-4">
        <InfluencerMoreDetails
          icon={<RiUserFollowLine className="text-xl mr-2" />}
          label="Followers"
          value="125.23M"
        />
        <InfluencerMoreDetails
          icon={<RiUserFollowLine className="text-xl mr-2" />}
          label="Following"
          value="7"
        />
      </div>
      <div className="text-black flex justify-evenly mb-4">
        <InfluencerMoreDetails
          icon={<FcLike className="text-xl mr-2" />}
          label="Average Likes"
          value="924,456"
        />
        <InfluencerMoreDetails
          icon={<BiDownload className="text-xl mr-2" />}
          label="Total Posts"
          value="217"
        />
      </div>
      {/* -----------------------------------------------------section -3 ------------------------------------------------------------- */}
      <div className="bg-white text-black mx-3.5 rounded-md mb-4">
        <div className="flex text-center justify-evenly py-2">
          <div>
            <p className="font-semibold text-lg">1.7M</p>
            <p className="text-xs italic">Story Impressions</p>
          </div>
          <div>
            <p className="font-semibold text-lg">1.8M</p>
            <p className="text-xs italic">Post Impressions</p>
          </div>
        </div>
        <div className="flex text-center justify-evenly py-2">
          <div>
            <p className="font-semibold text-lg">2.7M</p>
            <p className="text-xs italic">Estimated Reach</p>
          </div>
          <div>
            <p className="font-semibold text-lg">2.9M</p>
            <p className="text-xs italic">Average Views</p>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------------- section -4 ----------------------------------------------------------- */}
      <div className="bg-white text-black font-medium mx-3.5 rounded-md mb-4 p-2">
        <p className="text-center mb-3 text-md">Audience Interests</p>
        <div className="flex justify-between mb-4">
          <p className="text-sm">Sports with a ball</p>
          <p>91%</p>
        </div>
        <div className="flex justify-between mb-4">
          <p className="text-sm">Machinery & Technologies</p>
          <p>89%</p>
        </div>
        <div className="flex justify-between mb-4">
          <p className="text-sm">Computers & Gadgets</p>
          <p>88%</p>
        </div>
      </div>
      <div className="bg-white text-black font-medium mx-3.5 rounded-md mb-4 p-2">
        <p className="text-center mb-3 text-md">Audience From</p>
        <div className="flex justify-between mb-4">
          <p className="text-sm">Portugal</p>
          <p>91%</p>
        </div>
        <div className="flex justify-between mb-4">
          <p className="text-sm">India</p>
          <p>89%</p>
        </div>
        <div className="flex justify-between mb-4">
          <p className="text-sm">England</p>
          <p>88%</p>
        </div>
      </div>
      {/* ---------------------------------------------------------------section 5 ---------------------------------------------------- */}
      <div className="pb-6">
        <p className="mb-2 text-center">Recent Posts</p>
        <div className="bg-white rounded-md flex justify-evenly flex-wrap">
          {recentPosts.map((recentPost) => {
            return (
              <img
                src={recentPost.imgURL}
                alt={recentPost.alt}
                key={recentPost.id}
                className="h-40 w-32 m-2 rounded-sm shadow-xl"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InfluencerDetails;
