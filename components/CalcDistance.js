import react from 'react';

const CalcDistance = (x, y, z) => {
    return (Math.sqrt(x*x+y*y+z*z));
}

export default CalcDistance;