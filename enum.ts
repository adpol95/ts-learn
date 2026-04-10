const enum Directions {
  Up,
  Down,
  Left,
  Right,
}

function directionsFinder(direction: Directions) {
  switch (direction) {
    case Directions.Up: {
      return "Up";
    }   
    case Directions.Down: {
      return "Down";
    }
    case Directions.Left: {
      return "Left";
    }
    case Directions.Right: {
      return "Right";
    }
    default: {
      return "Can't have direction like this";
    }
  }
}
