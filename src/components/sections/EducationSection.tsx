import { education } from '@/data/education';
import TimelineCard from '@/components/ui/TimelineCard';

export default function EducationSection() {
  return (
    <div className="education show">
      {education.map((edu) => {
        const period = edu.start 
          ? `${edu.start} to ${edu.end}`
          : `Passed out - ${edu.end}`;

        const content = (
          <>
            <h2>{edu.branch}</h2>
            <p>with {edu.cgpa} {parseFloat(edu.cgpa) < 10 ? 'cgpa' : 'percentage'}</p>
            <span>from</span>
            <h4>{edu.college}</h4>
            <p>{edu.place}</p>
          </>
        );

        return (
          <TimelineCard
            key={edu.title}
            title={edu.title}
            period={period}
            content={content}
            website={edu.website}
          />
        );
      })}
    </div>
  );
}
