import css, {
  after,
  before,
} from 'next/css';

const wrapperStyles = {
  position: 'relative',
  padding: 20,
};
const beforeStyles = {
  content: '"NotePal"',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  pointerEvents: 'none',
  fontSize: 48,
  opacity: 0.6,
  transition: 'opacity 0.33s',
};
const documentEditedBeforeStyles = Object.assign({}, beforeStyles, {
  opacity: 0.2,
});
const afterStyles = {
  content: '"Type something to start"',
  position: 'absolute',
  top: 20,
  left: 20,
  fontSize: 20,
};

export default css(
  wrapperStyles,
  before(beforeStyles),
  after(afterStyles),
);
export const documentEditedWrapperStyles = css(
  wrapperStyles,
  before(documentEditedBeforeStyles),
);
