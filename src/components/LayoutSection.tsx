import React from 'react';
import './LayoutSection.css';
import { Box, Button } from '@mui/material';
import { LayoutSection1 } from './LayoutSection1';

export const LayoutSection = () => {
    return (
        <Box className="layout-box">
            <Box className="button-container">
                <Button variant="contained" className="custom-button">FOOD</Button>
                <Button variant="contained" className="custom-button">DRINKS</Button>
                <Button variant="contained" className="custom-button">BRUNCH</Button>
            </Box>
            
        </Box>
    );
};
