import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Profile } from "./types";
import NoProfileAvatar from "./icons/NoProfileAvatar";

interface AvatarProps {
  profile: Profile;
}

export const StyledAvatar = styled.div`
  margin-left: 8px;
  position: relative;

  img {
    border-radius: 50%;
  }
`;

const Pip = styled.div`
  background-color: ${({ theme }) => theme.colors.failure};
  border-radius: 50%;
  pointer-events: none;
  height: 8px;
  position: absolute;
  right: 0;
  top: 0;
  width: 8px;
`;

const BAD_SRCS: { [_src: string]: true } = {}

const Avatar: React.FC<AvatarProps> = ({ profile }) => {
  const { username = "Bunny", image, profileLink, noProfileLink, showPip = false } = profile;
  const [, refresh] = useState<number>(0)
  const link = profile.username ? profileLink : noProfileLink;
  const isExternal = link.startsWith("http");
  const ariaLabel = "Link to profile";
  const icon = image ? (
    <img src={BAD_SRCS[image]?"/images/unknown.png":image} alt="profile avatar" height="32px" width="32px" onError={() => {
      BAD_SRCS[image] = true
      refresh((i) => i + 1)
    }}/>
  ) : (
    <NoProfileAvatar width="32px" height="32px" />
  );

  if (isExternal) {
    return (
      <StyledAvatar title={username}>
        <a target="_blank" href={link} aria-label={ariaLabel}>
          {icon}
        </a>
        {showPip && <Pip />}
      </StyledAvatar>
    );
  }

  return (
    <StyledAvatar title={username}>
      <Link to={link} aria-label={ariaLabel}>
        {icon}
      </Link>
      {showPip && <Pip />}
    </StyledAvatar>
  );
};

export default Avatar;
