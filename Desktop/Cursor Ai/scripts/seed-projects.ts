/**
 * Seed script to add sample projects to MongoDB
 * Run with: npx ts-node scripts/seed-projects.ts
 * Make sure to set MONGODB_URI in your environment
 */

import { MongoClient } from 'mongodb';
import { Project } from '../lib/models';

const sampleProjects: Omit<Project, '_id'>[] = [
  {
    title: 'Epic Adventure Quest',
    description: 'A thrilling action-adventure game with stunning graphics and immersive gameplay',
    longDescription: 'Epic Adventure Quest is a 3D action-adventure game featuring an open world, dynamic combat system, and engaging storyline. Built with Unity and featuring custom shaders for visual effects.',
    category: 'Unity',
    technologies: ['Unity', 'C#', 'Blender', 'Photoshop'],
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800',
    videoUrl: '',
    githubUrl: 'https://github.com',
    liveUrl: '',
    featured: true,
    createdAt: new Date('2024-01-15'),
  },
  {
    title: 'Puzzle Master 3D',
    description: 'Challenging 3D puzzle game with innovative mechanics',
    longDescription: 'A brain-teasing puzzle game that combines spatial reasoning with creative problem-solving. Features procedurally generated levels and a beautiful minimalist art style.',
    category: 'Unity',
    technologies: ['Unity', 'C#', 'ProBuilder'],
    imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800',
    videoUrl: '',
    githubUrl: 'https://github.com',
    liveUrl: '',
    featured: true,
    createdAt: new Date('2024-02-01'),
  },
  {
    title: 'Retro Arcade Collection',
    description: 'A collection of classic arcade games reimagined for modern platforms',
    longDescription: 'A web-based collection featuring remastered versions of classic arcade games. Built with modern web technologies while maintaining the nostalgic feel of retro gaming.',
    category: 'Web',
    technologies: ['JavaScript', 'HTML5 Canvas', 'WebGL'],
    imageUrl: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800',
    videoUrl: '',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false,
    createdAt: new Date('2024-02-20'),
  },
  {
    title: 'Mobile Racing Game',
    description: 'Fast-paced mobile racing game with multiplayer support',
    longDescription: 'An exciting mobile racing game optimized for touch controls. Features local and online multiplayer modes, customizable vehicles, and multiple race tracks.',
    category: 'Mobile',
    technologies: ['Unity', 'C#', 'Photon'],
    imageUrl: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800',
    videoUrl: '',
    githubUrl: 'https://github.com',
    liveUrl: '',
    featured: false,
    createdAt: new Date('2024-03-10'),
  },
  {
    title: 'Indie Horror Experience',
    description: 'Atmospheric horror game with psychological elements',
    longDescription: 'A first-person horror game focusing on atmosphere and storytelling. Features dynamic lighting, sound design, and a narrative-driven experience that keeps players on edge.',
    category: 'Indie',
    technologies: ['Unity', 'C#', 'FMOD'],
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800',
    videoUrl: '',
    githubUrl: 'https://github.com',
    liveUrl: '',
    featured: true,
    createdAt: new Date('2024-03-25'),
  },
];

async function seedProjects() {
  if (!process.env.MONGODB_URI) {
    console.error('❌ MONGODB_URI environment variable is not set');
    process.exit(1);
  }

  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');

    const db = client.db('portfolio');
    const collection = db.collection<Project>('projects');

    // Clear existing projects (optional - remove if you want to keep existing data)
    // await collection.deleteMany({});
    // console.log('🗑️  Cleared existing projects');

    // Insert sample projects
    const result = await collection.insertMany(sampleProjects as any);
    console.log(`✅ Inserted ${result.insertedCount} sample projects`);

    console.log('\n📋 Sample projects added:');
    sampleProjects.forEach((project, index) => {
      console.log(`   ${index + 1}. ${project.title} (${project.category})`);
    });

    console.log('\n✨ Seeding completed successfully!');
  } catch (error) {
    console.error('❌ Error seeding projects:', error);
    process.exit(1);
  } finally {
    await client.close();
    console.log('🔌 Disconnected from MongoDB');
  }
}

seedProjects();

