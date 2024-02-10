// Importing necessary components and hooks from react-router-dom and a local module
import {
  Form,
  useLoaderData,
  redirect,
  useNavigate,
} from "react-router-dom";
import axios from 'axios';
import { updateContact } from "../contacts";

export async function action({ request, params }) {
  const formData = await request.formData();

  try {
    // Assuming updateContact is an API call to update the contact on the backend
    // Adjust this code to match how your actual updateContact function is implemented
    await updateContact(params.contactId, Object.fromEntries(formData));

    // If the above function is not an API call and you wish to make a separate Axios call:
    // await axios.post("http://localhost:3000/api/contact", formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // });

    return redirect(`/contacts/${params.contactId}`);
  } catch (error) {
    // Handle errors here, e.g. by logging them or displaying a message to the user
    console.error('Failed to update contact', error);
    // Consider how you want to handle the error, e.g. redirect to an error page or show a message
  }
}

// Component for editing a contact
export default function EditContact() {
  const { contact } = useLoaderData(); // Retrieving the current contact data
  const navigate = useNavigate(); // Hook for programmatically navigating

  return (
    <Form method="post" id="contact-form">
      {/* Form fields for contact information */}
      <p>
        <span>Name</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={contact.first} // Pre-filling with current first name
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={contact.last} // Pre-filling with current last name
        />
      </p>
      {/* Additional contact fields */}
      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={contact.twitter} // Pre-filling with current Twitter handle
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact.avatar} // Pre-filling with current avatar URL
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          name="notes"
          defaultValue={contact.notes} // Pre-filling with current notes
          rows={6}
        />
      </label>
      {/* Buttons for saving or cancelling the edit */}
      <p>
        <button type="submit">Save</button>
        <button
          type="button"
          onClick={() => {
            navigate(-1); // Navigating back to the previous page
          }}
        >
          Cancel
        </button>
      </p>
    </Form>
  );
}
