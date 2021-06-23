import { IconButton } from '@material-ui/core';
import React from 'react';
import { CardContainer, ContainerText, ContainerButtons, ContainerContent, FormContainer } from './style';
import SendIcon from '@material-ui/icons/Send';
import { useParams } from 'react-router';
import useForm from '../../hooks/useForm';
import {createComment} from '../../services/comments'

const AddComment = (props) => {
    const params = useParams()
    const [form, onChange, clear] = useForm({
        body: '',
    })

    const onSubmitComment = (e) => {
        e.preventDefault()
        createComment(params.id, form, props.useRequest, clear)
    }

    

    return (
        <CardContainer>
            <FormContainer onSubmit={onSubmitComment}>
                <ContainerContent>
                    <ContainerText
                        label="No que você está pensando?"
                        multiline
                        rows={4}
                        variant="outlined"
                        value={form.body}
                        name={'body'}
                        onChange={onChange}
                        required
                    />
                </ContainerContent>
                <ContainerButtons disableSpacing>
                    <IconButton type={'submit'} aria-label="add to favorites">
                        <SendIcon />
                    </IconButton>
                </ContainerButtons>
            </FormContainer>
        </CardContainer >
    );
};

export default AddComment;