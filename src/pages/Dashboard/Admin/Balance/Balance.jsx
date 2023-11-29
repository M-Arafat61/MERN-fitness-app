import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Container from "../../../../components/Shared/Container/Container";
import Statistics from "../../../../components/Dashboard/Admin/Balance/Statistics";
import BalanceChart from "../../../../components/Dashboard/Admin/Balance/BalanceChart";

const Balance = () => {
  const axiosSecure = useAxiosSecure();

  const { data: slotBookings = [] } = useQuery({
    queryKey: ["slotBooking"],
    queryFn: async () => {
      const response = await axiosSecure.get("/trainer-bookings");
      return response.data;
    },
  });

  const { data: payments = [] } = useQuery({
    queryKey: ["payment"],
    queryFn: async () => {
      const response = await axiosSecure.get("/payments");
      return response.data;
    },
  });
  const { data: subsMembers = [] } = useQuery({
    queryKey: ["chartData"],
    queryFn: async () => {
      const response = await axiosSecure.get("/subs-members");
      return response.data;
    },
  });

  console.log(subsMembers);
  const totalSlotBookingFee = slotBookings.reduce((acc, booking) => {
    return acc + booking.package.fee;
  }, 0);
  const totalPayment = payments.reduce((acc, payment) => {
    return acc + parseInt(payment.salary);
  }, 0);

  const totalRemainingBalance = totalSlotBookingFee - totalPayment;

  return (
    <Container>
      <Statistics
        totalPayment={totalPayment}
        totalSlotBookingFee={totalSlotBookingFee}
        totalRemainingBalance={totalRemainingBalance}
      />
      <BalanceChart chartData={subsMembers} />
    </Container>
  );
};

export default Balance;
