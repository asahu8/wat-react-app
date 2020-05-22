import React, { useState }  from 'react'
import { useForm } from "react-hook-form";
import ValidationError from '../../Validation/ValidationError';
import { Event } from '../../../model/event';
import { Redirect } from 'react-router-dom';
import { EventService } from '../../../services/EventService';
import './style.scss';

const EventSetup = (props: any) => {
  const { register, errors, handleSubmit, triggerValidation} = useForm({ validateCriteriaMode: "all"});

  let formFields = [
    { labelValue: "Event Name", fieldName: "name", registerObject: { required: "Please enter event name", maxLength:  { value: 20, message: "max 20 character allowed" }}},
    { labelValue: "Estimated Budget", fieldName: "estimatedBudget", registerObject: {}},
    { labelValue: "Description", fieldName: "description", registerObject: {}},
    { labelValue: "Item Categories", fieldName: " ", registerObject: {}},
    { labelValue: "Event Date", fieldName: "eventDate", registerObject: {}},
    { labelValue: "Location", fieldName: "location", registerObject: { required: "Please enter location name" }}
   ];

   let splicedFormFields =  [];
  while(formFields.length) {
    splicedFormFields.push(formFields.splice(0, 2));
  }
   const [redirect, setRedirect] = useState(false);
   const eventService = new EventService();

  const onSubmit = (data: any) => {
    let eventRecord = new Event(data);
    console.log(eventRecord);
   saveEvent(eventRecord);
  }

  function saveEvent(event: Event) {
    eventService.saveEvent(event)
      .then((result: any) => {
        console.log('saved event successfully');
        console.log(result);
        setRedirect(true);
    });
  }

  const getClassName = (fieldName: any) => {
    return (errors[fieldName] ? `${fieldName}  invalid` : `${fieldName} valid`);
  }

  const getDivClass = (index: number) => {
    return index % 2 ===0 ? 'form-element even-field' : 'form-element odd-field';

  }
  return(
    <div className = 'event-setup-container'>
      <form  name="userRegistrationForm"  onSubmit={handleSubmit(onSubmit)}  className='event-setup'>
        {
          splicedFormFields.map((formItems) => {
            return ( <div className="double-div"> { formItems.map((item, index) => {
              return (
              <div
                className={getDivClass(index)} >
                <label>{item.labelValue}</label> <br/>
                <input type="text" name={item.fieldName}
                ref={register(item.registerObject) }
                onBlur={() => triggerValidation(item.fieldName)}
                className={ getClassName(item.fieldName) } />

                <ValidationError valError = {errors} fieldName={item.fieldName} />
              </div>);
            })}
            </div>);
        })}
        <input type="submit" className="event-submit"  value="Create Event" />
        { redirect ? (<Redirect to='/events'/>) : ''}
      </form>
    </div>
   );
}

export default EventSetup;