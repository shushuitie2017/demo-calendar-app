import { getReservations } from '../api/getReservations';


export const ReservationsList = () => {
    const deleteUserMutation = getReservations();
    return (
        <div>
            Delete User
        </div>
    );
};