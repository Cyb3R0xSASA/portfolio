import { motion } from 'framer-motion'

const Title = ({ firstWord, secondWord, variants }) => {
    return (
        <>
            <motion.div variants={variants}>
                <h2 className='text-3xl md:text-4xl font-bold mb-2 text-white'>
                    {firstWord}
                    {secondWord && <span className='text-[#c41e3a] ml-2'>{secondWord}</span>}
                </h2>
                <motion.div
                    className="bg-[#c41e3a] h-1 mb-4"
                    animate={{ width: [40, 140, 40] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>
        </>
    )
};

export default Title