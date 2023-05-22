import axios from "axios";
import "../../assets/styles/deleteBox.css";
import { useNavigate } from "react-router-dom";

const INNOVATION_DELETE_URL =
  "http://localhost:3000/api/innovation/removeInnovation/";

const DeleteConfirmationModal = ({
  toggleDeleteConfirmation,
  innovationId,
}) => {
  const navigate = useNavigate();

  const handleConfirmDelete = async (e) => {
    // Perform the delete operation here
    try {
      // Call your delete API or perform any necessary actions to delete the innovation
      await axios.delete(INNOVATION_DELETE_URL + innovationId);
      // Handle success or show a success message
      console.log("Innovation deleted successfully");
    } catch (error) {
      // Handle error or show an error message
      console.log("Error deleting innovation: ", error);
    }

    toggleDeleteConfirmation(); // Close the confirmation dialog
    navigate("../innovation-vault");
  };
  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-content">
          <h2 className="message">
            Are you sure you want to delete this innovation?
          </h2>
          <div className="button-container">
            <button
              className="confirmation-button"
              onClick={handleConfirmDelete}
            >
              OK
            </button>
            <button
              className="confirmation-button"
              onClick={toggleDeleteConfirmation}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
