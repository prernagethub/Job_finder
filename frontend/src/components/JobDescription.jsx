import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Navbar from "./shared/Navbar";

const JobDescription = () => {
  const isApplied = false;

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto my-10">
        <div className="flex items-center justify-between ">
          <div>
            <h1 className="font-bold text-xl">Frontend Developer</h1>
            <div className="flex items-center mt-4 gap-2">
              <Badge variant="ghost" className="text-blue-400 font-bold">
                12 positions
              </Badge>
              <Badge variant="ghost" className="text-blue-800 font-bold">
                Part Time
              </Badge>
              <Badge variant="ghost" className="text-blue-600 font-bold">
                12 LPA
              </Badge>
            </div>
          </div>
          <Button
            className={`${
              isApplied
                ? "bg-gray-600 cursor-not-allowed"
                : " bg-[#7209b7] hover:bg-[#5f32ad]"
            }`}>
            {isApplied ? "Already Applied" : "Apply Now"}
          </Button>
        </div>

        <div className="my-4">
          <h1 className="border-b-2 border-b-gray-300 font-medium py-4">
            Job Description
          </h1>
        </div>
        <h1 className="font-bold my-1">
          Role:{" "}
          <span className="pl-4 font-normal text-gray-800">
            Frontend Developer
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Location:{" "}
          <span className="pl-4 font-normal text-gray-800">Hyderabad</span>
        </h1>
        <h1 className="font-bold my-1">
          Description:{" "}
          <span className="pl-4 font-normal text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            maiores?
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Experience:{" "}
          <span className="pl-4 font-normal text-gray-800">2 yrs</span>
        </h1>
        <h1 className="font-bold my-1">
          Salary: <span className="pl-4 font-normal text-gray-800">12LPA</span>
        </h1>
        <h1 className="font-bold my-1">
          Total Applicants:{" "}
          <span className="pl-4 font-normal text-gray-800">4</span>
        </h1>
        <h1 className="font-bold my-1">
          Posted Date:{" "}
          <span className="pl-4 font-normal text-gray-800">17-07-2024</span>
        </h1>
      </div>
    </>
  );
};

export default JobDescription;
