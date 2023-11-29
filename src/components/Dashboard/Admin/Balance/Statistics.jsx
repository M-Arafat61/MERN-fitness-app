import { Icon } from "@iconify/react";

const Statistics = ({
  totalPayment,
  totalSlotBookingFee,
  totalRemainingBalance,
}) => {
  return (
    <div>
      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className='flex items-center rounded-md overflow-hidden stat place-items-center bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]'>
          <Icon className='text-3xl' icon='streamline:bag-dollar'></Icon>
          <div>
            <div className='text-2xl font-bold mb-2'>Total Payment</div>
            <div className='stat-value'>${totalPayment}</div>
          </div>
        </div>
        <div className='flex items-center rounded-md overflow-hidden stat place-items-center bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]'>
          <Icon className='text-3xl' icon='fa6-solid:users-line'></Icon>
          <div>
            <div className='text-2xl font-bold mb-2'>
              Total Slot Booking Amount
            </div>
            <div className='stat-value'>${totalSlotBookingFee}</div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center mt-5 rounded-md overflow-hidden stat place-items-center bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]'>
        <Icon className='text-3xl' icon='fa6-solid:users-line'></Icon>
        <div>
          <div className='text-2xl font-bold mb-2'>Total Remaining Balance</div>
          <div className='stat-value'>${totalRemainingBalance}</div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
