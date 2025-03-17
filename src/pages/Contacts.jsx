import Navbar from "../components/navbar/Navbar";

const Contacts = () => {
  return (
    <>
      <Navbar />
      <main className="section">
        <div className="container">
          <h1 className="title-1">Contacts</h1>

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Location</h2>
              <p>Tashkent, Uzbekistan</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Telegram / WhatsApp</h2>
              <p>
                <a href="tel:+998900263965">+998 (90) 026-39-65</a>
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Email</h2>
              <p>
                <a href="samirabdumajitov200@gmail.com">samirabdumajitov200@gmail.com</a>
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Contacts;
