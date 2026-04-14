import mongoose, { Schema, type Document } from "mongoose";

export interface IFAQ {
  question: string;
  answer: string;
}

export interface IBlog extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
  tags: string[];
  faqs: IFAQ[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const FAQSchema = new Schema<IFAQ>(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { _id: false }
);

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: String, required: true },
    author: { type: String, default: "WalnutAI Team" },
    image: { type: String, default: "" },
    category: { type: String, required: true },
    tags: { type: [String], default: [] },
    faqs: { type: [FAQSchema], default: [] },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);
