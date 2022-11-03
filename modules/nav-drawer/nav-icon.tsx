import {
  iconContainer,
  lineInside,
  lineOutside,
  translateLine1,
  translateLine2,
  translateLine3,
} from "./styles";

export const HamburgerIcon = ({ state }: { state: boolean }) => {
  return (
    <div className={iconContainer}>
      <div className={`${lineOutside} ${state ? translateLine1 : ""}`}></div>
      <div className={`${lineInside} ${state ? translateLine2 : ""}`}></div>
      <div className={`${lineOutside} ${state ? translateLine3 : ""}`}></div>
    </div>
  );
};
