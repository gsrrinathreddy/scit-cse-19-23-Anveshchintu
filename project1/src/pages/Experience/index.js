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
          <Typography>java basics</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Learned through some online websites
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
           Certifed from ICT ACADEMY ,Honeywell Youth Empowerment Program
          </Typography>
          
        </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>OOPS concepts</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
          <Typography>
          Learned through some online websites

          </Typography>
          
        </AccordionDetails>
      </Accordion>
    </div>
  );
}