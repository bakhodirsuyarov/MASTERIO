import React from "react";
import { AiOutlineHome, AiOutlineDollar } from "react-icons/ai";
import { BsCartDash, BsCartPlus, BsTruck, BsTrash3, } from "react-icons/bs";
import { LiaStoreAltSolid, LiaWarehouseSolid, LiaMoneyCheckAltSolid, LiaHistorySolid } from "react-icons/lia";
import { TbCircleLetterM, TbBuildingWarehouse } from "react-icons/tb";
import { ImUserTie } from "react-icons/im";
import { FaRegUserCircle, FaShopify } from "react-icons/fa";
import { PiUsersThreeLight, PiWarehouseDuotone } from "react-icons/pi"

export  const direktorData = [
    // DIREKTOR PANEL MENU
   {
    title: "Bosh sahifa ",
    path: "/",
    icon: <AiOutlineHome/>
   },
   {
    title: "Tushumlar ",
    path: "/tushumlar",
    icon: <BsCartPlus/>
   },
   {
    title: "Harajatlar",
    path: "/harajatlar",
    icon: <BsCartDash/>
   },
   {
    title: "Xodimlar",
    path: "/xodimlarlogin",
    icon: <ImUserTie/>
   },
   {
    title: "Do’konlar",
    path: "/dokonlarlogin",
    icon: <LiaStoreAltSolid/>
   },
   {
    title: "Omborlar",
    path: "/omborlar",
    icon: <LiaWarehouseSolid/>
   },
   {
    title: "Maxsulotlar",
    path: "/mahsulotlar",
    icon: <TbCircleLetterM/>
   },
   {
    title: "Buyurtmalar",
    path: "/buyurtmalar",
    icon: <BsTruck/>
   },
   {
    title: "Kassa",
    path: "/kassa",
    icon: <LiaMoneyCheckAltSolid/>

   },
   {
    title: "Kliyentlar",
    path: "/kliyent",
    icon: <FaRegUserCircle/>
   },
   {
    title: "Valyutalar",
    path: "/valyutalar",
    icon: <AiOutlineDollar/>
   }
]

export const  magazinData = [
  //MAGAZIN PANEL MENU

  {
    mTitle: "Sotuv",
    path: "/sotuv",
    micon: <FaShopify/>
  },
  {
   mTitle: "Kliyent baza",
   path: "/kliyent_baza",
   micon: <PiUsersThreeLight/>
 },
 {
   mTitle: "Maxsulot qoldiqlari",
   path: "/qoldiqlar",
   micon: <BsTrash3/>
 },
 {
  mTitle: "Omborga buyurtmalar",
   path: "/omborgabuyurtmalar",
   micon: <PiWarehouseDuotone/>
 }
]


export const omborData = [
     // OMBOR PANEL MENU

  {
    oTitle: "Ombordagi maxsulotlar",
    path: "/ombormaxsulotlar",
    oicon: <TbBuildingWarehouse/>
  },
  {
    oTitle: "Buyurtmalar(ombor)",
    path: "/buyurtmalar-ombor",
    oicon: <BsTruck/>
  },
  {
    oTitle: "Maxsulotlar tarixi",
    path: "/maxsulotlartarixi",
    oicon: <LiaHistorySolid/>
  }
]