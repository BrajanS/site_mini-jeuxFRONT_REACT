import { Link } from "react-router-dom";

export default function Home() {
  async function handlePfpClick() {
    const obtainUsers = await fetch(
      "https://site-mini-jeuxbackend.onrender.com/users",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    if (obtainUsers) {
      const result = await obtainUsers.json();
      console.log("result:", result);
      return result;
    }
  }

  return (
    <div id="home">
      <header>
        <nav>
          <Link to={"/"}>Website LOGO</Link>
          <div>
            <Link to={"/friends"}>Friends</Link>
            <button id="profileBtn" onClick={() => handlePfpClick()}>
              <img src="" alt="Profile page" />
              <div id="profileMenu" className="hidden">
                <Link to={"/profile"}>Go to profile</Link>
              </div>
            </button>
          </div>
        </nav>
      </header>
      <main>
        <div id="games">
          <button>
            <span>Pierre Papier Ciseau</span>
          </button>
          <button>
            <span>
              Puissance <br />4
            </span>
          </button>
        </div>
      </main>
      <footer>
        <aside>
          <Link to={"/icon-credits"}>Icons Credit</Link>
        </aside>
        <div id="chat">
          <button>
            <img src="" alt="Chat Logo" />
            <span>Messagerie</span>
          </button>
          <button>
            <img src="" alt="Notification logo" />
          </button>
          <div id="chatBox"></div>
        </div>
      </footer>
    </div>
  );
}
