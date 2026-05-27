import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      institution,
      researchArea,
      message,
    } = body;

    console.log("Research Access Request Received:", body);

    const recipients =
      process.env.PILOT_REQUEST_TO
        ?.split(",")
        .map((email) => email.trim())
        .filter(Boolean) || [];

    await resend.emails.send({
      from: "Neurovenus Research <research@mail.neurovenus.com>",
      to: recipients,
      subject: `New Neurovenus Research Access Request from ${name}`,
      html: `
        <h2>New Research Access Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Institution:</strong> ${institution}</p>
        <p><strong>Research Area:</strong> ${researchArea}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Research inquiry submitted successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit research inquiry.",
      },
      {
        status: 500,
      }
    );
  }
}