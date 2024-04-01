import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';

// TODO: This is a report button to add a feature to the map- Please IMPLEMENT ME!
const Report = (props) => {
    const [open, setOpen] = useState(false);
    const [reportType, setReportType] = useState();
    const [reportMode, setReportMode] = useState(false);

    const toggleDrawer = (isOpen) => () => {
        setOpen(isOpen);
    };

    const handleReportClick = (type) => {
        // Call the onReportTypeChange function passed from Map component
        props.onReportTypeChange(type);
        // Close the drawer
        setOpen(false);
      };
    

    const DrawerList = (
        <div>
            <Button onClick={() => handleReportClick("Ramp")}>Ramp</Button>
            <Button onClick={() => handleReportClick("Stair")}>Stair</Button>
            <Button onClick={() => handleReportClick("Elevator")}>Elevator</Button>
            {/* ADD MORE REPORT CASES */}
        </div>
    );

    return (
    <div>
        <Button 
            onClick={toggleDrawer(true)}
            style={{
                border: '2px solid black',
                padding: '10px 20px', // Increase padding to make the button bigger
                fontSize: '1.2rem', // Increase font size
            }}
            >
                REPORT
        </Button>
        <Drawer 
            anchor="right"
            open={open} 
            onClose={toggleDrawer(false)}
        >

            {DrawerList}
            {reportMode && <p>Report submitted: {reportType}</p>}
        </Drawer>
        
    </div>
    
    );
};
export default Report;