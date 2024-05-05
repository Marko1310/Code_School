import waveDark from '/wave-dark.svg';
import blob from '/blob.svg';
import animation from '/animation.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div
        className="flex h-screen w-screen items-center"
        style={{
          backgroundImage: `url(${waveDark})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex h-full w-full items-center justify-between gap-12">
          <div className="h-full w-full flex-1">
            <div className="flex h-full flex-col justify-between">
              <div className="flex h-full flex-col items-center justify-between  p-16">
                <div
                  className="h-30 flex h-96 w-full items-center justify-center px-2"
                  style={{
                    backgroundImage: `url(${blob})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <p className="text-4xl font-semibold text-slate-100">
                    Welcome to Code School
                  </p>
                </div>
                <div className="text-center">
                  <Link
                    to={`/app`}
                    className="rounded-lg bg-accent px-8 py-4 font-semibold text-text transition-all hover:bg-green-700 hover:text-white"
                  >
                    Enter
                  </Link>
                </div>
              </div>
              <p className="p-2 text-left text-sm text-text">
                © 2024 Marko Čabo. All rights reserved.
              </p>
            </div>
          </div>

          <div className="hidden h-full p-16 lg:flex lg:items-center">
            <img className="max-h-full" src={animation} alt="animation" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
