import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginModalProps {
  onClose: () => void;
  setUserEmail: (email: string) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  onClose,
  setUserEmail,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email && password) {
      setUserEmail(email);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-black p-6 rounded-lg shadow-lg w-full max-w-md mx-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-md px-4 py-2"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-md px-4 py-2"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md hover:opacity-80 transition-opacity duration-300"
          >
            Login
          </button>
        </form>
        <button className="mt-4 text-gray-300 underline" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};
