export interface ProfileHistory {
  id: string;
  createdAt: Date;
  CV: string;
  extractedData: string;
  updatedAt: Date;
}

// Input type for creating/updating
export interface ProfileHistoryInput extends Omit<ProfileHistory, 'id' | 'createdAt' | 'updatedAt'> {} 