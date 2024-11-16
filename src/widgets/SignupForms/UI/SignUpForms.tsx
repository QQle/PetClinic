import { useState } from "react";
import cls from "./SignUpForms.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "shared/UI/Button/Button";

type Inputs = {
  example: string;
  exampleRequired: string;
};
const SignUpForms = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
        <input defaultValue="test" {...register("example")} />
        <input placeholder="Кличка" {...register} />
        <input placeholder="Возраст" {...register} />
        {/* comboBox vetspes */}
        <input {...register("exampleRequired", { required: true })} />
        <Button>ЗАПИСАТЬСЯ</Button>
      </form>
    </div>
  );
};

export default SignUpForms;
