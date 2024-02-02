import "./BoardPage.css";
import { ReactComponent as HeartIcon } from "../../Icons/heart-dark.svg";
import { useState } from "react";

export default function BoardPage() {
  const [likes, setLikes] = useState(0);

  function handleLikes() {
    setLikes(likes + 1);
  }

  return (
    <section className="boardpage">
      <div className="boardpage__title">
        <p>Board title</p>
      </div>
      <div className="boardpage__flexContainer">
        <div className="boardpage__likes">
          {likes}
          <div className="boardpage__heartButton" onClick={handleLikes}>
            <HeartIcon className="boardpage__heartIcon" />
          </div>
        </div>
      </div>
    </section>
  );
}
