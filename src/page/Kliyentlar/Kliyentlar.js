import React, { useState } from "react";
import "./Kliyentlar.css";
import kliyentData from "./KliyentlarData.js";
import { kliyentApi, useAddKliyentMutation, useDeleteKliyentMutation, useKliyentlarQuery, useUpdateKliyentMutation } from "../../BackendApi/apiPages/kliyentApi";
import { useNavigate } from "react-router-dom";

function Kliyentlar() {

  // const {kliyentDataApi} =

  // ------- state ------ 
  const [name , setName ] = useState();
  const [phone , setPhone ] = useState();
  const [ xabar_berish , setXabar_berish ] = useState();
  const [ oxirgi_product , setOxirgi_product ] = useState();



   // ------- api ------- 
  const { kliyentApi, error, isLoading, isSuccess } = useKliyentlarQuery();
  const [addKliyent, result] = useAddKliyentMutation();
  const [updateKliyent] = useUpdateKliyentMutation();
  const [deleteKliyent] = useDeleteKliyentMutation();

  const handleUpdateKliyent = (e) => {
    e.preventDefault();
    const kliyentApi = {
      name,
      phone,
      xabar_berish,
      oxirgi_product
    };
    updateKliyent(kliyentApi);
  };
  console.log(kliyentApi);

  return (
    <div className="kliyentCard">
       <button>Kliyent qo`shish</button>
      <div className="kliyentBox">
        {isSuccess && kliyentApi.map((element, value) => {
          return (
            <div className="kliyentTitle">
              <img src={element.img} alt="" />
              <h3 className="kliyentIsm">{element.name}</h3>
              <h4 className="kliyentPhone">{element.phone}</h4>
              <div className="kliyentXrd">
                <h5>{element.xabar_berish}</h5> <span>|</span>
                <h5>{element. oxirgi_product}</h5>
              </div>
              <button className="kliyentEdit" type="button" onClick={handleUpdateKliyent()}>
                Tahrirlash
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Kliyentlar;
