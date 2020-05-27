import React from 'react'
import { useForm } from 'react-hook-form';
import ValidationError from '../../Validation/ValidationError';

const EventForm = (props: any) => {
  const event = props.event;
  const buttonLabel = props.buttonLabel;
  const { errors, triggerValidation, register} = useForm({ validateCriteriaMode: "all"});

  const getClassName = (fieldName: any) => {
    return (errors[fieldName] ? `${fieldName}  invalid` : `${fieldName} valid`);
  }

  const assignValue = (e: any, attribute: string) => {
    event[attribute] = e.target.value ;
    triggerValidation(attribute)
  }

  const onsubmit = (e: any) => {
    e.preventDefault();
    props.handleSubmit(event);
  }

  return (
    <div className = 'event-setup-container'>
      <form  name="userRegistrationForm"  onSubmit={onsubmit}  className='event-setup'>
        <div className="double-div">
          <div
            className='form-element even-field' >
            <label> Event Name </label> <br/>
            <input type= "text" name="name"
            defaultValue = { event && event.name }
            ref={register({ required: "Please enter event name", maxLength:  { value: 20, message: "max 20 character allowed" }})}
            onBlur={(e) => assignValue(e, "name") }
            className={ getClassName("name") } />
            <ValidationError valError = {errors} fieldName={"name"} />
          </div>

          <div
            className='form-element odd-field' >
            <label> Estimated Budget </label> <br/>
            <input type= "number" name="budget"
            defaultValue = { event && event.budget }
            ref={register({ required: "Please enter Estimated Budget"})}
            onBlur={(e) => assignValue(e, "budget") }
            className={ getClassName("budget") } />
            <ValidationError valError = {errors} fieldName={"budget"} />
          </div>
        </div>

        <div className="double-div">
          <div
            className='form-element even-field' >
            <label> Description </label> <br/>
            <textarea name="description"
            defaultValue = { event && event.description }
            ref={register({ required: "Please enter Description", maxLength:  { value: 50, message: "max 50 character allowed" }})}
            onBlur={(e) => assignValue(e, "description")}
            className={ getClassName("description") } />
            <ValidationError valError = {errors} fieldName={"description"} />
          </div>

          <div
            className='form-element odd-field' >
            <label> Item Categories </label> <br/>
            <textarea name="items"
            defaultValue = { event && event.items }
            ref={register({ required: "Please enter Item Categories"})}
            onBlur={(e) => assignValue(e, "items")}
            className={ getClassName("items") } />
            <ValidationError valError = {errors} fieldName={"items"} />
          </div>
        </div>

        <div className="double-div">
          <div
            className='form-element even-field'>
            <label> Event Date </label> <br/>
            <input type="text" name="eventDate"
            defaultValue = { event && event.eventDate }
            ref={register({ required: "Please enter Event Date"})}
            onBlur={(e) => assignValue(e, "eventDate")}
            className={ getClassName("eventDate")} />
            <ValidationError valError = {errors} fieldName={"eventDate"} />
          </div>

          <div
            className='form-element odd-field'>
            <label> Location </label> <br/>
            <input type="text" name="location"
            defaultValue = { event && event.location }
            ref={register({ required: "Please enter Location"})}
            onBlur={(e) => assignValue(e, "location")}
            className={ getClassName("location") } />
            <ValidationError valError = {errors} fieldName={"location"} />
          </div>
        </div>

        <button  className="event-submit">  {buttonLabel} </button>
      </form>
    </div>
   )
 }

export default EventForm;