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
        <MaxWidthWrapper className="pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-0 lg:pt-24 lg:pb-52 xl:gap-x-8 xl:pt-32">
          {/* Intro Product */}
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto flex flex-col items-center text-center lg:items-start lg:text-left">
              {/* Logo */}
              <div className="absolute -top-20 left-0 hidden w-28 lg:block">
                <Image src={snake1} alt={"snake 1"} className="w-full" />
              </div>

              {/* Heading */}
              <h1 className="relative mt-16 w-fit text-5xl !leading-tight font-bold tracking-tight text-balance text-gray-900 md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-green-600 px-2 text-white">Custom</span>{" "}
                Phone Case
              </h1>

              {/* Subheading */}
              <p className="mt-8 max-w-prose text-center text-lg text-balance md:text-wrap lg:pr-10 lg:text-left">
                Capture your favorite memories with your own,
                <span className="font-semibold"> one-of-one </span> phone case.
                CaseCobra allows you to protect your memories, not just your
                phone case.
              </p>

              {/* Bullet Points */}
              <ul className="mt-8 flex flex-col items-center space-y-2 text-left font-medium sm:items-start">
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
              <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
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
                <div className="flex flex-col items-center justify-between sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                    <Star className="h-4 w-4 fill-green-600 text-green-600" />
                  </div>
                  <p>
                    <span className="font-semibold">1.250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Illustration */}
          <div className="col-span-full mt-32 flex h-fit w-full justify-center px-8 sm:px-16 md:px-0 lg:col-span-1 lg:mx-0 lg:mt-20">
            <div className="relative md:max-w-xl">
              <Image
                src={yourImage}
                alt="your-image"
                className="absolute -top-20 left-56 hidden w-40 select-none sm:block lg:hidden lg:w-52 xl:block"
              />
              <Image
                src={line}
                alt="line"
                className="absolute -bottom-6 -left-6 w-20 select-none"
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
          <div className="flex flex-col items-center gap-4 sm:gap-6 lg:flex-row">
            <h2 className="order-1 mt-2 text-center text-5xl !leading-tight font-bold tracking-tight text-balance text-gray-900 md:text-6xl">
              What our{" "}
              <span className="relative px-2">
                customers
                <Icons.underline className="pointer-events-none absolute inset-x-0 -bottom-6 hidden text-green-500 sm:block" />
              </span>{" "}
              say
            </h2>
            <Image
              src={snake2}
              alt="snake 2"
              className="order-0 w-24 lg:order-2"
            />
          </div>

          {/* Customer Reviews */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* Reviews 1 */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              {/* Star Rating */}
              <div className="mb-2 flex gap-0.5">
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
              </div>

              {/* Testimonial Text */}
              <div className="text-lg leading-8">
                <p>
                  {'"'}The case feels durable and I even got a compliment on the
                  design. Had the case for two and a half months now and{" "}
                  <span className="bg-slate-800 p-0.5 text-white">
                    the image is super clear
                  </span>
                  , on the case I had before, the image started fading into
                  yellow-ish color after a couple weeks. Love it.{'"'}
                </p>
              </div>

              {/* User Info */}
              <div className="mt-2 flex gap-4">
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
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              {/* Star Rating */}
              <div className="mb-2 flex gap-0.5">
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
                <Star className="h-5 w-5 fill-green-600 text-green-600" />
              </div>

              {/* Testimonial Text */}
              <div className="text-lg leading-8">
                <p>
                  {'"'}I usually keep my phone together with my keys in my
                  pocket and that led to some pretty heavy scratchmarks on all
                  of my last phone cases. This one, besides a barely noticeable
                  scratch on the corner,{" "}
                  <span className="bg-slate-800 p-0.5 text-white">
                    looks brand new after about half a year
                  </span>
                  . I dig it.{'"'}
                </p>
              </div>

              {/* User Info */}
              <div className="mt-2 flex gap-4">
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
              <h2 className="order-1 mt-2 text-center text-5xl !leading-tight font-bold tracking-tight text-balance text-gray-900 md:text-6xl">
                Upload your photo and get{" "}
                <span className="relative bg-green-600 px-2 text-white">
                  your own case
                </span>{" "}
                now
              </h2>
            </div>
          </div>

          {/* Upload Image and Preview Image on Case */}
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex grid-cols-2 flex-col items-center gap-40 md:grid">
              {/* Input */}
              <div className="relative h-80 w-full max-w-sm rounded-xl bg-gray-900/5 ring-gray-900/10 ring-inset md:h-full md:justify-self-end lg:rounded-2xl">
                <Image
                  src={horse}
                  alt="horse"
                  className="h-full w-full rounded-md bg-white object-cover shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
              {/* Process */}
              <Image
                src={arrow}
                alt="arrow"
                className="absolute top-[25rem] left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rotate-90 md:top-1/2 md:rotate-0"
              />
              {/* Output */}
              <Phone className="w-60" imgSrc={horse} />
            </div>
          </div>

          {/* Product Features */}
          <ul className="mx-auto mt-12 w-fit max-w-prose space-y-2 sm:text-lg">
            {/* Bullet Points */}
            <li className="w-fit">
              <Check className="mr-1.5 inline h-5 w-5 text-green-600" />
              High-quality silicone material
            </li>
            <li className="w-fit">
              <Check className="mr-1.5 inline h-5 w-5 text-green-600" />
              Scratch- and fingerprint resistant coating
            </li>
            <li className="w-fit">
              <Check className="mr-1.5 inline h-5 w-5 text-green-600" />
              Wireless charging compatible
            </li>
            <li className="w-fit">
              <Check className="mr-1.5 inline h-5 w-5 text-green-600" />5 year
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
                Create your case now <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>

      {/* ------------------------------- ... ------------------------------- */}
    </div>
  );
}
