import React, { Component } from 'react'
import Joi from 'joi-browser'
import { toast } from 'react-toastify';
import axios from 'axios';



class Form extends Component {

    state = {
        name: '',
        phone: '',
        email: '',
        oggetto: '',
        description: '',
        error: {},
    }

    schema = {
        email: Joi.string().email({ minDomainAtoms: 2 }).required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    case "string.email":
                        err.message = 'Deve essere una email valida ';
                        break;
                    default:
                        err.message = 'Email non può essere vuota';
                        break;
                }
            });
            return errors;
        }),
        phone: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    default:
                        err.message = 'Telefono non può essere vuoto';
                        break;
                }
            });
            return errors;
        }),
        name: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    default:
                        err.message = 'Nome non può essere vuoto';
                        break;
                }
            });
            return errors;
        }),
        description: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    default:
                        err.message = 'Descrizione non può essere vuoto';
                        break;
                }
            });
            return errors;
        }),
        oggetto: Joi.string(),
        autoriz_tratt_dati: Joi.string(),

    }
    changeHandler = event => {
        const error = { ...this.state.error };
        const errorMassage = this.validationProperty(event);
        if (errorMassage) {
            error[event.target.name] = errorMassage;
        } else {
            delete error[event.target.name];
        }
        this.setState({
            [event.target.name]: event.target.value,
            error
        })
    };
    handleChange = (value) => {
        this.setState({
            country: value
        })
    };

    validationProperty = event => {
        const Obj = { [event.target.name]: event.target.value };
        const schema = { [event.target.name]: this.schema[event.target.name] }
        const { error } = Joi.validate(Obj, schema);
        return error ? error.details[0].message : null
    };

    validate = () => {
        const options = { abortEarly: false }
        const form = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            description: this.state.description,
        }
        const { error } = Joi.validate(form, this.schema, options)
        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message
        return errors;
    };

    submitHandler = event => {
        event.preventDefault()
        const error = this.validate();
        if (error) {
            this.setState({
                error: error || {}
            })
        } else {
            this.setState({
                name: '',
                phone: '',
                email: '',
                oggetto: '',
                description: '',
                autoriz_tratt_dati: false,
            })
            console.log(
                'Nome' + '=' + this.state.name,
                'Phone' + '=' + this.state.phone,
                'Email' + '=' + this.state.email,
                'Oggetto' + '=' + this.state.oggetto,
                'Description' + '=' + this.state.description,
                'Trattamento Dati' + '=' + this.state.autoriz_tratt_dati,

            )

            async function fetchAwait(email, oggetto, messaggio, cell, nome) {

                await axios.post('https://api.studiolegalemanzi.eu/api/messaggis', {
                    data: {
                        da: email,
                        oggetto: 'Sistema Notifiche:' + oggetto,
                        Messaggio: messaggio,
                        cellulare: cell,
                        Nome: nome,
                    }

                }).then(response => {
                    console.log(response);
                });
            }
            fetchAwait(this.state.email, this.state.oggetto, this.state.description, this.state.phone, this.state.name);

            toast.success('Please check Consol log');
        }
    }

    render() {

        const options = [
            { level: 'Info generiche', value: 'Informazioni generiche' },
            { level: 'Resp. contabile ed erariale', value: 'Resp. contabile ed erariale' },
            { level: 'Diritto d\'impresa e societario', value: 'Diritto impresa e societario' },
            { level: 'Urbanistica, edilizia e diritto immobiliare', value: 'Urbanistica, edilizia e diritto immobiliare' },
            { level: 'Accesso agli atti e ai documenti amministrativi', value: 'Accesso agli atti e ai documenti amministrativi' },
            { level: 'Contrattualistica pubblica', value: 'Contrattualistica pubblica' },
            { level: 'Diritto militare', value: 'Diritto militare' },
        ]

        return (
            <form onSubmit={this.submitHandler} className='contactForm'>
                <div className="row">
                    <div className="col-sm-6 col-12">
                        <div className="formInputWhiteBG">
                            <input
                                placeholder="Il tuo nome"
                                value={this.state.name}
                                name="name"
                                onChange={this.changeHandler}
                                className="form-control"
                                type="text" />
                            {this.state.error.name && <p>{this.state.error.name}</p>}
                        </div>

                    </div>
                    <div className="col-sm-6 col-12">
                        <div className="formInput">
                            <input
                                placeholder="Cellulare"
                                value={this.state.phone}
                                name="phone"
                                onChange={this.changeHandler}
                                className="form-control"
                                type="phone" />
                            {this.state.error.phone && <p>{this.state.error.phone}</p>}
                        </div>
                    </div>
                    <div className="col-sm-6 col-12">
                        <div className="formInput">
                            <input
                                placeholder="Email"
                                value={this.state.email}
                                name="email"
                                onChange={this.changeHandler}
                                className="form-control"
                                type="email" />
                            {this.state.error.email && <p>{this.state.error.email}</p>}
                        </div>
                    </div>
                    <div className="col-sm-6 col-12">
                        <div className="formInput">
                            {this.props.addressInfo ? (
                                <div className="formInput">
                                    <input
                                        placeholder="Oggetto"
                                        value={this.state.oggetto}
                                        name="oggetto"
                                        onChange={this.changeHandler}
                                        className="form-control"
                                        type="oggetto" />
                                </div>
                            ) : (
                                <select
                                    value={this.state.oggetto}
                                    className="form-control"
                                    onChange={this.changeHandler}
                                    name="oggetto">
                                    {options.map(option => (
                                        <option
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.level}
                                        </option>
                                    ))}
                                </select>
                            )}

                        </div>
                    </div>
                    <div className="col-12">
                        <div className="formInput">
                            <textarea
                                className="form-control"
                                value={this.state.description}
                                onChange={this.changeHandler}
                                placeholder="Descizione..."
                                name="description" />
                            {this.state.error.description && <p>{this.state.error.description}</p>}
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit">Invia Richiesta</button>
                    </div>
                </div>
            </form>
        )
    }
}
export default Form