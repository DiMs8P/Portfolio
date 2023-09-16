import { NextResponse } from "next/server";
import { Resend } from "resend";
import {EmailTemplate} from "@/app/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    const {email, subject, message} = await request.json();
    try {
        const data = await resend.emails.send({
            from: "Dmitry <dmitry@dmitrypronichev.ru>",
            to: [process.env.MY_EMAIL],
            subject: "Message from my site!",
            react: EmailTemplate({
                email: email,
                subject: subject,
                message: message
            }),
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}