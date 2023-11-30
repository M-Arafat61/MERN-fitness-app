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
          <div
            className='flex flex-col gap-2 border px-5 py-2 mb-5 rounded-xl '
            key={cls._id}
          >
            <p>{idx + 1}.</p>
            <h3 className='text-xl font-medium'>{cls.title}</h3>
            <h3 className='text-extended-teal font-medium uppercase text-base tracking-tight'>
              {cls.difficulty}
            </h3>
            <p className='italic text-ex'>Instructor: {cls.instructor}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className='text-3xl font-bold text-center mt-10 '>
        Weekly Schedule
      </div>
      <div className='p-4 flex items-center justify-center mt-5'>
        <Tabs
          selectedIndex={selectedTab}
          onSelect={index => setSelectedTab(index)}
        >
          <TabList className='flex items-center justify-center mb-5 border-0 text-xl font-semibold'>
            <div className='flex flex-col md:flex-row  gap-5'>
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

          <div className='text-xl'>
            {daysOfWeek.map((day, index) => (
              <TabPanel key={index}>{handleDayClick(day)}</TabPanel>
            ))}
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default WeeklySchedule;
