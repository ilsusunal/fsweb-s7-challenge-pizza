import React, {useEffect, useState, useHistory} from 'react';
import {Switch, Route} from "react-router-dom";
import axios from "axios";
import { Form, FormGroup, Label, Input, Button, FormText } from 'reactstrap';
import PaymentButtons from './PaymentButtons';


const initialData = {
  isim: "",
  boyut: "",
  malzemeler: [],
  özel: "",
}
const errorMessages = {
  checkbox1 : "En az 4 tane malzeme seçmelisiniz!",
  checkbox2 : "En fazla 10 tane malzeme seçmebilirsiniz!",
  isim: "İsim en az 3 karakter içermelidir.",
  boyut: "Pizzanızın boyutunu seçin.",
}

export default function OrderPizza() {
    const [form, setForm] = useState(initialData);
    const [errors, setErrors] = useState(initialData);
    
    const handleChange = (event) => {
      let { name, value, type } = event.target;
      setForm({ ...form, [name]: value });
      
    }

    return (

        <Form className="order-pizza-form">
          <div className="form-group-row">
           {/* Pizza boyutu */} 
           <FormGroup >
            <Label>
              Boyut Seç*
            </Label>
            <FormGroup check>
              <Input
                name="radio1"
                type="radio"
                value={form} />
              {' '}
              <Label check>
                Küçük
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input
                name="radio1"
                type="radio" />
              {' '}
              <Label check>
                Orta
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input
                name="radio1"
                type="radio" />
              {' '}
              <Label check>
                Büyük
              </Label>
            </FormGroup>
          </FormGroup>
          {/* Hamur kalınlığı */}
          <FormGroup>
            <Label for="hamurKalınlıgı">
              Hamur Seç*
            </Label>
            <Input
              id="hamurKalınlıgı"
              name="select"
              type="select"
              placeholder='Hamur Kalınlığı'
            >
              <option>
                Hamur Kalınlığı
              </option>
              <option>
                Ultra İnce
              </option>
              <option>
                İnce
              </option>
              <option>
                Orta
              </option>
              <option>
                Kalın
              </option>
            </Input>
          </FormGroup>
          </div>
          <div >
           {/*Ek malzemeler*/}
          <FormGroup
            check
            inline
          >
            <Label for="ekMalzemeler">
              Ek Malzemeler
            </Label>
            <FormText for="ekMalzemeler">
              En az 4, en fazla 10 malzeme seçebilirsiniz. Malzeme başı 5 tl ek ücret.
            </FormText>
            <Input type="checkbox" />
            <Label id="ekMalzemeler" check>
              Pepperoni
            </Label>
            <Input type="checkbox" />
            <Label check>
              Sosis
            </Label>
            <Input type="checkbox" />
            <Label check>
              Kanada Jambonu
            </Label>
            <Input type="checkbox" />
            <Label check>
              Tavuk Izgara
            </Label>
            <Input type="checkbox" />
            <Label check>
              Soğan
            </Label>
            <Input type="checkbox" />
            <Label check>
              Domates
            </Label>
            <Input type="checkbox" />
            <Label check>
              Mısır
            </Label>
            <Input type="checkbox" />
            <Label check>
              Sucuk
            </Label>
            <Input type="checkbox" />
            <Label check>
              Jalepeno
            </Label>
            <Input type="checkbox" />
            <Label check>
              Sarımsak
            </Label>
            <Input type="checkbox" />
            <Label check>
              Biber
            </Label>
            <Input type="checkbox" />
            <Label check>
              Ananas
            </Label>
            <Input type="checkbox" />
            <Label check>
              Kabak
            </Label>
          </FormGroup> 
          </div>
          {/* İsim - Soyisim */}
          <FormGroup>
            <Label for="name">
              İsim-Soyisim
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Lütfen isminizi girin."
              type="text" />
          </FormGroup>
          {/* Sipariş notu */}
          <FormGroup>
            <Label for="siparisNotu">
              Sipariş Notu
            </Label>
            <Input
              id="siparisNotu"
              name="siparisNotu"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              type="text" />
          </FormGroup>
          {/* Sipariş Miktarı */}
          <PaymentButtons />
        </Form>
    )
    
}
