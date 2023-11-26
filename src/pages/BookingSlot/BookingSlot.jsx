import { useParams } from "react-router-dom";

const BookingSlot = () => {
  const { day, index } = useParams();

  console.log(day, index);
};

export default BookingSlot;
