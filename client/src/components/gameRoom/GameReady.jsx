import React, { useState, useRef,useEffect } from "react";
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';
import Typography from '@mui/material/Typography';

const GameReady = () => {


    const [selected, setSelected] = useState(false);
    const readyTextRef = useRef('Ready')
    const buttonRef = useRef(null)
    useEffect(() => {
        if(selected === false) {
            readyTextRef.current.textContent = 'Ready'
        } else {
            readyTextRef.current.textContent = 'Unready'
            }
        }, [selected]);
    return (
      <ToggleButton sx={
        {
            "&.Mui-selected": {
                color: "#fff",
                backgroundColor: "#50B848",
                 "&:hover": {
                  color: "#fff",
                  backgroundColor: "red",
                 },
               },
               "&:hover": {
                color: "#fff",
                backgroundColor: "#50B848",
              },
        
        }
      }
        value="check"
        selected={selected}
        onChange={() => setSelected((prevSelected) => !prevSelected)}
        ref = {buttonRef}
      >

        <Typography variant="h5" component="div" ref={readyTextRef}>
            
        </Typography>
        
      </ToggleButton>
    );
    
}

export default GameReady;