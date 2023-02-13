import React from "react";
import { Label, Input, Select, Textarea } from "@windmill/react-ui";
import SectionTitle from "../components/Typography/SectionTitle";

const StatusUpdate = () => {
  return (
    <>
      <div className="apply-status-container flex items-center p-6 my-[5rem] bg-gray-50 dark:bg-gray-900">
        <div className="apply-status flex-1 h-full mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-800">
          <div className="flex flex-col items-center overflow-y-auto">
            <h1 className="apply-title flex items-center mb-1 mt-1 pl-2 w-full h-12 text-3xl font-semibold text-gray-600 dark:text-gray-300">
              Status Update on 23/11/2022
            </h1>
            <main className="flex flex-col items-start h-full my-[7rem] w-full justify-center p-6 sm:p-8">
              <div className="w-full">
                <div className="flex flex-col ">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                      In Time:
                    </h2>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                      Out Time:
                    </h2>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                      Total Hours:
                    </h2>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div className="flex flex-col mt-6">
                  <div>
                    <h2 className="text-3xl font-semibold text-gray-600 dark:text-gray-300">
                      Please Find Project Billing Hours:
                    </h2>
                  </div>
                  <hr className="mb-3" />

                  <div>
                    <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                      1) Project Name: <span className="text-base font-normal">UPilot</span>
                    </h2>

                    <h2 className="ml-5 text-lg font-semibold text-gray-600 dark:text-gray-300">
                      Client Billing: <span className="text-base font-normal">08:00</span>
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col mt-6">
                  <div>
                    <h2 className="text-3xl font-semibold text-gray-600 dark:text-gray-300">
                      Please Find My Status Update:
                    </h2>
                  </div>
                  <hr className="mb-3" />

                  <div>
                    <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                      1) Project Name: <span className="text-base font-normal">UPilot</span>
                    </h2>

                    <h2 className="ml-5 text-lg font-semibold text-gray-600 dark:text-gray-300">
                      Task: <span className="text-base font-normal">Work on upilot</span>
                    </h2>

                    <h2 className="ml-5 text-lg font-semibold text-gray-600 dark:text-gray-300">
                      Working Hour: <span className="text-base font-normal">08:00</span>
                    </h2>

                    <h2 className="ml-5 text-lg font-semibold text-gray-600 dark:text-gray-300">
                      Status: <span className="text-base font-normal">Done</span>
                    </h2>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusUpdate;
