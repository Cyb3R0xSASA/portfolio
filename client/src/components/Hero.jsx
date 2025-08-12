import { hero } from '../data/data'
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section className='pt-28 pb-20 md:pt-32 md:pb-24 min-h-[800px] flex items-center bg-gradient-to-b from-[#121212] to-[#1e1e1e]'>
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    className="flex flex-col-reverse md:flex-row items-center gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className='text-[#c41e3a] font-medium mb-2'>Hello, I'm</p>
                        <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>{hero.name}</h1>
                        <h2 className="text-xl md:text-2xl text-gray-400 mb-6">{hero.title}</h2>
                        <p className='text-gray-300 mb-8 max-w-2xl'>{hero.description}</p>
                        <div className='flex flex-wrap gap-4'>
                            <span className="bg-[#c41e3a] hover:bg-[#c41e3a]/90 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center cursor-pointer">
                                <span>Get in Touch</span>
                                <FaArrowRightLong size={18} className='ml-2' />
                            </span>
                            <span className='border border-[#c41e3a] text-[#c41e3a] hover:bg-[#c41e3a]/10 px-6 py-3 rounded-md font-medium transition-all duration-300 cursor-pointer'>
                                View Projects
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        className='md:w-80 flex justify-center md:justify-end relative'
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden group">
                            <div className="absolute inset-0 rounded-full rotate-border z-0"></div>

                            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#917d62]/30 relative z-10">
                                <img
                                    className="w-full h-full object-cover"
                                    src={hero.imageYellow}
                                    alt={`${hero.name} - ${hero.title}`}
                                />
                            </div>
                        </div>
                        <motion.div
                            className="absolute -bottom-4 -right-4 z-10 bg-[#121212] p-3 rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-[#c41e3a] rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-white">{hero.status}</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
export default Hero