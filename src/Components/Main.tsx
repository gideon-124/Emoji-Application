import React, { useState, useEffect } from "react";
import { Title, TextInput, Text, Grid, Box, Pagination, Card, createStyles, Flex} from "@mantine/core"; 
import axios from "axios";
import ImageCard from "./ImageCard";
import Page from "./Page";
import './Main.css';

const Main = () => {  
    const useStyles = createStyles((theme) => ({
        boxMain:{
            display:"flex", 
            flexDirection:"column", 
        },  
        boxGrid:{
            display:"flex", 
            flexDirection:"row", 
            padding:"25px", 
            borderRadius:"8px"
        },  
        flexContainer:{
          marginLeft:"10px", 
          marginRight:"35px"
        },
        input:{
            width:"300px"
        }, 
        divMain:{
            background:"lightBlue", 
            borderRadius:"8px"
        }
      }))
  const { classes } = useStyles()
  const [image, setImage] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15); 
  const [totalPages, setTotalPages] = useState()

  let url = "https://api.github.com/emojis";
  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response);
      setImage(response.data);
    });
  }, []);

  const searchHandler = (e:any) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };


  const filteredPosts = image
    ? Object.entries(image).filter(([key]) =>
        key.toLowerCase().includes(search.toLowerCase())
      )
    : []; 

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div className={classes.divMain}>
    <Box className={classes.boxMain} >
      <Title align="center" color="dimmed"> Emoji Application </Title>  
      </Box> 
      <Flex justify={{sm:"space-between"}} className={classes.flexContainer}> 
      <TextInput
        className={classes.input}
        value={search}
        onChange={searchHandler}
        placeholder="Search Emoji"
      /> 
      {image && (<Page
          totalPosts={filteredPosts.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          setTotalPages={setTotalPages}
        />)} 
        </Flex>
    

    {currentPosts && (
      <Grid className={classes.boxGrid}>
        {currentPosts.map(([key, value]) => {
          return ( 
            
            <Grid.Col lg={2.4} md={2} sm={2} p={8} key={key} style={{cursor:"pointer"}}>     
            <Box className="boxCard"style={{textAlign:"center"}}> 
            <ImageCard img={value} text={key}/>  
            </Box>
            
            </Grid.Col> 
            
          );
        })}
      </Grid>
    )}
     
  </div>
  )
}

export default Main