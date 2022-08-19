export abstract class ComplaintsRepository {
  abstract getComplaints(): Promise<any>;
  abstract getComplaint(id: string): Complaint;
  abstract addComplaint(complaint: Complaint): Promise<boolean>;
  abstract updateComplaint(complaint: Complaint): boolean;
  abstract deleteComplaint(id: String): boolean;
}
