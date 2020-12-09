import React, { Component } from "react";
import { graphql } from "react-apollo";
import { v4 as uuid } from "uuid";
import { useMutation } from '@apollo/client';

import { client } from "../App";
import MutationUpdateEvent from "../GraphQL/MutationUpdateEvent";
import QueryGetEvent from "../GraphQL/QueryGetEvent";
import moment from "moment";

function UpdateEventComponent(props) {
    const { event } = props;
    const [updateEventMutation, { data }] = useMutation(MutationUpdateEvent, { client });
    const updateEvent = () => {
        const updatedEvent = {
            variables: {
                input: {
                    id: event.id,
                    _version: event._version,
                    name: `name ${+new Date()} ${navigator.userAgent}`,
                    where: `where ${+new Date()}`,
                    when: new Date(),
                    description: `desc ${+new Date()}`
                }
            }
        };
        console.log('@@@ updatedEvent:', JSON.stringify(updatedEvent));
        return updateEventMutation(updatedEvent);
    };
    return (
        <form className="ui reply form">
            <button className={`ui blue labeled submit icon button`}
                onClick={updateEvent}>
                Update Event
            </button>
        </form>
    );
}

export default UpdateEventComponent;