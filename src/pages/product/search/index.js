import ProductListing from "@/components/searchPage";
import BodySection from "@/components/searchPage/Bodysection";
import FilterSection from "@/components/searchPage/Topsection";
import { baseurl } from "@/config/setting";
import Layout from "@/layout";
import SwipeableTemporaryDrawer from "@/layout/drawer";
import { Box } from "@mui/material";
import Head from "next/head";
import React from "react";

const Search = ({categories,brands}) => {

  return (
    <Layout>
      <Head>
        <title>Search Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <ProductListing props={{categories,brands}} />
    </Layout>
  );
};

export default Search;

// export const getServerSideProps = async (ctx) => {
//   const id = ctx.params["productId"];
//   const resData = await fetch(`${baseurl}/product/details?slug=${id}`);
//   const data = await resData.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };

export const getServerSideProps = async (ctx) => {
  const resbrands = await fetch(`${baseurl}/brands`);
  const brands = await resbrands.json();
  const rescategories = await fetch(`${baseurl}/categories`);
  const categories = await rescategories.json();

  return {
    props: {
      categories,
      brands,
    },
  };
};
