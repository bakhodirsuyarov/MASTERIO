import React, { useState } from "react";
import "./Kliyentlar.css";
// import kliyentData from "./KliyentlarData.js";
import {
  kliyentApi,
  useAddKliyentMutation,
  useDeleteKliyentMutation,
  useKliyentQuery,
  useKliyentlarQuery,
  useUpdateKliyentMutation,
} from "../../BackendApi/apiPages/kliyentApi";
import { useNavigate } from "react-router-dom";

function Kliyentlar() {
  // ------- state ------
  // const [name , setName ] = useState();
  // const [phone , setPhone ] = useState();
  // const [ xabar_berish , setXabar_berish ] = useState();
  // const [ oxirgi_product , setOxirgi_product ] = useState();

  // ------- api -------
  const { data, error, isLoading, isSuccess } = useKliyentQuery();
  // const [addKliyent, result] = useAddKliyentMutation();
  // const [updateKliyent] = useUpdateKliyentMutation();
  // const [deleteKliyent] = useDeleteKliyentMutation();

  console.log(data);
  return (
    <div className="kliyentCard">
      <div className="kliyentBox">
        {isSuccess &&
          data?.result.map((item, index) => (
            <div className="kliyentTitle" key={index}>
              <img src={item.img} alt="" />
              <h4 className="kliyentIsm">{item.phone}</h4>
              <h3 className="kliyentPhone">{item.name}</h3>
              <div className="kliyentXrd">
                <h5>{item.xabar_berish}</h5> <span>|</span>
                <h5>{item.oxirgi_product}</h5>
              </div>
              <button className="kliyentEdit" type="button">
                Tahrirlash
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Kliyentlar;
