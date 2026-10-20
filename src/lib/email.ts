import emailjs from '@emailjs/browser';

// Same EmailJS service the current site posts to. These are public, browser-side keys.
const SERVICE_ID = 'service_vdyohab';
const TEMPLATE_ID = 'template_y875dyu';
const PUBLIC_KEY = 'Qomz2R7msZcdKQP1b';

export type DemoRequest = {
  email: string;
  firstName: string;
  lastName: string;
  companyName: string;
  companySize: string;
  interest: string;
};

export function sendDemoRequest(form: DemoRequest) {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: `${form.firstName} ${form.lastName}`.trim(),
      from_email: form.email,
      company: form.companyName,
      company_size: form.companySize,
      interest: form.interest,
      message: `Company Size: ${form.companySize}, Interested In: ${form.interest}`,
    },
    PUBLIC_KEY,
  );
}

export function sendNewsletterSignup(email: string) {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: 'Newsletter signup',
      from_email: email,
      company: '',
      company_size: '',
      interest: 'Newsletter',
      message: `Newsletter subscription request from ${email}`,
    },
    PUBLIC_KEY,
  );
}
