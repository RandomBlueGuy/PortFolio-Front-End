import React from "react";
import Link from "next/link";
import post_group from "./post_group.module.css";

function PostGroup() {
  function postCreator() {
    return (
      <article className={post_group.post__card}>
        <h3 className={post_group.post__title}>TITLE</h3>
        <p className={post_group.post__description}>Post description</p>
        <Link href="#more">
          <button>View More</button>
        </Link>
      </article>
    );
  }
  return (
    <>
      <h1>What I do</h1>
      <section className={post_group.post_group__ctn}>
        <h1>Web development</h1>
        {postCreator()}
        {postCreator()}
        {postCreator()}
        {postCreator()}
        {postCreator()}
        {postCreator()}
        {postCreator()}
      </section>
    </>
  );
}

export default PostGroup;
