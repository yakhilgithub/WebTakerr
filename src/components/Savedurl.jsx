import React, { useState, useEffect } from "react";

import { format } from "date-fns";

const SavedUrls = () => {
  const [savedUrls, setSavedUrls] = useState([]);

  useEffect(() => {
    const fetchSavedUrls = async () => {
      const dummyData = [
        {
          id: 1,
          url: "https://example.com",
          keywords: ["example", "website"],
          createdAt: new Date(),
        },
        {
          id: 2,
          url: "https://another.com",
          keywords: ["another", "site"],
          createdAt: new Date(),
        },
      ];
      setSavedUrls(dummyData);
    };

    fetchSavedUrls();
  }, []);

  const handleDelete = (id) => {
    const updatedUrls = savedUrls.filter((url) => url.id !== id);
    setSavedUrls(updatedUrls);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {savedUrls.map((url) => (
        <div
          key={url.id}
          className="max-w-sm mx-4 my-4 bg-white rounded-lg overflow-hidden shadow-md"
        >
          <div className="p-4">
            <p className="text-xl font-bold mb-2">{url.url}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {url.keywords.map((keyword, index) => (
                <div
                  key={index}
                  className="bg-gray-200 px-2 py-1 rounded-md text-sm"
                >
                  {keyword}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              {format(url.createdAt, "MMMM dd, yyyy hh:mm a")}
            </p>
          </div>
          <div className="flex justify-end p-4">
            <button
              className="text-red-500 hover:text-red-700 focus:outline-none"
              onClick={() => handleDelete(url.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavedUrls;
