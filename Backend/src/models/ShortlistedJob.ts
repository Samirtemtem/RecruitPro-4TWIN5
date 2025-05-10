import mongoose, { Document, Schema } from "mongoose";

interface IShortlistedJob extends Document {
  user: string; // Changed to string to accommodate "anonymous-user"
  jobPost: Schema.Types.ObjectId; // Reference to JobPost
  createdAt: Date;
}

const ShortlistedJobSchema: Schema<IShortlistedJob> = new Schema(
  {
    user: {
      type: String, // Changed to String type
      required: true,
    },
    jobPost: {
      type: Schema.Types.ObjectId,
      ref: "JobPost",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create compound index to prevent duplicate shortlisted jobs
ShortlistedJobSchema.index({ user: 1, jobPost: 1 }, { unique: true });

const ShortlistedJob = mongoose.model<IShortlistedJob>(
  "ShortlistedJob",
  ShortlistedJobSchema
);

export default ShortlistedJob;
