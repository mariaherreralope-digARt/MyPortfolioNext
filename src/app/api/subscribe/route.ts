import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("BREVO key present:", !!process.env.BREVO_API_KEY);

  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ message: "Invalid email" }, { status: 400 });
    }

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": process.env.BREVO_API_KEY as string,
      },
      body: JSON.stringify({
        email,
        listIds: [3], 
        updateEnabled: true,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ message: "Subscribed successfully!" }, { status: 200 });
    } else {
      const error = await response.json();
      console.error("Brevo error:", error);
      return NextResponse.json({ message: "Brevo subscription failed", error }, { status: 500 });
    }
  } catch (error) {
    console.error("Error subscribing:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
