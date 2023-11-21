import { useForm } from '@formspree/react';

export function SubmitForm(){
  const [state, handleSubmit] = useForm('{your-form-id}');
  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" />
      <button type="submit" disabled={state.submitting}>Sign up</button>
    </form>
  )
}