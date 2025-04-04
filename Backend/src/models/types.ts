export enum Role {
  HR_MANAGER = 'HR-MANAGER',
  DEPARTMENT_MANAGER = 'DEPARTMENT-MANAGER',
  ADMIN = 'ADMIN',
  CANDIDATE = 'CANDIDATE',
  EMPLOYEE = 'EMPLOYEE',
  USER = 'USER'
}

export enum Privilege {
  JOB_POSTING = 'JOB_POSTING',
  REGULAR = 'REGULAR'
}

export enum OfferStatus {
  PENDING = 'PENDING',
  SENT = 'SENT',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  NEGOTIATING = 'NEGOTIATING'

}

export enum InterviewStatus {
  SCHEDULED = 'SCHEDULED',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED'
}

export enum InterviewType {
  ON_SITE = 'ON-SITE',
  ONLINE = 'ONLINE'
}

export enum ApplicationStatus {
  SUBMITTED = 'SUBMITTED',
  REVIEWED = 'REVIEWED',
  INTERVIEWED = 'INTERVIEWED',
  REJECTED = 'REJECTED',
  ACCEPTED = 'ACCEPTED'
}

export enum JobPostingStatus {
  PUBLISHED = 'PUBLISHED',
  CLOSED = 'CLOSED'
}

export enum Department {
  ELECTROMECANIQUE = 'ELECTROMECANIQUE',
  GENIE_CIVIL = 'GENIE-CIVIL',
  TIC ='TIC',
  OTHER='OTHER'
}

export enum Socials {
  LINKEDIN = 'LINKEDIN',
  GITHUB = 'GITHUB',
  PORTFOLIO = 'PORTFOLIO'
}

export enum NotificationType {
  RECOMMENDATION = 'RECOMMENDATION',
  SIMPLE = 'SIMPLE'
} 