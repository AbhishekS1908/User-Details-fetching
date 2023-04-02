import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginImg from "../assets/job-bg.jpg";
import { updateAPI } from "../API/listAPI";

import { ToastContainer, toast } from "react-toastify";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const InfoPage = () => {
  const navigateEnd = useNavigate();
  const [isChecked, setIsChecked] = useState(true);
  const [loading, setLoading] = useState(false);
  const [job, setJob] = useState({ jobTitle: "" });

  const check = (e) => {
    setIsChecked(e.target.checked);
    console.log("True", isChecked);
  };

  const submit = () => {
    setLoading(true);

    updateAPI(job)
      .then(function (response) {
        console.log("response is", response);
        setLoading(false);

        if (response?.data?.message === "Done") {
          toast("Data saved Successful!", {
            type: "success",
            position: "top-right",
            autoClose: 2000,
            theme: "colored",
          });
          console.log("success");
          navigateEnd("/Congratulations");
        } else if (response?.data?.success === false) {
          toast("Please fill all the fields", {
            type: "error",
            position: "top-right",
            autoClose: 2000,
            theme: "colored",
          });
        } else if (isChecked === false) {
          toast("Please fill the checkbox", {
            type: "error",
            position: "top-right",
            autoClose: 2000,
            theme: "colored",
          });
        }
      })
      .catch(function (error) {
        setLoading(false);
        toast("Something went wrong!", {
          type: "error",
          position: "top-right",
          autoClose: 2000,
          theme: "colored",
        });
        console.log(error);
      });
  };
  const previousPage = () => {
    navigateEnd("/Login");
  };

  return (
    <>
      <div>
        <div className="grid grid-cols-2">
          <div className="flex">
            <img className="h-screen scale-x-150" src={LoginImg} alt="" />
            <div className="absolute top-0 left-0 h-1/2 w-2/5 flex flex-col justify-center items-center">
              <p className="md:text-white md:text-5xl md:font-bold md:pt-12 md:w-11/12 md:ml-12">
                Let's join with us !
              </p>
              <p className="md:mt-12 md:text-white md:text-lg md:w-11/12 md:ml-12 md:font-medium">
                Lorem Ipsum is simply dummy text of printing and typesetting
                industry.
              </p>
              <div className="container mx-auto px-4 translate-y-96 flex flex-row">
                <p className="text-white text-left translate-y-8 ml-2 text-sm">
                  Copyright © 2022 Octilus Technologies
                </p>
                <div className="flex flex-row translate-y-8 scale-75 translate-x-44">
                  <a
                    href="https://www.facebook.com"
                    className="text-white mx-3"
                  >
                    <FaFacebookF className="text-2xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    className="text-white mx-3"
                  >
                    <FaLinkedinIn className="text-2xl" />
                  </a>
                  <a href="https://twitter.com" className="text-white mx-3">
                    <FaTwitter className="text-2xl" />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    className="text-white mx-3"
                  >
                    <FaInstagram className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="pl-8 w-screen">
              <button
                className="pt-8 text-gray-500 text-xl mt-4"
                onClick={previousPage}
              >
                {"<-- "}PREVIOUS STEP
              </button>
              <div>
                <h3 className="mb-4 font-bold text-2xl py-6 text-gray-900">
                  Select Job Position
                </h3>
                <ul className="w-48 text-md py-8">
                  <li className="w-full">
                    <div className="flex items-center">
                      <input
                        id="list-radio-license"
                        type="radio"
                        name="list-radio"
                        className="w-4 h-4"
                        value="Frontend Developer"
                        onChange={(e) =>
                          setJob({
                            ...job,
                            jobTitle: e.target.value,
                          })
                        }
                      />
                      <label
                        htmlFor="list-radio-license"
                        className="w-full py-3 ml-4"
                      >
                        Frontend Developer
                      </label>
                    </div>
                  </li>
                  <li className="w-full">
                    <div className="flex items-center">
                      <input
                        id="list-radio-license"
                        type="radio"
                        name=""
                        className="w-4 h-4"
                        value="Wordpress Developer"
                        onChange={(e) =>
                          setJob({
                            ...job,
                            jobTitle: e.target.value,
                          })
                        }
                      />
                      <label
                        htmlFor="list-radio-license"
                        className="w-full py-3 ml-4"
                      >
                        Wordpress Developer
                      </label>
                    </div>
                  </li>
                  <li className="w-full">
                    <div className="flex items-center">
                      <input
                        id="list-radio-license"
                        type="radio"
                        name="list-radio"
                        className="w-4 h-4"
                        value="UI/UX Designer"
                        onChange={(e) =>
                          setJob({
                            ...job,
                            jobTitle: e.target.value,
                          })
                        }
                      />
                      <label
                        htmlFor="list-radio-license"
                        className="w-full py-3 ml-4"
                      >
                        UI/UX Designer
                      </label>
                    </div>
                  </li>
                  <li className="w-full">
                    <div className="flex items-center">
                      <input
                        id="list-radio-license"
                        type="radio"
                        name="list-radio"
                        className="w-4 h-4"
                        value="Support Engineer"
                        onChange={(e) =>
                          setJob({
                            ...job,
                            jobTitle: e.target.value,
                          })
                        }
                      />
                      <label
                        htmlFor="list-radio-license"
                        className="w-full py-3 ml-4"
                      >
                        Support Engineer
                      </label>
                    </div>
                  </li>
                  <li className="w-full">
                    <div className="flex items-center">
                      <input
                        id="list-radio-license"
                        type="radio"
                        value="Graphic Designer"
                        onChange={(e) =>
                          setJob({
                            ...job,
                            jobTitle: e.target.value,
                          })
                        }
                        name="list-radio"
                        className="w-4 h-4"
                      />
                      <label
                        htmlFor="list-radio-license"
                        className="w-full py-3 ml-4"
                      >
                        Graphic Designer
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-row items-center">
                <input
                  type="checkbox"
                  className="w-3 h-3 opacity-40 text-[]#2bb37c"
                  checked={isChecked}
                  onChange={check}
                />
                <p className="pl-3">
                  I Accept The{" "}
                  <a href="//" className="text-[#2bb37c]">
                    Term of Conditions
                  </a>{" "}
                  And{" "}
                  <a href="//" className="text-[#2bb37c]">
                    Privacy Policy
                  </a>
                  .<br />{" "}
                </p>
                {isChecked ? (
                  <p></p>
                ) : (
                  <p className="text-[#2bb37c] flex flex-col text-xl">** </p>
                )}
              </div>
              <div className="border-2 w-1/4 border-[#2bb37c] rounded-md mt-6 p-5 bg-[#2bb37c]">
                <button
                  className="text-white items-center justify-center pl-10 text-lg"
                  onClick={submit}
                >
                  {loading ? (
                    <svg
                      className="inline mr-2 w-8 h-8  animate-spin text-white fill-[#95d7bd]"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  ) : (
                    "SUBMIT"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default InfoPage;
