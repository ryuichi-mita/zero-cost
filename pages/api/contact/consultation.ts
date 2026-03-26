import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const resend = new Resend(process.env.RESEND_API_KEY);

interface FormData {
  company: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

function getEmailTemplate(slug: string): { subject: string; body: string } {
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    subject: data.title || '',
    body: content.trim(),
  };
}

function replaceVariables(template: string, formData: FormData): string {
  return template
    .replace(/\{name\}/g, formData.name)
    .replace(/\{email\}/g, formData.email)
    .replace(/\{company\}/g, formData.company)
    .replace(/\{phone\}/g, formData.phone)
    .replace(/\{message\}/g, formData.message);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const formData: FormData = req.body;

    if (!formData.company || !formData.name || !formData.email || !formData.phone || !formData.message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const adminTemplate = getEmailTemplate('mail-admin');

    const adminSubject = replaceVariables(adminTemplate.subject, formData);
    const adminBody = replaceVariables(adminTemplate.body, formData);

    const myEmail = process.env.MY_EMAIL || 'admin@example.com';

    await resend.emails.send({
      from: 'noreply@ai-build.jp',
      to: myEmail,
      subject: adminSubject,
      text: adminBody,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
