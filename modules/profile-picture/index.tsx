import { ProfilePictureContainer } from "./styles";

export const ProfilePitcure = ({
  profilePictureProp,
}: {
  profilePictureProp: "default" | "contact";
}) => {
  return <ProfilePictureContainer backgroundType={profilePictureProp} />;
};
