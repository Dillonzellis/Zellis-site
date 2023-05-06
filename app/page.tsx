import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto text-white">
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <div className="text-5xl font-bold">Zellis</div>
        <div className="mb-8 text-xl">Coming Soon</div>
        <div className="flex flex-col flex-wrap gap-2 text-center capitalize md:flex-row md:gap-8">
          <div>youtube</div>
          <div>Spotify</div>
          <div>instagram</div>
          <div>twitter</div>
          <div>tiktok</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
