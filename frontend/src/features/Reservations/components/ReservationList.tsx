import { getReservations, postData } from '../api/getReservations';


export const ReservationsList = () => {
    const reservationsList = getReservations();
    const resFromPost = postData();
    return (
        <div>
            Delete User sample!!!
            {reservationsList}
            {resFromPost}
        </div>
    );
};