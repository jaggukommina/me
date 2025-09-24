interface TimelineCardProps {
  title: string;
  subtitle?: string;
  period: string;
  content: React.ReactNode;
  website?: string;
  isCurrent?: boolean;
}

export default function TimelineCard({ 
  title, 
  subtitle, 
  period, 
  content, 
  website, 
  isCurrent = false 
}: TimelineCardProps) {
  return (
    <div className="timeline_card">
      <div className="main">
        <h2>{title}</h2>
        {subtitle && <h4>{subtitle}</h4>}
        <h4>{period}</h4>
      </div>
      <div className={`timeline ${isCurrent ? 'current' : ''}`}></div>
      <div className="content">
        {content}
        {website && (
          <a 
            className="link" 
            href={website} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            website
          </a>
        )}
      </div>
    </div>
  );
}
