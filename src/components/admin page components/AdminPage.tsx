import React, { CSSProperties, FC, useState } from "react";
import AdminComponent from "./AdminComponent.tsx";
import AdminEditModal from "./modal/AdminEditModal";


const AdminPage: FC = () => {

  const[openModal, setOpenModal] = useState(false)


  return (

    <div style={AdminPageStyle} id="AdminPage">


    <AdminComponent/>

    
    {openModal && <AdminEditModal closeModal={setOpenModal}/>}


    </div>

  );
}

export default AdminPage;





//normal style here

export const AdminPageStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    minHeight: '200vh'
    }

