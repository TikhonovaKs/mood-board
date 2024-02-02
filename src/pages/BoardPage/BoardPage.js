import "./BoardPage.css";
import { ReactComponent as HeartIcon } from "../../Icons/heart-dark.svg";
import { useState } from "react";
import { useRef } from "react";

export default function BoardPage() {
  const inputRef = useRef();
  const [likes, setLikes] = useState(0);
  const [boardTitle, setBoardTitle] = useState("");

  console.log("boardtitle: ", { boardTitle });

  function onChangeTitle(e) {
    setBoardTitle(e.target.value);
  }

  function onSubmitForm(e) {
    e.preventDefault();
  }

  function handleLikes() {
    setLikes(likes + 1);
  }

  return (
    <section className="boardpage">
      <div className="boardpage__title">
        <form className="boardpage__titleForm" onSubmit={onSubmitForm}>
          <input
            className="boardpage__input"
            type="text"
            onChange={onChangeTitle}
            placeholder={boardTitle ? boardTitle : "Board title..."}
          />
        </form>
      </div>
      <div className="boardpage__container">
        <div className="boardpage__likesContainer">
          <div className="boardpage__likes">
            {likes}
            <div className="boardpage__heartButton" onClick={handleLikes}>
              <HeartIcon className="boardpage__heartIcon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
