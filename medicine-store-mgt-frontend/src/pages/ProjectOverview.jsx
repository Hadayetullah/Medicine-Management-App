import React from "react";
import { overviewData } from "../components/projectOverview/overviewData";

const ProjectOverview = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold mb-5 text-center">
        Project Overview : Medicine Management Application
      </h1>

      {overviewData.map((item, index) => {
        return (
          <div key={index} className="w-full">
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>

            {item.description && (
              <p className="text-md sm:text-lg text-justify mb-6">
                {item.description}
              </p>
            )}

            <ul
              className="pl-[15px] sm:pl-[25px] mb-5"
              style={{
                listStyle: `${index === 1 ? "dise" : "initial"}`,
              }}
            >
              {item.mainListItem &&
                item.mainListItem.map((mainListItem, mainListItemIndex) => {
                  if (
                    mainListItem.leadingListTitle &&
                    mainListItem.leadingListDescription
                  ) {
                    return (
                      <li key={mainListItemIndex}>
                        <h4>
                          <span className="font-semibold text-lg">
                            {mainListItem.leadingListTitle}:
                          </span>{" "}
                          {mainListItem.leadingListDescription}
                        </h4>

                        <ul
                          className="pl-[15px] sm:pl-[25px] mb-2"
                          style={{
                            listStyle: "initial",
                          }}
                        >
                          {mainListItem.leadinglistItem &&
                            mainListItem.leadinglistItem.map(
                              (individualItem, individualIndex) => {
                                if (
                                  individualItem.itemTitle &&
                                  individualItem.itemDescription
                                ) {
                                  return (
                                    <li
                                      key={individualIndex}
                                      className="text-md sm:text-lg flex flex-col sm:flex-row"
                                    >
                                      <h6 className="font-semibold mr-2">
                                        {individualItem.itemTitle}:
                                      </h6>
                                      {individualItem.itemDescription}
                                    </li>
                                  );
                                } else {
                                  return (
                                    <li key={individualIndex}>
                                      {individualItem.itemTitle}
                                      {individualItem.itemDescription}
                                    </li>
                                  );
                                }
                              }
                            )}
                        </ul>
                      </li>
                    );
                  } else {
                    return (
                      <li key={mainListItemIndex}>
                        <h4>
                          <span className="font-semibold text-lg">
                            {mainListItem.leadingListTitle}
                          </span>{" "}
                          {mainListItem.leadingListDescription}
                        </h4>

                        <ul
                          className="pl-[15px] sm:pl-[25px] mb-2"
                          style={{
                            listStyle: "initial",
                          }}
                        >
                          {mainListItem.leadinglistItem &&
                            mainListItem.leadinglistItem.map(
                              (individualItem, individualIndex) => {
                                if (
                                  individualItem.itemTitle &&
                                  individualItem.itemDescription
                                ) {
                                  return (
                                    <li
                                      key={individualIndex}
                                      className="text-md sm:text-lg flex flex-col sm:flex-row"
                                    >
                                      <h6 className="font-semibold mr-2">
                                        {individualItem.itemTitle}:
                                      </h6>
                                      {individualItem.itemDescription}
                                    </li>
                                  );
                                } else {
                                  return (
                                    <li key={individualIndex}>
                                      {individualItem.itemTitle}
                                      {individualItem.itemDescription}
                                    </li>
                                  );
                                }
                              }
                            )}
                        </ul>
                      </li>
                    );
                  }
                })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectOverview;
