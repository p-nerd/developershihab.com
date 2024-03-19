import { Tailwind } from "@react-email/tailwind";
import { Html, Body, Head, Heading } from "@react-email/components";
import { Hr, Container, Preview, Section, Text } from "@react-email/components";

const ContactFormEmail = (p: { message: string; senderEmail: string }) => (
    <Html>
        <Head />
        <Preview>New message from your portfolio site</Preview>
        <Tailwind>
            <Body className="bg-gray-100 text-black">
                <Container>
                    <Section className="borderBlack my-10 rounded-md bg-white px-10 py-4">
                        <Heading className="leading-tight">
                            You received the following message from the contact form
                        </Heading>
                        <Text>{p.message}</Text>
                        <Hr />
                        <Text>The sender's email is: {p.senderEmail}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
);

export default ContactFormEmail;
