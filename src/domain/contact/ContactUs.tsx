import { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
}

type Inputs = {
  name: string
  email: string
  gender: GenderEnum
}

const ContactUs = (): JSX.Element => {
  const [contact, setContact] = useState<Inputs>({
    name: '',
    email: '',
    gender: GenderEnum.female,
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log(data)
    setContact(data)
  }

  useEffect(() => {
    console.log(contact)
  }, [contact])

  return (
    <div>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <br />
        {/* register your input into the hook by invoking the "register" function */}
        <input
          defaultValue={contact.name}
          {...register('name', { pattern: /^[A-Za-z]+$/i })}
        />
        <br />
        <label>Email</label>
        <br />
        {/* include validation with required or other standard HTML validation rules */}
        <input
          defaultValue={contact.email}
          {...register('email', { required: true })}
        />
        {/* errors will return when field validation fails  */}
        <br />
        {errors.email && <span>This field is required</span>}
        <br />
        <label>Gender Selection</label>
        <br />
        <select defaultValue={contact.gender} {...register('gender')}>
          <option value='female'>female</option>
          <option value='male'>male</option>
          <option value='other'>other</option>
        </select>
        <br />
        <input type='submit' />
      </form>
    </div>
  )
}

export default ContactUs
