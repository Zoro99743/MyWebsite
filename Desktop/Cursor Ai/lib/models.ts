import { getDatabase } from './mongodb';
import { ObjectId } from 'mongodb';

export interface ContactMessage {
  _id?: ObjectId;
  name: string;
  email: string;
  message: string;
  createdAt?: Date;
}

export interface Project {
  _id?: ObjectId;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  technologies: string[];
  imageUrl?: string;
  videoUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  createdAt?: Date;
}

export async function saveContactMessage(message: ContactMessage): Promise<ObjectId> {
  const db = await getDatabase();
  const result = await db.collection<ContactMessage>('contacts').insertOne({
    ...message,
    createdAt: new Date(),
  });
  return result.insertedId;
}

export async function getProjects(): Promise<Project[]> {
  const db = await getDatabase();
  return await db.collection<Project>('projects').find({}).sort({ createdAt: -1 }).toArray();
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const db = await getDatabase();
  return await db.collection<Project>('projects').find({ featured: true }).sort({ createdAt: -1 }).toArray();
}

