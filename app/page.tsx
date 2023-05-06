import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto text-white">
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <div className="text-5xl">Zellis</div>
        <div className="mb-8">Coming Soon</div>
        <div className="flex flex-col flex-wrap gap-2 text-center md:flex-row md:gap-8">
          <div>youtube</div>
          <div>instagram</div>
          <div>twitter</div>
          <div>tiktok</div>
          <div>Spotify</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
