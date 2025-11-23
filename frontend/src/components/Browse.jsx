import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import Footer from "./shared/Footer";
import { setSearchedQuery } from "@/redux/jobSlice";

const Browse = () => {
  useGetAllJobs();
  const { allJobs = [] } = useSelector((store) => store.jobs);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, []);
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-semibold my-10 mx-auto text-lg">
          Search Results ({allJobs.length})
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {allJobs.map((job) => (
            <Job job={job} key={job._id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Browse;
