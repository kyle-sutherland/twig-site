import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "");

interface CheckoutBody {
  type: "donation" | "membership";
  amount?: number; // in cents, for donations
}

export async function POST(request: NextRequest) {
  let body: CheckoutBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { type, amount } = body;

  if (type !== "donation" && type !== "membership") {
    return NextResponse.json({ error: "Invalid payment type" }, { status: 400 });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  try {
    let session: Stripe.Checkout.Session;

    if (type === "donation") {
      if (!amount || !Number.isInteger(amount) || amount < 100 || amount > 1_000_000) {
        return NextResponse.json(
          { error: "Donation amount must be between $1 and $10,000" },
          { status: 400 }
        );
      }

      session = await stripe.checkout.sessions.create({
        mode: "payment",
        locale: "auto",
        line_items: [
          {
            quantity: 1,
            price_data: {
              currency: "cad",
              unit_amount: amount,
              product: process.env.STRIPE_DONATION_PRODUCT_ID ?? "",
            },
          },
        ],
        success_url: `${siteUrl}/support/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${siteUrl}/support/cancel`,
        metadata: { type: "donation" },
      });
    } else {
      const feeStr = process.env.STRIPE_MEMBERSHIP_FEE_CENTS;
      const feeCents = feeStr ? parseInt(feeStr, 10) : NaN;
      if (!feeStr || isNaN(feeCents) || feeCents < 100) {
        return NextResponse.json(
          { error: "Membership fee is not yet configured. Please check back soon." },
          { status: 503 }
        );
      }

      session = await stripe.checkout.sessions.create({
        mode: "payment",
        locale: "auto",
        line_items: [
          {
            quantity: 1,
            price_data: {
              currency: "cad",
              unit_amount: feeCents,
              product: process.env.STRIPE_MEMBERSHIP_PRODUCT_ID ?? "",
            },
          },
        ],
        success_url: `${siteUrl}/support/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${siteUrl}/support/cancel`,
        metadata: { type: "membership" },
      });
    }

    return NextResponse.json({ sessionUrl: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session. Please try again." },
      { status: 500 }
    );
  }
}
