import { AiOutlineHome } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";

export type IconProps = {
  name: keyof typeof icons;
};

const icons = {
  login: BiLogIn,
  logout: BiLogIn,
  home: AiOutlineHome
};

export function Icon({ name, ...props }: IconProps) {
  const IconComponent = icons[name];
  return (
    <IconComponent
      style={{ width: "70%", height: "70%" }}
      stroke={1.5}
      {...props}
    />
  );
}
