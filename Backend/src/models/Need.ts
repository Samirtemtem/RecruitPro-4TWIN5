import mongoose, { Document, Schema } from 'mongoose';

interface INeed extends Document {
    teamLead: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true };
    position: { type: String, required: true };
    description: string;
    requirements: string[];
    department?: 'ELECTROMECANIQUE' | 'GENIE-CIVIL' | 'TIC' | 'OTHER';
    status?: 'APPROVED' | 'REJECTED' | 'PENDING';
    experience: number;
    quantity: number;
    importance: 'HIGH' | 'MEDIUM' | 'LOW';
    requestCreated: boolean; // Added JobPostCreated attribute
    typeContrat: 'VACATAIRE' | 'PERMANENT'; // New attribute
}

const NeedSchema: Schema<INeed> = new Schema({
    teamLead: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    position: { type: String, required: true },
    description: { type: String, required: true },
    requirements: { type: [String], required: true },
    department: { type: String, enum: ['ELECTROMECANIQUE', 'GENIE-CIVIL', 'TIC', 'OTHER'], required: false },
    status: { type: String, enum: ['APPROVED', 'REJECTED', 'PENDING'], default: 'PENDING' },
    experience: { type: Number, required: true },
    quantity: { type: Number, required: true },
    importance: { type: String, enum: ['HIGH', 'MEDIUM', 'LOW'], required: true },
    requestCreated: { type: Boolean, default: false }, // Default value for JobPostCreated
    typeContrat: { type: String, enum: ['VACATAIRE', 'PERMANENT'], required: true } // New attribute added
}, { timestamps: true });

const Need = mongoose.model<INeed>('Need', NeedSchema);

export default Need;