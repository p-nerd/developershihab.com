"use server";

import { render } from "@react-email/render";
import { person } from "@/site.config";
import { createElement } from "react";
import { validateString, getErrorMessage } from "@/lib/utils";

import nodemailer from "nodemailer";

import ContactFormEmail from "@/emails/ContactFormEmail";
import env from "@/lib/env";

const transporter = nodemailer.createTransport({
    service: env.NODEMAILER_SERVICE,
    host: env.NODEMAILER_HOST,
    port: env.NODEMAILER_PORT,
    secure: env.NODEMAILER_SECURE,
    auth: {
        user: env.NODEMAILER_USER,
        pass: env.NODEMAILER_PASS,
    },
});

const sendContactEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    // simple server-side validation
    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email",
        };
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        };
    }

    try {
        const emailHtml = render(
            createElement(ContactFormEmail, {
                message: message,
                senderEmail: senderEmail,
            }),
        );

        await transporter.sendMail({
            from: "Contact From<contact@developershihab.com>",
            to: person.email,
            subject: "Message from developershihab.com contact form",
            replyTo: senderEmail,
            html: emailHtml,
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }

    return {
        message: "Email sent successfully",
    };
};

export default sendContactEmail;
