import React from 'react'
import { Text,  Box, createStyles,  } from "@mantine/core";
export type CardProps = {
    img: any
    text:String
  }
const ImageCard = ({img,text}:CardProps) => { 
    const useStyles = createStyles((theme) => ({ 
        box:{
            cursor:"pointer", 
            boxSizing:"border-box", 
            width:"150px"
        }, 
        img:{
            boxSizing:"border-box", 
            background:"#ddd", 
            width:"150px"
        },
        text:{
            background:"#fff",
            marginTop:"-5px" 
        }
      }))
      const { classes } = useStyles()
  return (
     <Box className={classes.box}> 
        <img className={classes.img}
            src={img}
            alt=""
              />
              <Text color='black' weight={500} className={classes.text}> {text}</Text>
    </Box>
  )
}

export default ImageCard