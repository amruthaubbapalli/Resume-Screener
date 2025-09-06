import React from 'react';

const ScaleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="w-6 h-6"
        {...props}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.036.243c-2.132 0-4.14-.817-5.62-2.25L12 14.25l-1.62 1.62c-1.48 1.433-3.488 2.25-5.62 2.25a5.988 5.988 0 0 1-2.036-.243c-.483-.174-.711-.703-.59-1.202L5.25 4.97m6.75 0c.618 0 1.23-.043 1.834-.125a25.888 25.888 0 0 0-3.668 0c.604.082 1.216.125 1.834.125" />
    </svg>
);

export default ScaleIcon;
