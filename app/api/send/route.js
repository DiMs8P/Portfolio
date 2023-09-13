//import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_TMrygph4_NNqXryjncHmcq3EStRs1pC5F");
const fromEmail = "dota.dimabog@mail.ru";

export async function POST() {
    try {
        const data = await resend.emails.send({
            from: fromEmail,
            to: [""],
            subject: "Hello world",
            react: <>
                <p>
                   Email Body
                </p>
            </>,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}