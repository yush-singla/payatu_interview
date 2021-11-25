import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
// import { data } from "../../data";
import fullScreenIcon from "./../../../public/fullScreen.svg";
import IconExpand from "../../Icons/Expand";
const Comments = ({ data }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const headerRef = useRef();
  const unCollapseComment = () => {
    setIsCollapsed(false);
  };

  const collapseComment = () => {
    setIsCollapsed(true);
  };

  useEffect(() => {
    if (isCollapsed) {
      headerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isCollapsed]);

  return data ? (
    <div className={styles.comment}>
      <div ref={headerRef} className={styles.comment_header}>
        {isCollapsed && (
          <button className={styles.comment_header_collapse} onClick={unCollapseComment}>
            <IconExpand />
          </button>
        )}
        <Image src={data.author.avatar} height={3} width={50} alt="" />
        <p>{data.author.name}</p>
      </div>
      <div className={styles.comment_replies}>
        {!isCollapsed && (
          <React.Fragment>
            <div className={styles.comment_vertical_line} onClick={collapseComment}></div>
            <div className={styles.comment_main_body}>
              <div className={styles.comment_text}>{data.text}</div>
              <div className={styles.comments_thread}>{data.replies && data.replies.map((reply) => <Comments data={reply} key={reply.text} />)}</div>
            </div>
          </React.Fragment>
        )}{" "}
      </div>
    </div>
  ) : null;
};

export default Comments;
