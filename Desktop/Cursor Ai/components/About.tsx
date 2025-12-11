'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaGamepad,
  FaCode,
  FaPalette,
  FaRocket,
  FaUnity,
  FaPython,
  FaJs,
  FaGitAlt,
} from 'react-icons/fa';

const skills = [
  { name: 'Unity', icon: FaUnity, color: 'text-orange-500' },
  { name: 'Python', icon: FaPython, color: 'text-yellow-400' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-300' },
  { name: 'Git', icon: FaGitAlt, color: 'text-red-500' },
];

const services = [
  {
    icon: FaGamepad,
    title: 'Game Development',
    description: 'Creating engaging and immersive game experiences across multiple platforms',
  },
  {
    icon: FaCode,
    title: 'Game Programming',
    description: 'Writing clean, efficient code for gameplay mechanics and systems',
  },
  {
    icon: FaPalette,
    title: 'Game Design',
    description: 'Designing compelling gameplay loops and user experiences',
  },
  {
    icon: FaRocket,
    title: 'Prototyping',
    description: 'Rapid prototyping to validate game concepts and mechanics',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          {/* Personal Details */}
          <motion.div
            variants={itemVariants}
            className="glass-effect rounded-2xl p-8 md:p-12 mb-16 card-hover"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-gradient">
                  Sanjay
                </h3>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  I'm a passionate game developer dedicated to creating
                  innovative and engaging gaming experiences. With expertise in
                  game design, programming, and development, I bring creative
                  ideas to life through code and design.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  My journey in game development has been driven by a love for
                  interactive storytelling and technical problem-solving. I
                  specialize in building games that not only look great but also
                  provide meaningful player experiences.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <FaGamepad className="text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold">Game Developer</p>
                    <p className="text-white/60 text-sm">Full-time</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <FaCode className="text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold">Available for Projects</p>
                    <p className="text-white/60 text-sm">Freelance & Contract</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">
              <span className="text-gradient">Technical Skills</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    className="glass-effect rounded-xl p-6 text-center card-hover"
                    whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Icon className={`text-4xl mb-3 mx-auto ${skill.color}`} />
                    <p className="font-semibold">{skill.name}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold mb-8 text-center">
              <span className="text-gradient">What I Do</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    className="glass-effect rounded-xl p-6 card-hover"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-2xl" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                    <p className="text-white/70">{service.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

