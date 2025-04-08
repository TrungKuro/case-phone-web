"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { OrderStatus } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { Check, ChevronsUpDown } from "lucide-react";
import { changeOrderStatus } from "./action";
import { useRouter } from "next/navigation";

// Map enum -> label để hiển thị ra giao diện người dùng
const LABEL_MAP: Record<keyof typeof OrderStatus, string> = {
  awaiting_shipment: "Awaiting Shipment",
  fulfilled: "Fulfilled",
  shipped: "Shipped",
};

const StatusDropdown = ({
  id,
  orderStatus,
}: {
  id: string;
  orderStatus: OrderStatus;
}) => {
  const router = useRouter();
  const { mutate } = useMutation({
    mutationKey: ["change-order-status"],
    mutationFn: changeOrderStatus,
    onSuccess: () => {
      router.refresh(); // Làm mới trang khi cập nhật thành công
    },
  });

  return (
    <DropdownMenu>
      {/* Nút trigger dropdown */}
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center justify-between w-52"
        >
          {LABEL_MAP[orderStatus]}
          <ChevronsUpDown className="h-4 w-4 ml-2 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>

      {/* Nội dung của dropdown */}
      <DropdownMenuContent className="p-0">
        {Object.keys(OrderStatus).map((status) => (
          <DropdownMenuItem
            key={status}
            className={cn(
              "flex items-center gap-1 p-2.5 cursor-default text-sm hover:bg-zinc-100",
              {
                "bg-zinc-100": orderStatus === status,
              }
            )}
            onClick={() => {
              mutate({ id, newStatus: status as OrderStatus });
            }}
          >
            <Check
              className={cn(
                "h-4 w-4 mr-2 text-primary",
                orderStatus === status ? "opacity-100" : "opacity-0"
              )}
            />
            {LABEL_MAP[status as OrderStatus]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default StatusDropdown;
