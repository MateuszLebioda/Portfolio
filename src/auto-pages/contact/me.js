import { navigate } from "gatsby";
import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { generateLink, translate } from "../../language/languageUtils";
import { LanguageContext } from "../../language/languageContext";
import OutlineButton from "../../components/button/outlineButton";
import UnderlineInput from "../../components/input/underlineInput";
import UnderlineTextArea from "../../components/input/underlineTextArea";
import { Seo } from "../../components/wrappers/seo";

const ContactMeStyle = styled.div`
  min-height: 100vh;

  .contact-me-card {
    position: relative;

    background-color: white;
    min-width: 750px;
    border: 1px solid black;
    margin: auto;
    box-shadow: 10px -10px 48px 5px rgba(66, 68, 90, 1);
    border: 3px solid black;
    border-radius: 1px;
  }

  .contact-me-card-background {
    z-index: -1;
    filter: blur(4px);
    opacity: 0.15;
  }

  .contact-me-button-container {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
    margin-bottom: 25px;
  }

  @media only screen and (max-width: 860px) {
    .contact-me-card {
      min-width: calc(100vw - 5px);
      min-height: 100vh;
      background-color: transparent;
    }

    h1 {
      width: 75%;
      margin-left: auto;
      margin-right: auto;
      margin-top: 2rem;
      margin-bottom: 0;
    }

    .contact-me-button-container {
      width: 80%;
      margin-bottom: 0;
    }
  }
`;

const ContactMePage = () => {
  const { language } = useContext(LanguageContext);

  const onSubmit = (e) => {
    e.preventDefault();
    let myForm = e.target;
    let formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((r) => {
        navigate(generateLink("/contact/success", language));
      })
      .catch((e) => {
        navigate(generateLink("/contact/error", language));
      });
  };

  return (
    <ContactMeStyle className="flex justify-content-center">
      <div className="contact-me-card z-2">
        <h1 className="text-center mt-6">{translate("contactMe", language)}</h1>
        <div className="z-2 p-2">
          <form
            name="Contact Form"
            netlify-honeypot="bot-field"
            data-netlify="true"
            netlify
            onSubmit={onSubmit}
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="Contact Form" />
            <UnderlineInput label={translate("name", language)} name="name" />
            <UnderlineInput label="Email" type="email" name="email" />
            <div className="flex justify-content-center py-3">
              <UnderlineTextArea
                label={translate("textMessage", language)}
                name="message"
              />
            </div>
            <div className="contact-me-button-container flex justify-content-center">
              <OutlineButton
                label={translate("contactButtonMessage", language)}
              />
            </div>
          </form>
        </div>
      </div>
    </ContactMeStyle>
  );
};

export const Head = () => <Seo />;

export default ContactMePage;
