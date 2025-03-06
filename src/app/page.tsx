import { Check, Star } from "lucide-react";
import Phone from "@/components/Phone";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import Image from "next/image";
import snake from "../../public/snake-1.png";
import user1 from "../../public/users/user-1.png";
import user2 from "../../public/users/user-2.png";
import user3 from "../../public/users/user-3.png";
import user4 from "../../public/users/user-4.png";
import user5 from "../../public/users/user-5.png";
import yourImage from "../../public/your-image.png";
import line from "../../public/line.png";
import testimonial1 from "../../public/testimonials/1.jpg";

export default function Home() {
  return (
    <div className="bg-slate-50">
      {/* ??? */}
      <section>
        <MaxWidthWrapper className="pt-10 pb-24 sm:pb-32 lg:pt-24 lg:pb-52 lg:grid lg:grid-cols-3 lg:gap-x-0 xl:pt-32 xl:gap-x-8">
          {/* Intro Product */}
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Logo */}
              <div className="absolute left-0 -top-20 w-28 hidden lg:block">
                <Image src={snake} alt={"snake"} className="w-full" />
              </div>

              {/* Heading */}
              <h1 className="relative w-fit mt-16 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight !leading-tight text-balance text-gray-900">
                Your Image on a{" "}
                <span className="bg-green-600 px-2 text-white">Custom</span>{" "}
                Phone Case
              </h1>

              {/* Subheading */}
              <p className="mt-8 max-w-prose text-lg text-center lg:text-left md:text-wrap text-balance lg:pr-10">
                Capture your favorite memories with your own,
                <span className="font-semibold"> one-of-one </span> phone case.
                CaseCobra allows you to protect your memories, not just your
                phone case.
              </p>

              {/* Bullet Points */}
              <ul className="mt-8 flex flex-col items-center sm:items-start space-y-2 text-left font-medium">
                <div className="space-y-2">
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    High-quality, durable material
                  </li>
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />5 year
                    print guarantee
                  </li>
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>

              {/* Social Proof */}
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                {/* Customer Avatar Images */}
                <div className="flex -space-x-4">
                  <Image
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-100"
                    src={user1}
                    alt="user1"
                  />
                  <Image
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-100"
                    src={user2}
                    alt="user2"
                  />
                  <Image
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-100"
                    src={user3}
                    alt="user3"
                  />
                  <Image
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-100"
                    src={user4}
                    alt="user4"
                  />
                  <Image
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-100"
                    src={user5}
                    alt="user5"
                  />
                </div>

                {/* Star Ratings */}
                <div className="flex flex-col items-center sm:items-start justify-between">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  </div>
                  <p>
                    <span className="font-semibold">1.250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Illustration */}
          <div className="col-span-full lg:col-span-1 w-full h-fit flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mt-20 lg:mx-0">
            <div className="relative md:max-w-xl">
              <Image
                src={yourImage}
                alt="your-image"
                className="absolute left-56 -top-20 w-40 lg:w-52 select-none hidden sm:block lg:hidden xl:block"
              />
              <Image
                src={line}
                alt="line"
                className="absolute -left-6 -bottom-6 w-20 select-none"
              />
              <Phone className="w-64" imgSrc={testimonial1} />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* ??? */}
    </div>
  );
}
