// INTERSECTION TYPE (variable & variable)
type Dragable = {
  drag: () => void;
};

type Resizeable = {
  resize: () => void;
};

type UIWidget = Dragable & Resizeable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
}; // will have to implement properties of both Dragable and Resizeable
