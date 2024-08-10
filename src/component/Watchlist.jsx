/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Navbar";

const Watchlist = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex justify-center my-4 ">
          <input type="text" placeholder="Search movies" className="h-[3rem] w-[20rem] p-5 bg-gray-400/70 text-black outline-none placeholder-gray-700" />
        </div>

        <div className="border border-gray-200 m-8 overflow-hidden rounded-lg">
          <table className="w-full text-gray-700 text-center">
            <thead className="border-b-2">
              <tr>
                <td>Name</td>
                <td>Ratings</td>
                <td>Popularity</td>
                <td>Gener</td>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b-2">
                <td className="flex items-center px-6 py-4">
                  <img src="https://images.squarespace-cdn.com/content/v1/5a7f41ad8fd4d236a4ad76d0/1669842759656-5I2FVR41AOYZQK9409HB/Avatar_TWOW_IMAX_FinalPoster_DC_v03HD.jpg" className="h-[8rem] w-[8rem]" alt="" />
                  <div className="mx-8">Avatar</div>
                </td>
                <td>7.3</td>
                <td>9</td>
                <td>fantasy</td>

                <td className="text-red-600">Delete</td>
              </tr>

              <tr className="border-b-2">
                <td className="flex items-center px-6 py-4">
                  <img src="https://images.squarespace-cdn.com/content/v1/5a7f41ad8fd4d236a4ad76d0/1669842759656-5I2FVR41AOYZQK9409HB/Avatar_TWOW_IMAX_FinalPoster_DC_v03HD.jpg" className="h-[8rem] w-[8rem]" alt="" />
                  <div className="mx-8">Avatar</div>
                </td>
                <td>7.3</td>
                <td>9</td>
                <td>fantasy</td>

                <td className="text-red-600">Delete</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Watchlist;
