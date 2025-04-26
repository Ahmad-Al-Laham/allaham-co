import contact from "../../../assets/images/home/contact.png";
import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";
import Button from "../../../components/UI/Button";
import { useAddFeedbackMutation } from "../../../redux/feedback/feedbackSlice";
import { MdSend } from "react-icons/md";

import CustomInput from "../../../components/Forms/CustomInput";
import useForm from "../../../hooks/useForm";
import { useDispatch } from "react-redux";
import { showMessage } from "../../../redux/messageAction.slice";
const defaultFormState = {
  fullName: "",
  email: "",
  message: "",
  subject: "",
  phoneNumber: "",
};

const ContactForm = () => {
  const {
    disabled,
    errors,
    setErrors,
    setValues,
    handleSubmit,
    handleChange,
    values,
  } = useForm(submit, defaultFormState);
  const [addFeedback, { isLoading, isSuccess, isError }] =
    useAddFeedbackMutation();
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isSuccess) {
      dispatch(
        showMessage({
          message: "Thank You For Your Feedback",
          variant: "success",
        })
      );
    }
    if (isError) {
      showMessage({
        message: "Somthing went wrong, please try agian!",
        variant: "error",
      });
    }
  }, [isError, isSuccess]);
  function submit(e) {
    addFeedback({ form: values });
    setValues(defaultFormState);
  }
  return (
    <div className="flex justify-center my-[10%] "  dir={i18n.language == "en" ? "ltr" : "rtl"}>
      <div
        className=" h-[120vh]  bg-cover bg-no-repeat w-[80%] rounded-md rounded-t-md "
        style={{
          backgroundImage: `url(${contact})`,
        }}
      >
        <div className="bg-gradient-to-b from-primary/90 ">
        <div className="p-[5%] ">
          <div className="lg:text-[70px] med:text-huge sm:text-bigger text-big  font-bold text-white ">{t("sendMessage")}</div>
          <div className="lg:text-bigger med:text-big sm:text-med text-small font-bold text-white ">
            {t("contactSlogan")}
          </div>
        </div>
        <div className="col-span-2  flex flex-col justify-center p-0.5 bg-gradiantBorder rounded-md">
          <div className=" rounded-md w-full p-10 space-y-3">
            <div className="flex gap-x-2 rounded">
              <CustomInput
                placeholder={t("fullName")}
                type={"text"}
                name={"fullName"}
                onChange={handleChange}
                value={values.fullName}
                error={errors?.fullName}
                containerStyle={"rounded-2xl bg-white/60 text-small text-white"}
              />

            </div>
            <div className="flex flex-row gap-x-2 mt-2">
              <CustomInput
                placeholder={t("email")}
                type={"email"}
                name={"email"}
                onChange={handleChange}
                value={values.email}
                error={errors?.email}
                containerStyle={"rounded-2xl bg-white/60 text-small text-white"}
              />

            </div>
            <div className="flex flex-row gap-x-2 mt-2">
              <CustomInput
                placeholder={t("phoneNumber")}
                type={"email"}
                name={"email"}
                onChange={handleChange}
                value={values.email}
                error={errors?.email}
                containerStyle={"rounded-2xl bg-white/60 text-small text-white"}
              />

            </div>
            <CustomInput
              // inputLabel={t("message")}
              placeholder={t("message")}
              name="message"
              value={values.message}
              onChange={handleChange}
              textArea
              textAreaRows={5}
              error={errors?.message}
              containerStyle={"rounded-2xl bg-white/60 text-small text-white"}
            />
            <div className="">
            <Button
              bgColor={"!bg-primary"}
              text={isLoading ? t("sending") : t("send")}
              customStyle={`font-semibold group self-end disabled:bg- !rounded-md ${
                isLoading && "animate-bounce"
              }`}
              textColor={"text-white disabled:text-fifth text-med"}
              borderRadius={2}
              disabled={disabled}
              w={"210px"}
              h={"50px"}
              onClick={handleSubmit}
              icon={
                !isLoading && (
                  <MdSend
                    className={`${
                      i18n.language == "en"
                        ? "group-hover:translate-x-[50%]"
                        : "group-hover:-translate-x-[50%]"
                    } transition-all duration-500 ${
                      i18n.language == "ar" && "rotate-180"
                    } `}
                    size={25}
                  />
                  
                )
              }
            />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactForm;
