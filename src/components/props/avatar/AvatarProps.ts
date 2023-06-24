import { ImgHTMLAttributes } from "react";

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    outline?: boolean;
    top?: number;
}