import Link from "next/link";
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import { Button, Form, Loader } from "semantic-ui-react";

const New = () => {
  const [form, setForm] = useState({ title: "", description: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("http://localhost:3000/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      router.push("/");
      setIsSubmitting(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>New</h1>
      {isSubmitting ? (
        <Loader active inline="centered" />
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Title</label>
            <input
              placeholder="Title"
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input
              placeholder="Description"
              required
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </div>
  );
};

export default New;
