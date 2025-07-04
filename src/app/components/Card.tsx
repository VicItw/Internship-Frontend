import Card from '@mui/joy/Card';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import React from "react"

type CardProps = {
    id: number;
    title: string;
    completed: boolean;
}; 
    



export const Cardd: React.FC<CardProps> = ({
  title = "Title"
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    // <div className = "p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 w-1/2">
    //   <a>
    //     <h5 className = "mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
    //       {title}
    //     </h5>
    //   </a>
    // </div>
    <Box width={matches? 1/2 : 2/5} >
        <Card variant="outlined" size={matches? "md" : "sm"} sx={{ overflow: 'auto' }}>{title}</Card>
    </Box>
  )
}

export default Cardd
export type {CardProps}