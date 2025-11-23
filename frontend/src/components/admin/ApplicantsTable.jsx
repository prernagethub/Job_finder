import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "@/utils/backendApi";
import { toast } from "sonner";

const ApplicantsTable = () => {
  const shortLisingStatus = ["accepted", "rejected"];
  const { applicants } = useSelector((store) => store.application);
  const statusHandler = async (status, id) => {
    try {
      const res = await axios.put(
        `${APPLICATION_API_END_POINT}/status/${id}/update`,
        { status },
        { withCredentials: true }
      );
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to update status");
    }
  };
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent applied user</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>FullName</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicants?.applications && applicants.applications.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                No Applicants
              </TableCell>
            </TableRow>
          ) : (
            applicants?.applications?.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item?.applicant?.fullname ?? "-"}</TableCell>
                <TableCell>{item?.applicant?.email ?? "-"}</TableCell>
                <TableCell>{item?.applicant?.phoneNumber ?? "-"}</TableCell>
                <TableCell>
                  {item?.applicant?.profile?.resume ? (
                    <a
                      href={item.applicant.profile.resume}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500"
                    >
                      {item.applicant.profile.resumeOriginalName || "View"}
                    </a>
                  ) : (
                    "NA"
                  )}
                </TableCell>
                <TableCell>{item?.createdAt?.split("T")[0] ?? "-"}</TableCell>
                <TableCell className="text-right cursor-pointer">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-32">
                      {shortLisingStatus.map((status, i) => {
                        return (
                          <div
                            key={i}
                            className="flex w-fit items-center my-2 cursor-pointer"
                            onClick={() => statusHandler(status, item?._id)}
                          >
                            <span>{status}</span>
                          </div>
                        );
                      })}
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicantsTable;
