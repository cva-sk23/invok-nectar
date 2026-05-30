import { prisma } from "@/lib/prisma";

export async function GET() {
  const allocationCount = await prisma.allocation.count();

  return Response.json({
    success: true,
    allocationCount,
  });
}