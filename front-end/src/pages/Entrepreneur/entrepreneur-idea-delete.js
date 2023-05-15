import { useEffect } from 'react';
import { useParams } from "react-router-dom";

const DeleteIdea = () => {

    const { id } = useParams();
        
    useEffect( () => {
        const deleteIdea = async () => {
        fetch("http://localhost:3000/api/productidea/" + id, {
            method: "DELETE",
        });
        };
        deleteIdea();
    }, [id]);
    //return ;
}

export default DeleteIdea
