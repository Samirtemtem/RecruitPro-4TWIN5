export type SkillDegree = 'NOVICE' | 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'EXPERT';

export interface Skill {
  id: number;
  userId?: string;
  name: string;
  degree: SkillDegree;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface SkillInput {
  name: string;
  degree: SkillDegree;
}

export const skillDegreeDescriptions: Record<SkillDegree, string> = {
  NOVICE: 'Basic theoretical knowledge but limited practical experience',
  BEGINNER: 'Can perform basic tasks with guidance',
  INTERMEDIATE: 'Can work independently on most tasks',
  ADVANCED: 'Can handle complex problems and mentor others',
  EXPERT: 'Recognized authority with comprehensive knowledge'
}; 