import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Python for Beginners Workshops</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         Completed workshop on python for Beginners
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Power BI</Typography>
        </AccordionSummary>
        <AccordionDetails>

          <Typography>
           Certifed from ICT ACADEMY ,Honeywell Youth Empowerment Program and have Completed workshop
          </Typography>
          
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}