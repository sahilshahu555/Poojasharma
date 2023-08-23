import { Box, Button, Divider, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Sahil from './images/pooja-photo.jpeg'

export const AboutMe = () => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  const handleReadMoreClick = () => {
    setShowMoreDetails((prevState) => !prevState);
  }
  return (
    <Box id="about" className="about section"  >
        {/* <Text > About me</Text> */}
      <Box className='about_left' data-aos="fade-down" >
        <img  src={Sahil} />
      </Box> 
      <Box className='about_right' >
        <Box  data-aos-duration="1200" > <Text  fontSize={["25px", "25px", "33px", "3xl"]} fontWeight={"700"} >About me</Text> </Box>
        <Box >  <Text fontSize={["20px", "20px", "25px", "2xl"]} fontWeight={"700"}> <span style={{ color: "orangered" }}> Human Resources </span>Manager </Text></Box>
        <Box className='about_me' > <Text m={"20px 0px"} id="user-detail-intro">Driven and energetic HR professional with a record of successfully executing and supporting 
        critical HR initiatives to drive cost efficiencies and position companies for growth.
         Known for developing and implementing innovative policies and procedures that enhance efficiency and efficacy across operations. Catalyst, problem solver, 
         and coach for functional groups and senior management. Thrive in fast-paced, ever-changing work environments. Promote a collaborative team and personal growth.</Text></Box>
        <Box ><Button  fontSize={"large"} size={["sm", "lg", "lg", "md"]} color={"white"} _hover={{ bg: "gray.200", color: "orangered", borderRadius: "10px" }} bg={"orangered"} onClick={handleReadMoreClick}>{showMoreDetails ? "Read less" : "Read more"}</Button></Box>
        {showMoreDetails && <Box className='more-detail' mt={"30px"} >
       
          <Box>

            <Text mt={"10px"} className='more_detail_text'> <span style={{ color: "#03c8d7", fontWeight: "700" }}> <i class="fa-solid fa-graduation-cap fa-xl"></i></span>Education  : ...</Text>
            <Divider />
            <Text   mt={"10px"} className='more_detail_text'><span style={{ color: "#03c8d7", fontWeight: "700" }}><i class="fa-solid fa-phone fa-lg"></i> </span>Mobile No. : ..</Text>
            <Divider />
            <Text  mt={"10px"} className='more_detail_text'><span style={{ color: "#03c8d7", fontWeight: "700" }}><i class="fa-solid fa-envelope fa-lg"></i></span>Email ID  : @gmail.com</Text>
            <Divider />
            <Text mt={"10px"} className='more_detail_text'> <span style={{ color: "#03c8d7", fontWeight: "700" }}><i class="fa-solid fa-location-dot fa-xl"></i></span>City  : Nagpur, Maharashtra</Text>
            <Divider />
          </Box>
        </Box>}

      </Box>
    </Box>
  )
}
