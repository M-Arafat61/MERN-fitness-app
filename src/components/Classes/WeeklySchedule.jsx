import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const WeeklySchedule = ({ classes }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handleDayClick = selectedDay => {
    const filteredClasses = classes.filter(cls =>
      cls.daysArray.includes(selectedDay)
    );

    return (
      <div>
        {filteredClasses.map((cls, idx) => (
          <div className='flex gap-5' key={cls._id}>
            <p>{idx + 1}.</p>
            <h3>{cls.title}</h3>
            <h3>{cls.difficulty}</h3>
            <p>Instructor: {cls.instructor}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className='p-4 mt-10 flex items-center justify-center'>
      <Tabs
        selectedIndex={selectedTab}
        onSelect={index => setSelectedTab(index)}
      >
        <TabList className='flex mb-5 border-0 text-xl font-semibold'>
          <div className='flex gap-2 md:gap-5'>
            {daysOfWeek.map((day, index) => (
              <Tab
                key={day}
                className={`cursor-pointer px-2 ${
                  selectedTab === index ? "border-b-2 border-black" : ""
                }`}
              >
                {day}
              </Tab>
            ))}
          </div>
        </TabList>

        {daysOfWeek.map((day, index) => (
          <TabPanel key={index}>{handleDayClick(day)}</TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default WeeklySchedule;
