import React from "react";

// classes
import classes from "./Result.module.scss";

const Result = (props) => {
  const { time, text, currentIndex, errors } = props;

  const viewErrorCount = errors.length;
  let completionPercent = (currentIndex / text.length) * 100;
  completionPercent = Math.ceil(completionPercent);
  if (currentIndex === text.length - 1) {
    completionPercent = 100;
  }

  let wpm = 0;
  if (currentIndex !== 0 && time !== 60) {
    wpm = Math.round(currentIndex / 5 / ((60 - time) / 60));
  }

  return (
    <div>
      <div className={classes.result}>
        <span>
          Speed: <strong>{wpm} WPM</strong>
        </span>
        <span>
          Completion percent: <strong>{completionPercent} %</strong>
        </span>
        <span>
          Errors: <strong>{viewErrorCount}</strong>
        </span>
      </div>
    </div>
  );
};

export { Result };
