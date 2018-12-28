import { IncidentStatus } from './enums/incident-status.enum';

export interface Incident {
    id: number;
    time: string;
    status: IncidentStatus;
    description: string;
    username: string;
}
