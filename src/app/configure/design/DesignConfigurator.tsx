"use client";

import { cn, formatPrice } from "@/lib/utils";
import Image from "next/image";
import template from "../../../../public/phone-template.png";

import { useState } from "react";
import {
  COLORS,
  FINISHES,
  MATERIALS,
  MODELS,
} from "@/validators/option-validator";

import HandleComponent from "@/components/HandleComponent";

import { Rnd } from "react-rnd";
import {
  RadioGroup,
  Radio,
  Label as HeadlessLabel,
  Description,
} from "@headlessui/react";
import { ArrowRight, Check, ChevronsUpDown } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";

import { BASE_PRICE } from "@/config/products";

interface DesignConfigurator {
  configId: string;
  imageUrl: string;
  imageDimensions: { width: number; height: number };
}

const DesignConfigurator = ({
  configId,
  imageUrl,
  imageDimensions,
}: DesignConfigurator) => {
  const [options, setOptions] = useState<{
    color: (typeof COLORS)[number];
    model: (typeof MODELS.options)[number];
    material: (typeof MATERIALS.options)[number];
    finish: (typeof FINISHES.options)[number];
  }>({
    color: COLORS[0],
    model: MODELS.options[0],
    material: MATERIALS.options[0],
    finish: FINISHES.options[0],
  });

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-3 mt-20 mb-20 pb-20">
      {/* Preview Display Area */}
      <div className="relative col-span-2 flex items-center justify-center h-[37.5rem] w-full max-w-4xl overflow-hidden rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
        {/* Drag and Drop Area */}
        <div className="relative pointer-events-none w-60 aspect-[896/1831] bg-transparent">
          {/* Display Phone Case Frame */}
          <AspectRatio
            ratio={896 / 1831}
            className="relative z-50 pointer-events-none w-full aspect-[896/1831]"
          >
            <Image
              fill
              alt="phone image"
              src={template}
              className="z-50 pointer-events-none select-none"
            />
          </AspectRatio>

          {/* Layout UI of this Area */}
          <div className="absolute inset-0 left-[3px] top-px right-[3px] bottom-px z-40 rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)]" />

          {/* Display Phone Case Color */}
          <div
            className={cn(
              "absolute inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px]",
              `bg-${options.color.tw}`
            )}
          />
        </div>

        {/* Resize and Drag Image */}
        <Rnd
          default={{
            x: 30,
            y: 30,
            height: imageDimensions.height / 4,
            width: imageDimensions.height / 4,
          }}
          className="absolute z-20 border-[3px] border-primary"
          lockAspectRatio
          resizeHandleComponent={{
            bottomRight: <HandleComponent />,
            bottomLeft: <HandleComponent />,
            topRight: <HandleComponent />,
            topLeft: <HandleComponent />,
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src={imageUrl}
              fill
              alt="your image"
              className="pointer-events-none"
            />
          </div>
        </Rnd>
      </div>

      {/* Design Configuration Area */}
      <div className="flex flex-col w-full h-[37.5rem] col-span-full lg:col-span-1 bg-white">
        {/* Customize your Case */}
        <ScrollArea className="relative flex-1 overflow-auto">
          {/* Fade Effect Above */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 z-10 h-12 bg-gradient-to-b from-white pointer-events-none"
          />
          {/* Content */}
          <div className="px-8 pt-8 pb-12">
            {/* Title */}
            <h2 className="text-3xl font-bold tracking-tight">
              Customize your case
            </h2>
            {/* Divider */}
            <div className="w-full h-px my-6 bg-zinc-200" />
            {/* Option */}
            <div className="relative mt-4 h-full flex flex-col justify-between">
              <div className="flex flex-col gap-6">
                {/* Select Color */}
                <RadioGroup
                  value={options.color}
                  onChange={(val) => {
                    setOptions((prev) => ({ ...prev, color: val }));
                  }}
                >
                  <Label>Color: {options.color.label}</Label>
                  <div className="mt-3 flex items-center gap-x-3">
                    {COLORS.map((color) => (
                      <Radio
                        key={color.label}
                        value={color}
                        className={({ checked }) =>
                          cn(
                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full border-2 border-transparent p-0.5 focus:outline-none focus:ring-0 active:outline-none active:ring-0",
                            {
                              [`border-${color.tw}`]: checked,
                            }
                          )
                        }
                      >
                        <span
                          className={cn(
                            `bg-${color.tw}`,
                            "h-8 w-8 rounded-full border border-black/10"
                          )}
                        />
                      </Radio>
                    ))}
                  </div>
                </RadioGroup>
                {/* Select Model */}
                <div className="relative flex flex-col w-full gap-3">
                  <Label>Model</Label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        className="w-full justify-between"
                      >
                        {options.model.label}
                        <ChevronsUpDown className="h-4 w-4 shrink-0 ml-2 opacity-50" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {MODELS.options.map((model) => (
                        <DropdownMenuItem
                          key={model.label}
                          className={cn(
                            "flex items-center gap-1 p-1.5 text-sm cursor-default hover:bg-zinc-100",
                            {
                              "bg-zinc-100":
                                model.label === options.model.label,
                            }
                          )}
                          onClick={() => {
                            setOptions((prev) => ({ ...prev, model }));
                          }}
                        >
                          <Check
                            className={cn(
                              "h-4 w-4 mr-2",
                              model.label === options.model.label
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {model.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                {/* Select Material & Finish */}
                {[MATERIALS, FINISHES].map(
                  ({ name, options: selectableOptions }) => (
                    <RadioGroup
                      key={name}
                      value={options[name]}
                      onChange={(val) => {
                        setOptions((prev) => ({
                          ...prev,
                          [name]: val,
                        }));
                      }}
                    >
                      <Label>
                        {name.slice(0, 1).toUpperCase() + name.slice(1)}
                      </Label>
                      <div className="mt-3 space-y-4">
                        {selectableOptions.map((option) => (
                          <Radio
                            key={option.value}
                            value={option}
                            className={({ checked }) =>
                              cn(
                                "relative block cursor-pointer rounded-lg border-2 border-zinc-200 bg-white px-6 py-4 shadow-sm outline-none ring-0 focus:outline-none focus:ring-0 sm:flex sm:justify-between",
                                {
                                  "border-primary": checked,
                                }
                              )
                            }
                          >
                            <span className="flex items-center">
                              <span className="flex flex-col text-sm">
                                <HeadlessLabel
                                  as="span"
                                  className="font-medium text-gray-900"
                                >
                                  {option.label}
                                </HeadlessLabel>
                                {option.description ? (
                                  <Description
                                    as="span"
                                    className="text-gray-500"
                                  >
                                    <span className="block sm:inline">
                                      {option.description}
                                    </span>
                                  </Description>
                                ) : null}
                              </span>
                            </span>
                            <Description
                              as="span"
                              className="mt-2 flex text-sm sm:mt-0 sm:ml-4 sm:flex-col sm:text-right"
                            >
                              <span className="font-medium text-gray-900">
                                {formatPrice(option.price / 100)}
                              </span>
                            </Description>
                          </Radio>
                        ))}
                      </div>
                    </RadioGroup>
                  )
                )}
              </div>
            </div>
          </div>
          {/* Fade Effect Below */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-white pointer-events-none"
          />
        </ScrollArea>

        {/* Price & Buy */}
        <div className="w-full h-16 bg-white px-8">
          <div className="w-full h-px bg-zinc-200" />
          <div className="flex items-center justify-end w-full h-full">
            <div className="flex items-center w-full gap-6">
              <p className="font-medium whitespace-nowrap">
                {formatPrice(
                  (BASE_PRICE + options.finish.price + options.material.price) /
                    100
                )}
              </p>
              <Button size="sm" className="flex-1">
                Continue
                <ArrowRight className="inline h-4 w-4 ml-1.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignConfigurator;
