import React from 'react';
import './style.css';
import { Formik, Form, Field, FieldArray } from 'formik';
import { rozdeleniDnu, rozdeleniPraci } from '../Funkce';

export const AppForm = ({ setTableData }) => {
  return (
    <div className="app">
      <div className="app__box">
        <h4>
          Kolik lidí?{' '}
          <span className="bubble">
            <img
              className="icon"
              src="../assets/iconQuestion.png"
              alt=""
              title="Níže přidejte jména osob, které se budou podílet na domácích pracích."
            />
          </span>
        </h4>
        <Formik
          initialValues={{ people: [''] }}
          onSubmit={(values) => {
            const rozdeleniVysledek = rozdeleniPraci(
              values.tasks,
              values.people,
            );

            const rozdeleniDoDnuVysledek = rozdeleniDnu(rozdeleniVysledek);
            setTableData(rozdeleniDoDnuVysledek);
          }}
          render={({ values }) => (
            <Form>
              <FieldArray
                name="people"
                render={({ remove, push }) => (
                  <div className="box__persons">
                    {values.people &&
                      values.people.length > 0 &&
                      values.people.map((_, index) => (
                        <div className="input__person" key={index}>
                          <Field name={`people.${index}`} />
                          <button
                            className="button__remove--person"
                            type="button"
                            onClick={() => remove(index)}
                          >
                            -
                          </button>
                        </div>
                      ))}

                    <button
                      className="button__add--person"
                      type="button"
                      onClick={() => push('')}
                    >
                      Přidat osobu
                    </button>
                  </div>
                )}
              />
              <div className="app__box--tasks">
                <h4>
                  Domácí práce{' '}
                  <span className="bubble">
                    <img
                      className="icon"
                      src="../assets/iconQuestion.png"
                      alt=""
                      title="V této sekci budete vyplňovat jednotlivé domácí práce. Začněte kliknutím na tlačítko Přidat práci"
                    />
                  </span>
                </h4>
                <div className="box__tasks">
                  <FieldArray
                    name="tasks"
                    render={({ remove, push }) => (
                      <>
                        {values.tasks &&
                          values.tasks.length > 0 &&
                          values.tasks.map((_, index) => (
                            <div key={index} className="task">
                              <h4>
                                Jaká práce?{' '}
                                <span className="bubble">
                                  <img
                                    className="icon"
                                    src="../assets/iconQuestion.png"
                                    alt=""
                                    title="Sem zadejte název domácí práce, kterou chcete mezi členy/ky domácnosti rozdělit"
                                  />
                                </span>
                              </h4>
                              <Field name={`tasks.${index}.jmeno`} />

                              <h4>
                                Jak dlouho trvá práci udělat?{' '}
                                <span className="bubble">
                                  <img
                                    className="icon"
                                    src="../assets/iconQuestion.png"
                                    alt=""
                                    title="Vyberte předpokládaný čas, který je potřeba na splnění zadané domácí práce."
                                  />
                                </span>
                              </h4>

                              <Field
                                component="select"
                                name={`tasks.${index}.delka`}
                              >
                                <option value="0">Přibližná délka</option>
                                <option value="10">asi 10 minut</option>
                                <option value="20">asi 20 minut</option>
                                <option value="30">asi 30 minut</option>
                                <option value="40">asi 40 minut</option>
                                <option value="50">asi 50 minut</option>
                                <option value="60">asi 60 minut</option>
                                <option value="70">asi 70 minut</option>
                                <option value="80">asi 80 minut</option>
                              </Field>

                              <h4>
                                Jak často se práce opakuje?{' '}
                                <span className="bubble">
                                  <img
                                    className="icon"
                                    src="../assets/iconQuestion.png"
                                    alt=""
                                    title="Sem zadejte, jak často je potřeba domácí práci dělat."
                                  />
                                </span>
                              </h4>

                              <Field
                                component="select"
                                name={`tasks.${index}.casto`}
                              >
                                <option value="0">Přibližná frekvence</option>
                                <option value="1">1x týdne</option>
                                <option value="2">2x týdne</option>
                                <option value="3">3x týdne</option>
                                <option value="4">4x týdne</option>
                                <option value="5">5x týdne</option>
                                <option value="6">6x týdne</option>
                                <option value="7">každý den</option>
                              </Field>

                              <button
                                className="button__remove--task"
                                type="button"
                                onClick={() => remove(index)}
                              >
                                Odebrat práci
                              </button>
                            </div>
                          ))}

                        <button
                          className="button__add--task"
                          type="button"
                          onClick={() => push('')}
                        >
                          Přidat práci
                        </button>
                      </>
                    )}
                  />
                </div>
              </div>

              <button className="button__submit">
                Vygenerovat rozvrh domácích prací
              </button>
            </Form>
          )}
        />
      </div>
    </div>
  );
};
