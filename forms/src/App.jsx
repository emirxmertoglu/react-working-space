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

  const [rule, setRule] = useState(true);

  const [rules, setRules] = useState([
    { key: 1, value: "I agree to the rule 1", checked: false },
    { key: 2, value: "I agree to the rule 2", checked: false },
    { key: 3, value: "I agree to the rule 3", checked: true },
  ]);
  const checkRule = (key, checked) => {
    setRules((rules) =>
      rules.map((rule) => {
        if (rule.key === key) {
          rule.checked = checked;
        }
        return rule;
      })
    );
  };
  const enabled = rules.every((rule) => rule.checked);

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

      <hr />

      <label>
        <input
          type="checkbox"
          checked={rule}
          onChange={(e) => setRule(e.target.checked)}
        />
        I agree to the terms and conditions
      </label>
      <br />
      <button disabled={!rule}>Continue</button>

      <hr />

      {rules.map((rule) => (
        <label key={rule.key}>
          <input
            type="checkbox"
            checked={rule.checked}
            onChange={(e) => checkRule(rule.key, e.target.checked)}
          />
          {rule.value}
        </label>
      ))}
      <br />
      <button disabled={!enabled}>Continue</button>
      <pre>{JSON.stringify(rules, null, 2)}</pre>
    </>
  );
}

export default App;
