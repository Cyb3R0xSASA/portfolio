import { motion } from 'framer-motion';

export const Skill = ({ name, Icon, skills }) => {
    return (
        <>
            <div className="flex items-center mb-6">
                <div className="p-3 bg-[#c41e3a]/20 rounded-lg flex items-center justify-center mr-4">
                    <Icon className="text-[#c41e3a]" size={20} />
                </div>
                <h3 className="text-white text-lg font-bold">{name}</h3>
            </div>
            <div className="space-y-4">
                {skills.map(({ id, name, percent }) => (
                    <div key={id}>
                        <div className="flex justify-between mb-1 text-gray-300 text-lg font-medium">
                            <span>{name}</span>
                            <span>{percent}%</span>
                        </div>
                        <div className="h-2 bg-[#2d2d2d] rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-[#c41e3a] rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${percent}%` }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 3, ease: 'easeOut' }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}