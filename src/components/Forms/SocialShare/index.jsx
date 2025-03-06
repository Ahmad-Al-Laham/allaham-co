import React from "react";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
function Share({ description }) {
  const url = window.location.href;
  const { t, i18n } = useTranslation();
  function ShareWebAPI() {
    if (navigator.share) {
      navigator
        .share({
          title: description,
          url: url,
        })
        .catch((err) => alert("Error Sharing: " + err));
    }
  }

  return (
    <div className="flex items-center justify-center gap-x-3">
      <p className="text-tiny font-medium">{t("shareOn")} </p>
      <div className="flex items-center justify-center gap-x-3">
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
          target="_blank"
        >
          <FaLinkedin className="text-primary" size={24} />
        </a>
        {/* <a
          href={`https://twitter.com/intent/tweet?url=${url}&text=${encodeURI(
            description
          )}`}
          target="_blank"
        >
          <FaTwitter className="text-primary" size={24} />
        </a> */}
        {/* <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          target="_blank"
        >
          <FaFacebook className="text-primary" size={24} />
        </a> */}
        {/* Email */}
        {/* <a
          href={`mailto:info@example.com?&subject=You+have+to+See+this!&cc=&bcc=&body=Check+out+this+site:${url}\n${encodeURI(
            description
          )}`}
          target="_blank"
        >
          <FaEnvelope className="text-primary" size={24} />
        </a> */}
        {/* Email */}
      </div>
    </div>
  );
}

export default Share;
