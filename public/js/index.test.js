import autodux from "autodux";
import test from "riteway";

const defaultBackgroundImg =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Graph-paper.svg/1024px-Graph-paper.svg.png";
const defaultDoodlerLeft =
  "https://raw.githubusercontent.com/JasonMize/coding-league-assets/master/doodle-jump-doodler.png";
const defaultDoodlerRight =
  "https://raw.githubusercontent.com/JasonMize/coding-league-assets/master/doodle-jump-doodler-right.png";
const defaultPLatformImage =
  "https://raw.githubusercontent.com/JasonMize/coding-league-assets/master/doodle-jump-platform.png";

const initial = {
  doodlerSize: 60,
  doodlerX: null,
  doodlerY: null,
  doodlerVelocity: null,
  doodlerXSpeed: 4,
  platformWidth: 85,
  platformHeight: 15,
  numOfPlatforms: 5,
  platformList: [],
  platYChange: 0,
  gameStarted: false,
  score: 0,
  highScore: 0,
  doodlerLeftImg: defaultDoodlerLeft,
  doodlerRightImg: defaultDoodlerRight,
  platformImg: defaultPLatformImage,
  backgroundImg: defaultBackgroundImg,
};
const { reducer, actions } = autodux({
  slice: "doodle jump",
  initial: initial,
});

const {
  setDoodlerSize,
  setDoodlerX,
  setDoodlerY,
  setDoodlerVelocity,
  setDoodlerXSpeed,
  setPlatformWidth,
  setPlatformHeight,
  setnumOfPlatforms,
  setPlatformList,
  setPlatYChange,
  setGameStarted,
  setScore,
  setHighScore,
  setDoodlerLeftImg,
  setDoodlerRightImg,
  setPlatformImg,
  setBackgroundImg,
} = actions;

test("doodle jump", async (assert) => {
  const initial = reducer();
  assert({
    given: "a doodlerLeftImg",
    should: "update state with that image",
    actual: reducer(initial, setDoodlerLeftImg("some-img")),
    expected: {},
  }); //?
});
