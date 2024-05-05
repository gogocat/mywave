import { ISignUpFormValues } from 'interfaces';

function signUpService(data: ISignUpFormValues) {
    // eslint-disable-next-line no-console
    console.log('submit form: ', data);
    return data;
}

export default { signUpService };
