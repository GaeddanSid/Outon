var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import axios from 'axios';
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleRegister = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        try {
            const response = yield axios.post('http://localhost:8080/register', {
                email,
                password,
            });
            console.log('Registration successful:', response.data);
        }
        catch (error) {
            console.error('Registration failed:', error);
        }
    });
    return (_jsx("div", Object.assign({ className: "view-divs" }, { children: _jsxs("form", Object.assign({ onSubmit: handleRegister }, { children: [_jsx("h3", { children: "Register account" }), _jsx("input", { type: "text", placeholder: "Email", value: email, onChange: (e) => setEmail(e.target.value), required: true }), _jsx("input", { type: "password", placeholder: "Password", value: password, onChange: (e) => setPassword(e.target.value), required: true }), _jsx("button", Object.assign({ type: "submit" }, { children: "Create account" }))] })) })));
};
export default Register;
//# sourceMappingURL=Login.js.map