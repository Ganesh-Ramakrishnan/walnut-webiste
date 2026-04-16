import mongoose, { Schema, type Document } from "mongoose";

export type ChangelogTag = "NEW" | "IMPROVED" | "FIXED" | "SECURITY";

export interface IChangelog extends Document {
  date: string;
  version: string;
  releaseName: string;
  summary: string;
  tag: ChangelogTag;
  content: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ChangelogSchema = new Schema<IChangelog>(
  {
    date: { type: String, required: true, unique: true },
    version: { type: String, default: "" },
    releaseName: { type: String, default: "" },
    summary: { type: String, default: "" },
    tag: {
      type: String,
      enum: ["NEW", "IMPROVED", "FIXED", "SECURITY"],
      required: true,
      default: "NEW",
    },
    content: { type: String, required: true, default: "" },
    published: { type: Boolean, default: true },
  },
  { timestamps: true, collection: "changelogs" }
);

export default mongoose.models.Changelog ||
  mongoose.model<IChangelog>("Changelog", ChangelogSchema);
