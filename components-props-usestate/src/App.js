import { useState } from "react";
import Button from "./components/Button";
import Tab from "./components/Tab";

function Profile() {
  return <div>Profil</div>;
}

function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div style={{ padding: 20 }}>
        <button
          className="bg-green-300 p-2 rounded mb-4"
          onClick={() => setActiveTab(2)}
        >
          Aktif tabi degistir
        </button>

        <Tab activeTab={activeTab} setActiveTab={setActiveTab}>
          <Tab.Panel title="Anasayfa">Tab 1</Tab.Panel>
          <Tab.Panel title="Profil">
            <Profile />
            lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Tab.Panel>
          <Tab.Panel title="Hakkinda">Tab 3</Tab.Panel>
        </Tab>
        {activeTab === 2 && (
          <div>Burasi ekstra alan butona tiklayinca geliyor</div>
        )}
      </div>

      <div style={{ padding: 20 }}>
        <Button text="Button #1" />
        <Button text="Button #2" variant="success" />
        <Button text="Button #3" variant="danger" />
        <Button text="Button #4" variant="warning" />
      </div>
    </>
  );
}

export default App;
