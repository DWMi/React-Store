import React, { CSSProperties, FC, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Product } from "../../data/productList";
import AdminComponent from "./AdminComponent";
import AdminEditModal from "./modal/AdminEditModal";

interface Props {
  product: Product
}


const AdminPage: FC<Props> = (props) => {

  const [openModal, setOpenModal] = useState(false)


  return (

    <div style={AdminPageStyle} id="AdminPage">


      <AdminComponent product={props.product} />


      {openModal && <AdminEditModal product={props.product} setOpenModal={function (value: boolean): void {
      } } showBtn={false} />}


    </div>

  );
}

export default AdminPage;





//normal style here

export const AdminPageStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  minHeight: '200vh',
  width: '100%',
  overflowX: 'hidden'
}

