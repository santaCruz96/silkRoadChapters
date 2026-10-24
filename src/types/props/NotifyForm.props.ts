import { PaidLecture } from "../interfaces/PaidLecture.interface";

export interface NotifyFormProps {
    lectureId: string,
    onAvailable: ((lecture: PaidLecture) => void) | null,
    onClose: () => void
}
