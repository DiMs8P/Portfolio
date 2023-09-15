//import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    const {body} = await request.json();
    const {email, subject, message} = body;
    console.log(body);
    try {
        const data = await resend.emails.send({
            from: "dmitry@dmitrypronichev.ru",
            to: process.env.MY_EMAIL,
            subject: subject,
            react: <>
                <p>Message from my site!</p>
                <p>{email}</p>
                <p>{subject}</p>
                <p>{message}</p>
            </>,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}