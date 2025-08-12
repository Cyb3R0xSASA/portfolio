import React from 'react';

const SkillsScroller = ({ skillsIcons }) => {
    const repeatedIcons = [...skillsIcons, ...skillsIcons]; // Duplicate for infinite loop illusion

    return (
        <div className="relative w-full overflow-hidden py-4">
            <div className="flex animate-scroll whitespace-nowrap">
                {repeatedIcons.map(({ id, image }, index) => (
                    <div
                        key={`${id}-${index}`}
                        className="mx-6 flex-shrink-0 w-18 h-18 flex items-center justify-center"
                    >
                        <img
                            src={image}
                            alt="skill"
                            className="w-full h-full object-contain hover:scale-120 hover:cursor-wait transition duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsScroller;
