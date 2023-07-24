import React from "react";
import artsystuff from "./artsystuff.module.css";
import Link from "next/link";

function ArtsyStuff() {
  function artCardCreator() {
    return (
      <article className={artsystuff.art__card}>
        <h3 className={artsystuff.art__title}>Image Title</h3>
      </article>
    );
  }
  return (
    <>
      <section className={artsystuff.artsystuff__ctn}>
        <>
          {artCardCreator()}
          {artCardCreator()}
          {artCardCreator()}
          {artCardCreator()}
          {artCardCreator()}
          {artCardCreator()}
        </>
        <h1>Artsy Stuff</h1>
      </section>
    </>
  );
}

export default ArtsyStuff;
