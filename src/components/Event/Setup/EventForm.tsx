import React from 'react'
import { useForm } from 'react-hook-form';
import { isEmpty } from 'lodash';
import ValidationError from '../../Validation/ValidationError';

const EventForm = (props: any) => {
  const { event, loading, buttonLabel}  = props;
  const { errors, triggerValidation, register} = useForm({ validateCriteriaMode: "all"});

  const getClassName = (fieldName: any) => {
    return (errors[fieldName] ? `${fieldName} errorr` : `${fieldName}`);
  }

  const assignValue = (e: any, attribute: string) => {
    event[attribute] = e.target.value ;
    triggerValidation(attribute)
  }

  const onsubmit = (e: any) => {
    e.preventDefault();
    if(isEmpty(errors)) {
      props.handleSubmit(event);
    }
  }

  const submitButtonClass = () => {
    return (loading ? "ui loading submit button" : "ui submit button");
   }

  const formClassName = () => {
    return (loading ? 'ui form event-setup loading' : 'ui form event-setup');
  }

  return (
    <div className = 'event-setup-container'>
      <form  name="userRegistrationForm"  onSubmit={onsubmit}  className={formClassName()}>
        <div className="two fields">
          <div className='field'>
            <label> Event Name </label>
            <input type= "text" name="name" defaultValue = { event && event.name }
              ref={register({ required: "Please enter event name", maxLength:  { value: 20, message: "max 20 character allowed" }})}
              onBlur={(e) => assignValue(e, "name") }
              className={ getClassName("name") } />
            <ValidationError valError = {errors} fieldName={"name"} />
          </div>

          <div className='field' >
            <label> Estimated Budget </label>
            <input type= "number" name="budget" defaultValue = { event && event.budget }
              ref={register({ required: "Please enter Estimated Budget"})}
              onBlur={(e) => assignValue(e, "budget") }
              className={ getClassName("budget") } />
            <ValidationError valError = {errors} fieldName={"budget"} />
          </div>
        </div>

        <div className="two fields">
          <div className='field' >
            <label> Description </label>
            <textarea name="description" defaultValue = { event && event.description }
              ref={register({ required: "Please enter Description", maxLength:  { value: 50, message: "max 50 character allowed" }})}
              onBlur={(e) => assignValue(e, "description")}
              className={ getClassName("description") } />
              <ValidationError valError = {errors} fieldName={"description"} />
          </div>

          <div className='field' >
            <label> Item Categories </label>
            <textarea name="items" defaultValue = { event && event.items } ref={register({ required: "Please enter Item Categories"})}
              onBlur={(e) => assignValue(e, "items")} className={ getClassName("items") } />
            <ValidationError valError = {errors} fieldName={"items"} />
          </div>
        </div>

        <div className="two fields">
          <div className='field'>
            <label> Event Date </label>
            <input type="text" name="eventDate" defaultValue = { event && event.eventDate } ref={register({ required: "Please enter Event Date"})}
              onBlur={(e) => assignValue(e, "eventDate")} className={ getClassName("eventDate")} />
            <ValidationError valError = {errors} fieldName={"eventDate"} />
          </div>
          <div className='field'>
            <label> Location </label>
            <input type="text" name="location" defaultValue = { event && event.location } ref={register({ required: "Please enter Location"})}
            onBlur={(e) => assignValue(e, "location")} className={ getClassName("location") } />
            <ValidationError valError = {errors} fieldName={"location"} />
          </div>
        </div>

        <button className={submitButtonClass()} disabled ={loading}> {buttonLabel} </button>
      </form>
    </div>
   )

 }

export default EventForm;