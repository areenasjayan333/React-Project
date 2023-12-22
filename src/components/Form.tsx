import { FieldValues, useForm } from "react-hook-form";
interface FormData {
  name: String;
  age: number;
}

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onClick={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">Name is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">Name should contain 3 character</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;

// import { FormEvent, useRef } from "react";
// function Form() {
//   const nameRef = useRef<HTMLInputElement>(null);
//   const ageRef = useRef<HTMLInputElement>(null);
//   const person = { name: "", age: "" };

//   const handleEvent = (event: FormEvent) => {
//     event.preventDefault();

//     if (nameRef.current !== null) person.name = nameRef.current.value;
//     if (ageRef.current !== null) person.age = ageRef.current.value;

//     console.log(person);
//   };

//   return (
//     <form onSubmit={handleEvent}>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">
//           Name
//         </label>
//         <input ref={nameRef} id="name" type="text" className="form-control" />
//       </div>

//       <div className="mb-3">
//         <label htmlFor="age" className="form-label">
//           Age
//         </label>
//         <input ref={ageRef} id="age" type="number" className="form-control" />
//       </div>
//       <button className="btn btn-primary" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// }

// export default Form;
