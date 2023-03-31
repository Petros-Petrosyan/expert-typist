import React from "react";
import { connect } from "react-redux";

// game status
import { INIT } from "../../constants/gameStatus";

// actions
import { getTextInit, startGame } from "../../store/game/action";

// classes
import classes from "./TypeRacer.module.scss";

// containers
import { KeyboardSection, ResultSection, TextSection } from "..";

class TypeRacer extends React.Component {
  render() {
    const { startGame, getText, status } = this.props;

    const start = () => {
      startGame();
      getText(1);
    };

    let startBtn = null;
    if (status === INIT) {
      startBtn = (
        <div className={classes.main__startBtn} onClick={start}>
          <span>Click on me to start typing</span>
        </div>
      );
    }

    if (!window?.innerWidth) {
      return null;
    }

    if (window.innerWidth <= 1020)
      return (
        <div className={classes.mobileWrapper}>
          <p className={classes.mobileText}>
            Sorry, experttypist.com does not support mobile devices. Please try
            desktop or laptop computer.
          </p>
        </div>
      );

    return (
      <main className={classes.container}>
        <div />
        <section className={classes.main}>
          <h1 className={classes.main__title}>Test Your Typing Skills</h1>
          <ResultSection />
          <TextSection />
          <div className={classes.kayboardWrapper}>
            {startBtn}
            <KeyboardSection />
          </div>
        </section>
        <div />
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.gameReducer.game.gameStatus,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => dispatch(startGame()),
    getText: (sentences) => dispatch(getTextInit(sentences)),
  };
};

const TypeRacerWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeRacer);
export { TypeRacerWrapper as TypeRacer };
