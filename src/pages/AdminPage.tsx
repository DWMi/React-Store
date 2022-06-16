import React, { CSSProperties, FC } from "react";
import AdminComponent from "../components/admin bar components/AdminBar";


const AdminPage: FC = () => {


  return (

    <div style={AdminPageStyle} id="AdminPage">



    <AdminComponent/>


    </div>

  );
}

export default AdminPage;





//normal style here

export const AdminPageStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    minHeight: '100vh'
    }

