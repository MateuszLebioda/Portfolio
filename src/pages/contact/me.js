import { graphql, navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import Layout from "../../components/wrappers/Layout";
import UnderlineInput from "../../components/utils/underlineInput";
import OutlineButton from "../../components/utils/OutlineButton";
import UnderlineTextArea from "../../components/utils/UnderlineTextArea";

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

  .preview-avatar-background {
    position: absolute;
    min-height: calc(100vh + 90px);
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

const ContactMe = ({ data }) => {
  const imageBackground = data.fileBackground?.childImageSharp;

  const onSubmit = e => {
    e.preventDefault();
    let myForm = e.target;
    let formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(r => {
        navigate("/contact/error");
      })
      .catch(e => {
        //TODO: Add error page
        console.log(e);
      });
  };

  return (
    <Layout>
      <ContactMeStyle className="flex justify-content-center">
        <GatsbyImage
          image={getImage(imageBackground)}
          className="preview-avatar-background"
          alt="background"
        />
        <div className="contact-me-card z-2">
          <h1 className="text-center mt-6">Zapraszam do kontaktu</h1>
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
              <UnderlineInput label="Imię" name="name" />
              <UnderlineInput label="Email" type="email" name="email" />
              <div className="flex justify-content-center py-3">
                <UnderlineTextArea label="Treść wiadomości" name="message" />
              </div>
              <div className="contact-me-button-container flex justify-content-center">
                <OutlineButton label="Skontaktuj się" />
              </div>
            </form>
          </div>
        </div>
      </ContactMeStyle>
    </Layout>
  );
};

export default ContactMe;

export const Head = ({ data }) => {
  return <title>{data.site.siteMetadata.title}</title>;
};

export const query = graphql`
  {
    site: site {
      siteMetadata {
        title
      }
    }
    fileBackground: file(name: { in: "code-background" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
  }
`;
