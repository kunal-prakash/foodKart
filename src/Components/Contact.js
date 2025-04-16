export default function Contact() {
  return (
    <div>
      <h1 className="p-2 m-2 text-center font-bold text-xl">Contact Us</h1>
      <form className="flex flex-col border w-100 m-auto" action="">
        <input type="text" className="p-2 m-2 border" placeholder="Name" />
        <input type="text" className="p-2 m-2 border" placeholder="Email" />
        <textarea rows={4} cols={50} className="p-2 m-2 border" placeholder="Type your message" />
        <button className="p-2 m-2 border rounded-xl bg-cyan-200 cursor-pointer" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
