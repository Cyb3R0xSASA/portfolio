import React from 'react'
import { footer } from '../data/data.js'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const Footer = () => {
    return (
        <footer className='bg-gradient-to-b from-[#121212] to-[#1e1e1e]'>
            <div className='container mx-auto px-4 py-12'>
                <motion.div
                    className='grid grid-cols-1 md:grid-cols-4 gap-8'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div variants={itemVariants}>
                        <h3 className="text-white text-lg font-bold mb-2">{footer.col1.title}</h3>
                        <motion.div
                            className="bg-[#c41e3a] h-1 mb-4"
                            animate={{ width: [40, 100, 40] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <p className="text-gray-400 text-sm font-bold mb-4">{footer.col1.cols[0]}</p>
                        <div className="flex space-x-4 mb-6">
                            {footer.col1.social.map(({ Icon, path, color }) => (
                                <motion.div
                                    key={path}
                                    className={`text-gray-400 border-2 rounded-full p-2 hover:border-gray-300 hover:text-gray-200 hover:bg-gray-700 duration-500 transition-all cursor-pointer`}
                                    style={{ borderColor: color }}
                                >
                                    <Link to={path} target="_blank" rel="noopener noreferrer">
                                        <Icon size={16} style={{ color }} />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="text-white text-lg font-bold mb-2">{footer.col2.title}</h3>
                        <motion.div
                            className="bg-[#c41e3a] h-1 mb-4"
                            animate={{ width: [40, 100, 40] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <ul className='space-y-2'>
                            {footer.col2.cols.map(({ name, path }) => (
                                <li key={path}>
                                    <Link to={path} className="text-gray-400 font-bold hover:text-[#c41e3a] duration-500 transition-colors cursor-pointer">
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="text-white text-lg font-bold mb-2">{footer.col3.title}</h3>
                        <motion.div
                            className="bg-[#c41e3a] h-1 mb-4"
                            animate={{ width: [40, 100, 40] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <ul className='space-y-2'>
                            {footer.col3.cols.map(({ id, title }) => (
                                <li key={id}>
                                    <span className="text-gray-400 font-bold hover:text-[#c41e3a] duration-500 transition-colors cursor-pointer">
                                        {title}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="text-white text-lg font-bold mb-2">{footer.col4.title}</h3>
                        <motion.div
                            className="bg-[#c41e3a] h-1 mb-4"
                            animate={{ width: [40, 100, 40] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <ul className='space-y-3'>
                            {footer.col4.cols.map(({ id, Icon, text }) => (
                                <li key={id} className='flex items-center gap-2'>
                                    <motion.span
                                        className={`text-gray-400 border-2 rounded-full p-2 hover:border-gray-300 hover:text-gray-200 hover:bg-gray-700 duration-500 transition-all cursor-pointer`}
                                    >
                                        <Icon size={14} />
                                    </motion.span>
                                    <span className="text-gray-400 text-sm font-bold hover:text-[#c41e3a] duration-500 transition-colors cursor-pointer break-all">
                                        {text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer
