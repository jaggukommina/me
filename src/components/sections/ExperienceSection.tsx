import { experience } from '@/data/experience';
import TimelineCard from '@/components/ui/TimelineCard';

export default function ExperienceSection() {
  return (
    <div className="experience show">
      {experience.map((exp) => {
        const period = exp.to 
          ? `${exp.from} to ${exp.to}`
          : `Since ${exp.from}`;
        
        const isCurrent = exp.to === null;

        const content = (
          <>
            <h2>{exp.company}</h2>
            <h4>{exp.location}</h4>
            <ul>
              {exp.work.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        );

        return (
          <TimelineCard
            key={exp.company}
            title={exp.role}
            period={period}
            content={content}
            website={exp.website}
            isCurrent={isCurrent}
          />
        );
      })}
    </div>
  );
}
