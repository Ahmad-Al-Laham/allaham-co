import React, { useState } from "react";
import { useGetActiveCategoriesQuery } from "../../../redux/categories/categorySlice";
import { useGetActiveTextureQuery } from "../../../redux/textures/textureSlice";
import { useGetActiveBrandsQuery } from "../../../redux/brands/brandSlice";
import {
  types as ProductTypes,
} from "../../../constants/index";
import { useLocation, useNavigate, useParams } from "react-router-dom";
// import Loader from "../../../components/UI/Loader";
import { useTranslation } from "react-i18next";
// import Select from "../../../components/Forms/Select/Select";
import Button from "../../../components/UI/Button";
import CustomInput from "../../../components/Forms/CustomInput";
import { MdExpandMore } from "react-icons/md";
import _ from "lodash";
import { hideModal } from "../../../redux/modal.slice";
import { useDispatch } from "react-redux";
import Loader from "../../../components/UI/Loader";

const defaultFilterState = {
    categoryId: "",
    type: "",
    brandId:"",
    textureId:"",

}

const Filter = (modal) => {
    const {
        category,
        type,
        brand,
        texture,
    } = useParams();
    const dispatch =useDispatch();
    const {i18n , t } = useTranslation();
    const [form , setForm] = useState({
        ...defaultFilterState,
        categoryId:
        category == "all" || typeof category !== "string" ? "" : category,
        type: type == "all" || typeof type !== "string" ? "" : type,
        brandId: 
        brand == "all" || typeof brand !== "string" ? "" : brand,
        textureId : 
        texture == "all" || typeof texture !== "string" ?"" : texture,
    }) 

    const location = useLocation();
    const navigate = useNavigate();
    const {
        data: categories,
        isSuccess: categoriesIsSuccess,
        isLoading: categoriesIsLoading,
        isFetching: categoriesIsFetching,
        isError: categoriesIsError,
      } = useGetActiveCategoriesQuery();
    const {
        data: Brands,
        isSuccess: BrandsIsSuccess,
        isLoading: BrandsIsLoading,
        isFetching: BrandsIsFetching,
        isError: BrandsIsError,
      } = useGetActiveBrandsQuery();
    const {
        data: textures,
        isSuccess: texturesIsSuccess,
        isLoading: texturesIsLoading,
        isFetching: texturesIsFetching,
        isError: texturesIsError,
      } = useGetActiveTextureQuery();


  return categoriesIsLoading||
  categoriesIsFetching||
  BrandsIsLoading||
  BrandsIsFetching||
  texturesIsLoading||
  texturesIsFetching ? 
   (
    <div className="py-24 flex justify-center items-center relative">
      {/* <Loader /> */}
    </div>

  ): categoriesIsError ? (
    <div className=" py-24 flex justify-center items-center">
      <p className="text-med font-semibold">{t("errorMsg")}</p>
    </div>
  ) : (
    <div
      dir={i18n.language == "en" ? "ltr" : "rtl"}
      className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 justify-center items-center w-full gap-7 px-[5%] mt-6"
    >
        <CustomInput
        value={
          ProductTypes.find((x) => x.value == form.type)?.lng[i18n.language]
        }
        name={"type"}
        inputType="text"
        placeholder={t("type")}
        translatedOptions={ProductTypes}
        setState={setForm}
        state={form}
        reverseIcon
        icon={<MdExpandMore className="text-smaller" />}
        select
        readOnly
        containerStyle={"rounded-full !shadow-xl !drop-shadow-xl "}
        
      />
        <CustomInput
        value={
          i18n.language === "en"
            ? categories.entities[form.categoryId]?.nameEn ?? ""
            : categories.entities[form.categoryId]?.nameAr ?? ""
        }
        name={"categoryId"}
        inputType="text"
        placeholder={t("category")}
        AdapterOptions={categories}
        AdapterOptionName={i18n.language == "en" ? "nameEn" : "nameAr"}
        setState={setForm}
        state={form}
        reverseIcon
        icon={<MdExpandMore className="text-smaller" />}
        select
        readOnly
        containerStyle={"rounded-full !shadow-xl !drop-shadow-xl"}
      />
        <CustomInput
        value={
          i18n.language === "en"
            ? Brands.entities[form.categoryId]?.nameEn ?? ""
            : Brands.entities[form.categoryId]?.nameAr ?? ""
        }
        name={"brandId"}
        inputType="text"
        placeholder={t("Brands")}
        AdapterOptions={Brands}
        AdapterOptionName={i18n.language == "en" ? "nameEn" : "nameAr"}
        setState={setForm}
        state={form}
        reverseIcon
        icon={<MdExpandMore className="text-smaller" />}
        select
        readOnly
        containerStyle={"rounded-full !shadow-xl !drop-shadow-xl"}
        
      />
        <CustomInput
        value={
          i18n.language === "en"
            ? textures.entities[form.categoryId]?.nameEn ?? ""
            : textures.entities[form.categoryId]?.nameAr ?? ""
        }
        name={"textureId"}
        inputType="text"
        placeholder={t("Textures")}
        AdapterOptions={textures}
        AdapterOptionName={i18n.language == "en" ? "nameEn" : "nameAr"}
        setState={setForm}
        state={form}
        reverseIcon
        icon={<MdExpandMore className="text-smaller" />}
        select
        readOnly
        containerStyle={"rounded-full !shadow-xl !drop-shadow-xl bg-secondary"}
        
      />
      <div className="flex ">
        <div className="px-[20px]">
         <Button
          bgColor={"!bg-primary"}
          text={t("Filter")}
          customStyle={`font-regular group !shadow-xl !drop-shadow-xl`}
          textColor={"text-white text-[23px]"}
          borderRadius={"9999px"}
          w={"260px"}
          onClick={() => {
            const filterUrl = `${
              form.categoryId.length == 0 ? "all" : form.categoryId
            }/${form.brandId.length == 0 ? "all" : form.brandId}/${
              form.textureId.length == 0 ? "all" : form.textureId
            }/${
              form.type.length == 0 ? "all" : form.type
            }`;
            sessionStorage.setItem("filterUrl", filterUrl);
            navigate(`/products/${filterUrl}`);
            modal && dispatch(hideModal());
          }}
          disabled={_.isEqual(form, defaultFilterState)}
        />
        </div>
        <div>
                <Button
          bgColor={"!bg-primary"}
          text={t("Reset")}
          customStyle={`font-regular group !shadow-xl !drop-shadow-xl `}
          textColor={"text-white text-[23px]"}
          borderRadius={"9999px"}
          w={"260px"}
          onClick={() => {
            setForm(defaultFilterState);
            location.pathname !== "/products" && navigate("/products");
          }}
          disabled={_.isEqual(form, defaultFilterState)}
        />
        </div>
        </div>
    </div>
)}

export default Filter
