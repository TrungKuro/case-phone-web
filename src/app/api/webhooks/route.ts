import { db } from "@/db";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = (await headers()).get("stripe-signature");

    if (!signature) {
      return new Response("Invalid signature", { status: 400 });
    }

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === "checkout.session.completed") {
      if (!event.data.object.customer_details?.email) {
        throw new Error("Missing user email");
      }

      const session = event.data.object as Stripe.Checkout.Session;

      const { userId, orderId } = session.metadata || {
        userId: null,
        orderId: null,
      };

      if (!userId || !orderId) {
        throw new Error("Invalid request metadata");
      }

      const billingAddress = session.customer_details!.address;
      const shippingAddress = session.shipping_details!.address;

      await db.order.update({
        where: { id: orderId },
        data: {
          isPaid: true,
          shippingAddress: {
            create: {
              name: session.customer_details!.name!,
              street: shippingAddress!.line1!,
              city: shippingAddress!.city!,
              country: shippingAddress!.country!,
              postalCode: shippingAddress!.postal_code!,
              state: shippingAddress!.state,
            },
          },
          billingAddress: {
            create: {
              name: session.customer_details!.name!,
              street: billingAddress!.line1!,
              city: billingAddress!.city!,
              country: billingAddress!.country!,
              postalCode: billingAddress!.postal_code!,
              state: billingAddress!.state,
            },
          },
        },
      });
    }

    return NextResponse.json({ result: event, ok: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Something went wrong", ok: false },
      { status: 500 }
    );
  }
}
