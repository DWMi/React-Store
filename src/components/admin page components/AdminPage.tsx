import React, { CSSProperties, FC, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Product } from "../../data/productList";
import AdminComponent from "./AdminComponent.tsx";
import AdminEditModal from "./modal/AdminEditModal";

interface Props {
  product: Product
}


const AdminPage: FC<Props> = (props) => {

  const [openModal, setOpenModal] = useState(false)


  return (

    <div style={AdminPageStyle} id="AdminPage">


      <AdminComponent/>


      {openModal && <AdminEditModal product={props.product} />}


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

