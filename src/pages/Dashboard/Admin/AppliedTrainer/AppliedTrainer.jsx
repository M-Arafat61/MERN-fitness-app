import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Modal from "react-modal";
import toast from "react-hot-toast";
import ApplicationReject from "./ApplicationReject";
Modal.setAppElement("#root");

const AppliedTrainer = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [rejectModalIsOpen, setRejectModalIsOpen] = useState(false);

  const axiosSecure = useAxiosSecure();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  function openModal(application) {
    setSelectedApplication(application);
    setIsOpen(true);
  }

  function closeModal() {
    setSelectedApplication(null);
    setIsOpen(false);
  }

  const { data: trainerApplications = [], refetch } = useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const res = await axiosSecure.get("/trainer-applications");
      return res.data;
    },
  });

  const acceptApplication = application => {
    axiosSecure
      .patch(`trainer-applications/admin/${application._id}`)
      .then(res => {
        console.log(res.data);
        if (res.data.success === true) {
          refetch();
          toast.success(`${selectedApplication.name} is Trainer Now!`);
        }
      });
  };

  const rejectApplication = application => {
    setSelectedApplication(application);
    setRejectModalIsOpen(true);
  };
  const closeRejectModal = () => {
    setSelectedApplication(null);
    setRejectModalIsOpen(false);
  };

  const formattedTime = time => {
    const [hours, minutes] = time.split(":");
    return `${hours}:${minutes}`;
  };

  return (
    <div className='mt-10 border border-extended-teal mr-2'>
      <table className='table '>
        <thead className=' '>
          <tr className='text-lg text-black'>
            <th></th>
            <th>Applicant Name</th>
            <th>Applicant Email</th>
            <th>Action</th>
          </tr>
        </thead>

        {trainerApplications.map((applications, index) => (
          <tbody key={applications._id}>
            <tr>
              <td>{index + 1}.</td>
              <td>{applications.name}</td>
              <td>{applications.email}</td>
              <td>
                <button onClick={() => openModal(applications)}>
                  <Icon className='text-2xl' icon='mdi:eye'></Icon>
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>

      <div className='w-3/4 mx-auto'>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel='Example Modal'
        >
          <h2 className='text-xl font-bold'> {selectedApplication?.name} </h2>
          <h2 className='mb-2'> {selectedApplication?.email} </h2>
          <p> Skills:</p>
          {selectedApplication?.skills?.map((skill, idx) => (
            <p key={skill}>
              {idx + 1}, {skill}
            </p>
          ))}
          <p className='mt-2'>
            Available slots: {selectedApplication?.availableSlots}
          </p>
          <p className='mt-2'>Time Slot of days:</p>
          {Object.entries(selectedApplication?.timeSlotOfDays || {}).map(
            ([day, slots]) => (
              <div key={day}>
                <h3>{day.charAt(0).toUpperCase() + day.slice(1)}</h3>
                {slots.map((slot, index) => (
                  <div key={index}>
                    <p>
                      Time: {formattedTime(slot.start)} -{" "}
                      {formattedTime(slot.end)}
                    </p>
                  </div>
                ))}
              </div>
            )
          )}
          <div className='flex justify-between gap-4 mt-2'>
            <button
              onClick={() => acceptApplication(selectedApplication)}
              className='btn-sm btn'
            >
              Accept
            </button>
            <button
              onClick={() => rejectApplication(selectedApplication)}
              className='btn-sm btn'
            >
              Reject
            </button>
            <button
              className='btn-sm btn bg-extended-teal text-white'
              onClick={closeModal}
            >
              close
            </button>
          </div>
        </Modal>
        <Modal
          isOpen={rejectModalIsOpen}
          onRequestClose={closeRejectModal}
          style={customStyles}
          contentLabel='Reject Modal'
        >
          <ApplicationReject closeRejectModal={closeRejectModal} />
        </Modal>
      </div>
    </div>
  );
};

export default AppliedTrainer;
