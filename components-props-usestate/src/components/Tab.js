import { useEffect, useState } from "react";

function Tab({ children, activeTab }) {
  const [active, setActive] = useState(activeTab);

  useEffect(() => {
    setActive(activeTab);
  }, [activeTab]);

  return (
    <div>
      <nav>
        {children.map((tab, index) => (
          <button
            className={`p-2 rounded mr-1 ${
              active === index ? "bg-red-500 text-white" : "bg-gray-200"
            } `}
            key={index}
            onClick={() => setActive(index)}
          >
            {tab.props.title}
          </button>
        ))}
      </nav>
      {children[active]}
    </div>
  );
}

Tab.Panel = function ({ children }) {
  return <div>{children}</div>;
};

export default Tab;
