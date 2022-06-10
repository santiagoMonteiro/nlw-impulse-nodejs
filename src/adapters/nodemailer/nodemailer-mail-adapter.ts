import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e716860e81cec5",
    pass: "255b1f32486eb1",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
      await transport.sendMail({
    from: "Equipe Feedget <oi@feedget.com>",
    to: "Santiago Monteiro <santiago.a.monteiro@gmail.com>",
    subject,
    html: body,
  });
  };
}