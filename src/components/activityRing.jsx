import React, { useState } from 'react';
import './activity.css';

function ActivityRing() {
    const [totalSteps, setTotalSteps] = useState(5233);
    const [trackedSteps, setTrackedSteps] = useState(0);

    const incrementSteps = () => {
        const newTotalSteps = totalSteps + 1;
        const newTrackedSteps = trackedSteps + 1;
        setTotalSteps(newTotalSteps);
        setTrackedSteps(newTrackedSteps);
    };

    return (
        <div className="ActivityRing">
            <div className="activityRing">
                <div className="ringBackground"></div>
                <div className="ringBackground1"></div>
                <div className="ringOverlay" style={{ transform: `rotate(${(trackedSteps / totalSteps) * 360}deg)` }}></div>
                <div className='steps-info'>
                    <div className="stepCount">{totalSteps}</div>
                    <div className="stepText">Steps</div>
                </div>
            </div>
        </div>
    );
}

export default ActivityRing;
