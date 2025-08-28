import { supabase } from '../lib/supabase'
import { useState } from 'react'

export default function TestDB() {
  const [companies, setCompanies] = useState([])

  // Function to add a test company
  async function addCompany() {
    const { data, error } = await supabase
      .from('companies')
      .insert([
        { name: 'Test Company' }
      ])
    
    if (error) console.log('Error:', error)
    else console.log('Success!', data)
  }

  // Function to get all companies
  async function getCompanies() {
    const { data, error } = await supabase
      .from('companies')
      .select('*')
    
    if (data) setCompanies(data)
  }

  return (
    <div>
      <button onClick={addCompany}>Add Test Company</button>
      <button onClick={getCompanies}>Show Companies</button>
      <ul>
        {companies.map(company => (
          <li key={company.id}>{company.name}</li>
        ))}
      </ul>
    </div>
  )
}