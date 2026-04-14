import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": process.env.BREVO_API_KEY as string,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "BMZ ELEC",
          email: "bmz.elec@gmail.com",
        },
        to: [
          {
            email: "bmz.elec@gmail.com",
          },
        ],
        subject: "Nouvelle demande de devis — BMZ ELEC",
        htmlContent: `
          <h2>Nouveau devis reçu</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Téléphone :</strong> ${phone}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Service :</strong> ${service}</p>
          <p><strong>Message :</strong><br>${message}</p>
        `,
      }),
    });

    if (!brevoRes.ok) {
      console.error("Brevo error:", await brevoRes.text());
      return NextResponse.json({ success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
