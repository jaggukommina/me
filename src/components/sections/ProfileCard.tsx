"use client";

import type { PersonalInfo } from "@/types";
import { memo } from "react";
import { personalInfo } from "@/data/personal";
import { useImageLoader } from "@/hooks/useImageLoader";

interface ProfileCardProps {
  personalInfo?: PersonalInfo;
}

const ProfileCard: React.FC<ProfileCardProps> = memo(
  ({ personalInfo: propPersonalInfo = personalInfo }) => {
    const { imageSrc } = useImageLoader(propPersonalInfo.profileImage, {
      fallbackSrc: "/person-icon.svg",
      timeout: 8000,
    });

    return (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="The profile picture of Jagadeesh Kommina" src={imageSrc} />
        <div className="brief">
          <h1 dangerouslySetInnerHTML={{ __html: propPersonalInfo.title }} />
          <div className="short_summary">
            <h2>Abstraction</h2>
            <span>|</span>
            {propPersonalInfo.description.map((desc, index) => (
              <span key={index}>
                {index === propPersonalInfo.description.length - 1 && (
                  <>
                    <span>|</span>
                    <br /><br />
                  </>
                )}
                {desc}
              </span>
            ))}
          </div>
        </div>
        <blockquote>{propPersonalInfo.copyright}</blockquote>
      </>
    );
  }
);

ProfileCard.displayName = "ProfileCard";

export default ProfileCard;
