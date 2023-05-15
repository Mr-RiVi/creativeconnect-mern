import { useEffect } from 'react';
import { useParams } from "react-router-dom";

const ProfileDetailDelete = () => {

    const { id } = useParams();
        
    useEffect( () => {
        const deleteIdea = async () => {
        fetch("http://localhost:3000/api/mentor/deleteMentor/" + id, {
            method: "DELETE",
        });
        };
        deleteIdea();
    }, [id]);
    //return ;
}

export default ProfileDetailDelete