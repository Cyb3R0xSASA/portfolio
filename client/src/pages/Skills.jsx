import React from 'react';
import { motion } from 'framer-motion';
import Title from "../components/Title";
import { skills, skillsIcons } from "../data/data";
import { containerVariants, fadeUp } from '../utils/animation';
import Hero from '../components/Hero';
import { Skill } from '../components/Skill';
import { useLocation } from 'react-router-dom';
import SkillsScroller from '../components/SkillScroller';

const Skills = () => {
    const location = useLocation();
    const glowAnim = {
        hidden: { boxShadow: '0 0 0px rgba(196, 30, 58, 0)' },
        show: {
            boxShadow: [
                '0 0 4px #c41e3a, 0 0 8px #1e1e1e',
                '0 0 12px #c41e3a, 0 0 24px #1e1e1e',
                '0 0 4px #c41e3a, 0 0 8px #1e1e1e',
            ],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    }
    return (
        <>
            {location.pathname === '/skills' ? <Hero /> : ''}
            <section className='py-20 bg-gradient-to-b from-[#121212] to-[#1e1e1e]'>
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        className="flex flex-col items-center mb-10"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <Title firstWord={'My'} secondWord={'Skills'} />
                        <p className="text-gray-300 max-w-2xl mx-auto text-center">{skills.description}</p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {skills.cols.map(({ id, name, Icon, skills }) => (
                            <motion.div
                                key={id}
                                className="bg-[#1e1e1e] p-6 rounded-lg border border-[#2d2d2d]"
                                variants={fadeUp}
                            >
                                <Skill skills={skills} Icon={Icon} name={name} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <div className="container mx-auto px-4 md:px-6 pt-10">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className='pb-10'
                    >
                        <h2 className="text-xl text-white font-bold text-center">Technologies I Work With</h2>
                    </motion.div>
                    <motion.div
                        variants={glowAnim}
                        initial="hidden"
                        animate="show"
                        className="rounded-xl overflow-hidden"
                    >
                        <SkillsScroller skillsIcons={skillsIcons} />
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Skills;
