import React from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.TitleAndTextSlice} TitleAndTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TitleAndTextSlice>} TitleAndTextProps
 * @param { TitleAndTextProps }
 */
const TitleAndText = ({ slice }) => (
  <section>
    <span className="title">
      {slice.primary.title ? (
        <PrismicRichText field={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </span>
    <div className="subtitle">
      {slice.primary.subtitle && (
        <PrismicRichText field={slice.primary.subtitle} />
      )}
    </div>
    {slice.primary.description ? (
      <PrismicRichText field={slice.primary.description} />
    ) : (
      <p>start by editing this slice from inside Slice Machine!</p>
    )}
    <div className="button">
      <PrismicLink field={slice.primary.cta_link}>
        {slice.primary.cta_text}
      </PrismicLink>
    </div>
    <style jsx>{`
      section {
        padding: 4em;
        text-align: center;
        background: #f2f0f2;
      }
      .title {
        color: #8592e0;
      }
      .subtitle {
        color: #6a5370;
        font-size: 0.9rem;
        margin-top: 0.25rem;
        margin-bottom: 1rem;
      }
      .button {
        font-weight: bold;
        color: #6a5370;
      }
    `}</style>
  </section>
);

export default TitleAndText;
