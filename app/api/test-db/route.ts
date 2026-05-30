import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const allocationCount = await prisma.allocation.count();

    return Response.json({
      success: true,
      allocationCount,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: String(error),
    });
  }
}