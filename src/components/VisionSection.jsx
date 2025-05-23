import React from "react";

const VisionSection = () => {
  const stats = [
    {
      label: "Total paid out",
      value: "1015",
      bgColor: "bg-blue-600",
    },
    {
      label: "Registered users",
      value: "6902",
      bgColor: "bg-purple-500",
    },
    {
      label: "Completed payouts",
      value: "1118",
      bgColor: "bg-black",
    },
  ];

  return (
    <section className="text-center py-12 px-4">
      <h2 className="text-4xl font-bold mb-4">Our vision</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        FreeLanceTaskr helps people make money online by offering simple and easy ways to earn.
        Our platform gives everyone access to a wide variety of small tasks,
        allowing users to earn extra income from anywhere. With no special skills needed,
        JumpTask makes it possible for anyone to start earning and be part of the online economy.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.bgColor} text-white rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center h-48`}
          >
            <p className="text-lg font-semibold mb-2">{stat.label}</p>
            <p className="text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisionSection;
