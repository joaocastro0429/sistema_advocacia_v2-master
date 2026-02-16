import { AppointmentStatus } from '../../../generated/prisma'
import { prisma } from '../../lib/prisma'

export interface AppointmentData {
  title: string
  description?: string | null
  date?: Date | string
  event_date?: string
  event_time?: string
  status?: AppointmentStatus
  clientId?: string | null
  client_id?: string | null
  lawyerId?: string | null
  processId?: string | null
  case_id?: string | null
  location?: string | null
  event_type?: string
}

export const CreateService = async (data: AppointmentData) => {
  try {
    let appointmentDate: Date
    if (data.event_date && data.event_time) {
      const dateTimeString = `${data.event_date}T${data.event_time}:00`
      appointmentDate = new Date(dateTimeString)
    } else if (data.date) {
      appointmentDate = new Date(data.date)
    } else {
      throw new Error('Date is required')
    }

    const clientId = data.clientId || data.client_id || null
    const processId = data.processId || data.case_id || null

    const appointment = await prisma.appointment.create({ // ✅ singular
      data: {
        title: data.title,
        description: data.description ?? null,
        date: appointmentDate,
        status: data.status || AppointmentStatus.SCHEDULED,
        eventType: data.event_type ?? null,
        location: data.location ?? null,
        clientId: clientId,
        lawyerId: data.lawyerId || null,
        processId: processId,
      },
      include: {
        client: {   // ✅ singular (nome do campo no model)
          select: {
            id: true,
            name: true,
          }
        },
        process: {  // ✅ singular (nome do campo no model)
          select: {
            id: true,
            processNumber: true,
          }
        }
      }
    })

    return appointment
  } catch (error: any) {
    console.error('Error creating appointment:', error)
    throw new Error(error.message || 'Error creating appointment')
  }
}