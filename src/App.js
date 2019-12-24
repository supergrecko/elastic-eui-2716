import React, { useState } from 'react';
import './App.css';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiSelect,
} from '@elastic/eui'

function App() {
  const [form, setForm] = useState({
    sname: '',
    name: '',
    mname: '',
    province: '',
    district: '',
    address: '',
    appeal: '',
    files: {}
  })

  const provinceList = [
    { value: 'tashkent', text: 'Toshkent' },
    { value: 'andijan', text: 'Andijon' }
  ]

  const districtList = {
    tashkent: [
      { value: 'shaykhantoxur', text: 'Shayxantoxur' },
      { value: 'chilanzar', text: 'Chilonzor' }
    ],
    andijan: [
      { value: 'andijan_1', text: 'Andijan District 1' },
      { value: 'andijan_2', text: 'Andijan District 1' }
    ]
  }

  const onFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="App" style={{ padding: 200 }}>
      <EuiFlexGroup styleName="FormGroup">
        <EuiFlexItem>
          <EuiFormRow label="Province *" fullWidth>
            <EuiSelect
              hasNoInitialSelection
              fullWidth
              required
              name="province"
              options={provinceList}
              value={form.province || ''}
              onChange={onFormChange}
            />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="District *" fullWidth>
            <EuiSelect
              hasNoInitialSelection
              fullWidth
              required
              name="district"
              disabled={!form.province.length}
              options={districtList[form.province]}
              value={form.district || ''}
              onChange={onFormChange}
            />
          </EuiFormRow>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  );
}

export default App;
