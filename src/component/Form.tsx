import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mvgdgolk");
  if (state.succeeded) {
    return <p>Email sent!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className=" mt-[30px] mb-[60px]">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" className="text-place" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting} className="font-firacode text-[#E4E4E7] text-[20px]">
        <span  className="text-[#00E5FF]">//</span>
        Send
      </button>
    </form>
  );
}
export default ContactForm;
