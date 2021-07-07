import React from 'react';
import { FormControl, FormGroup, TextField, Button } from '@material-ui/core';

import './FormSendTweet.scss'

export default function FormSendTweet(props) {
    const {} = props;

    return(
        <div className='form-send-tweet'>
            <h2 className='form-send-tweet__title'>Send Tweet</h2>
            <form className ='form-send-tweet__form'>
                <FormControl>
                    <FormGroup>
                        <TextField
                            className='form-send-tweet__form-name'
                            type='text'
                            name='name'
                            placeholder='Username'
                            margin='normal'
                        />
                    </FormGroup>
                    <FormGroup>
                        <TextField
                            className='form-send-tweet__form-textarea'
                            type='text'
                            name='tweet'
                            placeholder='Write your thoughts...'
                            margin='normal'
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button type='submit'>Send Tweet</Button>
                    </FormGroup>
                </FormControl>
            </form>
        </div>
    )
}