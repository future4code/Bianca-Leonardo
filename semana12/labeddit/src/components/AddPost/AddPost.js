import { IconButton } from '@material-ui/core';
import React from 'react';
import { CardContainer, ContainerButtons, ContainerContent, ContainerText, FormContainer } from './style';
import SendIcon from '@material-ui/icons/Send';
import useForm from '../../hooks/useForm';
import {createPost} from '../../services/posts'

const AddPost = (props) => {
    const [form, onChange, clear] = useForm({
        title: '',
        body: ''
    })

    const onSubmitPost = (e) => {
        e.preventDefault()
        createPost(form, props.getRequest, clear)
        console.log(form)
    }

    return (
        <CardContainer>
            <FormContainer onSubmit={onSubmitPost}>
                <ContainerContent>
                    <ContainerText
                        label="Título do Post"
                        variant="outlined"
                        margin={'normal'}
                        value={form.title}
                        name={'title'}
                        onChange={onChange}
                        required
                    />
                    <ContainerText
                        label="No que você está pensando?"
                        multiline
                        rows={4}
                        variant="outlined"
                        margin={'normal'}
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
        </CardContainer>
    );
};

export default AddPost;