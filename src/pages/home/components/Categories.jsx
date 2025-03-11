import React,{useState , useEffect} from 'react'
import { API_BASE_URL } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loader from "../../../components/UI/Loader";
import { useGetActiveCategoriesQuery } from '../../../redux/categories/categorySlice';





const Categories = () => {
    const{data , isSucces , isLoading , isFetching , isError} = useGetActiveCategoriesQuery()
    const navigate = useNavigate()
    const {i18n , t} = useTranslation()
  return isLoading || isFetching ? (
    <div className="py-44 flex justify-center items-center relative">
      <Loader />
    </div>
  ): isError ?(
    <div className=" py-44 flex justify-center itsems-center text-center">
    <p className="text-big font-semibold">{t("errorMsg")}</p>
  </div>
  ):(
    isSucces &&(
        <div>
            {data.ids.map((item , index) =>{
                return (
                <img
                    src={API_BASE_URL + data.entities[item].images[0]?.url}
                    className="!h-full !w-full object-center object-cover"
                  />)
            })}
                                  
        </div>
    )
  )
}

export default Categories
