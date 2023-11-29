import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Modal from "react-modal";
import toast from "react-hot-toast";
Modal.setAppElement("#root");

const AppliedTrainer = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);

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

  return (
    <div className='mt-10'>
      <table className='table '>
        <thead className=' '>
          <tr className='text-lg'>
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

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <h2> {selectedApplication?.name} </h2>
        <h2> {selectedApplication?.email} </h2>
        {selectedApplication?.skills?.map(skill => (
          <p key={skill}>{skill}</p>
        ))}

        <div className='flex justify-between mt-2'>
          <button
            onClick={() => acceptApplication(selectedApplication)}
            className='btn-sm btn'
          >
            Accept
          </button>
          <button
            className='btn-sm btn bg-extended-teal text-white'
            onClick={closeModal}
          >
            close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AppliedTrainer;
