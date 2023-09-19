import React from 'react';

function Button({ className, label, buttonType }) {
    return (
        <button className={`bg-primary px-8 py-2 rounded cursor-pointer ${className}`} type={buttonType ? buttonType : 'button'}>
            {label ? label : 'Register'}
        </button>
    );
}

export default Button;
