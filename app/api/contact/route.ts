import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    const body = await req.json()

    const { name, email, company, subject, message } = body

    if (!name || !email || !message) {
        return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    await resend.emails.send({
        from: "Website <noreply@codin.co.tz>",
        to: "sales@codin.co.tz",
        subject: `New Contact Form Submission - ${subject || "General Inquiry"}`,
        html: `
      <h2>New Website Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || "Not provided"}</p>
      <p><strong>Subject:</strong> ${subject || "Not specified"}</p>
      <hr/>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
    })

    return Response.json({ success: true })
}