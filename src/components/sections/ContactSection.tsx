import { contactInfo } from '@/data/contact';

export default function ContactSection() {
  return (
    <div className="contact show">
      <div>
        <h1>{contactInfo.name}</h1>
        <h2>{contactInfo.title}</h2>
        <p>C# programmer, full stack dotnet developer and web developer</p>
        <p>{contactInfo.description}</p>
      </div>
      <div>
        <p>Call/text me on</p>
        <span className="number">{contactInfo.phone}</span>
      </div>
      <div>
        <p>Write me on</p>
        <a target="_blank" href={`mailto:${contactInfo.email}`} rel="noopener noreferrer">
          {contactInfo.email}
        </a>
      </div>
      <div>
        <p>Links</p>
        <a target="_blank" href={contactInfo.links.linkedin} rel="noopener noreferrer">
          LinkedIn
        </a>
        <a target="_blank" href={contactInfo.links.github} rel="noopener noreferrer">
          Github profile
        </a>
        <a target="_blank" href={contactInfo.links.hackerrank} rel="noopener noreferrer">
          Hackerrank
        </a>
      </div>
    </div>
  );
}
