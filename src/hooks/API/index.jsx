import React, { useState, useEffect } from "react";
import {
   Grid,
   Card,
   CardMedia,
   CardContent,
   Typography,
   Button,
   Box,
} from "@mui/material";

// 🔹 30 ta mahsulot (fake data)
const fakeProducts = Array.from({ length: 30 }).map((_, i) => ({
   id: i + 1,
   title: `Mahsulot ${i + 1}`,
   image: `https://picsum.photos/300/300?random=${i + 1}`,
   price: (Math.random() * 100 + 20).toFixed(2),
   discount: (Math.random() * 50 + 10).toFixed(2),
}));

const Api = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      setTimeout(() => {
         setProducts(fakeProducts);
      }, 400);
   }, []);

   return (
      <Box
         sx={{
            p: { xs: 2, sm: 3, md: 4 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
         }}
      >
         <Typography
            variant="h4"
            align="center"
            sx={{ mb: 4, fontWeight: "bold", color: "#222" }}
         >
            🛒 Mahsulotlar ro‘yxati
         </Typography>

         <Grid
            container
            spacing={3}
            justifyContent="center" 
            alignItems="center"
            sx={{ maxWidth: "1400px" }} 
         >
            {products.map((product) => (
               <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3} 
                  key={product.id}
                  display="flex"
                  justifyContent="center"
               >
                  <Card
                     sx={{
                        width: 260,
                        borderRadius: 3,
                        boxShadow: 4,
                        transition: "0.3s ease",
                        "&:hover": {
                           transform: "scale(1.03)",
                           boxShadow: 6,
                        },
                     }}
                  >
                     <CardMedia
                        component="img"
                        height="200"
                        image={product.image}
                        alt={product.title}
                        sx={{ objectFit: "cover" }}
                     />
                     <CardContent>
                        <Typography
                           variant="h6"
                           sx={{
                              fontWeight: 600,
                              mb: 1,
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                           }}
                        >
                           {product.title}
                        </Typography>

                        <Typography color="text.secondary" sx={{ fontSize: 14, mb: 1 }}>
                           Oddiy narx:{" "}
                           <span style={{ textDecoration: "line-through" }}>
                              ${product.price}
                           </span>
                        </Typography>

                        <Typography
                           sx={{ color: "error.main", fontWeight: "bold", mb: 2 }}
                        >
                           Skidkali narx: ${product.discount}
                        </Typography>

                        <Button
                           fullWidth
                           variant="contained"
                           sx={{
                              backgroundColor: "green",
                              fontWeight: 600,
                              "&:hover": { backgroundColor: "#059862" },
                           }}
                        >
                           Sotib olish
                        </Button>
                     </CardContent>
                  </Card>
               </Grid>
            ))}
         </Grid>
      </Box>
   );
};

export default Api;
