import Image from "next/image";

import snake1 from "../../public/snake-1.png";
import snake2 from "../../public/snake-2.png";

import user1 from "../../public/users/user-1.png";
import user2 from "../../public/users/user-2.png";
import user3 from "../../public/users/user-3.png";
import user4 from "../../public/users/user-4.png";
import user5 from "../../public/users/user-5.png";

import yourImage from "../../public/your-image.png";
import line from "../../public/line.png";
import testimonial1 from "../../public/testimonials/1.jpg";

import arrow from "../../public/arrow.png";
import horse from "../../public/horse.jpg";

import Link from "next/link";
import { ROUTES } from "@/constants/routes";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { ArrowRight, Check, Star } from "lucide-react";
import { Icons } from "@/components/Icons";
import { Reviews } from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-slate-50">
      {/* ------------------------------- ... ------------------------------- */}
      <section>
        <MaxWidthWrapper className="pt-10 pb-24 sm:pb-32 lg:pt-24 lg:pb-52 lg:grid lg:grid-cols-3 lg:gap-x-0 xl:pt-32 xl:gap-x-8">
          {/* Intro Product */}
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Logo */}
              <div className="absolute left-0 -top-20 w-28 hidden lg:block">
                <Image src={snake1} alt={"snake 1"} className="w-full" />
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
              <ul className="mt-8 flex flex-col items-center sm:items-start gap-y-2 text-left font-medium">
                <div className="gap-y-2">
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
                <div className="flex -gap-x-4">
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

      {/* ------------------------------- ... ------------------------------- */}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          {/* Heading & Logo */}
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 text-center text-balance text-5xl md:text-6xl font-bold tracking-tight !leading-tight text-gray-900">
              What our{" "}
              <span className="relative px-2">
                customers
                <Icons.underline className="absolute inset-x-0 -bottom-6 hidden sm:block pointer-events-none text-green-500" />
              </span>{" "}
              say
            </h2>
            <Image
              src={snake2}
              alt="snake 2"
              className="w-24 order-0 lg:order-2"
            />
          </div>

          {/* Customer Reviews */}
          <div className="mx-auto lg:mx-0 max-w-2xl lg:max-w-none grid grid-cols-1 lg:grid-cols-2 gap-y-16 px-4">
            {/* Reviews 1 */}
            <div className="flex flex-col flex-auto gap-4 lg:pr-8 xl:pr-20">
              {/* Star Rating */}
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>

              {/* Testimonial Text */}
              <div className="text-lg leading-8">
                <p>
                  {'"'}The case feels durable and I even got a compliment on the
                  design. Had the case for two and a half months now and{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    the image is super clear
                  </span>
                  , on the case I had before, the image started fading into
                  yellow-ish color after a couple weeks. Love it.{'"'}
                </p>
              </div>

              {/* User Info */}
              <div className="flex mt-2 gap-4">
                <Image
                  className="h-12 w-12 rounded-full object-cover"
                  src={user1}
                  alt="user-1"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Jonathan</p>
                  <div className="flex items-center gap-1.5 text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews 2 */}
            <div className="flex flex-col flex-auto gap-4 lg:pr-8 xl:pr-20">
              {/* Star Rating */}
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>

              {/* Testimonial Text */}
              <div className="text-lg leading-8">
                <p>
                  {'"'}I usually keep my phone together with my keys in my
                  pocket and that led to some pretty heavy scratchmarks on all
                  of my last phone cases. This one, besides a barely noticeable
                  scratch on the corner,{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    looks brand new after about half a year
                  </span>
                  . I dig it.{'"'}
                </p>
              </div>

              {/* User Info */}
              <div className="flex mt-2 gap-4">
                <Image
                  className="h-12 w-12 rounded-full object-cover"
                  src={user4}
                  alt="user-4"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Josh</p>
                  <div className="flex items-center gap-1.5 text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        {/* Product Images */}
        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      {/* ------------------------------- ... ------------------------------- */}
      <section>
        <MaxWidthWrapper className="py-24">
          {/* Heading */}
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 text-center text-balance text-5xl md:text-6xl font-bold tracking-tight !leading-tight text-gray-900">
                Upload your photo and get{" "}
                <span className="relative bg-green-600 text-white px-2">
                  your own case
                </span>{" "}
                now
              </h2>
            </div>
          </div>

          {/* Upload Image and Preview Image on Case */}
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col md:grid grid-cols-2 items-center gap-40">
              <Image
                src={arrow}
                alt="arrow"
                className="absolute left-1/2 top-[25rem] md:top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 md:rotate-0 z-10"
              />
              <div className="relative h-80 md:h-full w-full max-w-sm md:justify-self-end rounded-xl lg:rounded-2xl bg-gray-900/5 ring-inset ring-gray-900/10">
                <Image
                  src={horse}
                  alt="horse"
                  className="h-full w-full rounded-md bg-white object-cover shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
              <Phone className="w-60" imgSrc={horse} />
            </div>
          </div>

          {/* Product Features */}
          <ul className="mx-auto mt-12 w-fit max-w-prose sm:text-lg gap-y-2">
            {/* Bullet Points */}
            <li className="w-fit">
              <Check className="inline h-5 w-5 mr-1.5 text-green-600" />
              High-quality silicone material
            </li>
            <li className="w-fit">
              <Check className="inline h-5 w-5 mr-1.5 text-green-600" />
              Scratch- and fingerprint resistant coating
            </li>
            <li className="w-fit">
              <Check className="inline h-5 w-5 mr-1.5 text-green-600" />
              Wireless charging compatible
            </li>
            <li className="w-fit">
              <Check className="inline h-5 w-5 mr-1.5 text-green-600" />5 year
              print warranty
            </li>

            {/* Button CTA (Call-to-Action) */}
            <div className="flex justify-center">
              <Link
                className={buttonVariants({
                  size: "lg",
                  className: "mx-auto mt-8",
                })}
                href={ROUTES.CONFIGURE_UPLOAD}
              >
                Create your case now <ArrowRight className="h-4 w-4 ml-1.5" />
              </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>

      {/* ------------------------------- ... ------------------------------- */}
    </div>
  );
}
