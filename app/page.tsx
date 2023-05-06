import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="z-10 mx-auto text-white">
        <div className="flex h-screen items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="text-6xl font-bold">Zellis</div>
            <div className="mb-8 text-2xl">Coming Soon</div>
            <div className="mb-12 flex flex-col flex-wrap gap-2 text-center capitalize md:flex-row md:gap-8">
              <div>
                <a
                  className="text-lg"
                  href="https://www.youtube.com/channel/UC_t9fbSpPBPhts5IZVFg-Bg">
                  youtube
                </a>
              </div>
              <div>
                <a
                  className="text-lg"
                  href="https://open.spotify.com/artist/6o6uRGjGVUwY6ncLiakiGw?si=sPVu8H2xSmCHxNIrBJZBdA">
                  Spotify
                </a>
              </div>
              <div>
                <a
                  className="text-lg"
                  href="https://www.instagram.com/zellismetal">
                  instagram
                </a>
              </div>
              <div>
                <a
                  className="text-lg"
                  href="https://twitter.com/ZellisOfficial">
                  twitter
                </a>
              </div>
              <div>
                <a href="https://www.tiktok.com/@zellismetal">
                  tiktok
                </a>
              </div>
            </div>
            <Image
              className="rounded-full"
              src="/Zellis_Logo_red.png"
              width={200}
              height={200}
              alt="zellis logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
