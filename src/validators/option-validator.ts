//! Có sử dụng cơ chế "tree-shaking" cho Tailwind CSS

import { PRODUCT_PRICES } from "@/config/products";

export const COLORS = [
  {
    label: "Midnight Blue",
    value: "midnight",
    tw: "blue-950",
  },
  // bg-blue-950 border-blue-950

  {
    label: "Pacific Blue",
    value: "pacific_blue",
    tw: "blue-800",
  },
  // bg-blue-800 border-blue-800

  {
    label: "Sky Blue",
    value: "sky_blue",
    tw: "sky-600",
  },
  // bg-sky-600 border-sky-600

  {
    label: "Light Blue",
    value: "light_blue",
    tw: "blue-300",
  },
  // bg-blue-300 border-blue-300

  {
    label: "Gray Purple",
    value: "gray_purple",
    tw: "gray-700",
  },
  // bg-gray-700 border-gray-700

  {
    label: "Storm Gray",
    value: "storm_gray",
    tw: "gray-600",
  },
  // bg-gray-600 border-gray-600

  {
    label: "Lavender",
    value: "lavender",
    tw: "purple-400",
  },
  // bg-purple-400 border-purple-400

  {
    label: "Light Purple",
    value: "light_purple",
    tw: "purple-300",
  },
  // bg-purple-300 border-purple-300

  {
    label: "Carmine",
    value: "carmine",
    tw: "red-700",
  },
  // bg-red-700 border-red-700

  {
    label: "Cherry Pink",
    value: "cherry_pink",
    tw: "rose-400",
  },
  // bg-rose-400 border-rose-400

  {
    label: "Soft Pink",
    value: "soft_pink",
    tw: "rose-200",
  },
  // bg-rose-200 border-rose-200

  {
    label: "Peach Orange",
    value: "peach_orange",
    tw: "orange-300",
  },
  // bg-orange-300 border-orange-300

  {
    label: "Alpine Green",
    value: "alpine_green",
    tw: "green-900",
  },
  // bg-green-900 border-green-900

  {
    label: "Light Green",
    value: "light_green",
    tw: "green-300",
  },
  // bg-green-300 border-green-300
] as const;

/* ------------------------------------------------------------------------- */

export const MODELS = {
  name: "models",
  options: [
    {
      label: "iPhone X",
      value: "iphonex",
    },
    {
      label: "iPhone 11",
      value: "iphone11",
    },
    {
      label: "iPhone 12",
      value: "iphone12",
    },
    {
      label: "iPhone 13",
      value: "iphone13",
    },
    {
      label: "iPhone 14",
      value: "iphone14",
    },
    {
      label: "iPhone 15",
      value: "iphone15",
    },
  ],
} as const;

/* ------------------------------------------------------------------------- */

export const MATERIALS = {
  name: "material",
  options: [
    {
      label: "Silicone",
      value: "silicone",
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: "Soft Polycarbonate",
      value: "polycarbonate",
      description: "Scratch-resistant coating",
      price: PRODUCT_PRICES.material.polycarbonate,
    },
    {
      label: "Alcantara",
      value: "alcantara",
      description: "Soft-touch suede-like fabric",
      price: PRODUCT_PRICES.material.alcantara,
    },
    {
      label: "Leather",
      value: "leather",
      description: "Premium genuine leather",
      price: PRODUCT_PRICES.material.leather,
    },
  ],
} as const;

/* ------------------------------------------------------------------------- */

export const FINISHES = {
  name: "finish",
  options: [
    {
      label: "Smooth Finish",
      value: "smooth",
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: "Textured Finish",
      value: "textured",
      description: "Soft grippy texture",
      price: PRODUCT_PRICES.finish.textured,
    },
    {
      label: "Matte Finish",
      value: "matte",
      description: "Fingerprint-resistant matte surface",
      price: PRODUCT_PRICES.finish.matte,
    },
  ],
} as const;
