import React, { CSSProperties, FC } from "react";


const AdminPage: FC = () => {


  return (

    <div style={AdminPageStyle} id="AdminPage">

      <h1> Admin Page </h1> {/* product cards here */}
    </div>

  );
}

export default AdminPage;





//normal style here

export const AdminPageStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh'
    }