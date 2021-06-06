import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { rozdeleniDnu, rozdeleniPraci } from '../Funkce';

export const AppForm = ({ setTableData }) => {
  return (
    <>
      <h4>Kolik lidí?</h4>
      <Formik
        initialValues={{ people: ['Joan'] }}
        onSubmit={(values) => {
          const rozdeleniVysledek = rozdeleniPraci(values.tasks, values.people);

          const rozdeleniDoDnuVysledek = rozdeleniDnu(rozdeleniVysledek);
          setTableData(rozdeleniDoDnuVysledek);
        }}
        render={({ values }) => (
          <Form>
            <FieldArray
              name="people"
              render={({ remove, push }) => (
                <div className="box__osoby">
                  <div className="inputs">
                    {values.people &&
                      values.people.length > 0 &&
                      values.people.map((_, index) => (
                        <div key={index}>
                          <Field name={`people.${index}`} />
                          <button type="button" onClick={() => remove(index)}>
                            -
                          </button>
                        </div>
                      ))}
                  </div>
                  <button
                    className="button__add"
                    type="button"
                    onClick={() => push('')}
                  >
                    +
                  </button>
                </div>
              )}
            />
            <div className="box__prace">
              <FieldArray
                name="tasks"
                render={({ remove, push }) => (
                  <>
                    {values.tasks &&
                      values.tasks.length > 0 &&
                      values.tasks.map((_, index) => (
                        <div key={index} className="prace">
                          <h4>Jaká práce?</h4>
                          <Field name={`tasks.${index}.jmeno`} />

                          <h4>Jak dlouho trvá práci udělat?</h4>

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

                          <h4>Jak často se práce opakuje?</h4>

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

                          <button type="button" onClick={() => remove(index)}>
                            -
                          </button>
                        </div>
                      ))}

                    <button
                      className="button__add"
                      type="button"
                      onClick={() => push('')}
                    >
                      Přidat práci
                    </button>
                  </>
                )}
              />
            </div>

            <button>Odeslat</button>
          </Form>
        )}
      />
    </>
  );
};
