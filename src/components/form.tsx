import React from "react";

const Web3Form: React.FC = () => (
  <form
    action="https://api.web3forms.com/submit"
    method="POST"
    className="flex flex-col gap-4 rounded w-full shadow"
  >
    {/* Replace with your Access Key */}
    <input
      type="hidden"
      name="access_key"
      value="2dc779d2-00f3-4d44-b024-930385b67bd9"
    />

    {/* Form Inputs. Each input must have a name attribute */}
    <input
      type="text"
      name="name"
      required
      placeholder="Name"
      className="border rounded px-2 py-2"
    />
    <input
      type="email"
      name="email"
      required
      placeholder="Email"
      className="border rounded px-2 py-2"
    />
    <textarea
      name="message"
      required
      placeholder="Message"
      className="border rounded px-2 py-2"
    />

    {/* Honeypot Spam Protection */}
    <input
      type="checkbox"
      name="botcheck"
      className="hidden"
      style={{ display: "none" }}
    />

    <button
      type="submit"
      className="border-yellow-600 border-1 text-white  px-4 py-2 rounded hover:bg-yellow-600 cursor-pointer"
    >
      Submit Form
    </button>
  </form>
);

export default Web3Form;
