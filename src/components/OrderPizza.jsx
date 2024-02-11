import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import PaymentButtons from './PaymentButtons';
import '../App.css'

export default function OrderPizza() {
    const [form, setForm] = useState([]);

    /*Form içeriği:
    1.Fiyat - puan - yorum sayısı 
    2.Ürünü açıklayan metin
    3. Radiobutton (Boyut Seç: küçük, orta, büyük) + Select(Hamur Seç : (placeholder="Hamur Kalınlığı"), ince, orta, kalın)
    4. Checkbox (Ek Malzemeler: (label="En az 4, en fazla 10 malzeme seçebilirsiniz. Malzeme başı 5 tl ek ücret.") Pepperoni, Sosis, 
    Kanada Jambonu, Tavuk Izgara, Soğan, domates, Mısır, Sucuk, Jalepeno, Sarımsak, Biber, Ananas, Kabak)
    5. Input (Sipariş Notu (placeholder="Siparişine eklemek istediğin bir not var mı?")) 
    6. Ayırıcı çizgi?
    7. Ödeme bölümü -Miktar  - Sipariş ver butonu*/
    return (
        <Form>
          {/* Pizza boyutu */}
        <FormGroup>
        <legend>
          Boyut Seç*
        </legend>
        <FormGroup check>
          <Input
            name="radio1"
            type="radio"
          />
          {' '}
          <Label check>
            Küçük
          </Label>
        </FormGroup>
        <FormGroup check>
          <Input
            name="radio1"
            type="radio"
          />
          {' '}
          <Label check>
            Orta
          </Label>
        </FormGroup>
        <FormGroup check>
          <Input
            name="radio1"
            type="radio"
          />
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
        {/*Ek malzemeler*/}
        <FormGroup
          check
          inline
        >
          <Label for="ekMalzemeler">
          Ek Malzemeler
          </Label>
          <Label for="ekMalzemeler">
          En az 4, en fazla 10 malzeme seçebilirsiniz. Malzeme başı 5 tl ek ücret.
          </Label>
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
        {/* İsim - Soyisim */}
        <FormGroup>
          <Label for="name">
              İsim-Soyisim
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Lütfen isminizi girin."
              type="text"
            />
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
            type="text"
          />
        </FormGroup>
        {/* Sipariş Miktarı */}
        <PaymentButtons/>
        </Form>
    )
    
}
