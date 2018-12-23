export default {
  form: {
    email: {
      type: 'email',
      label: 'Email',
      id: 'email',
      name: 'email',
      isError: false
    },
    phone: {
      type: 'tel',
      label: 'Phone Number',
      id: 'phone',
      name: 'phone',
      isError: false
    },
    address: {
      type: 'text',
      label: 'Address',
      id: 'address',
      name: 'address',
      isError: false
    },
    city: {
      type: 'text',
      label: 'City',
      id: 'city',
      name: 'city',
      isError: false
    },
    state: {
      type: 'text',
      label: 'State/Province',
      id: 'state',
      name: 'state',
      isError: false
    },
    postal: {
      type: 'text',
      label: 'Zip/Postal Code',
      id: 'postal',
      name: 'postal',
      isError: false
    },
    country: {
      label: 'Country',
      id: 'country',
      name: 'country',
      options: ['United States', 'Canada']
    },
    addressDifferent: {
      type: 'text',
      label: 'Address',
      id: 'addressDifferent',
      name: 'addressDifferent',
      isError: false
    },
    cityDifferent: {
      type: 'text',
      label: 'City',
      id: 'cityDifferent',
      name: 'cityDifferent',
      isError: false
    },
    stateDifferent: {
      type: 'text',
      label: 'State/Province',
      id: 'stateDifferent',
      name: 'stateDifferent',
      isError: false
    },
    postalDifferent: {
      type: 'text',
      label: 'Zip/Postal Code',
      id: 'postalDifferent',
      name: 'postalDifferent',
      isError: false
    },
    countryDifferent: {
      label: 'Country',
      id: 'countryDifferent',
      name: 'countryDifferent',
      options: ['United States', 'Canada']
    },
    cardHolder: {
      type: 'text',
      label: 'Cardholder Name',
      id: 'cardHolder',
      name: 'cardHolder',
      isError: false
    },
    cardNumber: {
      type: 'text',
      label: 'Card Number',
      id: 'cardNumber',
      name: 'cardNumber',
      isError: false
    },
    expiry: {
      label: 'Expiry',
      id: 'expiry',
      name: 'expiry',
      options: ['Jan','Feb','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    },
    year: {
      label: 'Year',
      id: 'year',
      name: 'year',
      options: ['2016','2017','2018','2019','2020','2021','2022','2023','2024','2025','2026']
    },
    cvv: {
      type: 'text',
      label: 'CVV',
      id: 'cvv',
      name: 'cvv',
      isError: false
    }
  }
}
