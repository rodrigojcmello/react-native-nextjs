import {ButtonProps} from "./Button.type";
import {FC} from "react";

export const Button: FC<ButtonProps> = ({label} ) => {
    return <div>{label}</div>
}
