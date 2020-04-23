import React from 'react';
import { Typography } from '@material-ui/core';

import styles from './LastUpdated.module.css';

const LastUpdated = ({ data: { lastUpdate } }) => {
    
    const lastUpdateTime = new Date(lastUpdate).toUTCString().replace(" 2020", ",").slice(5);  //this removes the day and 2020 from the received string
    
    return (
        <div className={styles.container} >
            <Typography color="textSecondary"><strong>{lastUpdateTime}</strong></Typography>
        </div>
    )
}

export default LastUpdated;