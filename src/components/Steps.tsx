"use client";

import { usePathname } from "next/navigation";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";

import Image from "next/image";
import snake1 from "../../public/snake-1.png";
import snake2 from "../../public/snake-2.png";
import snake3 from "../../public/snake-3.png";

const STEPS = [
  {
    name: "Step 1: Add image",
    description: "Choose an image for your case",
    url: ROUTES.STEP_UPLOAD,
  },
  {
    name: "Step 2: Customize design",
    description: "Make the case yours",
    url: ROUTES.STEP_DESIGN,
  },
  {
    name: "Step 3: Summary",
    description: "Review your final design",
    url: ROUTES.STEP_PREVIEW,
  },
];

const Steps = () => {
  const pathName = usePathname();

  return (
    <ol className="rounded-md lg:rounded-none bg-white lg:flex lg:border-l lg:border-r lg:border-gray-200">
      {STEPS.map((step, i) => {
        const isCurrent = pathName.endsWith(step.url);
        const isCompleted = STEPS.slice(i + 1).some((step) =>
          pathName.endsWith(step.url)
        );
        const imgPath = [snake1, snake2, snake3][i] ?? snake1;

        return (
          <li key={step.name} className="relative overflow-hidden lg:flex-1">
            <div>
              {/* Progress Bar */}
              <span
                className={cn(
                  "absolute left-0 top-0 h-full w-1 bg-zinc-400 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full",
                  {
                    "bg-zinc-700": isCurrent,
                    "bg-primary": isCompleted,
                  }
                )}
                aria-hidden="true"
              />

              {/* Display all Steps */}
              <span
                className={cn(
                  i !== 0 ? "lg:pl-9" : "",
                  "flex items-center px-6 py-4 text-sm font-medium"
                )}
              >
                {/* Image of every Step */}
                <span className="shrink-0">
                  <Image
                    src={imgPath}
                    alt={`step ${i + 1}`}
                    className={cn(
                      "flex items-center justify-center h-20 w-20 object-contain",
                      {
                        "border-none": isCompleted,
                        "border-zinc-700": isCurrent,
                      }
                    )}
                  />
                </span>

                {/* Detail of every Step */}
                <span className="ml-4 mt-0.5 h-full min-w-0 flex flex-col justify-center">
                  <span
                    className={cn("text-sm font-semibold text-zinc-700", {
                      "text-primary": isCompleted,
                      "text-zinc-700": isCurrent,
                    })}
                  >
                    {step.name}
                  </span>
                  <span className="text-sm text-zinc-500">
                    {step.description}
                  </span>
                </span>
              </span>

              {/* Separator */}
              {i !== 0 ? (
                <div className="absolute inset-0 hidden w-3 lg:block">
                  <svg
                    className="h-full w-full text-gray-300"
                    viewBox="0 0 12 82"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0.5 0V31L10.5 41L0.5 51V82"
                      stroke="currentcolor"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default Steps;
