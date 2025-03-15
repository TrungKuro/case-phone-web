"use client";

import { cn, formatPrice } from "@/lib/utils";
import Image from "next/image";
import template from "../../../../public/phone-template.png";

import { useRef, useState } from "react";
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
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { BASE_PRICE } from "@/config/products";

import { toast } from "sonner";

import { useUploadThing } from "@/lib/uploadthing";

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

  /* -------------------- Values for Image Render (crop) ------------------- */

  // Xác định "kích thước mặc định ban đầu" của Image
  const widthImageRender = imageDimensions.width / 4;
  const heightImageRender = imageDimensions.height / 4;

  const [renderedDimension, setRenderedDimension] = useState({
    width: widthImageRender,
    height: heightImageRender,
  });

  // Xác định "vị trí mặc định ban đầu" của Image so với [Frame Area Drop Image]
  const xPositionImageRender = 30;
  const yPositionImageRender = 30;

  const [renderedPosition, setRenderedPosition] = useState({
    x: xPositionImageRender,
    y: yPositionImageRender,
  });

  const phoneCaseRef = useRef<HTMLDivElement>(null); // Lưu trữ các thông số của [Frame Case Phone]
  const containerRef = useRef<HTMLDivElement>(null); // Lưu trữ các thông số của [Frame Area Drop Image]

  const { startUpload } = useUploadThing("imageUploader");

  // Tính toán và lưu trữ các thông số cấu hình cho Image (Cropped)
  async function saveConfiguration() {
    try {
      /* ------------------------------------------------------------------- */

      // Lấy thông số "kích thước" và "vị trí" của [Frame Case Phone] so với Web
      const {
        left: caseLeft,
        top: caseTop,
        width: caseWidth,
        height: caseHeight,
      } = phoneCaseRef.current!.getBoundingClientRect();

      // Lấy thông số "vị trí" của [Frame Area Drop Image] so với Web
      const { left: containerLeft, top: containerTop } =
        containerRef.current!.getBoundingClientRect();

      // Xác định khoảng "bù" giữa [Frame Case Phone] và [Frame Area Drop Image]
      const leftOffset = caseLeft - containerLeft;
      const topOffset = caseTop - containerTop;

      // Tính ra "vị trí" của Image so với [Frame Case Phone]
      const actualX = renderedPosition.x - leftOffset;
      const actualY = renderedPosition.y - topOffset;

      /* ------------------------------------------------------------------- */

      // Tạo một thẻ <canvas> mới trong DOM
      const canvas = document.createElement("canvas");

      // Đặt kích thước cho CANVAS theo kích thước của [Frame Case Phone] để "crop hình"
      canvas.width = caseWidth;
      canvas.height = caseHeight;

      // Lấy ngữ cảnh vẽ 2D từ CANVAS
      const ctx = canvas.getContext("2d");

      // Tạo một Object (Image) để tải ảnh từ URL
      const userImage = new window.Image();
      //! Cho phép tải ảnh từ nguồn khác mà không gặp lỗi CORS
      userImage.crossOrigin = "anonymous";
      userImage.src = imageUrl;

      //! Đợi ảnh tải xong trước khi tiếp tục xử lý
      await new Promise((resolve) => (userImage.onload = resolve));

      // Vẽ ảnh lên CANVAS với "vị trí" và "kích thước" được xác định
      ctx?.drawImage(
        // URL của Image
        userImage,
        // Vị trí của Image so với CANVAS
        actualX,
        actualY,
        // Kích thước của Image
        renderedDimension.width,
        renderedDimension.height
      );

      /* ------------------------------------------------------------------- */

      // Chuyển đổi nội dung của CANVAS thành chuỗi base64 (dữ liệu ảnh)
      const base64 = canvas.toDataURL();
      // console.log(base64); //! Xuất base64 ra console để kiểm tra
      // Lấy phần dữ liệu base64 thực tế (bỏ phần định dạng MIME -> data:image/png;base64,[data])
      const base64Data = base64.split(",")[1];

      // Chuyển đổi chuỗi base64 thành một đối tượng Blob với định dạng ảnh PNG
      const blob = base64ToBlob(base64Data, "image/png");
      // Tạo một File mới từ Blob
      const file = new File([blob], "filename.png", { type: "image/png" });

      // console.log(`Ready upload file: ${configId}`);
      // Tải File vừa tạo lên [UploadThing]
      await startUpload([file], { configId });
      // console.log("Done upload file");

      /* ------------------------------------------------------------------- */
    } catch (err) {
      toast.error(
        <p className="text-red-400 font-bold">Something went wrong</p>,
        {
          description:
            "There was a problem saving your config, please try again.",
        }
      );
    }
  }

  /**
   * Chuyển đổi chuỗi Base64 thành một Blob để có thể sử dụng như một file.
   * @param {string} base64 - Chuỗi dữ liệu base64 (không bao gồm phần tiền tố MIME type).
   * @param {string} mimeType - Loại MIME của dữ liệu (ví dụ: 'image/png', 'application/pdf').
   * @returns {Blob} - Đối tượng Blob chứa dữ liệu đã được giải mã từ base64.
   */
  function base64ToBlob(base64: string, mimeType: string) {
    // Giải mã chuỗi base64 thành chuỗi nhị phân
    const byteCharacters = atob(base64);
    // Tạo một mảng số có độ dài bằng số ký tự trong chuỗi nhị phân
    const byteNumbers = new Array(byteCharacters.length);
    // Duyệt qua từng ký tự trong chuỗi nhị phân, lấy mã ASCII của từng ký tự
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    // Chuyển mảng số thành một Uint8Array (mảng byte) để tạo dữ liệu nhị phân
    const byteArray = new Uint8Array(byteNumbers);
    // Tạo và trả về một Blob từ dữ liệu nhị phân với loại MIME được chỉ định
    return new Blob([byteArray], { type: mimeType });
  }

  /* ----------------------------------------------------------------------- */

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-3 mt-20 mb-20 pb-20">
      {/* Preview Display Area */}
      <div
        ref={containerRef}
        className="relative col-span-2 flex items-center justify-center h-[37.5rem] w-full max-w-4xl overflow-hidden rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        {/* Drag and Drop Area */}
        <div className="relative pointer-events-none w-60 aspect-[896/1831] bg-transparent">
          {/* Display Phone Case Frame */}
          <AspectRatio
            ref={phoneCaseRef}
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
            x: xPositionImageRender,
            y: yPositionImageRender,
            width: widthImageRender,
            height: heightImageRender,
          }}
          onResizeStop={(_, __, ref, ___, { x, y }) => {
            setRenderedDimension({
              // Slice to convert from { [value]px } to { [value] }
              width: parseInt(ref.style.width.slice(0, -2)),
              height: parseInt(ref.style.height.slice(0, -2)),
            });
            setRenderedPosition({ x, y });
          }}
          onDragStop={(_, data) => {
            const { x, y } = data;
            setRenderedPosition({ x, y });
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
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-3 mt-3">
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

        {/* Price & Continue */}
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
              <Button
                size="sm"
                className="flex-1"
                onClick={() => saveConfiguration()}
              >
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
