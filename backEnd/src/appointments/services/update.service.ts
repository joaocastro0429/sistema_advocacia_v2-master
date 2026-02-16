import { prisma } from "../../lib/prisma";

interface IUpdateAppointment {
  title?: string;
  description?: string;
  date?: Date;
  status?: string;
  event_type?: string;
  location?: string | null;
  clientId?: string;
  lawyerId?: string;
  processId?: string;
}

export const updateAppointment = async (id: string, data: IUpdateAppointment) => {
  const { event_type, ...rest } = data;
  const updateData: Record<string, unknown> = { ...rest };
  if (event_type !== undefined) updateData.eventType = event_type;
  if (data.location !== undefined) updateData.location = data.location;

  const appointment = await prisma.appointment.update({
    where: { id },
    data: updateData as any,
  });
  return appointment;
};
