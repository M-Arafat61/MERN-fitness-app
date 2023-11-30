import { useRef } from "react";
import emailjs from "@emailjs/browser";
const ApplicationReject = ({ closeRejectModal }) => {
  const form = useRef();
  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vech8yn",
        "template_kozrcng",
        form.current,
        "_kM-9vZP3uvGmaWva"
      )
      .then(
        result => {
          console.log(result);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
    closeRejectModal();
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className='flex flex-col w-full space-y-2'>
        <label>Name</label>
        <input className='border' type='text' name='user_name' />
        <label>Email</label>
        <input className='border' type='email' name='user_email' />
        <label>Message</label>
        <textarea className='border' name='message' />
      </div>
      <div className='col-8 pt-3 mx-auto flex justify-between'>
        <button
          onClick={closeRejectModal}
          className='btn-sm btn bg-extended-teal text-white'
        >
          Cancel
        </button>

        <button type='submit' value='Send' className='btn-sm btn'>
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ApplicationReject;
