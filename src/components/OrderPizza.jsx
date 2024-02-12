import React, {useEffect, useState, useHistory} from 'react';
import {Switch, Route} from "react-router-dom";
import axios from "axios";
import { Form, FormGroup, Label, Input, Button, FormText, FormFeedback } from 'reactstrap';


const initialData = {
  isimSoyisim: "",
  boyut: "",
  hamur: "",
  malzemeler: [],
  ozel: "",
}
const errorMessages = {
  malzemeler : "En az 4, en çok 10 tane malzeme seçmelisiniz!",
  isimSoyisim: "İsim en az 3 karakter içermelidir.",
  boyut: "Lütfen bir boyut seçin.",
  hamur: "Lütfen hamur kalınlığı seçin.",
}

export default function OrderPizza() {
    const [form, setForm] = useState(initialData);
    const [errors, setErrors] = useState(initialData);
    const [isValid, setIsValid] = useState(false);
    const [count, setCount] = useState(1);

      /* "form" her güncellendiğinde "validateForm()" fonksiyonunu çalıştır/ doğrulama yapar. */
    useEffect(() => {
      validateForm();
    }, [form]);

      /* "form"da yapılan değişiklikler uygun mu kontrol et. */
    const validateForm = () => {
      let newErrors = {};

      newErrors.isimSoyisim = !form.isimSoyisim || form.isimSoyisim.length < 3 ? errorMessages.isimSoyisim : "";
      newErrors.boyut = !form.boyut ?errorMessages.boyut : "";
      newErrors.hamur = !form.hamur ?errorMessages.hamur : "";

      if(form.malzemeler.length < 4 || form.malzemeler.length > 10) {
        newErrors.malzemeler = errorMessages.malzemeler;
      } else {
        newErrors.malzemeler = "";
      }

      setErrors(newErrors);

      const isValidForm = Object.values(newErrors).every((error) => error === "");
      setIsValid(isValidForm);
    };

      /* "form"u güncelle*/
    const handleChange = (event) => {
      let { name, value, type, checked } = event.target;
      
      if (type === "checkbox") {
        let newMalzemeler = [...form.malzemeler];
        if(checked) {
          newMalzemeler.push(name);
        } else {
          newMalzemeler = newMalzemeler.filter((item) => item !== name);
        }
        setForm({...form, malzemeler: newMalzemeler});
      } else {
        setForm({ ...form, [name]: value });
      }
      
    };

    /* Sipariş Miktarı */
    const handleDecrement = () => {
      if(count > 1){ 
          setCount(count - 1);
      }
    };

    const handleIncrement = () => {
        setCount(count + 1);
    };

    /* isValid = true ise, "sipariş ver" butonuna basılsın ve post request atılsın. */
    const handleSubmit = (e) => {
        e.preventDefault();

        axios
        .post('https://reqres.in/api/pizza', form)
        .then(response => {
          console.log('Sipariş Detayı:', response.data);
        })
        .catch(error => {
          console.error('HATA:', error);
        });
    };

    return (

        <Form className="order-pizza-form" onSubmit={handleSubmit}>
          {/*Pizza Info*/}
          <h2>Position Absolute Acı Pizza</h2>
          <div>
            <div className='pizza-info'>
              <h1>85.5 ₺</h1>
              <p>4.9</p>
              <p>(200)</p>
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
                name="boyut"
                type="radio"
                value="kucuk"
                onChange={handleChange}/>
              {' '}
              <Label check>
                Küçük
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input
                name="boyut"
                type="radio"
                value="orta"
                onChange={handleChange} />
              {' '}
              <Label check>
                Orta
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input
                name="boyut"
                type="radio"
                value="bucuk"
                onChange={handleChange} />
              {' '}
              <Label check>
                Büyük
              </Label> {errors.boyut && <FormFeedback>{errorMessages.boyut}</FormFeedback>}
            </FormGroup>
          </FormGroup>
          {/* Hamur kalınlığı */}
          <FormGroup>
            <Label for="hamurKalınlıgı">
              Hamur Seç*
            </Label>
            <Input
              id="hamurKalınlıgı"
              name="hamur"
              type="select"
              onChange={handleChange}
            >
              <option value="">- Hamur Kalınlığı Seç -</option>
              <option value="Süpper İnce">Süpper İnce</option>
              <option value="İnce">İnce</option>
              <option value="Orta">Orta</option>
              <option value="Kalın">Kalın</option>
            </Input> {errors.hamur && <FormFeedback>{errorMessages.hamur}</FormFeedback>}
          </FormGroup>
          </div>
          <div className='ekMalzemeler'>
           {/*Ek malzemeler*/}
          <FormGroup
            check
            inline 
          >
            <Label for="ekMalzemeler">
              Ek Malzemeler
            </Label>
            <FormText htmlFor="ekMalzemeler">
              En az 4, en fazla 10 malzeme seçebilirsiniz. Malzeme başı 5 tl ek ücret.
            </FormText> <br />
            <Input type="checkbox" onChange={handleChange} name='Pepperoni'/>
            <Label check>Pepperoni</Label>
            <Input type="checkbox" onChange={handleChange} name='Sosis'/>
            <Label check>Sosis</Label> 
            <Input type="checkbox" onChange={handleChange} name='Kanada Jambonu'/>
            <Label check>Kanada Jambonu</Label> <br />
            <Input type="checkbox" onChange={handleChange} name='Tavuk Izgara'/>
            <Label check>Tavuk Izgara</Label> 
            <Input type="checkbox" onChange={handleChange} name='Soğan'/>
            <Label check>Soğan</Label>
            <Input type="checkbox"onChange={handleChange} name='Domates' />
            <Label check>Domates</Label>  <br />
            <Input type="checkbox" onChange={handleChange} name='Mısır'/>
            <Label check>Mısır</Label>
            <Input type="checkbox" onChange={handleChange} name='Sucuk'/>
            <Label check>Sucuk</Label> 
            <Input type="checkbox" onChange={handleChange} name='Jalepeno'/>
            <Label check>Jalepeno</Label> <br />
            <Input type="checkbox" onChange={handleChange} name='Sarımsak'/>
            <Label check>Sarımsak</Label> 
            <Input type="checkbox" onChange={handleChange} name='Biber'/>
            <Label check>Biber</Label>
            <Input type="checkbox" onChange={handleChange} name='Ananas'/>
            <Label check>Ananas</Label>  <br />
            <Input type="checkbox" onChange={handleChange} name='Kabak'/>
            <Label check>Kabak</Label>
            <FormFeedback>{errors.malzemeler}</FormFeedback>
          </FormGroup> 
          </div>
          {/* İsim - Soyisim */}
          <FormGroup className='form-text-area'>
            <Label for="isimSoyisim">
              İsim-Soyisim
            </Label>
            <Input
             id="isimSoyisim"
             name="isimSoyisim"
             placeholder="Lütfen isminizi girin."
             type="text"
             value={form.isimSoyisim}
             onChange={handleChange}
             invalid={errors.isimSoyisim !== ""} />
            <FormFeedback>{errors.isimSoyisim}</FormFeedback>
          </FormGroup>
          {/* Sipariş notu */}
          <FormGroup className='form-text-area'>
            <Label for="siparisNotu">Sipariş Notu</Label>
            <Input
              id="siparisNotu"
              name="siparisNotu"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              type="text" />
          </FormGroup>
          {/* Sipariş Miktarı */}
          <footer className='payment-container'>
            <div className="sayac-container">
              <Button type='button' onClick={handleDecrement}>-</Button>
              <p className="sayac-value">{count}</p>
              <Button type='button' onClick={handleIncrement}>+</Button> 
            </div>
            <div className='siparis-container'>
                <h2>Sipariş Toplamı</h2>
                <div><p>Seçimler</p>  <p>{form.malzemeler.length * 5}</p></div> 
                <div><p>Toplam</p>  <p>{(85.5 * count) + (form.malzemeler.length * 5)}</p></div>
                <Button size="lg" type='submit' disabled={!isValid}>SİPARİŞ VER</Button>
            </div>
          </footer>
        </Form>
    )
    
}
