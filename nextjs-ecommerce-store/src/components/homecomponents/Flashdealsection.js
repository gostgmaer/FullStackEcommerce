import {
  ArrowRight,
  CardGiftcard,
  FlashOn,
  Gif,
  GifBoxTwoTone,
  NewReleases,
} from "@mui/icons-material";
import { Box, Button, colors, Grid, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Productcard from "../elements/Productcard";

const FlashDeal = () => {
  return (
    <Box p={3} component={"section"}>
      <Box sx={{ width: "100%", mt: 0 }}>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            py: 2,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: "flex",
              gap: 1,

              alignItems: "center",
            }}
          >
            <FlashOn /> Flash Deal
          </Typography>
          <Button variant="text" endIcon={<ArrowRight />}>
            View all
          </Button>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            gap={"10px"}
            justifyContent="space-between"
            width="100%"
            m=""
            columns={12}
          >
            <Swiper
              slidesPerView={5}
              spaceBetween={8}
            style={{padding:'10px 0'}}
              rewind={true}
             
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {Array.from(Array(12).keys()).map((item) => (
                <SwiperSlide key={item}>
                  <Productcard  size={12}/>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default FlashDeal;
