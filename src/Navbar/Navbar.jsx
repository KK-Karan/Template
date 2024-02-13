import './navbar.css'
import {Select, SelectItem,Checkbox} from "@nextui-org/react";
function Navbar() {

    const animals = [
        {label: "Americas", value: "cat", description: "The second most popular pet in the world"},
        {label: "Asia", value: "dog", description: "The most popular pet in the world"},
        {label: "Oceania", value: "elephant", description: "The largest land animal"},
        {label: "Korea", value: "lion", description: "The king of the jungle"},
        {label: "India", value: "tiger", description: "The largest cat species"},
        {label: "Africa", value: "giraffe", description: "The tallest land animal"}
    ]

  return (
    <>
    <div className='filter__navbar'>
    <Select 
        placeholder='Select a Country' 
        className="dropdown__navbar" 
        size='xs'
        style={{maxWidth:"200px"}}
      >
        {animals.map((animal) => (
          <SelectItem key={animal.value} value={animal.value} >
            {animal.label}
          </SelectItem>
        ))}
      </Select>
      <div className='checkboxes'>
      <Checkbox size='sm'><p className='checkbox'>Movers</p></Checkbox>
      <Checkbox size='sm'><p className='checkbox'>Volatility</p></Checkbox>
      <Checkbox size='sm'><p className='checkbox'>Ratios</p></Checkbox>
      <Checkbox size='sm'><p className='checkbox'>Futures</p></Checkbox>
      <Checkbox size='sm'><p className='checkbox'>AVAT</p></Checkbox>
      </div>
      <Select 
        placeholder='100D' 
        className="dropdown__navbar" 
        size='xs'
        style={{maxWidth:'100px'}}
      >
        {animals.map((animal) => (
          <SelectItem key={animal.value} value={animal.value} >
            {animal.label}
          </SelectItem>
        ))}
      </Select>
      <Select 
        placeholder='%Chg' 
        className="dropdown__navbar" 
        size='xs'
        style={{maxWidth:'100px'}}
      >
        {animals.map((animal) => (
          <SelectItem key={animal.value} value={animal.value} >
            {animal.label}
          </SelectItem>
        ))}
      </Select>
      <Select 
        placeholder='USD' 
        className="dropdown__navbar" 
        size='xs'
        style={{maxWidth:'100px'}}
      >
        {animals.map((animal) => (
          <SelectItem key={animal.value} value={animal.value} >
            {animal.label}
          </SelectItem>
        ))}
      </Select>
    </div>
    </>
  )
}

export default Navbar