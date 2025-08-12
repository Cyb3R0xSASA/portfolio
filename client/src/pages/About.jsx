import React from 'react'
import { about } from '../data/data'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { containerVariants, fadeUp } from '../utils/animation'
import { FaDownload } from 'react-icons/fa6'
import Title from '../components/Title'
import Hero from '../components/Hero'

const About = () => {
    const location = useLocation();

    return (
        <>
            {location.pathname === '/about' ? <Hero /> : ''}
            <section className='py-20 bg-gradient-to-b from-[#121212] to-[#1e1e1e]'>
                <div className='container mx-auto px-4 md:px-6'>
                    <motion.div
                        className='flex flex-col md:flex-row items-center gap-12'
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.div className='w-full md:w-2/5' variants={fadeUp}>
                            <div className='relative group'>
                                <div className="neon-border rounded-lg">
                                    <img
                                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/9f4863284a-e98976fa2ece8707f24a.png"
                                        alt="Desk with monitors"
                                        className="w-full h-full object-cover z-10 relative"
                                    />
                                </div>
                                <motion.div
                                    className='absolute z-10 -bottom-10 -right-2 md:-right-5 bg-[#c41e3a] px-4 py-2 rounded-lg shadow-lg'
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                >
                                    <p className='text-white text-lg font-bold'>{about.years}</p>
                                    <p className='text-white text-sm'>{about.title}</p>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div className='w-full md:w-3/5' variants={containerVariants}>
                            <Title firstWord={'About'} secondWord={'Me'} variants={fadeUp} />
                            {about.descriptions.map((element) => (
                                <motion.p
                                    key={element.id}
                                    className='text-[#d1d5db] mb-6'
                                    variants={fadeUp}
                                >
                                    {element.text}
                                </motion.p>
                            ))}
                            <motion.div
                                className='grid grid-rows-5 xl:grid-cols-2 gap-4 mb-8'
                                variants={containerVariants}
                            >
                                {about.contacts.map(({ id, Icon, text }) => (
                                    <motion.div key={id} className="flex items-center gap-3" variants={fadeUp}>
                                        <Icon className='text-[#c41e3a] text-xl' />
                                        <span className='text-gray-400 text-sm font-bold hover:text-[#c41e3a] duration-500 transition-colors cursor-pointer'>{text}</span>
                                    </motion.div>
                                ))}
                                <motion.span
                                    variants={containerVariants}
                                >
                                    <motion.span
                                        className="inline-flex items-center gap-2 bg-[#121212] hover:bg-[#121212]/80 border border-[#c41e3a]/30 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 cursor-pointer"
                                        variants={fadeUp}
                                    >
                                        <FaDownload />
                                        <span>Download Resume</span>
                                    </motion.span>
                                </motion.span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default About
