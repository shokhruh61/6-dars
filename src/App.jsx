import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [shape, setShape] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [color, setColor] = useState("");
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleShapeCheck = () => {
    switch (parseInt(number)) {
      case 3:
        setShape("Uchburchak");
        break;
      case 4:
        setShape("To'rtburchak");
        break;
      case 5:
        setShape("Beshburchak");
        break;
      default:
        setShape("Bunday shakl mavjud emas");
    }
  };

  const handlePasswordCheck = () => {
    setMessage(
      password === confirmPassword ? "Parol mos keldi" : "Parol mos kelmadi"
    );
  };

  const handleCheckboxChange = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  const handleEmailValidation = () => {
    const isValid = email.includes("@") && email.includes(".com");
    setEmailMessage(isValid ? "Email to'g'ri" : "Email noto'g'ri formatda");
  };

  const switchInputs = () => {
    const temp = input1;
    setInput1(input2);
    setInput2(temp);
  };

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 space-y-6 max-w-lg m-auto">
      <div>
        <h2 className="text-lg font-bold">Shaklni aniqlash</h2>
        <input
          type="number"
          className="border p-2 rounded w-full"
          placeholder="Raqam kiriting"
          onChange={(e) => setNumber(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          onClick={handleShapeCheck}
        >
          Shaklni aniqlash
        </button>
        <p>{shape}</p>
      </div>

      <div>
        <h2 className="text-lg font-bold">Parol tekshirish</h2>
        <input
          type="password"
          className="border p-2 rounded w-full"
          placeholder="Parol"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          className="border p-2 rounded w-full mt-2"
          placeholder="Parolni tasdiqlash"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          onClick={handlePasswordCheck}
        >
          Tekshirish
        </button>
        <p>{message}</p>
      </div>

      <div>
        <h2 className="text-lg font-bold">Checkbox bilan ro’yxat</h2>
        {["Olma", "Banan", "Apelsin"].map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange(item)}
            />
            <label>{item}</label>
          </div>
        ))}
        <p>Tanlanganlar: {selectedItems.join(", ")}</p>
      </div>

      <div>
        <h2 className="text-lg font-bold">Rangni o'zgartirish</h2>
        {["Qizil", "Yashil", "Ko'k"].map((col, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="radio"
              name="color"
              value={col}
              onChange={(e) => setColor(e.target.value.toLowerCase())}
            />
            <label>{col}</label>
          </div>
        ))}
        <div
          className={`w-full h-24 rounded mt-4`}
          style={{ backgroundColor: color }}
        ></div>
      </div>

      <div>
        <h2 className="text-lg font-bold">Email tekshirish</h2>
        <input
          type="email"
          className="border p-2 rounded w-full"
          placeholder="Email kiriting"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          onClick={handleEmailValidation}
        >
          Tekshirish
        </button>
        <p>{emailMessage}</p>
      </div>

      <div>
        <h2 className="text-lg font-bold">Inputlarni almashtirish</h2>
        <input
          type="text"
          className="border p-2 rounded w-full"
          placeholder="Input 1"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <input
          type="text"
          className="border p-2 rounded w-full mt-2"
          placeholder="Input 2"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          onClick={switchInputs}
        >
          Qiymatlarni almashtirish
        </button>
      </div>

      <div>
        <h2 className="text-lg font-bold">To-do ro’yxat</h2>
        <input
          type="text"
          className="border p-2 rounded w-full"
          placeholder="Vazifa kiriting"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          onClick={addTask}
        >
          Qo'shish
        </button>
        <ul className="mt-4">
          {tasks.map((t, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b p-2"
            >
              {t}
              <button
                className="text-red-500"
                onClick={() => removeTask(index)}
              >
                O'chirish
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
