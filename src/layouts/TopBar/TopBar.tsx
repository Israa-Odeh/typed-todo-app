import todoStickyNote from "src/images/todo.png";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="topbar">
      <img
        className="topbar__logo"
        src={todoStickyNote}
        width={48}
        height={48}
        alt="Todo Keeper logo featuring a todo sticky note icon"
        title="Todo Keeper"
      />
      <h1 className="topbar__title">Todo Keeper</h1>
    </div>
  );
};

export default TopBar;
