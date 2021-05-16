import Container from "react-bootstrap/Container";
import Heading from "../Heading";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ValidationError from "../ValidationError";
const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name")
    .min(3, "The name must be at least 3 characters"),
  age: yup
    .number()
    .required("Please enter an your age")
    .min(10, "The number must be at min 10 ")
    .max(20, "the number must be at max 20 "),
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);
  return (
    <Container>
      <div className="contact">
        <div className=" text-center ">
          <Heading title="Contact" />
        </div>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)} className="contact-info">
        <Form.Group>
          <Form.Control placeholder="Name" {...register("name")} />
          <Form.Text className="text-muted">At least 3 characters</Form.Text>
          {errors.name && (
            <ValidationError>{errors.name.message}</ValidationError>
          )}
        </Form.Group>

        <Form.Group>
          <Form.Control placeholder="Age" {...register("age")} />
          <Form.Text className="text-muted">
            At least betwen 10 and 20 number
          </Form.Text>
          {errors.name && (
            <ValidationError>{errors.age.message}</ValidationError>
          )}
        </Form.Group>

        <Form.Group>
          <Form.Control placeholder="Email" {...register("email")} />
          {errors.email && (
            <ValidationError>{errors.email.message}</ValidationError>
          )}
        </Form.Group>

        <Button variant="info" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
