import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/db";
import { formatPrice } from "@/lib/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound } from "next/navigation";
import StatusDropdown from "./StatusDropdown";

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    return notFound();
  }

  const orders = await db.order.findMany({
    where: {
      isPaid: true,
      createdAt: {
        gte: new Date(new Date().setDate(new Date().getDate() - 7)),
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
      shippingAddress: true,
    },
  });

  /* ----------------------------------------------------------------------- */
  /*                              CARD LAST WEEK                             */
  /* ----------------------------------------------------------------------- */

  const lastWeekSum = await db.order.aggregate({
    where: {
      isPaid: true,
      createdAt: {
        gte: new Date(new Date().setDate(new Date().getDate() - 7)),
      },
    },
    _sum: {
      amount: true,
    },
  });

  const WEEKLY_GOAL = 500;

  /* ----------------------------------------------------------------------- */
  /*                             CARD LAST MONTH                             */
  /* ----------------------------------------------------------------------- */

  const lastMonthSum = await db.order.aggregate({
    where: {
      isPaid: true,
      createdAt: {
        gte: new Date(new Date().setDate(new Date().getDate() - 30)),
      },
    },
    _sum: {
      amount: true,
    },
  });

  const MONTHLY_GOAL = 2500;

  /* ----------------------------------------------------------------------- */

  return (
    <div className="flex w-full min-h-screen bg-muted/40">
      <div className="flex flex-col w-full max-w-7xl mx-auto sm:gap-4 sm:py-4">
        <div className="flex flex-col gap-16">
          {/* List Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Card LastWeek */}
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Last Week</CardDescription>
                <CardTitle className="text-4xl">
                  {formatPrice(lastWeekSum._sum.amount ?? 0)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground text-sm">
                  of {formatPrice(WEEKLY_GOAL)} goal
                </div>
              </CardContent>
              <CardFooter>
                <Progress
                  value={((lastWeekSum._sum.amount ?? 0) * 100) / WEEKLY_GOAL}
                />
              </CardFooter>
            </Card>

            {/* Card LastMonth */}
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Last Month</CardDescription>
                <CardTitle className="text-4xl">
                  {formatPrice(lastMonthSum._sum.amount ?? 0)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground text-sm">
                  of {formatPrice(MONTHLY_GOAL)} goal
                </div>
              </CardContent>
              <CardFooter>
                <Progress
                  value={((lastMonthSum._sum.amount ?? 0) * 100) / MONTHLY_GOAL}
                />
              </CardFooter>
            </Card>
          </div>

          <h1 className="text-4xl font-bold tracking-tight">Incoming orders</h1>

          <Table>
            {/* Tiêu đề bảng */}
            <TableHeader>
              <TableRow>
                {/* Col 1 */}
                <TableHead>Customer</TableHead>
                {/* Col 2 */}
                <TableHead className="hidden sm:table-cell">Status</TableHead>
                {/* Col 3 */}
                <TableHead className="hidden sm:table-cell">
                  Purchase date
                </TableHead>
                {/* Col 4 */}
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>

            {/* Nội dung bảng */}
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id} className="bg-accent">
                  {/* Col 1 */}
                  <TableCell>
                    <div className="font-medium">
                      {order.shippingAddress?.name}
                    </div>
                    <div className="hidden text-muted-foreground text-sm md:inline">
                      {order.user.email}
                    </div>
                  </TableCell>
                  {/* Col 2 */}
                  <TableCell className="hidden sm:table-cell">
                    <StatusDropdown id={order.id} orderStatus={order.status} />
                  </TableCell>
                  {/* Col 3 */}
                  <TableCell className="hidden sm:table-cell">
                    {order.createdAt.toLocaleDateString()}
                  </TableCell>
                  {/* Col 4 */}
                  <TableCell className="text-right">
                    {formatPrice(order.amount)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
export default Page;
