import React from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from "react-hook-form";

function New() {
    const {
        register, handleSubmit, formState: { errors, isValid }, reset } = useForm({
            defaultValues: {
                firstName: "",
                lastName: ""
            },
            mode: "onBlur"
        });

    return (

        <div className="addForm">
 
            <Helmet>
                <title>Addnewcharacter</title>
            </Helmet>
            <form onSubmit={handleSubmit((data) => {
                console.log(data);
                reset();
            })}>
                <div className='message'>
                    <h2>Add a new character</h2>
                    <input placeholder="Name" {...register("name", { required: 'This is required' })} />
                    <p>{errors.name?.message}</p>

                    <select {...register("gender", { required: "Please select a gender" })}>
                        <option defaultValue="----">-----</option>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>

                    <input
                        placeholder="species"
                        type="text"
                        {...register("species", { required: "This is required" })}
                    />
                    <p>{errors.species?.message}</p>

                    <input placeholder="status" type="text" {...register("status", { required: "This is required" })} />
                    <p>{errors.status?.message}</p>


                    <div className='button'>
                        <input type='submit' value="Submit" disabled={!isValid} className='submit' />
                    </div>
                </div>
            </form>
        </div>
    );

}

export default New