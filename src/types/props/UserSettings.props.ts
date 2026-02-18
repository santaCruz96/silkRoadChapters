import { DetailedHTMLProps, HTMLAttributes} from "react";
import { UserProfile } from '@/types/api/user';

export interface UserSettingsProps 
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        user: UserProfile;
}