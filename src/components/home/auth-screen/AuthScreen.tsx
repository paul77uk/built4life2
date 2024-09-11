import PricingPage from "@/components/Pricing";
import AuthButtons from "./AuthButtons";

const AuthScreen = () => {
  return (
    <main>
      <section className="flex h-screen w-full items-center bg-gray-500 bg-[url('https://img.atlasobscura.com/kj1zVRhIrkZA3Hqgl4uj_UkPXAxmtcn92YkVekDgYs4/rs:fill:780:520:1/g:ce/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy9hMmYx/YzUzODQ0MGVhOGUw/YmNfNTg0MTA2MDhf/MTMyOTAwMTk3ODE0/MDM0XzQ4OTg5NjYx/MDk2Mjg1NTA5Mjdf/bi5qcGc.jpg')] bg-cover bg-center bg-no-repeat bg-blend-multiply">
        <div className="mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
            Built4Life
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl">
            Unlock Your Full Potential: Elevate Your Fitness Journey with
            Built4Life.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <AuthButtons />
          </div>
        </div>
      </section>
      <div className="mt-10">
        <PricingPage />
      </div>
    </main>
  );
};
export default AuthScreen;
