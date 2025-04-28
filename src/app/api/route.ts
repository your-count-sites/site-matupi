import { api } from "@/sanity/lib/axios";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();

  try {
    const response = await axios.post(
      `https://crm.rdstation.com/api/v1/contacts?token=${process.env.NEXT_PUBLIC_RD_STATION_TOKEN}`,
      {
        contact: {
          emails: [{ email: data.email }],
          phones: [{ phone: data.phone }],
          name: data.name,
        },
      }
    );

    return NextResponse.json({ success: true, data: response.data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as any).message || "An error occurred" },
      { status: 500 }
    );
  }
}
