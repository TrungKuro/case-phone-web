import Link from "next/link";
import { ROUTES } from "@/constants/routes";

import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const NavBar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  return (
    <nav className="sticky inset-x-0 top-0 z-[100] h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          {/* Logo */}
          <Link href={ROUTES.HOME} className="z-40 flex font-semibold">
            case<span className="text-green-600">cobra</span>
          </Link>

          {/* Navigation Button Group */}
          <div className="flex h-full items-center space-x-4">
            {user ? (
              /* ------------------------- HAD USER ------------------------ */
              <>
                {/* SIGN OUT */}
                <Link
                  href={ROUTES.AUTH_LOGOUT}
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign out
                </Link>
                {/* ADMIN */}
                {isAdmin ? (
                  <Link
                    href={ROUTES.DASHBOARD}
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })}
                  >
                    Dashboard ✨
                  </Link>
                ) : null}
                {/* CREATE CASE */}
                <Link
                  href={ROUTES.CONFIGURE_UPLOAD}
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden items-center gap-1 sm:flex",
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            ) : (
              /* ------------------------- NO USER ------------------------- */
              <>
                {/* SIGN UP */}
                <Link
                  href={ROUTES.AUTH_REGISTER}
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign up
                </Link>
                {/* LOGIN */}
                <Link
                  href={ROUTES.AUTH_LOGIN}
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden items-center gap-1 sm:flex",
                  })}
                >
                  Login
                </Link>
                {/* SPACE */}
                <div className="hidden h-8 w-px bg-zinc-200 sm:block" />
                {/* CREATE CASE */}
                <Link
                  href={ROUTES.CONFIGURE_UPLOAD}
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden items-center gap-1 sm:flex",
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
              /* ----------------------------------------------------------- */
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NavBar;
