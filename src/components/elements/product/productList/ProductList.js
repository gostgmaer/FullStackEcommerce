"use client"
import React, { useMemo, useState } from "react";

import { Select } from "@/components/global/fields/SelectField";
import Pagination from "@/components/global/common/pagination/Pagination";
import ProductCard from "../ProductCard";
import { attributes } from "@/assets/fakeData/Products";

const sortByOptions = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'priceLowToHigh', label: 'Price: Low to High' },
  { value: 'priceHighToLow', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest Arrivals' },
  { value: 'ratingHighToLow', label: 'Customer Rating: High to Low' },
  { value: 'popularity', label: 'Popularity' }
];


let PageSize = 12;
const ProductList = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  
  return (
    <div>
      <div className=" justify-between my-3 bg-orange-100 border border-gray-100 rounded p-3 flex items-center">
        <h6 className="text-sm grid-cols-5 ">
          Total <span className="font-bold">{data.length}</span> items Found
        </h6>
      <div className=" grid-cols-1">  <Select options={sortByOptions} id={"sort_by"} label={undefined} additionalAttrs={undefined} placeholder={undefined}  optionkeys={{ key: "value", value: "label" }}  /></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
        {currentTableData.map((data, index) => {
          return <ProductCard key={index} product={data} attributes={attributes} />;
        })}
           
      </div> 
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  );
};

export default ProductList;
