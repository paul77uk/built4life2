import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

const AuthButtons = () => {
  return (
    <div className="flex gap-3 sm:gap justify-center">
      <RegisterLink>
        <Button className="inline-flex items-center justify-center rounded-lg px-5 py-6 text-center text-base font-medium ">
          Sign up
          <svg
            className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Button>
      </RegisterLink>
      <a
        href="/api/auth/login"
        className="inline-flex items-center justify-center rounded-lg border border-white px-5 py-3 text-center text-base font-medium text-white hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-400 sm:ms-4"
      >
        Sign in
      </a>
    </div>
  );
}
export default AuthButtons