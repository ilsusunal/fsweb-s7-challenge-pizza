import React, {useEffect, useState, useHistory} from 'react';
import {Switch, Route} from "react-router-dom";
import axios from "axios";
import { Form, FormGroup, Label, Input, Button, FormText } from 'reactstrap';
import PaymentButtons from './PaymentButtons';


const initialData = {
  isim: "Position Absolute Acı Pizza",
  boyut: "",
  malzemeler: [],
  özel: "",
  puan: 0,
  yorumlar: 0,
  fiyat: 0,
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
    const [isValid, setIsValid] = useState(false);

      /* "form" her güncellendiğinde "validateForm()" fonksiyonunu çalıştır. */
    useEffect(() => {
      validateForm();
    }, [form]);

      /* "form"da yapılan değişiklikler uygun mu kontrol et. */
    const validateForm = () => {
      let newErrors = {};

      if ()
    };

      /* "form"u güncelle*/
    const handleChange = (event) => {
      let { name, value, type } = event.target;
      setForm({ ...form, [name]: value });
      
    };

      /* isValid = true ise, "sipariş ver" butonuna basılsın ve post request atılsın. */
    const handleSubmit = () => {

    }

    return (

        <Form className="order-pizza-form">
          {/*Pizza Info*/}
          <h2>{form.isim}</h2>
          <div>
            <div className='pizza-info'>
              <h1>{form.fiyat}</h1>
              <p>{form.puan}</p>
              <p>{form.yorumlar}</p>
            </div>
            <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p> 
          </div>
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
                Süpper İnce
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
            <Label id="ekMalzemeler" check>Pepperoni</Label>
            <Input type="checkbox" />
            <Label check>Sosis</Label>
            <Input type="checkbox" />
            <Label check>Kanada Jambonu</Label>
            <Input type="checkbox" />
            <Label check>Tavuk Izgara</Label>
            <Input type="checkbox" />
            <Label check>Soğan</Label>
            <Input type="checkbox" />
            <Label check>Domates</Label>
            <Input type="checkbox" />
            <Label check>Mısır</Label>
            <Input type="checkbox" />
            <Label check>Sucuk</Label>
            <Input type="checkbox" />
            <Label check>Jalepeno</Label>
            <Input type="checkbox" />
            <Label check>Sarımsak</Label>
            <Input type="checkbox" />
            <Label check>Biber</Label>
            <Input type="checkbox" />
            <Label check>Ananas</Label>
            <Input type="checkbox" />
            <Label check>Kabak</Label>
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
