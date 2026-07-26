import { NextRequest, NextResponse } from "next/server";

type DemoRequestBody = {
  name?: string;
  workEmail?: string;
  company?: string;
  teamSize?: string;
};

// Mock endpoint: validates the payload and echoes back a confirmation.
// Swap the body of this handler for a real CRM/webhook call (HubSpot,
// Salesforce, a Slack webhook, etc.) when wiring this up to production.
export async function POST(request: NextRequest) {
  let body: DemoRequestBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Request body must be valid JSON." },
      { status: 400 }
    );
  }

  const { name, workEmail, company, teamSize } = body;

  if (!name || !workEmail || !company) {
    return NextResponse.json(
      { ok: false, error: "Name, work email, and company are required." },
      { status: 422 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(workEmail)) {
    return NextResponse.json(
      { ok: false, error: "Enter a valid work email address." },
      { status: 422 }
    );
  }

  // --- Store the data ---
  // This is where you would add your logic to save the lead to a database
  // (e.g., using Prisma) or send it to a CRM (e.g., HubSpot, Salesforce).
  // For this example, we'll just log it to the server console.
  console.log("✅ New lead captured:", { name, workEmail, company, teamSize });

  return NextResponse.json(
    {
      ok: true,
      message: `Thanks, ${name.split(" ")[0]}. A member of the enterprise team will reach out to ${workEmail} within one business day.`,
    },
    { status: 200 }
  );
}
