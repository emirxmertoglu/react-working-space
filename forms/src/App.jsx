import { useMemo, useState } from "react";

function App() {
  const [name, setName] = useState("emir");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("");
  // const genders = ["Male", "Female"];

  // const selectedGender = useMemo(() => {
  //   return genders[gender];
  // }, [gender]);

  // const selectedGender = genders?.[gender];
  const genders = [
    {
      key: "1",
      value: "Male",
    },
    {
      key: "2",
      value: "Female",
    },
  ];
  const selectedGender = genders.find((g) => g.key === gender);

  const categoryList = [
    { key: 1, value: "HTML" },
    { key: 2, value: "CSS" },
    { key: 3, value: "JavaScript" },
    { key: 4, value: "React" },
  ];
  const [categories, setCategories] = useState([2, 4]);
  const selectedCategories =
    categories &&
    categoryList.filter((category) => categories.includes(category.key));

  return (
    <>
      <button onClick={() => setName("tayfun")}>change the name</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      {name}

      <hr />

      <textarea onChange={(e) => setDescription(e.target.value)} />
      <br />
      {description}

      <hr />

      <select onChange={(e) => setGender(e.target.value)}>
        <option value="">Choose gender</option>
        {genders.map((gender) => (
          <option value={gender.key} key={gender.key}>
            {gender.value}
          </option>
        ))}
      </select>
      <br />
      <pre>{JSON.stringify(selectedGender, null, 2)}</pre>

      <hr />

      <button onClick={() => setCategories([2, 3, 4])}>
        Select categories
      </button>
      <select
        value={categories}
        multiple={true}
        onChange={(e) =>
          setCategories(
            [...e.target.selectedOptions].map((option) => +option.value)
          )
        }
      >
        {categoryList.map((category) => (
          <option value={category.key} key={category.key}>
            {category.value}
          </option>
        ))}
      </select>
      <pre>{JSON.stringify(selectedCategories, null, 2)}</pre>
    </>
  );
}

export default App;
