"use server";

import { person } from "~/lib/config";
import { action } from "@solidjs/router";
import nodemailer from "nodemailer";
import env from "~/lib/env";

const valid = (
    type: "string" | "email",
    value: unknown,
    options?: { maxLength?: number },
): boolean => {
    switch (type) {
        case "string":
            return !!(
                value &&
                typeof value === "string" &&
                value.length <= (options?.maxLength || Number.MAX_VALUE)
            );
        case "email":
            return !!(
                value &&
                typeof value === "string" &&
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) &&
                value.length <= (options?.maxLength || Number.MAX_VALUE)
            );
        default:
            throw new Error(`validation type '${type} not supported'`);
    }
};

const transporter = nodemailer.createTransport({
    service: env.SMTP_SERVICE,
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: env.SMTP_SECURE,
    auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS,
    },
});

const sendContactEmail = action(async (formData: FormData) => {
    return {
        message: "Testing",
    };

    const sender = formData.get("sender") as string;
    const message = formData.get("message") as string;

    if (!valid("string", sender, { maxLength: 500 })) {
        return { error: "Invalid sender email" };
    }
    if (!valid("string", message, { maxLength: 5000 })) {
        return { error: "Invalid message" };
    }

    const emailHtml = "Hello Bro";

    try {
        await transporter.sendMail({
            from: "Contact From<contact@developershihab.com>",
            to: person.email,
            subject: "Message from developershihab.com contact form",
            replyTo: sender,
            html: emailHtml,
        });
    } catch (e: any) {
        return { error: `Error in sending email: ${e.message}` };
    }

    return { message: "Email sent successfully" };
});

export default sendContactEmail;
