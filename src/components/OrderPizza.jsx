import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { Form, FormGroup, Label, Input, Button, FormText, FormFeedback } from 'reactstrap';
import LogoSVG  from "../../Assets/mile1-assets/logo.svg";

const initialData = {
  isimSoyisim: "",
  boyut: "",
  hamur: "",
  malzemeler: [],
  siparisNotu: "",
  miktar: "",
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

    const history = useHistory();


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
        const updatedForm = { ...form, miktar: count };
        axios
        .post('https://reqres.in/api/pizza', updatedForm)
        .then(response => {
          console.log('Sipariş Detayı:', response.data);
          history.push({ pathname: "/siparis-alindi", state: {formData: response.data, count: Number(count), form: form}});
        })
        .catch(error => {
          console.error('HATA:', error);
        });
    };

    /* Butona tıklandığında Sipariş Yolda sayfasına gitsin. */
    /*const handleClick = () => {
      history.push({ pathname: "/siparis-alindi", state: {formData: updatedForm}});
    }*/

    return (
      <>
      <header className='form-header'>
        <img src={LogoSVG} alt="Logo" />
      </header>
      
      <Form className="order-pizza-form" onSubmit={handleSubmit}>
          {/*Pizza Info*/}
          <section className='bej-part'>
            <img src="Assets\mile2-aseets\pictures\form-banner.png" alt="formBanner" />
            <nav className='nav-menu'>
                <a href="/">Anasayfa </a>
                <p> - </p>
                <a href="/siparis-olustur"> Sipariş Oluştur</a>
            </nav>
            <h2>Position Absolute Acı Pizza</h2>
            <div className='pizza-info'>
              <h1>85.5 ₺</h1>
              <p>4.9</p>
              <p>(200)</p>
            </div>
            <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
          </section>
          
          <section className="form-group-row">
            {/* Pizza boyutu */}
            <FormGroup>
              <Label>
                Boyut Seç*
              </Label>
              <FormGroup check>
                <Input
                  name="boyut"
                  type="radio"
                  value="Küçük"
                  onChange={handleChange} 
                  data-cy="pizza-boyut-kucuk" />
                {' '}
                <Label check>
                  Küçük
                </Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  name="boyut"
                  type="radio"
                  value="Orta"
                  onChange={handleChange}
                  data-cy="pizza-boyut-orta" />
                {' '}
                <Label check>
                  Orta
                </Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  name="boyut"
                  type="radio"
                  value="Büyük"
                  onChange={handleChange}
                  data-cy="pizza-boyut-buyuk" />
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
          </section>
          {/*Ek malzemeler*/}
          <section className='ekMalzemeler'>
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
              <Input type="checkbox" onChange={handleChange} value='Pepperoni' />
              <Label check>Pepperoni</Label>
              <Input type="checkbox" onChange={handleChange} value='Sosis' />
              <Label check>Sosis</Label>
              <Input type="checkbox" onChange={handleChange} value='Kanada Jambonu' />
              <Label check>Kanada Jambonu</Label> <br />
              <Input type="checkbox" onChange={handleChange} value='Tavuk Izgara' />
              <Label check>Tavuk Izgara</Label>
              <Input type="checkbox" onChange={handleChange} value='Soğan' />
              <Label check>Soğan</Label>
              <Input type="checkbox" onChange={handleChange} value='Domates' />
              <Label check>Domates</Label>  <br />
              <Input type="checkbox" onChange={handleChange} value='Mısır' />
              <Label check>Mısır</Label>
              <Input type="checkbox" onChange={handleChange} value='Sucuk' />
              <Label check>Sucuk</Label>
              <Input type="checkbox" onChange={handleChange} value='Jalepeno' />
              <Label check>Jalepeno</Label> <br />
              <Input type="checkbox" onChange={handleChange} value='Sarımsak' />
              <Label check>Sarımsak</Label>
              <Input type="checkbox" onChange={handleChange} value='Biber' />
              <Label check>Biber</Label>
              <Input type="checkbox" onChange={handleChange} value='Ananas' />
              <Label check>Ananas</Label>  <br />
              <Input type="checkbox" onChange={handleChange} value='Kabak' />
              <Label check>Kabak</Label>
              <FormFeedback>{errors.malzemeler}</FormFeedback>
            </FormGroup>
          </section>
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
              type="text"
              onChange={handleChange} />
          </FormGroup>
          {/* Sipariş Miktarı */}
          {/*<PaymentButton formData={form} count={count} handleSubmit={handleSubmit} handleDecrement={handleDecrement}handleIncrement={handleIncrement} 
              isValid={isValid}/>*/}
          <section className='payment-container'>
            <div className="sayac-container">
              <Button type='button' onClick={handleDecrement}>-</Button>
              <p className="sayac-value">{count}</p>
              <Button type='button' onClick={handleIncrement}>+</Button>
            </div>
            <div className='siparis-container'>
              <h2>Sipariş Toplamı</h2>
              <div><p>Seçimler</p>  <p>{form.malzemeler.length * 5} ₺</p></div>
              <div><p>Toplam</p>  <p>{(85.5 * count) + (form.malzemeler.length * 5)} ₺</p></div>
              <Button onClick={handleSubmit} size="lg" type='submit' disabled={!isValid}>SİPARİŞ VER</Button>
            </div>
          </section>
      </Form>
      </>
    )
    
}
